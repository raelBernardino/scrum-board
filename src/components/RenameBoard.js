import React, { Component } from 'react';

export default class RenameBoard extends Component {
  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(e){
    this.props.onChangeRename(e)
  }
  render() {
    return (
      <div className="rename-board"> 
        { this.props.isChangingBoardTitle ?
            <input 
              type="text" 
              className="board-title-input" 
              onChange={this._onChange} 
              placeholder={this.props.boardTitle}
              onKeyDown={this.props.onKeyDownRename}
              />
          : <button 
              className="board-title-btn"
              onClick={this.props.onRename}>
            {this.props.boardTitle}
            </button>
        }
      </div>
    );
  }
}