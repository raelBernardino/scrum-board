import React, { Component } from "react"
import NewList from './NewList';
import List from './List';

export default class ListContainer extends Component {
  render(){
    return(
      <div className="list-container">
          <List 
          lists={this.props.lists}
          onClick={this.props.onAddCardToggle}
          onChange={this.props.onChangeCard}
          addCard={this.props.addCard}
          removeCard={this.props.removeCard}
          removeList={this.props.removeList}
          boardStyle={this.props.boardStyle}
          />
          <NewList 
          isCreatingList={this.props.isCreatingList}
          addListTag={this.props.addListTag}
          listToggle={this.props.listToggle}
          onChangeList={this.props.onChangeList}
          addNewList={this.props.addNewList}
          boardStyle={this.props.boardStyle}
          />
      </div>
    )
  }
}