import { useParams, Link } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import styles from './DeleteNews.module.css';

const DeleteNews = () => {
  const { id } = useParams();

  const handleDelete = () => {
    // Implement delete logic
    newsService.delete(id)
      .then(() => {
        // Redirect to all news page after delete
        // history.push('/all-news');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Delete News</h2>
      <p>Are you sure you want to delete this news item?</p>
      <div className={styles.deleteActions}>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/news/${id}`} className={styles.cancelLink}>Cancel</Link>
      </div>
    </div>
  );
};

export default DeleteNews;
