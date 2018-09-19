import React, { Component } from "react";
import RenameBoard from './RenameBoard';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this.state = {
      boardTitle: 'Untitled',
      isChangingBoardTitle: false
    }; 
  }
  _onChange(e) {
    this.setState({
      boardTitle: e.target.value
    })
  }

  _onClick(){
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

  render() {
    return (
      <div className="main"> 
        <RenameBoard 
          boardTitle={this.state.boardTitle}
          isChangingBoardTitle={this.state.isChangingBoardTitle}
          onChangeRename={this._onChange}
          onRename={this._onClick}
          onKeyDownRename={this._onKeyDown}
        />
      </div>
    );
  }
}
