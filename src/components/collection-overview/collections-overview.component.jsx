import React from "react";
import {connect } from "react-redux"
import { selectCollectionsfromObject } from "../../redux/collection/collection.selectors";
import CollectionPreview from "../collection/collection-preview.component"
import "./collections-overview.style.scss"


const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, title, items, routeName }) => (
          <CollectionPreview
            key={id}
            title={title}
            items={items}
            routeName={routeName}
          />
        ))}
        </div>
    )
}


const mapStateToProps = state => ({
    collections: selectCollectionsfromObject(state)
})


export default connect(mapStateToProps)(CollectionsOverview);