import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";

const styles = {
  pagination: {
    justifyContent: "center",
    display: "flex",
  },
};
function SearchPagination(props) {
  const { totalPages, currentPage, handleChange } = props;

  return (
    <>
      {totalPages === 0 && (
        <Pagination
          disabled={true}
          count={0}
          style={styles.pagination}
        ></Pagination>
      )}

      {totalPages !== 0 && (
        <Pagination
          style={styles.pagination}
          page={currentPage}
          count={totalPages}
          onChange={handleChange}
        ></Pagination>
      )}
    </>
  );
}

export default SearchPagination;

SearchPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};