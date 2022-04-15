import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Add from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Course from "../components/Course";
import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const styles = {
  fab: {
    position: "fixed",
    bottom: "3rem",
    right: "3rem",
  },
};

class Display extends Component {
  render() {
    const { courses, editStatus } = this.props;

    return (
      <Container>
        <AppBar position="sticky">
          <Toolbar>
            <Box py={3}>
              <Typography variant="h4">Course Planner</Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box py={2}>
              <Typography variant="h6">Currently Enrolled</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {courses
                .filter((c) => c.status === "enrolled")
                .map((course) => {
                  return (
                    <Grid key={course._id} item>
                      <Course
                        course={course}
                        editStatus={editStatus}
                        key={course._id}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box py={2}>
              <Typography variant="h6">Want to Take</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {courses
                .filter((c) => c.status === "interested")
                .map((course) => {
                  return (
                    <Grid key={course._id} item>
                      <Course
                        course={course}
                        editStatus={editStatus}
                        key={course._id}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box py={2}>
              <Typography variant="h6">Already Took</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {courses
                .filter((c) => c.status === "taken")
                .map((course) => {
                  return (
                    <Grid key={course._id} item>
                      <Course
                        course={course}
                        editStatus={editStatus}
                        key={course._id}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Link to="/search">
          <Fab style={styles.fab} color="primary">
            <Add />
          </Fab>
        </Link>
      </Container>
    );
  }
}

export default withStyles(styles)(Display);

Display.propTypes = {
  courses: PropTypes.array.isRequired,
  editStatus: PropTypes.func.isRequired,
};
