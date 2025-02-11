import React from "react";

function Articles({ articles = [] }) {
  const allData = articles.map((sngleArticle, index) => (
    <tr data-testid="article" key={index}>
      <td data-testid="article-title">{sngleArticle.title}</td>
      <td data-testid="article-upvotes">{sngleArticle.upvotes}</td>
      <td data-testid="article-date">{sngleArticle.date}</td>
    </tr>
  ));
  // console.log(articles[0]);
  // useEffect(() =>{

  // },[articles]);

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr data-testid="article" key="article-index">
            <td data-testid="article-title">Article 1 title</td>
            <td data-testid="article-upvotes">Article 1 upvotes</td>
            <td data-testid="article-date">Article 1 date</td>
          </tr> */}
          {allData}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
