import React, { Component } from 'react';
import CardContainer from './CardContainer';

export default class List extends Component {
  render(){
    return(
      <div className="list">
      {
        this.props.lists.map((list, i) => {
          return <div className="created-list" key={i}>
            <div className="list-header">
              <p 
              className="created-list-title">{
                list.title}
              </p>
              <button 
              className="remove-list"
              onClick={this.props.removeList.bind(this, i)}>
              x
              </button>
            </div>
          <CardContainer
          list={list}
          index = {i}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
          addCard={this.props.addCard}
          />
          </div>
        })
      }
      </div>
    )
  }
} 