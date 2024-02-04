import styles from "./postSlug.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 Not Found</h1>

      <p>This page does not exist. Please check the URL and try again.</p>
    </div>
  );
};
export default NotFoundPage;
