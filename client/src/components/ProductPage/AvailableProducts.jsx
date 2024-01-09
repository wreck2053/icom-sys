import './AvailableProducts.css';
import create_cards from '../../scripts/CreateCards';
import { filterData } from '../../scripts/FilterUtilities';

function AvailableProducts(props) {    
    let filteredData = filterData(props.data, props.filter);
    
    if(Object.keys(filteredData).length === 0)
        return <h2 id='no-prod-hdr'> No Available Products Match Your Filter </h2>;

    return (
        <> 
            {create_cards(filteredData)}
        </>
    );
}

export default AvailableProducts;