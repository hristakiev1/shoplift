import { createSelector } from "reselect";

import memoize from "lodash.memoize";


const selectShopData = state => state.shopData;

export const selectCollections = createSelector(
    [selectShopData],
    shopData => shopData.collections
);

export const selectCollectionsfromObject = createSelector(
    [selectCollections],
    collections=> Object.values(collections)
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectCollections], 
    collections => collections[collectionUrlParam])
  );

