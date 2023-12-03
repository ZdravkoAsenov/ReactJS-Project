// AddNewsForm.js

import React, { useState } from 'react';
import styles from './/addNews.module.css'; // Import CSS module

const AddNews = () => {
    const [newsData, setNewsData] = useState({
        title: '',
        content: '',
        imageLink: '' // New state for image link
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsData({ ...newsData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - You can send newsData to your backend here
        console.log('News submitted:', newsData);
        // Reset form fields after submission
        setNewsData({ title: '', content: '', imageLink: '' });
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Add News</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newsData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={newsData.content}
                        onChange={handleChange}
                        rows="6"
                    ></textarea>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="imageLink">Image Link</label>
                    <input
                        type="text"
                        id="imageLink"
                        name="imageLink"
                        value={newsData.imageLink}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Add News</button>
            </form>
        </div>
    );
};

export default AddNews;
