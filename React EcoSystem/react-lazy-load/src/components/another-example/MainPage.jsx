import React, { Suspense, useState } from "react";

const HomePage = React.lazy(() => import("./HomePage"));
const AboutPage = React.lazy(() => import("./AboutPage"));

function MainPage() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  return (
    <div>
      <h1>This is Main Page</h1>
      <div className="flex justify-center px-3">
        <button
          className="bg-gray-400"
          onClick={() => setShowHomePage(!showHomePage)}
        >
          Show Home Page
        </button>
        <button
          className="bg-gray-400"
          onClick={() => setShowAboutPage(!showAboutPage)}
        >
          Show About Page
        </button>
      </div>

      {showHomePage && (
        <Suspense fallback={<div>Loading Home Page ....</div>}>
          <HomePage />
        </Suspense>
      )}

      {showAboutPage && (
        <Suspense fallback={<div>Loading About Page</div>}>
          <AboutPage />
        </Suspense>
      )}
    </div>
  );
}

export default MainPage;
