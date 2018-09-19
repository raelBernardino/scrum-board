import React, { Component } from 'react';

export default class Cards extends Component {
    render(){
        const {list} = this.props;
        return(
            <div className="card-holder">
                {
                    list.cards.map((card,i) => 
                        <div 
                        className="card" 
                        key={`card_${i}`}>
                        {card}
                        </div>
                    )
                }
            </div>
        )
    }
}