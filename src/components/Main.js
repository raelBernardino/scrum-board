import React, { Component } from "react";
import ListContainer from "./ListContainer";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Main Board states
      board: "Untitled",
      isRenamingBoard: false,
      //List states
      isAddingList: false,
      lists: [
        {
          title: 'first list',
          cards: ['first card', 'second card']
        }
      ]
      //Card states
    };
    this._titleToggle = this._titleToggle.bind(this);
    this._titleToggleKey = this._titleToggleKey.bind(this);
    this._onChangeTitle = this._onChangeTitle.bind(this);
    this._listToggle = this._listToggle.bind(this);
    this._addList = this._addList.bind(this);
    this._removeList = this._removeList.bind(this);
    this._addListNameEnter = this._addListNameEnter.bind(this);
    this._onChangeCard = this._onChangeCard.bind(this);
    this._addCard = this._addCard.bind(this);
  }

  //title methods
  _titleToggleKey(e) {
    if (e.keyCode === 13) {
      this.setState({
        isRenamingBoard: !this.state.isRenamingBoard
      });
    }
  }

  _titleToggle() {
    this.setState({
      isRenamingBoard: !this.state.isRenamingBoard
    });
  }

  _onChangeTitle(e) {
    this.setState({
      board: e.target.value
    });
  }

  //list methods
  _listToggle() {
    this.setState({
      isAddingList: !this.state.isAddingList
    });
  }

  _addList(listName) {
    this.setState({
      lists: this.state.lists.concat({title: listName, cards: []})
    });
  }

  _addListNameEnter(e) {
    if (e.keyCode === 13) {
      this._addList(this.state.listReqs);
      this.setState({
        ...this.state.listReqs,
        listReqs: {
          title: ""
        }
      });
    }
  }

  _removeList(removedList) {
    this.setState({
      lists: this.state.lists.filter(list => {
        return list !== removedList;
      })
    });
  }

  //card methods
  _onChangeCard(e) {
    this.setState({
      ...this.state.listReqs,
      listReqs: {
        cardName: e.target.value
      }
    });
  }

  _addCard(card, index) {
    console.log(card, index)
    const newList = [...this.state.lists]
    newList[index].cards.push(card)
    this.setState({
      lists: newList
    });
  }

  render() {
    const addListText = this.state.lists.length
      ? "+ Add another list"
      : "+ Add a list";
    return (
      <div className="Main">
        {this.state.isRenamingBoard ? (
          <input
            type="text"
            className="title-input"
            onChange={e => this._onChangeTitle(e)}
            placeholder={this.state.board}
            onKeyDown={e => this._titleToggleKey(e)}
          />
        ) : (
          <button className="title-btn" onClick={this._titleToggle}>
            {this.state.board}
          </button>
        )}
        <div className="flex-list">
          <ListContainer
            lists={this.state.lists}
            listReqs={this.state.listReqs}
            addListNameEnter={this._addListNameEnter}
            listToggle={this._listToggle}
            addList={this._addList}
            removeList={this._removeList}
            onChangeCard={this._onChangeCard}
            addCard={this._addCard}
            addTag={addListText}
            isAddingList={this.state.isAddingList}
          />
        </div>
      </div>
    );
  }
}
