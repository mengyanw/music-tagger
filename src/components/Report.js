import React from "react";
import ReactGoogleSlides from "react-google-slides";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        marginBottom: 100,
        marginTop: 100,
        // display: 'flex',
        // flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: "center",
    },
}));

function Report() {
    const classes = useStyles();
    return (
        <> 
            <Container className = {classes.content}>
                <ReactGoogleSlides
                    width={"100%"}
                    slidesLink="https://docs.google.com/presentation/d/1E7UU2hlorUFX68dGBQHP8KRNpKB5hXVNodulZvLooSA/edit#slide=id.g25f6af9dd6_0_0"
                    slideDuration={5}
                    position={1}
                    showControls
                    loop
                />
            </Container>
            <Container className={classes.content}> 
                <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="800">
                    <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                </object>
            </Container>
        </>

    )
}

export default Report;
