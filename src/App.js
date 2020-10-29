import React from 'react';
import './App.css';
import { PostsList } from './features/posts/PostList';
import { AddPostForm } from './features/posts/AddPostForm';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { UpdatePostForm } from './features/posts/UpdatePostForm'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
          <>
            <h1>hello world 👋</h1>
            <AddPostForm />
            <PostsList />
          </>
          )} />
          <Route path="/posts/:postId/edit" component={UpdatePostForm} />
          <Route path="/posts/:postId" component={SinglePostPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;