import React, { Component } from 'react';
import BoardSettings from './BoardSettings';

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
          : <div className="board-header">
              <button
                className="board-title-btn"
                onClick={this.props.onRename}
                >
              {this.props.boardTitle}
              </button>
              <BoardSettings
                isEditingBoard={this.props.isEditingBoard}
                settingsToggle={this.props.settingsToggle}
                boardColor={this.props.boardColor}
                boardColorArray={this.props.boardColorArray}
                onChange={this.props.onChangeBGC}
                addColor={this.props.addColor}
                setBoardColor={this.props.setBoardColor}
                toggleColorOptions={this.props.toggleColorOptions}
                deleteColor={this.props.deleteColor}
              />
            </div>
        }
        </div>
    );
  }
}