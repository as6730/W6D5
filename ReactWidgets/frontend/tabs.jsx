import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.quotes = props.quotes;
    this.click = this.click.bind(this);
    this.state = { currentTab: 0 };
  }

  click(value) {
    this.setState({ currentTab: value });
  }

  render() {

    return (
      <div className="tabs">
        <div className="tab-header">
          <li className="currentTab" onClick={()=>this.click(0)}>One</li>
          <li onClick={()=>this.click(1)}>Two</li>
          <li onClick={()=>this.click(2)}>Three</li>
        </div>
        <p className="quote">{Object.values(this.quotes[this.state.currentTab])}</p>
      </div>
    );
  }
}

export default Tab;
