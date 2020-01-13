import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>好极了！欢迎来到umi！</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
