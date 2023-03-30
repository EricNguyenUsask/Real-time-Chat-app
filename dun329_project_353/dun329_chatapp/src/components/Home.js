import React from 'react';

function Home() {
  return (
    <div className="container">
      <p className="text">The goal of the project is to design and implement a channel-based chat tool with features like creating channels, posting messages and replies, nested replies, user accounts, and a search feature. The user interface must be implemented in Reactjs and all text data must be stored in a MySQL database. The project is divided into four parts, each with a certain weightage. The submission includes a docker-compose.yml file, all necessary files, a design report, a test report, and a video demonstration of the system. The project will be evaluated based on the completeness and functionality of each part, as well as the design and test reports and the video presentation.
      <br></br><h1>dun320-11275930-Thang Nguyen</h1>
      </p>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .text {
          font-size: 16px;
          line-height: 1.5;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default Home;
