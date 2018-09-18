import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardToggle: false
        }
        this._cardToggle = this._cardToggle.bind(this);
    }
    
    _cardToggle(){
        this.setState({
            cardToggle: !this.state.cardToggle
        })
    }
    
    
    render(){
        var list = this.props.list;
        return(
            <div className="list-container" key={list}>
                <div className="card-container">
                    <h3 className="list-name">{list.title}</h3>
                    <button className="other-btn" onClick={this.props.removeList.bind(this, list)}>x</button>
                </div>
                { 
                    this.state.cardToggle ?
                        <div className="card-conditions">
                            <textarea type="text" className="card-input" placeholder="Enter a title for this card..." 
                            onChange={e => this.props.onChangeCard(e)}/>
                            <div className="card-button-conditions">
                                <button className="card-btn" onClick={this.props.addCard}>Add Card</button>
                                <button className="x-card" onClick={this._cardToggle}>x</button>
                            </div>
                        </div>
                    : 
                    <div className="list-card-container">
                        <div className="creaated-cards">  
                            {
                                
                            }
                            <button className="add-card-btn" onClick={this._cardToggle}>+ Add a card</button>  
                        </div>
                    </div>
                }
            </div>
        )
    }
}