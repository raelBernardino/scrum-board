import React, { Component } from 'react';

export default class NewList extends Component {
  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
  }
  _onChange(e){
    this.props.onChangeList(e)
  }
  render() {
    return(
      <div className="new-list-container">
        { this.props.isCreatingList ?
            <div className="create-list-container">
              <input
                type="text"
                className="create-list-input"
                placeholder="Enter list title..."
                onChange={this._onChange}
                />
              <button 
                className="add-list-btn"
                onClick={this.props.addNewList}>
              Add List
              </button>
              <button
                className="exit-create-list"
                onClick={this.props.listToggle}>
                x
              </button>
            </div>
          : <button 
              className="new-list-btn"
              onClick={this.props.listToggle}>
            {this.props.addListTag}
            </button>
        }
      </div>
    )
  }
}