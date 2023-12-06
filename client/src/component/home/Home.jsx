import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import * as newsService from '../../services/newsService';

export default function Home() {
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        newsService.getLatest()
            .then(result => setLatestNews(result));
    }, [])

    return (
        <div>
            <h2 className={styles.newsTitle}>Home</h2>
            <ul className={styles.newsList}>
                {latestNews.map((item) => (
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
}