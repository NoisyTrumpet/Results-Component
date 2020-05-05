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
          end={1.56}
          decimals={2}
          duration={5}
          start={0}
          suffix={"B"}
          useEasing={true}
          />
          </h2>
          <h3>Impressions</h3>
        </article>
        <article>
          <h2>
          <CountUp
          end={400}
          duration={5}
          suffix={"K"}
          useEasing={true}
          />
          </h2>
          <h3>Engagements</h3>
        </article>
        <article>
          <h2>
          <CountUp
          end={93.5}
          decimals={1}
          duration={5}
          suffix={"K"}
          useEasing={true}
          />
          </h2>
          <h3>Clicks</h3>
        </article>
      </div>
      </div>
    </div>
  );
}

export default App;
