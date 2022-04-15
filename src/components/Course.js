import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = {
  card: {
    margin: "1rem",
    width: "16rem",
  },
  cardContent: {
    minHeight: "8rem",
  },
  cardActions: {
    height: "3rem",
  },
  iconButton: {
    marginLeft: "auto",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
  },
  expandMore: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    padding: "0.5rem",
  },
  select: {
    width: "100%",
    height: "100%",
    opacity: "0",
    cursor: "pointer",
  },
};

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      term: "",
      status: "",
      title: "",
      number: "",
    };
  }

  componentDidMount() {
    const { course } = this.props;

    const { _id, term, status, title, number } = course;
    this.setState({ _id, term, status, title, number });
  }

  handleSelect = async (event) => {
    event.preventDefault();
    this.setState({ status: event.target.value }, () =>
      this.props.editStatus(this.state)
    );
  };

  render() {
    return (
      <Card style={styles.card}>
        <Box
          bgcolor={
            this.state.status === "enrolled"
              ? "info.main"
              : this.state.status === "interested"
              ? "warning.main"
              : this.state.status === "taken"
              ? "success.main"
              : "text.disabled"
          }
        >
          <CardContent style={styles.cardContent}>
            <Typography color="textSecondary" gutterBottom>
              {this.state.number}
            </Typography>
            <Typography variant="h5">{this.state.title}</Typography>
          </CardContent>
        </Box>
        <CardActions style={styles.cardActions}>
          <Button disabled>{this.state.term}</Button>
          <IconButton style={styles.iconButton}>
            <ExpandMore style={styles.expandMore} />
            <Select
              onChange={this.handleSelect}
              style={styles.select}
              value={
                this.state.status === "enrolled"
                  ? "enrolled"
                  : this.state.status === "interested"
                  ? "interested"
                  : this.state.status === "taken"
                  ? "taken"
                  : "none"
              }
            >
              <MenuItem value="move" disabled>
                <Typography variant="body1">Move to...</Typography>
              </MenuItem>
              <MenuItem value="enrolled">
                <Typography variant="body1">Currently Enrolled</Typography>
              </MenuItem>
              <MenuItem value="interested">
                <Typography variant="body1">Want to Take</Typography>
              </MenuItem>
              <MenuItem value="taken">
                <Typography variant="body1">Already Took</Typography>
              </MenuItem>
              <MenuItem value="none">
                <Box fontStyle="italic">
                  <Typography variant="body1">None</Typography>
                </Box>
              </MenuItem>
            </Select>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default Course;

Course.propTypes = {
  course: PropTypes.object.isRequired,
  editStatus: PropTypes.func.isRequired,
};
