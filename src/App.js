import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: []
    };
  }

  updateInput(key, value) {
    // update the state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    // create item with unique id
    const newItem = {
      id: Date.now(),
      value: this.state.newItem.slice()
    };

    // copy of the cutten list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update the state with the new lsit and reset the newItem input
    this.setState({
      newItem: '',
      list
    });
  }

  deleteItem(id) {
    // copy the lsit of items
    const list = [...this.state.list];

    // going to user the filter method to filter through the list and return a new list without the one we want to delete
    const updatedList = list.filter((item) => item.id !== id);

    // update the state with the new updatedList
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Add new item...</h3>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add new item</button>

          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
