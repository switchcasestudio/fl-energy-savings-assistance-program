import { useState } from 'react';
import { useT } from '../../i18n/LanguageContext.js';
import { trackEvent } from '../../lib/analytics.js';
import styles from './ContactForm.module.css';

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
  const { t } = useT();
  const PROGRAM_OPTIONS = t('contactForm.options');

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
      next.name = t('contactForm.validation.name');
    }

    if (!values.email.trim()) {
      next.email = t('contactForm.validation.emailReq');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = t('contactForm.validation.emailInv');
    }

    if (!values.phone.trim()) {
      next.phone = t('contactForm.validation.phoneReq');
    } else if (!/^[\d\s()+.-]{7,20}$/.test(values.phone.trim())) {
      next.phone = t('contactForm.validation.phoneInv');
    }

    if (!values.zip.trim()) {
      next.zip = t('contactForm.validation.zipReq');
    } else if (!/^\d{5}$/.test(values.zip.trim())) {
      next.zip = t('contactForm.validation.zipInv');
    }

    if (!values.program) {
      next.program = t('contactForm.validation.program');
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
        <h3 className={styles.successTitle}>{t('contactForm.successTitle')}</h3>
        <p className={styles.successBody}>
          {t('contactForm.successBody')}
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
          {t('contactForm.botLabel')}
          <input
            name="bot-field"
            value={values['bot-field']}
            onChange={handleChange}
          />
        </label>
      </p>

      <div className={styles.row}>
        <Field
          label={t('contactForm.labels.name')}
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
          required
        />

        <Field
          label={t('contactForm.labels.email')}
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
          label={t('contactForm.labels.phone')}
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
          inputMode="tel"
          placeholder={t('contactForm.placeholders.phone')}
          required
        />

        <Field
          label={t('contactForm.labels.zip')}
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
        label={t('contactForm.labels.program')}
        name="program"
        value={values.program}
        onChange={handleChange}
        error={errors.program}
        options={PROGRAM_OPTIONS}
        required
      />

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          {t('contactForm.labels.message')}{' '}
          <span className={styles.optional}>{t('contactForm.labels.optional')}</span>
        </label>

        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={4}
          className={styles.textarea}
          placeholder={t('contactForm.placeholders.message')}
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorBanner} role="alert">
          {t('contactForm.errorBanner')}
        </div>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? t('contactForm.buttons.sending') : t('contactForm.buttons.submit')}
      </button>

      <p className={styles.disclaimer}>
        {t('contactForm.disclaimer')}
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