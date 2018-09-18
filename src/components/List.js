import React, { Component } from "react";
import NewCard from "./NewCard";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardToggle: false
    };
    this._cardToggle = this._cardToggle.bind(this);
  }

  _cardToggle() {
    this.setState({
      cardToggle: !this.state.cardToggle
    });
  }

  render() {
    const { title, cards } = this.props;
    return (
      <div className="list">
        <div className="card-container">
          <h3 className="list-name">{title}</h3>
          <button
            className="other-btn"
            onClick={this.props.removeList.bind(this, { title, cards })}
          >
            x
          </button>
        </div>
        <div className="list-card-container">
          <div className="creaated-cards">
            {cards && cards.map((c, i) => <div key={`card_${i}`}>{c}</div>)}
          </div>
        </div>
        <NewCard
          cardToggle={this.state.cardToggle}
          onChangeCard={this.props.onChangeCard}
          addCard={this.props.addCard}
          onCardToggle={this._cardToggle}
          index={this.props.index}
        />
      </div>
    );
  }
}
