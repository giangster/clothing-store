import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors.js";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

//In here, compose is used instead of the regular way to ensure that in the future, if there is more HOC than just WithSpinner, the code would not look like a mess
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// export const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverview)
// );

export default CollectionOverviewContainer;
