import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange}
        filters={props.filters}
      />
      <FilteredFruitList
        filter={props.selectedFilter}
        items={props.items} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: null,
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
