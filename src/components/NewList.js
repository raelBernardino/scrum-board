import React, { Component } from "react";

export default class NewList extends Component {
  constructor(props) {
    super(props);
    this._onChangeListName = this._onChangeListName.bind(this);
    this.state = {
      listName: ''
    }
  }

  _onChangeListName(e) {
    this.setState({
      listName: e.target.value
    });
  }

  render() {
    return (
      <div className="new-list-container">
        {this.props.isAddingList ? (
            <div className="list-input">
              <input
                type="text"
                className="add-list-input"
                value={this.state.listName}
                placeholder="Edit list title..."
                onChange={this._onChangeListName}
                onKeyDown={e => this.props.addListNameEnter(e)}
              />
              <div className="list-input-close">
                <button
                  className="add-list-modal"
                  onClick={() => {
                    this.props.addList(this.state.listName)
                  }}
                >
                  + Add List
                </button>
                <button className="x-list" onClick={this.props.listToggle}>
                  x
                </button>
              </div>
            </div>
          ) : (
            <button onClick={this.props.listToggle} className="add-list-btn">
              {this.props.addTag}
            </button>
          )}
      </div>
    );
  }
}
