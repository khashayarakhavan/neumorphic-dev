import { createSelector } from "reselect";

const selectContent = (state) => state.content;

export const selectData = createSelector(
  [selectContent],
  (content) => content.data
);

export const selectPosts = createSelector(
  [selectData],
  (Data) => Data ? Data.items : []
    // content ? Object.keys(content).map((key) => content[key]) : []
);

export const selectPostsPreview = createSelector(
  [selectData],
  (Data) =>  Data ? Object.keys(Data).map((key) => Data[key]) : []
);