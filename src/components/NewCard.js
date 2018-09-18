import React, { Component } from "react";

export default class NewCard extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._addCard = this._addCard.bind(this);
    this.state = {
      card: ""
    };
  }

  _onChange(e) {
    this.setState({
      card: e.target.value
    });
  }

  _addCard(e) {
    this.props.addCard(this.state.card, this.props.index)
  }
  
  render() {
    return (
      <div className="new-card">
        {this.props.cardToggle ? (
          <div className="card-conditions">
            <textarea
              type="text"
              className="card-input"
              placeholder="Enter a title for this card..."
              onChange={this._onChange}
            />
            <div className="card-button-conditions">
              <button className="card-btn" onClick={this._addCard}>
                Add Card
              </button>
              <button className="x-card" onClick={this.props.onCardToggle}>
                x
              </button>
            </div>
          </div>
        ) : (
          <button className="add-card-btn" onClick={this.props.onCardToggle}>
            + Add a card
          </button>
        )}
      </div>
    );
  }
}
