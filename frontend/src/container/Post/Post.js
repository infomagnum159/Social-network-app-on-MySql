import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Typography, Paper , Box} from '@mui/material';
import { fetchOneNews } from '../../store/actions/postsActions';
import Comments from '../Comments/Comments';

const Post = ({ match }) => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.oneNews);

    useEffect(() => {
        dispatch(fetchOneNews(match.params.id))
    }, [dispatch, match.params.id]);

    return (
        <Paper component={Box} p={2} m={5}>
            <Typography variant="h4">{news.title}</Typography>
            <Typography variant="subtitle2">At {news.time}</Typography>
            <Typography variant="body1" mt={2}>{news.description}</Typography>
            <Typography variant="h6" mt={3}>Comments</Typography>
            <Typography variant="h6" mt={3}>Add comment</Typography>
        </Paper>
    )
}

export default Post;
