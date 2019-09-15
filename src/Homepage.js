import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Icon, CardHeader } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import * as ACTIONS from "../store/actions";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  AppBar,
  Fab,
  IconButton,
  CardMedia,
  CardActionArea
} from "@material-ui/core/";
import FeatureCard from "./FeatureCard";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import axios from "axios";

const mapStateToProps = state => ({
  items: state.items,
  img: state.imageUrl,
  textarea: state.imageToTextVec
});

const mapDispatchToProps = dispatch => ({
  createItem: ACTIONS.createItem,
  getImageURL: ACTIONS.getImageURL(dispatch),
  handleImageToText: ACTIONS.handleImageToText(dispatch)
});

const classes = makeStyles(theme => ({
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
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

class Homepage extends Component {
  state = {
    text: "",
    img: "",
    imageLink: "",
    textarea: ""
  };

  // handleChange = item => {
  //   this.setState({
  //     text: item.target.value
  //   });
  // };

  textToImage = () => {
    this.props.getImageURL(this.state.text);
  };

  handleChangeImageLink = item => {
    this.setState({
      imageLink: item
    });
  };

  handleImage = () => {
    const data = {
      requests: [
        {
          image: {
            source: {
              imageUri: this.state.imageLink
            }
          },
          features: [
            {
              type: "TEXT_DETECTION"
            }
          ]
        }
      ]
    };
    const GOOGLE_API = "https://vision.googleapis.com/v1/images:annotate";
    axios
      .post(GOOGLE_API + "/?key=AIzaSyBXsxfHKx_A35XXmU28XDMtUliuWIXTDf0", data)
      .then(response => {
        console.log(response.data);
        this.setState({
          textarea: response.data.responses[0].fullTextAnnotation.text
        });
      });
  };

  handleTextInput = item => {
    this.setState({
      text: item
    });
  };

  handleText = () => {
    this.setState({
      textarea: this.state.text
    });
  };

  render() {
    var backImgUrl =
      "https://backgroundcheckall.com/wp-content/uploads/2017/12/light-background-colours-8.jpg";
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${backImgUrl})`,
          flex:1,
          height: null,
          width:null
        }}
      >
        <div className="App-header">
          <AppBar position="sticky" style={{ width: "100%" }}>
            <Typography variant="h3">CeleAI.tech</Typography>
          </AppBar>
        </div>
        <Grid container lg={12} style={{ margin: "8px", padding: "4px" }}>
          <Grid item lg={4}>
            <FeatureCard
              title="Image"
              details=""
              placeholder="Link to image"
              value={this.state.imageLink}
              handleChange={this.handleChangeImageLink}
              handleClick={this.handleImage}
              icon={"image"}
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
              icon={"record_voice_over"}
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
              icon={"text_fields"}
            />
          </Grid>
        </Grid>

        <Grid
          container
          lg={12}
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Card style={{ backgroundColor: "transparent" }}>
            <Grid item lg={10} style={{ height: "20vw", width: "70vw" }}>
              <CardActionArea>
                <Typography variant="h4">Parsed Text</Typography>
              </CardActionArea>
              <Typography variant="subtitle">
                {this.state.textarea
                  ? this.state.textarea
                  : "Your text will appear here!!"}
              </Typography>
            </Grid>
          </Card>
        </Grid>

        <Grid
          container
          lg={12}
          style={{ margin: "20px" }}
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item lg={4}>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "3px" }}
            >
              <Icon>image</Icon>Text to Image
            </Button>
          </Grid>
          <Grid item lg={4}>
            <Button variant="contained" color="primary">
              <Icon>music_note</Icon>Text to Song
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          lg={12}
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item md={3} style={{ margin: "30px", padding: "4px" }}>
            <Card className={classes.card} style={{ minHeight: "20vw" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  //height="140"
                  image="https://placeimg.com/350/225/any"
                  title="Contemplative Reptile"
                />
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
          <Grid item md={3} style={{ margin: "30px", padding: "4px" }}>
            <Card className={classes.card} style={{ minHeight: "20vw" }}>
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
                image="https://www.macworld.co.uk/cmsdata/features/3612963/how_to_get_music_on_iphone_1600home_thumb800.jpg"
                title="Live from space album cover"
              />
              <CardActions>
                <Typography>Alternative Solutions</Typography>
              </CardActions>
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
