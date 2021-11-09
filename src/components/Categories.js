import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Categories() {
    return (

        <div className="container-fluid categories">
            <a href="/women"><Button>WOMEN</Button></a>
            <a href="/men"><Button>MEN</Button></a>
            <Button>KIDS</Button>
            <Link to="/women">women?</Link>
        </div>

    )
}
export default Categories
