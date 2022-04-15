import SearchBar from "material-ui-search-bar";
import PropTypes from "prop-types";

function TopSearchBar(props) {
  const { query, updateQuery, page } = props;
  return (
    <SearchBar
      value={query}
      onChange={(newValue) => updateQuery(newValue, page)}
      onCancelSearch={() => updateQuery("", page)}
    />
  );
}

export default TopSearchBar;

TopSearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};