import React, { useEffect } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews , deleteNews } from '../../store/actions/postsActions';

const Posts = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchNews());
        }, 1000);
    }, [dispatch]);

    const delContact = async (id) => {
        await dispatch(deleteNews(id));
    };

    return (
        <Grid container justifyContent='center' mt={3}>
            <Grid item container justifyContent="space-around" alignItems="center" mb={4}>
                <Grid item>
                    <Typography variant="h4">Posts</Typography>
                </Grid>
                <Grid item>
                    <Button color="primary" component={Link} to="/new">Add new post</Button>
                </Grid>
            </Grid>

            <Grid item container direction="row" spacing={2}>
                {news.map(n => (
                    <div
                        key={n.id}
                        id={n.id}
                        title={n.title}
                        description={n.description}
                        datetime={n.time}
                        image={n.image}
                        onDelete={() => delContact(n.id)}
                    />
                ))}
            </Grid>
        </Grid>
    )
}

export default Posts;
