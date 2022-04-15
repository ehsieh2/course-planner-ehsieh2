import Container from "@material-ui/core/Container";
import Display from "./pages/Display";
import Search from "./pages/Search";
import NotFound from "./components/NotFound";
import React, { Component } from "react";
import { getAll } from "./services/api";
import { update } from "./services/api";
import { remove } from "./services/api";
import { create } from "./services/api";

import { Route, Switch } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      searchedCourses: [],
      query: "",
      searchTotalPages: 0,
      searchCurrentPage: 1,
    };
  }

  componentDidMount() {
    getAll().then((loadCourses) => this.setState({ courses: loadCourses }));
  }

  editStatus = (course) => {
    // means course is not in planner, must create
    if (course._id === undefined) {
      create(course).then((data) => {
        course._id = data._id;
        this.setState({
          courses: [...this.state.courses, course],
        });
      });
    } else {
      this.setState((state) => {
        return {
          // search for the upated course ID in list of current courses
          courses: state.courses.map((c) => {
            if (c._id === course._id) {
              c.status = course.status;
              if (c.status === "none") {
                remove(c);
              } else {
                update(c, c.status);
              }
            }
            return c;
          }),
        };
      });
    }
  };

  saveSearch = (courses, query, totalPages, currentPage) => {
    this.setState({
      searchedCourses: courses,
      query: query,
      searchTotalPages: totalPages,
      searchCurrentPage: currentPage,
    });
  };

  render() {
    const {
      courses,
      searchedCourses,
      query,
      searchCurrentPage,
      searchTotalPages,
    } = this.state;

    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <Display courses={courses} editStatus={this.editStatus} />
          </Route>
          <Route path="/search">
            <Search
              saveSearch={this.saveSearch}
              searchedCourses={searchedCourses}
              query={query}
              currentPage={searchCurrentPage}
              totalPages={searchTotalPages}
              editStatus={this.editStatus}
              currentCourses={courses}
            />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

export default App;
