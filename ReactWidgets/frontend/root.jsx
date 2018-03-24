import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = (props) => {
  const quotes = [
    "Happiness in intelligent people is the rarest thing I know.",
    "There are only three sports: mountain climbing, bull fighting, and motor racing. All the rest are merely games.",
    "There is no friend as loyal as a book."
  ];
  return (
          <div>
            <Clock/>
            <div className="interactive">
              <Tabs quotes={quotes}/>
            </div>
            <Weather/>
          </div>
  );
};
export default Root;
