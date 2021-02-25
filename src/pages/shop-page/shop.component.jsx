import React, { Component } from "react";
import SHOP_DATA from "../../database/colection-data";
import CollectionPreview from "../../components/collection/collection-preview.component";

class ShopPage extends Component {
  state = {
    collections: [],
  };

  componentDidMount() {
    this.setState({ collections: SHOP_DATA });
  }

  render() {
    const { collections } = this.state;
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
}

export default ShopPage;
