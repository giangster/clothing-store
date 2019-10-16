import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors.js";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

export const CollectionOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionOverview)
);
