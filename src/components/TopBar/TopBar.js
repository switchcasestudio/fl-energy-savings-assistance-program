import styles from './TopBar.module.css';

const PHONE_DISPLAY = '866-627-9518';
const PHONE_HREF = 'tel:8666279518';

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.left}>
          <span className={styles.dot} aria-hidden="true" />
          An Authorized Florida Home Energy Program
        </span>
        <span className={styles.right}>Now accepting 2026 applications</span>
      </div>
    </div>
  );
}

export default TopBar;
