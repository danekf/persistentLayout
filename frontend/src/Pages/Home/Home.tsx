import React from "react";
import './Home.css';

/* TODO
-Button -> link to a demo once its complete.
*/

const Home: React.FC<{}> = () => {

  return (
    <div className="banner home">
      <h1 className="welcome">Welcome to Persistent Layout!</h1>
      <h2 className="tag">The conventient solution to a niche problem.</h2>
      <div className="hook">
        <ul>
          <li>Do you find yourself opening the same tabs, on the same monitors, at the start of every day or activity?</li>
          <li>Do you wish you had a quick and easy way to load up a bunch of pages at the click of a button?</li>
          <li>Do you like saving seconds of your time?</li>
        </ul>
      </div>
      <div className="description">
         Well, do I have the solution for you! <br /><br />
         Welcome to <b>Persistent Layout</b>, a way to control multiple browser windows at once. Think of it like having multiple home pages, that can span across all your monitors, no matter the layout, the number of windows youd like open, or what you are currently doing. <br />
      </div>
      <div className="closing">No matter your use case, <b>Persistent Layout</b> is here to help.</div>
         
      <button className="tour">Click here for a demo of how <b>Persistent Layout</b> can be used.</button>
    </div>
  )
};

export default Home;