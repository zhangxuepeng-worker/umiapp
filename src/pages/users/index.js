import styles from './users.css';
import router from 'umi/router'
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>首先，编辑 <code> <button onClick={()=>{
					router.goBack()
				}}>还回</button></code> 并保存以重新加载。</li>
        <li>
        </li>
      </ul>
    </div>
  );
}
