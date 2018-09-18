import React, { Component } from 'react';
import List from './List';
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Main Board states
            addTag: '+ Add a list',
            board:'Untitled',
            boardBool: false,
            //List states
            listBool: false,
            lists: [],
            listReqs: {
                title: '',
                cardName: '',
                cards: []
            }
            //Card states

        }
        this._titleToggle = this._titleToggle.bind(this);
        this._titleToggleKey = this._titleToggleKey.bind(this);
        this._onChangeTitle = this._onChangeTitle.bind(this);
        this._listToggle = this._listToggle.bind(this);
        this._addList = this._addList.bind(this);
        this._removeList = this._removeList.bind(this);
        this._onChangeList = this._onChangeList.bind(this);
        this._addListNameEnter = this._addListNameEnter.bind(this);
        this._addListName = this._addListName.bind(this);
        this._onChangeCard = this._onChangeCard.bind(this);
        this._addCard = this._addCard.bind(this);
    }

    //title methods
    _titleToggleKey(e){
        if(e.keyCode === 13) {
            this.setState({
                boardBool: !this.state.boardBool
            })
        }
    }

    _titleToggle(){
        this.setState({
            boardBool: !this.state.boardBool
        })
    }
    
    _onChangeTitle(e){
        this.setState({
            board: e.target.value
        })
    }

    //list methods
    _listToggle(){
        this.setState({
            listBool: !this.state.listBool
        })
    }

    _addList(list){
        this.setState({
            lists: this.state.lists.concat(list)
        })
        if(this.state.lists.length > -1) {
            this.setState({
                addTag: '+ Add another list'
            })
        }
    }

    _addListName(){
        this._addList(this.state.listReqs)
        this.setState({
            ...this.state.listReqs,
                listReqs: {
                    title: '',
                }
        })
    }
    
    _addListNameEnter(e) {
        if(e.keyCode === 13){
            this._addList(this.state.listReqs)
            this.setState({
                ...this.state.listReqs,
                listReqs: {
                    title: ''
                }
            })
        }
    }
    
    _removeList(removedList){
        this.setState({
            lists: this.state.lists.filter((list) => {
                return list !== removedList
            })
        })
    }

    _onChangeList(e){
        this.setState({
            ...this.state.listReqs,
                listReqs: {
                    title: e.target.value
                }
        })
    }

    //card methods
    _onChangeCard(e){
        this.setState({
            ...this.state.listReqs,
                listReqs: {
                    cardName: e.target.value
                }
        })
    }

    _addCard(){
        this.setState({
            ...this.state.listReqs,
            listReqs: {
                cards: [].concat(this.state.listReqs.cardName)
            }
        })
        console.log(this.state.listReqs.cards)
    }

    render(){
        return(
            <div className="Main">
                    {
                        this.state.boardBool ?
                            <input type="text" className="title-input" onChange={e => this._onChangeTitle(e)} placeholder={this.state.board} onKeyDown={e => this._titleToggleKey(e)}/>
                        : <button className="title-btn" onClick={this._titleToggle}>{this.state.board}</button>
                    }
                    <div className="flex-list">
                        <List
                            addTag={this.state.addTag}
                            lists={this.state.lists}
                            listBool={this.state.listBool}
                            listReqs={this.state.listReqs}

                            onChangeList={this._onChangeList}
                            addListNameEnter={this._addListNameEnter}
                            addListName={this._addListName}
                            listToggle={this._listToggle}
                            addList={this._addList}
                            removeList={this._removeList}
                            onChangeCard={this._onChangeCard}
                            addCard={this._addCard}
                        />
                    </div>
                </div>
        )
    }
}