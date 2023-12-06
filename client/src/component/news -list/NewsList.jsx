import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsList.module.css';
import * as newsService from '../../services/newsService';

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        newsService.getAll()
            .then(result => setNews(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2 className={styles.newsTitle}>All News</h2>
            <ul className={styles.newsList}>
                {news.map((item) => (
                    <li key={item._id} className={styles.newsItem}>
                        <Link to={`/news/${item._id}`} className={styles.newsLink}>
                            <h3 className={styles.newsHeader}>{item.title}</h3>
                        </Link>
                        <p className={styles.newsContent}>{item.content}</p>

                            <Link to={`/news/${item._id}`} className={styles.readLink}>
                                Read
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
