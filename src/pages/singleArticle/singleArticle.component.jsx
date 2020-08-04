// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Spinner from "../../components/spinner/spinner.component";
//Actions
import { fetchContentStart, fetchSingleArticleStart } from "../../redux/content/content.actions";
import { selectPost } from '../../redux/content/content.selectors';
import { ArticlePageContainer } from './singleArticle.styles';
// import SingleArticle from '../../components/atomic/article-single/article-single.component';
const SingleArticle = lazy(
  () => import('../../components/atomic/article-single/article-single.component')
);

// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const SingleArticlePage = ({ fetchContentStart, fetchSingleArticleStart, match , post}) => {
  useEffect(() => {
    fetchSingleArticleStart(match.params.slug);
  }, [fetchSingleArticleStart]);

  console.log('match :D ', match.params);
{
  /* <iframe
        src="https://pasteapp.com/p/KlvWDQenHd2/embed?view=2Rn8cAnnmcW"
        width="480"
        height="480"
        scrolling="no"
        frameborder="0"
        allowfullscreen
      ></iframe> */
}
  return (
    
     <ArticlePageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={SingleArticle}
        />
      </Suspense>
    </ArticlePageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContentStart: () => dispatch(fetchContentStart()),
  fetchSingleArticleStart: (slug) => dispatch(fetchSingleArticleStart(slug)),
});

const mapStateToProps = createStructuredSelector({

  post: selectPost
  // collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticlePage);
