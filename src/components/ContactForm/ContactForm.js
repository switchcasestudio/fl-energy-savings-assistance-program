import { useState } from 'react';
import { trackEvent } from '../../lib/analytics.js';
import styles from './ContactForm.module.css';

const PROGRAM_OPTIONS = [
  { value: '', label: 'Select a program' },
  { value: 'Program One', label: 'Program One — up to $25,000 funding' },
  { value: 'Program Two', label: 'Program Two — up to $55,000 funding' },
  { value: 'Program Three', label: 'Program Three — up to $100,000 funding' },
  { value: 'Not sure', label: 'Not sure — help me decide' },
];

// Encode form data the way Netlify expects (application/x-www-form-urlencoded)
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  zip: '',
  program: '',
  message: '',
  'bot-field': '',
};

function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));

    if (errors[name]) {
      setErrors((errs) => ({ ...errs, [name]: null }));
    }
  };

  const validate = () => {
    const next = {};

    if (!values.name.trim()) {
      next.name = 'Please enter your name.';
    }

    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email.';
    }

    if (!values.phone.trim()) {
      next.phone = 'Please enter your phone number.';
    } else if (!/^[\d\s()+.-]{7,20}$/.test(values.phone.trim())) {
      next.phone = 'Please enter a valid phone number.';
    }

    if (!values.zip.trim()) {
      next.zip = 'Please enter your ZIP code.';
    } else if (!/^\d{5}$/.test(values.zip.trim())) {
      next.zip = 'ZIP must be 5 digits.';
    }

    if (!values.program) {
      next.program = 'Please select a program.';
    }

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);

      // Move focus to first invalid field for accessibility
      const firstError = Object.keys(validation)[0];
      const el = document.querySelector(`[name="${firstError}"]`);

      if (el) {
        el.focus();
      }

      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      });

      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }

      setStatus('success');

      trackEvent('form_submission', {
        form_name: 'contact',
        program: values.program,
      });

      setValues(initialState);
    } catch (err) {
      console.error('Form submission failed:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <div className={styles.successBadge}>✓</div>
        <h3 className={styles.successTitle}>Application received.</h3>
        <p className={styles.successBody}>
          A program specialist will reach out within one business day to confirm
          eligibility and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
      className={styles.form}
    >
      {/* Hidden inputs required by Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <p hidden>
        <label>
          Don't fill this out:{' '}
          <input
            name="bot-field"
            value={values['bot-field']}
            onChange={handleChange}
          />
        </label>
      </p>

      <div className={styles.row}>
        <Field
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
          required
        />

        <Field
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.row}>
        <Field
          label="Phone number"
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
          inputMode="tel"
          placeholder="(555) 555-5555"
          required
        />

        <Field
          label="Florida ZIP code"
          name="zip"
          value={values.zip}
          onChange={handleChange}
          error={errors.zip}
          autoComplete="postal-code"
          inputMode="numeric"
          maxLength={5}
          required
        />
      </div>

      <SelectField
        label="Program of interest"
        name="program"
        value={values.program}
        onChange={handleChange}
        error={errors.program}
        options={PROGRAM_OPTIONS}
        required
      />

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Tell us about your project{' '}
          <span className={styles.optional}>(optional)</span>
        </label>

        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={4}
          className={styles.textarea}
          placeholder="Solar panels, HVAC replacement, new windows…"
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorBanner} role="alert">
          Something went wrong. Please try again or refresh the page.
        </div>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Check my eligibility'}
      </button>

      <p className={styles.disclaimer}>
        By submitting, you agree to be contacted by a program specialist. Your
        information is never sold.
      </p>
    </form>
  );
}

/* ------------ Sub-components (kept in file, only used here) ------------ */

function Field({ label, name, error, required, ...inputProps }) {
  const id = `field-${name}`;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={name}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        {...inputProps}
      />

      {error && (
        <span id={`${id}-err`} className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  error,
  required,
  options,
  ...selectProps
}) {
  const id = `field-${name}`;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>

      <select
        id={id}
        name={name}
        className={`${styles.input} ${styles.select} ${
          error ? styles.inputError : ''
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        {...selectProps}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <span id={`${id}-err`} className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
}

export default ContactForm;
