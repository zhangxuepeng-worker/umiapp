import Link from 'umi/link'
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
			<div className={styles.line_height}>
				这是一个块
				<Link to="/user">我的用户</Link>
			</div>
    </div>
  );
}
