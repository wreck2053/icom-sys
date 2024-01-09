import './FilterParams.css';
import { filterIsEmpty, displayFilterParams } from '../../scripts/FilterUtilities';

function FilterParams(props) {
    if (filterIsEmpty(props.filter))
        return <> </>;
        
    return (
        <div className='fp-container'>
            <h2> Displaying Filtered Results </h2>
            <h3> Filter Parameters: </h3>
            <div> {displayFilterParams(props.filter)} </div>
        </div>
    );
}

export default FilterParams;