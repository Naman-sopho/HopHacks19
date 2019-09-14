import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

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
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{}}>
          <Typography h2>Welcome to app</Typography>
        </div>
        <Grid
          container
          lg={12}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item lg={12}>
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
                  Text Upload
                </Typography>
                <Typography variant="h5" component="h2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
              <CardActions>
                <Grid
                  xs={12}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Button variant="contained" color="primary">
                    Upload
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={12}>
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
                  Text Upload
                </Typography>
                <Typography variant="h5" component="h2">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
              <CardActions>
                <Grid
                  xs={12}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Button variant="contained" color="primary">
                    Upload
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={12}>
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
                  Text Upload
                </Typography>
                <Typography variant="h5" component="h2">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
              <CardActions>
                <Grid
                  xs={12}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Button variant="contained" color="primary">
                    Upload
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(classes, { withTheme: true })(Homepage);
