import React from 'react';

const App = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Our Amazing Product</h1>
        <p>Discover the future of innovation</p>
      </header>
      <main>
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Intuitive Design</li>
            <li>Powerful Performance</li>
            <li>Seamless Integration</li>
          </ul>
        </section>
        <section className="cta">
          <h2>Get Started Today</h2>
          <button>Sign Up Now</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
