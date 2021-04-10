import React from "react";
import {Route} from 'react-router-dom'

import CollectionsOverview from "../../components/collection-overview/collections-overview.component"
import collectionPage from "../collection/collectionPage.component";

const ShopPage =({match}) =>  {

    return (
      <div className="shop-page">
        <Route path={`${match.path}/:collectionId`} component={collectionPage} />
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
      </div>
    );
  }




export default ShopPage;
