
import React, { useState } from 'react';
import styles from './/addNews.module.css';
import * as newsService from '../../services/newsService'
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import Path from '../../paths';

const AddNewsFormKeys = {
    Title: 'title',
    Content: 'content',
    ImageLink: 'imageLink',
}

const AddNews = () => {
    const navigate = useNavigate();
    const { values, onChange, onSubmit } = useForm(handleSubmit, {
        [AddNewsFormKeys.Title]: '',
        [AddNewsFormKeys.Content]: '',
        [AddNewsFormKeys.ImageLink]: '',
    });

    async function handleSubmit() {
        try {
          await newsService.create(values);
          navigate(Path.ListNews);
        } catch (error) {
          // Handle error if necessary
          console.error('Error creating news:', error);
        }
      }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h2>Add News</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values[AddNewsFormKeys.Title]}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={values[AddNewsFormKeys.Content]}
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
                        value={values[AddNewsFormKeys.ImageLink]}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Add News</button>
            </form>
        </div>
    );
};

export default AddNews;
