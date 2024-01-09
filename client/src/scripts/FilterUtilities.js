import Form from 'react-bootstrap/Form';

// Create Checkboxes of all brands
export function createBrandsCheckboxes(brands, handleChange, setFilter){
    let arr = [];
    for(let idx in brands){
        let brand = brands[idx];
        arr.push(
            <Form.Check
                type='checkbox'
                name={brand}
                onChange={event => handleChange('Brand',event,setFilter)}
                label={brand}
            />
        );
    }
    return arr;
}

// Handle change in filter form
export function handleChange(component, event, setFilter){
    const target = event.target;
    if(component === 'Capacity')
        setFilter(prevState => ({...prevState, 'Capacity': target.value==="Select Capacity"? null : target.value}));
    else
        setFilter(prevState => ({
            ...prevState,
            [component]:{
                ...prevState[[component]],
                [target.name]: target.checked
            }
        }));
}

// Handle filter submit
export function handleSubmit(event, filter, setGlobalFilter){
    event.preventDefault();
    let name = event.target.Name.value;
    setGlobalFilter({
        ...filter,
        'Name': name
    });
}

// Handle filter reset
export function handleReset(setFilter){
    setFilter(prevState => clearFilter(prevState));
}

// Empty the filter
export function clearFilter(filter){
    let clearedFilter = {};
    for(let key in filter){
        if(!filter[key])
            clearedFilter[key] = filter[key];
        else if(typeof filter[key] === 'object'){
            clearedFilter[key] = {};
            for(let i in filter[key])
                clearedFilter[key][i] = false;
        }
        else
            clearedFilter[key] = null;
    }
    return clearedFilter;
}

// Check if filter is empty (bool)
export function filterIsEmpty(filter){
    for(let key in filter){
        if(filter[key] !== null && typeof filter[key] === 'object'){
            for(let i in filter[key])
                if(filter[key][i])
                    return false;
        }
        else if(filter[key])
            return false;
    }
    return true;
}

// Return formatted html of filter parameters
export function displayFilterParams(filter){
    const displayItems = [];
    for (const [category, values] of Object.entries(filter)) {
        if (values && (typeof values === 'object' ? Object.values(values).some(value => value) : values)) {
            const filteredValues = typeof values === 'object' ? Object.keys(values).filter(key => values[key]) : [values];

            displayItems.push(
                <div key={category}>
                    <strong> {category}: </strong> {filteredValues.join(', ')}
                </div>
            );
        }
    }
    return displayItems;
}

// True if capacity1 >= capacity2; False otherwise
export function isGreater(c1, c2){
    c1 = c1 || '0GB'; c2 = c2 || '0GB';
    let [, num1, unit1] = c1.match(/(\d+)([GT]B)/);
    let [, num2, unit2] = c2.match(/(\d+)([GT]B)/);
    num1 = parseInt(num1); num2 = parseInt(num2);
    
    if(unit1 !== unit2)
        return unit1 > unit2;
    return num1 >= num2;
}

// True if s1 is substring of s2; False otherwise
export function substring(s1, s2){
    if(s2.toLowerCase().includes(s1.toLowerCase()))
        return true
    return false
}

// Filter data with the specified filter
export function filterData(data, Filter){
    let filter = JSON.parse(JSON.stringify(Filter));
    if(filterIsEmpty(filter))
        return data;

    // For induvidual features that have NO filter, modify filter to allow any value of that feature thru it
    for(let feature in filter){
        if(filter[feature] && filterIsEmpty(filter[feature])){
            for(let key in filter[feature])
                filter[feature][key] = true;
        }
    }

    
    // Get all Produdct IDs that pass the filter
    let filteredDataIDs = {};
    for(let brand in data){
        if(!filter['Brand'][brand]) continue;

        filteredDataIDs[brand] = new Set();
        for(let ID in data[brand]['ID']){
            if(
                isGreater(data[brand]['Capacity'][ID], filter['Capacity']) &&
                substring(filter['Name'], data[brand]['Name'][ID]) &&
                filter['Type'][data[brand]['Type'][ID]] &&
                filter['Usage'][data[brand]['Usage'][ID]]
            )
                filteredDataIDs[brand].add(ID);
        }
        if(filteredDataIDs[brand].size === 0)
            delete filteredDataIDs[brand];
    }
    
    // Get Product Data of all product IDs that pass the filter
    let filteredData = {};
    for(let brand in filteredDataIDs){
        filteredData[brand] = {};
        for(let feature in data[brand]){
            filteredData[brand][feature] = {};
            for(let ID in data[brand][feature]){
                if(filteredDataIDs[brand].has(ID))
                    filteredData[brand][feature][ID] = data[brand][feature][ID];
            }
        }
    }

    return filteredData;
}

// Check if object is empty (bool)
export function isObjectEmpty(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object'){
                if(!isObjectEmpty(obj[key]))
                    return false;
            }
            else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '')
                return false;
        }
    }
    return true;
}