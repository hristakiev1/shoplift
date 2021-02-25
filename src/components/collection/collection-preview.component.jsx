import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, indx) => indx < 4)
          .map(({ id, imageUrl, ...rest }) => (
            <CollectionItem key={id} imageUrl={imageUrl} {...rest} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
