import marked from 'marked';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import client from '../../../contentful/contentful.utils';
import { selectData, selectPosts } from "../../../redux/content/content.selectors";
import ArticleBox from '../../atomic/article-item/article-item.component';
import { ArticlesContainer } from "./article-single.styles";

<Router history={browserHistory}>
  <Route path='/' component={main}>
    <IndexRoute component={ArticleList} />
    <Route path='/articles/:slug' compoent={SingleArticle} />
  </Route>

</Router>
// const articles = articles.map((article, i) => (
//    <ArticleListItem id={i} key={i} article={article} />
//  ));

// {
//   posts.map(({ post, i }) => <ArticleItem key={i} post={post} />);
// }

// {
//   data.map((post, i) => <ArticleBox key={i} post={post} />);
// }
const getParsedMarkDown = (content) => {
  return {
    __html: marked(content, {sanitize: true})
  }
};

export const singleArticles = ({ posts, data, params, article }) => {
  console.log('data is ...', data);
  console.log('posts are ...', posts);
 
  if (!this.state.article) {
    return <h1> not fount 404!</h1>
  }
  useEffect(
    const params= this.props;
    if (params && params.slug) {
      client.getEntries({content_type: 'post', 'fields.slug': params.slug})
      .then(res => {
        this.setState({article: response.items[0]})
      })
    }

  )
  return (
    <div className="no-gutter">
      <h1>{article.fields.title}</h1>
      <div dangerouslySetInnerHTML={getParsedMarkDown(article.fields.content)}></div>
      <img
        src={article.fields.featuredImage.fields.file.url + "?w=400&h=300"}
        alt={article.fields.featuredImage.fields.file.fileName}
      />
      <p>{article.fields.content}</p>

      <p className="contentful">
        <img
          src={article.fields.author.fields.avatar.fields.file.url + "?w=50&h=50"}
          alt={article.fields.author.fields.fullName}
        />
        <a>{article.fields.author.fields.fullName}</a>
        <i className="link-spacer"></i>
        <time className="article-date" dateTime="2015-05-05">
          {article.fields.publishDate}
        </time>
      </p>
    </div>
  );
};

<ArticlesContainer>
    {/* <h1>Dalam Kalti</h1> */}
    {posts.map((post,i) => console.log('hello #',i))}
    {posts.map((post,i) => <ArticleBox id={i} post={post} /> )}

    </ArticlesContainer>

const mapStateToProps = createStructuredSelector({
  data: selectData,
  posts: selectPosts,
});

export default connect(mapStateToProps)(singleArticle);
