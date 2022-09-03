import React, { useEffect } from 'react';
import { IconButton, Typography, Paper, Box, Stack } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from '../../store/actions/messagesActions';

const Comments = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchMessages());
        }, 1000);
    }, [dispatch]);

    return (
        <>
            {messages.map(msg => (
                <Paper component={Box} p={2} m={5} key={msg.id}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body1" mt={2}><b>{msg.author}</b>:{' '}{msg.comment}</Typography>
                        <IconButton>
                        </IconButton>
                    </Stack>
                </Paper>
            ))}
        </>
    )
}

export default Comments;
