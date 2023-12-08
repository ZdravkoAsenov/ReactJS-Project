import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import AuthContext from '../../contexts/authContext';
import styles from './UserDetails.module.css';

const UserDetails = () => {
    const [userNews, setUserNews] = useState([]);
    const {
        email,
        username,
        userId,
    } = useContext(AuthContext);

    useEffect(() => {

        newsService.getNewsByUserId(userId)
            .then(newsData => setUserNews(newsData))
            .catch(err => {
                console.log(err);
            });
    }, [userId]);

    return (
        <div className={styles.userDetailsContainer}>
            <h2>User Information</h2>
            <p>Name: {username}</p>
            <p>Email: {email}</p>

            <h2>News Created by {username}</h2>
            {userNews.length === 0 ? (
                 <ul>
                 {userNews.map(news => (
                     <li key={news._id}>
                         <h3>{news.title}</h3>
                         <p>{news.content}</p>
                         <Link to={`/news/${news._id}`}>
                                 Read
                             </Link>
                     </li>
                 ))}
             </ul>
            ) : (
                <h3>No news</h3>
            )}
           
        </div>
    );
};

export default UserDetails;
