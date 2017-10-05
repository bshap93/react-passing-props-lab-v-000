import React from 'react';

import FruitBasket from './FruitBasket';


class App extends React.Component {
  constructor() {

    super()

    this.state = {
      fruit: [],
      filters: [],
      items: [],
      currentFilter: null
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }


  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));

    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  componentWillMount() {
    this.fetchFilters()
  }

  render() {
    return (
      <FruitBasket
        selectedFilter={this.state.currentFilter}
        handleFilterChange={this.handleFilterChange}
        filters={this.state.filters}
        items={this.state.items}
      />
    );
  }

}

export default App;
