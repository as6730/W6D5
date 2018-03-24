import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const date = this.state.date.toDateString();
    const time = this.state.date.toTimeString();
    return (
      <div className="clock">
        <label className="date-label">{"Date:"}
          <h2>{ date }</h2>
        </label>
        <label className="date-label">Time:
          <h2>{ time }</h2>
        </label>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Clock;
