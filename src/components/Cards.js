import React, { Component } from 'react';

export default class Cards extends Component {
    render(){
        const {list, index} = this.props;
        return(
            <div className="card-holder">
                {
                    list.cards.map((card, i) => 
                        <div 
                        className="card" 
                        key={`card_${i}`}> 
                            <p
                            className="card-title">
                            {card}
                            </p>
                            <button
                            className="delete-card-btn"
                            onClick={this.props.removeCard.bind(this, index, i)}>
                            x
                            </button>
                        </div>
                    )
                }
            </div>
        )
    }
}