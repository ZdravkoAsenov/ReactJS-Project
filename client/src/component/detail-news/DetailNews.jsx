import { useState, useEffect, useContext, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as commentService from '../../services/commentService';
import * as newsService from '../../services/newsService';
import styles from './DetailNews.module.css';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';
import reducer from './commentReducer';

const DetailNews = () => {
    const { id: newsId } = useParams();
    const { username, email, userId } = useContext(AuthContext);
    const [news, setNewsItem] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        newsService.getOne(newsId)
            .then(result => setNewsItem(result));

            commentService.getAll(newsId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
            
    }, [newsId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            newsId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

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

                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {comments.map(({ _id, text, owner: { email } }) => (
                                <li key={_id} className="comment">
                                    <p>{username}: {text}</p>
                                </li>
                            ))}
                        </ul>

                        {comments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                        )}
                    </div>

                    <div className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={onSubmit}>
                            <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </div>
                </div>


            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailNews;
