import React, { Component } from "react";

import CollectionPreview from "../../components/collection/collection-preview.component";


import {connect} from "react-redux"
import { selectCollections } from "../../redux/collection/collection.selectors";

const ShopPage =({collections}) =>  {
  
    return (
      <div className="shop-page">
        {collections.map(({ id, title, items, routeName }) => (
          <CollectionPreview
            key={id}
            title={title}
            items={items}
            routeName={routeName}
          />
        ))}
      </div>
    );
  }

const mapStateToProps = state => ({
  collections: selectCollections(state)
})


export default connect(mapStateToProps)(ShopPage);
