import './Filter.css';
import { createBrandsCheckboxes, handleChange, handleSubmit, handleReset } from '../../scripts/FilterUtilities';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Filter(props){
    const [filter, setFilter] = useState(props.filter);
    const brands = Object.values(props.brands);

    return(
        <Form className='filter-form' onSubmit={event => handleSubmit(event,filter,props.setGlobalFilter)}>
            <Row>
                <Col>
                    <Form.Group className='form-grp'>
                        <h3> Type </h3>
                        <Form.Check
                            type='checkbox'
                            name='SSD'
                            onChange={event => handleChange('Type',event,setFilter)}
                            label='SSD'
                        />
                        <Form.Check
                            type='checkbox'
                            name='HDD'
                            onChange={event => handleChange('Type',event,setFilter)}
                            label='HDD'
                        />
                        <Form.Check
                            type='checkbox'
                            name='Other'
                            onChange={event => handleChange('Type',event,setFilter)}
                            label='Other'
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='form-grp'>
                        <h3> Usage </h3>
                        <Form.Check
                            type='checkbox'
                            name='External'
                            onChange={event => handleChange('Usage',event,setFilter)}
                            label='External'
                        />
                        <Form.Check
                            type='checkbox'
                            name='Internal'
                            onChange={event => handleChange('Usage',event,setFilter)}
                            label='Internal'
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='form-grp'>
                        <h3> Capacity </h3>
                        <Form.Select onChange={event => handleChange('Capacity',event,setFilter)}>
                            <option value={null}> Select Capacity </option>
                            <option value={'256GB'}> 256GB or More </option>
                            <option value={'512GB'}> 512GB or More </option>
                            <option value={'1TB'}> 1TB or More </option>
                            <option value={'2TB'}> 2TB or More </option>
                            <option value={'4TB'}> 4TB or More </option>
                            <option value={'8TB'}> 8TB or More </option>
                            <option value={'16TB'}> 16TB or More </option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='form-grp'>
                        <h3> Brand </h3>
                        {createBrandsCheckboxes(brands, handleChange, setFilter)}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='form-grp'>
                        <h3> Search for a Product </h3>
                        <Form.Control
                            name='Name'
                            placeholder='Search by Product Name'
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={4}>
                    <Form.Group className='button-grp'>
                        <Button
                            type='reset'
                            onClick={event => handleReset(setFilter)}
                        >
                            RESET
                        </Button>
                        <Button type='submit'> SUBMIT </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default Filter;