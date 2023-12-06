import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as newsService from '../../services/newsService';

const DetailNews = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState({});

    useEffect(() => {
        newsService.getOne(id)
            .then(result => setNewsItem(result))
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    return (
        <div>
            {newsItem ? (
                <div>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.content}</p>
                    <img src={newsItem.imageLink} />
                    <Link to={`/news/${item._id}/edit`} className={styles.readLink}>
                        Edit
                    </Link>
                    <Link to={`/news/${item._id}/edit`} className={styles.readLink}>
                        Delete
                    </Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailNews;
