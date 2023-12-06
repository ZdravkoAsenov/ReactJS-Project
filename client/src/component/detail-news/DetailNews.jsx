import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import styles from './DetailNews.module.css';
import AuthContext from '../../contexts/authContext';

const DetailNews = () => {
    const { id } = useParams();
    const { email, userId } = useContext(AuthContext);
    const [news, setNewsItem] = useState({});

    useEffect(() => {
        newsService.getOne(id)
            .then(result => setNewsItem(result))
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    return (
        <div>
            {news ? (
                <div>
                    <h2>{news.title}</h2>
                    <p>{news.content}</p>
                    <img src={news.imageLink} />
                    {userId === news._ownerId && (
                        <>
                            <Link to={`/news/${news._id}/edit`} className={styles.editLink}>
                                Edit
                            </Link>
                            <Link to={`/news/${news._id}/delete`} className={styles.deleteLink}>
                                Delete
                            </Link>
                        </>
                    )}
                </div>

                
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailNews;
