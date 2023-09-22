import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography'

function CommentCard(props) {
    const { store } = useContext(GlobalStoreContext);
    const { commenter, comment } = props;

    let cardElement = 
        <ListItem
            sx= {{marginTop: '15px', display: 'flex', p: 1, borderRadius: '16px', bgcolor: '#00b2ca'}}
            className="commentCards"
        >
            <Grid container>
                <Box style={{fontSize:'10pt', fontWeight: 'medium', width: '750px', overflowWrap: 'break-word'}}> 
                    {commenter}
                </Box> 
                <Box style={{fontSize:'16pt', fontWeight: 'medium', maxWidth: '100%', overflowWrap: 'break-word'}}> 
                    {comment}
                </Box> 
            </Grid>
        </ListItem>
    return (
        cardElement
    );
}

export default CommentCard;