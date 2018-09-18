import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this._onChangeCard = this._onChangeCard.bind(this);
        this._removeList = this._removeList.bind(this);
    }

    _removeList(removedList) {
        this.props.removeList(removedList)
    }

    //card functions
    _onChangeCard(e) {
        this.props.onChangeCard(e)
    }

    _addCard() {

    }

    _removeCard(){

    }


    render(){
        return(
            <div className="List">
                <div className="list-collection">
                    {
                    this.props.lists.map((list, i) => 
                            <Card
                                key={i}
                                list={list}
                                i={i}
                                
                                onChangeCard={this._onChangeCard}
                                removeList={this._removeList}
                                addCard={this.props.addCard}
                            />
                    )}
                    {
                            this.props.listBool ?
                                <div className="list-input">
                                    <input type="text" className="add-list-input" value={this.props.listReqs.title} placeholder="Edit list title..." onChange={e => this.props.onChangeList(e)} onKeyDown={e => this.props.addListNameEnter(e)}/>
                                    <div className="list-input-close">
                                        <button className="add-list-modal" onClick={this.props.addListName}>+ Add List</button>
                                        <button className="x-list" onClick={this.props.listToggle}>x</button>
                                    </div>
                                </div>
                            : <button onClick={this.props.listToggle} className="add-list-btn">{this.props.addTag}</button>
                            
                        }
                </div>
            </div>
        )
    }
}