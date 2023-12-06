import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as newsService from '../../services/newsService';
import useForm from '../../hooks/useForm';
import styles from './EditNews.module.css';

const EditNewsFormKeys = {
    Title: 'title',
    Content: 'content',
    ImageLink: 'imageLink',
}

const DetailNews = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [news, setNews] = useState({
        [EditNewsFormKeys.Title]: '',
        [EditNewsFormKeys.Content]: '',
        [EditNewsFormKeys.ImageLink]: '',
    });

    useEffect(() => {
        newsService.getOne(id)
            .then(result => {
                setNews(result);
            });
    }, [id]);

    const editNewsSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await newsService.edit(id, values);

            navigate(`/news/${id}`);
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setNews(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={editNewsSubmitHandler}>
                <h2>Add News</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={news.title}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={news.content}
                        onChange={onChange}
                        rows="6"
                    ></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="imageLink">Image Link</label>
                    <input
                        type="text"
                        id="imageLink"
                        name="imageLink"
                        value={news.imageLink}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Add News</button>
            </form>
        </div>
    );
};

export default DetailNews;
