import React, { Component } from "react";
import TopSearchBar from "../components/TopSearchBar";
import SearchPagination from "../components/SearchPagination";
import { search } from "../services/api";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Course from "../components/Course";
import { v4 as uuidv4 } from "uuid";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      query: "",
      totalPages: 0,
      currentPage: 1,
    };
  }

  componentDidMount() {
    const { searchedCourses, query, totalPages, currentPage } = this.props;

    this.setState({
      courses: searchedCourses,
      query: query,
      totalPages: totalPages,
      currentPage: currentPage,
    });
  }

  updateQuery = (query, page) => {
    if (query === "") {
      this.setState(
        { query: "", courses: [], totalPages: 0 },
        this.props.saveSearch([], "", 0, this.state.currentPage)
      );
    } else {
      this.setState({ query: query });

      search(query, page, 9).then((res) =>
        this.setState(
          {
            courses: res.data,
            totalPages: res.pagination.last,
            currentPage: page,
          },
          this.props.saveSearch(res.data, query, res.pagination.last, page)
        )
      );
    }
  };

  handlePageChange = (event, newPage) => {
    event.preventDefault();
    this.updateQuery(this.state.query, newPage);
  };

  render() {
    const { editStatus, currentCourses } = this.props;
    const { query, totalPages, currentPage } = this.state;

    return (
      <>
        <TopSearchBar
          query={query}
          page={currentPage}
          updateQuery={this.updateQuery}
        />
        <SearchPagination
          totalPages={totalPages}
          currentPage={currentPage}
          handleChange={this.handlePageChange}
        />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {this.state.courses &&
            this.state.courses.map((course) => {
              for (let i = 0; i < currentCourses.length; i++) {
                if (
                  currentCourses[i].term === course.term &&
                  currentCourses[i].title === course.title &&
                  currentCourses[i].number === course.number
                ) {
                  course = currentCourses[i];
                  break;
                }
              }
              const key = uuidv4();

              return (
                <Grid key={key} item>
                  <Course course={course} editStatus={editStatus} key={key} />
                </Grid>
              );
            })}
        </Grid>
      </>
    );
  }
}
export default Search;

Search.propTypes = {
  saveSearch: PropTypes.func.isRequired,
  searchedCourses: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  editStatus: PropTypes.func.isRequired,
  currentCourses: PropTypes.array.isRequired,
};
