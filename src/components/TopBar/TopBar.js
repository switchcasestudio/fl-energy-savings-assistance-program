import styles from './TopBar.module.css';

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
