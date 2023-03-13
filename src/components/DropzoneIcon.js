import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        width: '50%',
        height: '50%',
        color: 'grey',
    },
});

export default ({fileLoaded, isDragActive}) => {
    const classes = useStyles();
    if (fileLoaded) { return null; }
    if (isDragActive) { return <CheckCircleIcon className={classes.icon} />; }
    return <CloudUploadIcon className={classes.icon} />;
}