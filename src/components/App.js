import React from 'react';
// import Classifier from './Classifier'
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Avatar from '@material-ui/core/Avatar';
// import credits from './credits';
// import Button from '@material-ui/core/Button';
// import breeds from './classes'
// import {getBreed} from './utils'

import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Home from './Home';
import Video from './Video';
import Report from './Report';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Route
                    path="/"
                    render={(history) => (
                        <AppBar>
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Music Tagger
                                </Typography>
                            
                            <Tabs value={history.location.pathname}>
                                <Tab
                                    value="/"
                                    label="Home"
                                    component={Link}
                                    to="/"
                                />
                                <Tab
                                    value="/video"
                                    label="Video"
                                    component={Link}
                                    to="/video"
                                />
                                <Tab
                                    value="/report"
                                    label="Report"
                                    component={Link}
                                    to="/report"
                                />
                            </Tabs>
                            </Toolbar>
                        </AppBar>
                    )}
                />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/video" component={Video} />
                    <Route path="/report" component={Report} /> 
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
