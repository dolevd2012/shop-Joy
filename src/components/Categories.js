import React from 'react'
import Button from 'react-bootstrap/Button';

function Categories() {
    return (

        <div className="container-fluid categories">
            <a href="/women"><Button>WOMEN</Button></a>
            <a href="/men"><Button>MEN</Button></a>
            <Button>KIDS</Button>
        </div>

    )
}
export default Categories