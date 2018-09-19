import React, { Component } from "react";
import RenameBoard from './RenameBoard';
import ListContainer from './ListContainer';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this._onChangeRename = this._onChangeRename.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._listToggle = this._listToggle.bind(this);
    this._onChangeList = this._onChangeList.bind(this);
    this._addNewList = this._addNewList.bind(this);
    this.state = {
      boardTitle: 'Untitled',
      isChangingBoardTitle: false,
      lists: [],
      listTitle: '',
      isCreatingList: false,
    }; 
  }
  //board
  _onChangeRename(e) {
    this.setState({
      boardTitle: e.target.value
    })
  }

  _onClick() {
    this.setState({
      isChangingBoardTitle: !this.state.isChangingBoardTitle
    })
  }

  _onKeyDown(e) {
     if(e.keyCode === 13 || e.keyCode === 27) {
       this.setState({
         isChangingBoardTitle: !this.state.isChangingBoardTitle
       })
     }
  } 
  //newlist
  _listToggle() {
    this.setState({
      isCreatingList: !this.state.isCreatingList
    })
  }

  _addNewList() {
    this.setState({
      lists: this.state.lists.concat({title:this.state.listTitle, cards:[]})
    })
    this._listToggle()
    console.log(this.state.lists)
  }

  _onChangeList(e) {
    this.setState({
      listTitle: e.target.value
    })
  }

  render() {
    const addListTag = this.state.lists.length
    ? '+ Add another list'
    : '+ Add a list'
    return (
      <div className="main"> 
        <RenameBoard 
          boardTitle={this.state.boardTitle}
          isChangingBoardTitle={this.state.isChangingBoardTitle}
          onChangeRename={this._onChangeRename}
          onRename={this._onClick}
          onKeyDownRename={this._onKeyDown}
        />
        <ListContainer 
          lists={this.state.lists}
          isCreatingList={this.state.isCreatingList}
          addListTag={addListTag}
          listToggle={this._listToggle}
          onChangeList={this._onChangeList}
          addNewList={this._addNewList}
        />
      </div>
    );
  }
}
