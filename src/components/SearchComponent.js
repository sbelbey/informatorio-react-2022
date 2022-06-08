import React from "react";
import {Form, FormControl} from 'react-bootstrap';
import '../styles/searchCSS.css';

export default function SearchComponent(){
    return(
    <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search for Courses"
                className="barra-busqueda"
                aria-label="Search"
            />
    </Form>
    )
};