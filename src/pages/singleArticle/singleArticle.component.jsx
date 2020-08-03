// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SingleArticle from '../../components/atomic/article-single/article-single.component';
//Actions
import { fetchContentStart, fetchSingleArticleStart } from "../../redux/content/content.actions";
// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const SingleArticlePage = ({ fetchContentStart, fetchSingleArticleStart, match }) => {
  useEffect(() => {
    fetchSingleArticleStart(match.params.slug);
  }, [fetchSingleArticleStart]);

  console.log('match :D ', match.params);

  return (
    <div>
      {/* <iframe
        src="https://pasteapp.com/p/KlvWDQenHd2/embed?view=2Rn8cAnnmcW"
        width="480"
        height="480"
        scrolling="no"
        frameborder="0"
        allowfullscreen
      ></iframe> */}
      <SingleArticle  />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContentStart: () => dispatch(fetchContentStart()),
  fetchSingleArticleStart: () => dispatch(fetchSingleArticleStart()),
});

export default connect(null, mapDispatchToProps)(SingleArticlePage);
