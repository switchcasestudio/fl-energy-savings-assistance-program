import { useT } from '../../i18n/LanguageContext.js';
import { Link } from '../../router/Router.js';
import styles from './Breadcrumbs.module.css';

/**
 * @param {{items: Array<{name: string, path?: string}>}} props
 * The last item is the current page and renders without a link.
 */
function Breadcrumbs({ items }) {
  const { t } = useT();

  return (
    <nav aria-label={t('nav.ariaBreadcrumb')} className={styles.nav}>
      <div className="container">
        <ol className={styles.list}>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.name} className={styles.item}>
                {isLast || !item.path ? (
                  <span aria-current="page" className={styles.current}>
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link to={item.path} className={styles.link}>
                      {item.name}
                    </Link>
                    <span className={styles.sep} aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
