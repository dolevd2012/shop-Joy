import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Categories() {
    return (

        <div className="container-fluid categories">
            <Link to="/women"><Button>WOMEN</Button></Link>
            <Link to="/men"><Button>MEN</Button></Link>
            <Button>KIDS</Button>
        </div>

    )
}
export default Categories
