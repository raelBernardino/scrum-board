import React, { Component } from "react";
import RenameBoard from './RenameBoard';
import ListContainer from './ListContainer';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this._settingsToggle = this._settingsToggle.bind(this);
    this._onChangeRename = this._onChangeRename.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._listToggle = this._listToggle.bind(this);
    this._onChangeList = this._onChangeList.bind(this);
    this._removeList = this._removeList.bind(this);
    this._addNewList = this._addNewList.bind(this);
    this._onAddCardToggle = this._onAddCardToggle.bind(this);
    this._onChangeCard = this._onChangeCard.bind(this);
    this._addCard = this._addCard.bind(this);
    this._removeCard = this._removeCard.bind(this);
    this.state = {
      boardTitle: 'Untitled',
      isChangingBoardTitle: false,
      isEditingBoard: false,
      boardStyle: {
        backgroundColor: '#73a9d6'
      },
      boardColors: [],
      lists: [
        {
          title:'Stock List',
          card: '',
          cards: [],
          isAddingCard: false
        }
      ],
      listTitle: '',
      isCreatingList: false,
    }; 
  }
  //board
  _onChangeRename(e) {
    this.setState({
      boardTitle: e.target.value
    })
  }
  
  _onClick() {
    this.setState({
      isChangingBoardTitle: !this.state.isChangingBoardTitle
    })
  }
  
  _onKeyDown(e) {
    if(e.keyCode === 13 || e.keyCode === 27) {
      this.setState({
        isChangingBoardTitle: !this.state.isChangingBoardTitle
      })
    }
  } 

  _settingsToggle(){
    this.setState({
      isEditingBoard: !this.state.isEditingBoard
    })
  }

  //newlist
  _listToggle() {
    this.setState({
      isCreatingList: !this.state.isCreatingList
    })
  }
  
  _addNewList() {
    this.setState({
      lists: this.state.lists.concat({title:this.state.listTitle, card:'', cards:[], isAddingCard: false})
    })
    this._listToggle()
    console.log(this.state.lists)
  }
  
  _removeList(index){
    this.setState({
      lists: this.state.lists.filter((x, remainingLists) => {return remainingLists !== index})
    })
  }

  _onChangeList(e) {
    this.setState({
      listTitle: e.target.value
    })
  }
  //card
  _onAddCardToggle(index) {
    const updatedList = [...this.state.lists]
    updatedList[index].isAddingCard = !updatedList[index].isAddingCard
    this.setState({
      lists: updatedList
    })
  }

  _onChangeCard(e, index){
    const updatedList = [...this.state.lists]
    updatedList[index].card = e.target.value
    this.setState({
      lists: updatedList
    })
  }

  _addCard(index) {
    const updatedList = [...this.state.lists]
    updatedList[index].cards.push(updatedList[index].card)
    this.setState({
      lists: updatedList
    })
    updatedList[index].card = ''
  }
  
  _removeCard(index, i) {
    const updatedList = [...this.state.lists]
    updatedList[index].cards = updatedList[index].cards.filter((c, cardIndex) => {return cardIndex !== i})
    this.setState({
      lists: updatedList
    })
  }

  
  render() {
    const addListTag = this.state.lists.length
    ? '+ Add another list'
    : '+ Add a list'
    return (
      <div className="main" style={this.state.boardStyle}> 
      <RenameBoard 
      boardTitle={this.state.boardTitle}
      isChangingBoardTitle={this.state.isChangingBoardTitle}
      onChangeRename={this._onChangeRename}
      onRename={this._onClick}
      onKeyDownRename={this._onKeyDown}
      isEditingBoard={this.state.isEditingBoard}
      settingsToggle={this._settingsToggle}
      />
      <ListContainer 
      lists={this.state.lists}
      isCreatingList={this.state.isCreatingList}
      addListTag={addListTag}
      listToggle={this._listToggle}
      onChangeList={this._onChangeList}
      addNewList={this._addNewList}
      onAddCardToggle={this._onAddCardToggle}
      onChangeCard={this._onChangeCard}
      addCard={this._addCard}
      removeList={this._removeList}
      removeCard={this._removeCard}
      />
      </div>
    );
  }
}
