import React, { Component } from "react";
import List from "./List";
import NewList from "./NewList";

export default class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onChangeCard = this._onChangeCard.bind(this);
    this._removeList = this._removeList.bind(this);
  }

  _removeList(removedList) {
    this.props.removeList(removedList);
  }

  _onChangeCard(e) {
    this.props.onChangeCard(e);
  }

  render() {
    return (
      <div className="list-container">
        {this.props.lists.map((list, i) => (
          <List
            key={i}
            index={i}
            title={list.title}
            cards={list.cards}
            onChangeCard={this._onChangeCard}
            removeList={this._removeList}
            addCard={this.props.addCard}
          />
        ))}
        <NewList 
          addList={this.props.addList}
          addListNameEnter={this.props.addListNameEnter}
          addTag={this.props.addTag}
          isAddingList={this.props.isAddingList}
          listToggle={this.props.listToggle}
          onChangeList={this.props.onChangeList}
        />
      </div>
    );
  }
}