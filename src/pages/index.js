import styles from './index.css';
import Link from 'umi/link'
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>首先，编辑 <code><Link to="/users/">用户信息</Link></code> 并保存以重新加载。</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            入门
          </a>
        </li>
      </ul>
    </div>
  );
}
