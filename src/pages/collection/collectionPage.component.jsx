import React from "react";
import {connect } from "react-redux";
import {selectCollection} from "../../redux/collection/collection.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collectionPage.style.scss"


const CollectionPage = ({ collectionItems}) => {
 const {title, items} = collectionItems;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                
           {items.map(collectionItem => <CollectionItem key={collectionItem.id} item={collectionItem} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collectionItems: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);