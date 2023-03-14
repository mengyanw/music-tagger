import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        marginBottom: 100,
        marginTop: 100,
    },
}));

function Contact() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.content}>
                <Typography>
                   Developed by Mengyan Wu, Yuxiao Liu, Zihui Liu 
                </Typography>
            </Container>
        </>
    )
}

export default Contact;
