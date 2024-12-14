import React from "react";
import HeadComponent from "./components/HeadComponent"; // Import your HeadComponent

function HomePage() {
  return (
    <div>
      <HeadComponent /> {/* Include the reusable head component */}
      <header>
        <h1>Tommy Roy</h1>
        <p>Welcome to my painting site.</p>
      </header>
      <main>
        {/* Your page content */}
      </main>
    </div>
  );
}

export default HomePage;
