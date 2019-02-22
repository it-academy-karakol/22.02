import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem/ListItem';
import NewItem from './NewItem/NewItem';

class App extends Component {
  state = {
    items: [
      "Todo 1",
      "Todo 2",
      "Todo 3"
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
    
    newItems.splice(index, 1);

    this.setState({
      items: newItems,
      newItem: ""
    });
  }

  render() {
    const listItems = this.state.items.map(
      (item, index) => <ListItem
        item={item}
        deleteHandler={() => this.deleteListItem(index)} />
    );

    return (
      <div className="App">
        <ul>
          {listItems}
          <NewItem
            changeNewItem={this.changeNewItem}
            addNewItem={this.addNewItem}
            value={this.state.newItem} />
        </ul>
      </div>
    );
  }
}

export default App;
