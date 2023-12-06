import { useParams, Link, useNavigate } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import styles from './DeleteNews.module.css';
import Path from '../../paths';

const DeleteNews = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = async () => {
        await newsService.remove(id);

        navigate(Path.ListNews);
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
