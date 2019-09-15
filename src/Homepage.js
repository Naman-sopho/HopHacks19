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
import { AppBar, Fab, IconButton, CardMedia, CardActionArea } from "@material-ui/core/";
import FeatureCard from "./FeatureCard";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const mapStateToProps = state => ({
  items: state.items,
  img: state.imageUrl
});

const mapDispatchToProps = dispatch => ({
  createItem: ACTIONS.createItem,
  getImageURL: ACTIONS.getImageURL(dispatch),
  handleImageToText: ACTIONS.handleImageToText(dispatch)
});

const classes = makeStyles((theme)=>({
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
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

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
    const {theme} = this.props;
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
          <AppBar position="sticky" style={{ width: "100%" }}>
            <Typography variant="h3">The App</Typography>
          </AppBar>
        </div>
        <Grid container lg={12} m-8 p-4>
          <Grid item lg={4}>
            <FeatureCard
              title="Image"
              details="Lorem ipsum dolor sit amet"
              placeholder="Link to image"
              value={this.state.imageLink}
              handleChange={this.handleChangeImageLink}
              handleClick={this.handleImage}
              icon={'image'}
            />
          </Grid>
          <Grid item lg={4}>
            <FeatureCard
              title="Speech"
              details=""
              placeholder="Speech file"
              value=""
              handleChange={this.handleSpeechChange}
              handleClick={this.handleSpeech}
              icon={'record_voice_over'}
            />
          </Grid>
          <Grid item lg={4}>
            <FeatureCard
              title="Text"
              details=""
              placeholder="Text Input"
              value={this.state.text}
              handleChange={this.handleTextInput}
              handleClick={this.handleText}
              icon={'text_fields'}
            />
          </Grid>
        </Grid>

        <Grid
          container
          lg={12}
          alignItems="center"
          justify="center"
          direction="row"
        >
          <Card>
            <Grid item lg={10} style={{ height: "20vw", width: "80vw" }}>
              <Typography variant="subheading">sdfdsd</Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid container lg={12} justifyContent="center" alignContent="center">
          <Grid item lg={5}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  //height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={5} mt-12>
          <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="previous">
                    {false ? <SkipNextIcon /> : <SkipPreviousIcon />}
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                  <IconButton aria-label="next">
                    {true ? <SkipPreviousIcon /> : <SkipNextIcon />}
                  </IconButton>
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(classes)(Homepage));
