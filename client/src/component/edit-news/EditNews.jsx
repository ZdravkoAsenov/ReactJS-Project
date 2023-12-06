import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import styles from './EditNews.module.css';

const EditNews = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState({});
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    newsService.getOne(id)
      .then(result => {
        setNewsItem(result);
        setEditedTitle(result.title);
        setEditedContent(result.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = () => {
    // Perform update logic using editedTitle and editedContent
    // For example:
    newsService.update(id, { title: editedTitle, content: editedContent })
      .then(updatedNews => {
        setNewsItem(updatedNews);
        // Redirect to news detail page after update
        // history.push(`/news/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Edit News</h2>
      <div className={styles.editForm}>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        ></textarea>
        <button onClick={handleUpdate}>Update</button>
      </div>
      <Link to={`/news/${id}`} className={styles.backLink}>Back to News</Link>
    </div>
  );
};

export default EditNews;
