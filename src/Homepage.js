import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import * as ACTIONS from "../store/actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { AppBar, Fab } from "@material-ui/core/";
import FeatureCard from "./FeatureCard";

const mapStateToProps = state => ({
  items: state.items,
  img: state.imageUrl
});

const mapDispatchToProps = dispatch => ({
  createItem: ACTIONS.createItem,
  getImageURL: ACTIONS.getImageURL(dispatch),
  handleImageToText: ACTIONS.handleImageToText(dispatch)
});

const classes = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class Homepage extends Component {
  state = {
    text: "",
    img: "",
    imageLink: ""
  };

  handleChange = item => {
    this.setState({
      text: item.target.value
    });
  };

  textToImage = () => {
    this.props.getImageURL(this.state.text);
  };

  handleChangeImageLink = item => {
    this.setState({
      imageLink: item.target.value
    });
  };

  handleImage = () => {
    console.log("dksf");
    this.props.handleImageToText(this.state.imageLink);
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${"https://s3.amazonaws.com/ceblog/wp-content/uploads/2011/12/pick-website-color-combination.jpg"})`,
          flex: 1,
          width: null,
          height: null,
          resizeMode: "cover"
        }}
      >
        <div className="App-header">
          <AppBar position="sticky" style={{'width': '100%'}}>
            <Typography variant="h3">The App</Typography>
          </AppBar>
        </div>
        <Grid container lg={12}>
          <Grid item lg={4}>
            <FeatureCard
              title="Image"
              details="Lorem ipsum dolor sit amet"
              placeholder="Link to image"
              value={this.state.imageLink}
              handleChange={this.handleChangeImageLink}
              handleClick={this.handleImage}
            />
          </Grid>
          <Grid item lg={4}>
            <FeatureCard
              title="Speech"
              details=""
              placeholder="Speech file"
              value=""
              handleChange=""
              handleClick=""
            />
          </Grid>
          <Grid item lg={4}>
            <FeatureCard
              title="Text"
              details=""
              placeholder="Text Input"
              value={this.state.text}
              handleChange=""
              handleClick=""
            />
          </Grid>
        </Grid>

        <Grid container lg={12}>
          <Card></Card>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(classes)(Homepage));
