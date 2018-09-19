import React, { Component } from "react"
import NewList from './NewList';
import List from './List';

export default class ListContainer extends Component {
  render(){
    return(
      <div className="list-container">
        <List 
        
        />
        <NewList 
          isCreatingList={this.props.isCreatingList}
          addListTag={this.props.addListTag}
          listToggle={this.props.listToggle}
          onChangeList={this.props.onChangeList}
          addNewList={this.props.addNewList}
        />
      </div>
    )
  }
}