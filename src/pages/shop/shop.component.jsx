import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component.jsx";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
import { selectIsCollectionLoaded } from "../../redux/shop/shop-selectors.js";
import { CollectionOverviewContainer } from "../../components/collection-overview/collection-overview.container.jsx";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
