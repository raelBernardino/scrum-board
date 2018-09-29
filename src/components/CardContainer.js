import React, { Component } from 'react';
import NewCard from './NewCard';
import Cards from './Cards'

export default class CardContainer extends Component {
    render() {
        return(
            <div className="card-container">
                <Cards 
                    list={this.props.list}
                    index={this.props.index}
                    removeCard={this.props.removeCard}
                />
                <NewCard
                    list={this.props.list}
                    index={this.props.index}
                    onClick={this.props.onClick}
                    onChange={this.props.onChange}
                    addCard={this.props.addCard}
                    boardStyle={this.props.boardStyle}
                />
            </div>
        )
    }
}