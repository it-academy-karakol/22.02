import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';
import NewItem from './NewItem/NewItem';
import DoneItem from './DoneItem/DoneItem';

class App extends Component {
  state = {
    items: [
      "Todo 1",
      "Todo 2",
      "Todo 3"
    ],
    done: [
    ],
    newItem: ""
  }

  changeNewItem = event => this.setState({
    newItem: event.target.value
  });

  addNewItem = () => {
    const newItems = [...this.state.items];
    newItems.push(this.state.newItem);

    this.setState({
      items: newItems,
      newItem: ""
    });
  }

  deleteListItem = (index) => {
    const newItems = [...this.state.items];
    const newDone = [...this.state.done];
    
    const item = newItems.splice(index, 1);
    newDone.push(item);

    this.setState({
      items: newItems,
      done: newDone,
      newItem: "",
      editItem: ""
    });
  }

  render() {
    const listItems = this.state.items.map(
      (item, index) => <ListItem
        item={item}
        deleteHandler={() => this.deleteListItem(index)} />
    );
    const done = this.state.done.map(
      (item, index) => <DoneItem
        item={item} />
    );

    return (
      <div className="App">
        <h1>ToDo</h1>
        <ul>
          {listItems}
          <NewItem
            changeNewItem={this.changeNewItem}
            addNewItem={this.addNewItem}
            value={this.state.newItem} />
        </ul>
        <h1>Done</h1>
        <ul>
          {done}
        </ul>
      </div>
    );
  }
}

export default App;
