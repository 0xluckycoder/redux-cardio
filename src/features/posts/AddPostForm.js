import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
    const [state, setState] = useState({});

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleSave = () => {
        if (state.title && state.content) {
            console.log(state.title, state.content)
            dispatch(
                postAdded({
                    id: nanoid(),
                    title: state.title,
                    content: state.content
                })
            );

            setState({});
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label>Post title</label>
                <input type="text" name="title" onChange={handleChange} />
                <label>Content</label>
                <input type="text" name="content" onChange={handleChange} />
                <button onClick={handleSave} type="button">Save Post</button>
            </form>
        </section>
    );
}