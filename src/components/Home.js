import React from 'react';
import Classifier from './Classifier'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Avatar from '@material-ui/core/Avatar';
// import credits from './credits';
import Button from '@material-ui/core/Button';
// import breeds from './classes'
// import {getBreed} from './utils'

// import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 20,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    table: {
        width: '100%',
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function Home() {
    const classes = useStyles();
    return <>
        <Container className={classes.content}>
            <Classifier />
        </Container>
        <Container className={classes.content}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>How do I use this?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">

                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>What music tags does the classifier know?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
 
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>What is this good for?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">

                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>What happens to my data?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">

                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>Music Data credits</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* <footer className={classes.footer}>
                <Button className={classes.button}>Developed by Mengyan Wu, Yuxiao Liu, Zihui Liu</Button>
            </footer> */}
        </Container>
  </>;
}

export default Home;
