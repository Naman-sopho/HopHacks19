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
import { AppBar, Fab, Icon, IconButton } from "@material-ui/core/";

class FeatureCard extends Component {
  render() {
    return (
      <Card
        style={{
          maxWidth: 500,
          minHeight: 300,
          margin: "10px",
           backgroundColor: "transparent",
            boxShadow: "none"
        }}
      >
        <CardContent
          style={{
            minWidth: 400
          }}
        >
          <Typography variant="h4" color="textSecondary" gutterBottom>
            <Icon style={{ margin: "2px", "padding-right": "4px" }}>
              {this.props.icon}
            </Icon>
            {this.props.title}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.details}
          </Typography>
          <TextField
            id="standard-name"
            label={this.props.placeholder}
            value={this.props.value}
            onChange={e => this.props.handleChange(e.target.value)}
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Grid xs={12} direction="column" alignItems="center" justify="center">
            <Fab
              variant="extended"
              color="primary"
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

export default FeatureCard;
