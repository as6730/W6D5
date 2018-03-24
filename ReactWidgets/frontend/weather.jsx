import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition((pos) => console.log(pos.coords.latitude) );

  }

  render() {

    return (
      <div className="weather">
        cdnsjkcndsjk
      </div>
    );
  }
}

export default Weather;
