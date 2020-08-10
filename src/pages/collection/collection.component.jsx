import React, { Suspense } from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/atomic/collection-item/collection-item.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCollection,
  selectIsCollectionFetching
} from "../../redux/shop/shop.selectors";
import {
  CollectionItemsContainer, CollectionPageContainer,
  CollectionTitle
} from "./collection.styles";

export const CollectionPage = ({ collection, isFetching }) => {
  // items is an array so we can `.map` over it.
  // big arrays are better to be changed to hash tables or JS objects for performance optimization.
  // const title = "hello";
  // const items = [];
  // if (isFetching) {
  // const { title, items } = {isFetching ? {'loading', ['1', '2'] : collection};

  // console.log('i am fetching');
// } else {
  // console.log("i am not fetching");
// }
  
  return (
    
    <Suspense fallback={<Spinner />}>
      <div>
      {isFetching ? <Spinner /> :
          <CollectionPageContainer>
            <CollectionTitle>{collection.title}</CollectionTitle>
            <CollectionItemsContainer>
              {collection.items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </CollectionItemsContainer>
          </CollectionPageContainer>
        
      }
      </div>
    </Suspense>
  );
  
};

const mapStateToProps = (state, ownProps) => ({
  // Pay attention:
  // here we can also change this to an object in the DB and then change it to array using `object.key()` method.
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isFetching: selectIsCollectionFetching(state),
});

export default connect(mapStateToProps)(CollectionPage);

// {isFetching ? (
//           <p>loading content for you</p>
//         ) : (
// )}