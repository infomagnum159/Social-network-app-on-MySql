import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Posts from './container/Posts/Posts';
import NewPosts from './container/NewPosts/NewPosts';
import Post from './container/Post/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Route path="/" exact component={Posts} />
        <Route path="/new" component={NewPosts} />
        <Route path="/news/:id" component={Post} />
      </Router>
    </div>
  );
}

export default App;
