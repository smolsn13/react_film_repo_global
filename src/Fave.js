import React, { Component } from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.props.onFaveToggle()
    console.log("handle fave click");
  }

  render() {

    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue"

    return (
      <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave;
