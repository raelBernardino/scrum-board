import React, { Component } from 'react';

export default class List extends Component {
  render(){
    return(
      <div className="list">
      {
        this.props.lists.map((list, i) => {
          return <div className="created-list" key={i}>
            <h4 className="created-list-title">{list.title}</h4>
            <button className="add-card-toggle">+ Add Card</button>
          </div>
        })
      }
      </div>
    )
  }
} 