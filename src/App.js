import React from 'react';
import CountUp from 'react-countup';


import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="resultsWrapper">
      <h2 id="title">Results</h2>
      <div className="stats">
        <article>
          <h2>
          <CountUp
          end={385.6}
          decimals={1}
          duration={1}
          start={0}
          suffix={"K"}
          useEasing={true}
          />
          </h2>
          <h3>Impressions</h3>
        </article>
        <article>
          <h2>
          <CountUp
          end={9.1}
          decimals={1}
          duration={1}
          suffix={"K"}
          useEasing={true}
          />
          </h2>
          <h3>Clicks</h3>
        </article>
        <article>
          <h2>
          <CountUp
          end={2}
          decimals={0}
          duration={1}
          suffix={"X"}
          useEasing={true}
          />
          </h2>
          <h3>Industry Avg.<br/>Conversion Rate</h3>
        </article>
      </div>
      </div>
    </div>
  );
}

export default App;
