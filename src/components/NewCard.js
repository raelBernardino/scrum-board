import React, { Component } from 'react';

export default class NewCard extends Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
        this._onChange = this._onChange.bind(this);
    }
    
    _onClick(index) {
        this.props.onClick(index)
    }
    
    _onChange(e, index) {
        this.props.onChange(e, index)
    }

    _addCard(index) {
        this.props.addCard(index)
    }

    render(){
        const {list, index} = this.props;
        return(
            <div className="new-card">
            {
                list.isAddingCard ?
                <div className="new-card-container">
                    <textarea 
                    className="card-input"
                    type="text"
                    placeholder="Edit a title for this card..."
                    value={list.card}
                    onChange={(e) => {this._onChange(e, index)}}
                    />
                    <button 
                    className="card-btn"
                    style={this.props.boardStyle}
                    onClick={() => {this._addCard(index)}}>
                    Add Card
                    </button>
                    <button
                    className="exit-card-toggle"
                    onClick={() => this._onClick(index)}>
                    x
                    </button>
                </div>
                : 
                <button 
                className="add-card-toggle" 
                onClick={() => this._onClick(index)}>
                + Add Card
                </button>
            }
            </div>
        )
    }
}