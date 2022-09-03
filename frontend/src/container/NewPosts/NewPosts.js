import React from "react";
import {Button, Typography} from '@mui/material';
import { useDispatch } from "react-redux";
import {createNews} from '../../store/actions/postsActions';

const NewPosts = ({ history }) => {
    const dispatch = useDispatch();

    const onSubmit = async newsData => {
        await dispatch(createNews(newsData));
        history.replace('/');
    };
    return (
        <>
            <Typography variant="h4" sx={{margin: '1rem 0'}}>New post</Typography>
            <Button onSubmit={onSubmit} />
        </>
    )
}

export default NewPosts;
