import "h8k-components";
import { useState } from "react";

import "./App.css";
import Articles from "./components/Articles";

function App({ articles }) {
  const initialData = [...articles].sort((a, b) => b.upvotes - a.upvotes);

  const [renderData, setRenderData] = useState(initialData);

  // console.log("render data", renderData);

  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
    const sortedArticleByUpvote = [...articles].sort(
      (a, b) => b.upvotes - a.upvotes
    );
    setRenderData(sortedArticleByUpvote);
    // console.log(sortedArticleByUpvote);
  };

  const handleMostRecent = () => {
    const sortedArticleByDate = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setRenderData(sortedArticleByDate);
  };
  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={renderData} />
      </div>
    </>
  );
}

export default App;
// off day
