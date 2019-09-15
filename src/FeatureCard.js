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

class FeatureCard extends Component {
  render() {
    return (
      <Card
        className={classes.card}
        style={{
          maxWidth: 800,
          margin: "10px"
        }}
      >
        <CardContent
          style={{
            minWidth: 400
          }}
        >
          <Typography
            variant="h4"
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {this.props.title}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.details}
          </Typography>
          <TextField
            id="standard-name"
            label={this.props.placeholder}
            className={classes.textField}
            value={this.props.value}
            onChange={this.props.handleChange}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Grid xs={12} direction="column" alignItems="center" justify="center">
            <Fab
              variant="extended"
              color="secondary"
              onClick={this.props.handleClick}
            >
              Upload
            </Fab>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default (withStyles(classes)(FeatureCard));
