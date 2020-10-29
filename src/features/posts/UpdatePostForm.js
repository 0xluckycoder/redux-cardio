import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postUpdated } from './postsSlice';

export const UpdatePostForm = ({ match }) => {

    const { postId } = match.params;

    const post = useSelector(state => state.posts.find((item => item.id === postId)));
    
    const [state, setState] = useState(post);

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const dispatch = useDispatch();
    let history = useHistory();
    const handleSave = () => {
        if (state.title && state.content) {
            dispatch(postUpdated({
                id: postId,
                title: state.title,
                content: state.content
            }));
            alert('post updated');
            history.push('/');
        }
    }

    return (
        <section>
            <h1>Edit Post</h1>
            <input type="text" name="title" onChange={handleChange} value={state.title} />
            <input type="text" name="content" onChange={handleChange} value={state.content} />
            <button type="button" onClick={handleSave}>submit</button>
        </section>
    )
}