import './ProductsHome.css';
import Filter from './Filter';
import FilterParams from './FilterParams';
import AvailableProducts from './AvailableProducts';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function ProductsHome(props) {
  const location = useLocation();
  const [globalFilter, setGlobalFilter] = useState({
    'Type': {
        'SSD': false,
        'HDD': false,
        'Other': false,
    },
    'Usage': {
        'External': false,
        'Internal': false,
    },
    'Capacity': null,
    'Brand': Object.fromEntries(Object.keys(props.brands).map(key => [props.brands[key], false])),
    'Name': '',
  });


  // Scroll to Section
  useEffect(() => {
    setTimeout(() => {
        let id = location.hash.slice(1).replaceAll('%20',' ');
        document.getElementById(id)?.scrollIntoView();
    }, 100);
  }, [location.hash]);


  return (
    <div className='container'>
      <h1 id='filter-title'> Filter Your Search </h1>
      <Filter
        filter={globalFilter}
        brands={props.brands}
        setGlobalFilter={setGlobalFilter}
      />
      <FilterParams
        filter={globalFilter}
      />
      <h1 id='prod-pg-title'> Available Products </h1>
      <AvailableProducts
        filter={globalFilter}
        data={props.data}
      />
    </div>
  );
}

export default ProductsHome;