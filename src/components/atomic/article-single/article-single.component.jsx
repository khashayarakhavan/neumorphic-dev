import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSingleArticleStart } from "../../../redux/content/content.actions";
import { selectData, selectPost, selectPosts } from "../../../redux/content/content.selectors";
// <Router history={browserHistory}>
//   <Route path='/' component={main}>
//     <IndexRoute component={ArticleList} />
//     <Route path='/articles/:slug' compoent={SingleArticle} />
//   </Route>

// </Router>
// const articles = articles.map((article, i) => (
//    <ArticleListItem id={i} key={i} article={article} />
//  ));

// {
//   posts.map(({ post, i }) => <ArticleItem key={i} post={post} />);
// }

// {
//   data.map((post, i) => <ArticleBox key={i} post={post} />);
// }

// const getParsedMarkDown = (content) => {
//   return {
//     __html: marked(content, {sanitize: true})
//   }
// };
 
// export const singleArticle = ({
//          posts,
//          data,
//          match,
//          fetchSingleArticleStart
//        }) => {

//          useEffect(() => {
//            fetchSingleArticleStart(match.params);
//          }, [fetchSingleArticleStart]);

//          console.log("data is ...", data);
//          console.log("posts are ...", posts);

//          if (match.params && match.params.slug) {
//            console.log("I win");
//          }
         
//         //    },
//         //    [fetchSingleArticleStart]
//         //  );
//          // client.getEntries({content_type: 'post', 'fields.slug': params.slug})
//          // .then(res => {
//          //   this.setState({article: response.items[0]})

//          return (<div className="no-gutter">dalam</div>);
//        };

// <h1>{posts.fields.title}</h1>
//       {/* <div dangerouslySetInnerHTML={getParsedMarkDown(posts.fields.content)}></div> */}
//       <img
//         src={posts.fields.featuredImage.fields.file.url + "?w=400&h=300"}
//         alt={posts.fields.featuredImage.fields.file.fileName}
//       />
//       <p>{posts.fields.content}</p>

//       <p className="contentful">
//         <img
//           src={posts.fields.author.fields.avatar.fields.file.url + "?w=50&h=50"}
//           alt={posts.fields.author.fields.fullName}
//         />
//         <a>{posts.fields.author.fields.fullName}</a>
//         <i className="link-spacer"></i>
//         <time className="posts-date" dateTime="2015-05-05">
//           {posts.fields.publishDate}
//         </time>
//       </p>
// <ArticlesContainer>
//     {/* <h1>Dalam Kalti</h1> */}
//     {posts.map((post,i) => console.log('hello #',i))}
//     {posts.map((post,i) => <ArticleBox id={i} post={post} /> )}

//     </ArticlesContainer>

const singleArticle = ({ post, match}) => {
  // useEffect(() => {
  //   fetchSingleArticleStart();
  // }, [fetchSingleArticleStart]);

  // console.log("data is ...", data);
  // console.log("posts are ...", posts);

  // if (match.params && match.params.slug) {
  //   console.log("I match !");
  // }

  return (
    <div>
      <iframe
        src="https://pasteapp.com/p/KlvWDQenHd2/embed?view=2Rn8cAnnmcW"
        width="480"
        height="480"
        scrolling="no"
        frameborder="0"
        allowfullscreen />
    </div>
  );
};

// 
// export default connect(null, mapDispatchToProps)(singleArticle);

const mapStateToProps = createStructuredSelector({
  data: selectData,
  posts: selectPosts,
  post: selectPost,
  // collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleArticleStart: (slug) => dispatch(fetchSingleArticleStart(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(singleArticle);
