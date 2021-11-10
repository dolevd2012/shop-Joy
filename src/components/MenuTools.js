import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class MenuTools extends Component {
    render() {
        var total = 0
        console.log(this.props.itemsToPayFor)
        var condition
        if (this.props.itemsToPayFor != null) {
            condition = this.props.itemsToPayFor.length > 0 ? true : false
        }
        else {
            condition = 0
        }

        return (
            <div>
                <div className="container-fluid row" style={{ padding: '0px', margin: '0px', position: 'relative' }}>
                    <div className="HomeMenu col-4  my-3" style={{ textAlign: 'right', padding: '0.5vw' }}>
                        <ul>
                            <li>
                                <button data-toggle="modal" data-target="#topModal"
                                    style={{ width: '4vw', height: '2vw', borderRadius: '30%' }}>
                                    <i className="bi bi-list" style={{ fontSize: '1.5vw' }}></i>
                                </button>
                            </li>
                            <li>
                                    <button data-toggle="modal" data-target="#rightModal"
                                        style={{ width: '2vw', height: '2vw', borderRadius: '50%', padding: '1vw' }} >
                                        <i className="bi bi-handbag-fill" style={{ fontSize: '1.5vw' }}></i>
                                        {condition
                                            ? <p className="ItemsInBag" id="itemInBag">{this.props.itemsToPayFor.length}</p>
                                            : <p></p>
                                        }
                                    </button >
                            </li>

                        </ul>
                    </div>
                    <div className="col-4 my-3">
                        <h5 style={{ textAlign: 'center', fontSize: '1.5vw', margin: 'auto', padding: '1vw', fontFamily: 'cursive' }}>Shop&Joy</h5>
                    </div>
                    <div className="col-4">

                    </div>

                </div>
                <section >
                    <div className="container" >
                        <div className="modal" id="rightModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" data-backdrop="false" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
                            <div className="modal-dialog-right" id="slideRight" role="document" >
                                <div className="modal-content-right" style={{ height: '100%' }} >
                                    <div className="modal-header" style={{ height: '15%' }}>
                                        <div className="col-10">
                                            <h5 className="modal-title" id="exampleModalLongTitle" style={{ marginLeft: '4vw' }}>המוצרים שלי</h5>
                                        </div>
                                        <div className="col-2" style={{ textAlign: 'center' }}>
                                            <button type="button" data-dismiss="modal" aria-label="Close" >X</button>
                                            <Link to="/women"><Button>WOMEN</Button></Link>
                                        </div>
                                    </div>
                                    {condition
                                        ? <div className="modal-body" style={{ textAlign: 'left', fontSize: '1vw', fontWeight: 'bold', height: '75%', overflowY: 'scroll', padding: '0' }}>
                                            <ul style={{ margin: '1vw', padding: '0' }}>
                                                {this.props.itemsToPayFor.map((item, index) => {
                                                    total = total + item.productPrice
                                                    let imgSrc = './images/' + item.productId + '.jpg'
                                                    return (
                                                        <li key={index}>
                                                            <div className="row" style={{ marginBottom: '1vw', marginTop: '1vw' }}>
                                                                <div className="col-6" style={{ width: '13vw', height: '15vw', padding: '0' }}>
                                                                    <img src={imgSrc} alt="Mising" style={{ width: '100%', height: '100%' }} />
                                                                </div>
                                                                <div className="col-6" style={{ textAlign: 'right' }}>
                                                                    <p style={{ textAlign: 'center' }}>{item.productString}</p>
                                                                    <p> מחיר ₪{item.productPrice}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        : <div className="modal-body" style={{ textAlign: 'center', fontSize: '1vw', fontWeight: 'bold', height: '75%' }}>אין מוצרים בסל</div>
                                    }
                                    <div className="container-fluid px-0" style={{ height: '10%' }}>
                                        <div style={{ backgroundColor: 'grey', height: '1%' }}></div>
                                        <div className="row" style={{ height: '39%' }}>
                                            <div className="col-4" style={{ textAlign: 'center' }}>
                                                <h2>₪{total}</h2>
                                            </div>
                                            <div className="col-4"></div>
                                            <div className="col-4" style={{ textAlign: 'center' }}>
                                                <h2>סה"כ</h2>
                                            </div>
                                        </div>
                                        {condition
                                            ? <div style={{ textAlign: 'center', height: '60%' }}>
                                                <button className="PurchaseButton"> מעבר לתשלום </button>
                                            </div>
                                            : <div style={{ height: '60%' }}></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid" >
                        <div className="modal" id="topModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" data-backdrop="false" aria-hidden="true" style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
                            <div className="modal-dialog-top" id="slideTop" role="document" >
                                <div className="modal-content-top" >
                                    <div className="row" style={{ height: '14vw' }}>
                                        <div className="col-11 topCategories" style={{ textAlign: 'center', margin: 'auto' }} >
                                            <ul>
                                                <li><Link to="/women"><Button>WOMEN</Button></Link></li>
                                                <li><Link to="/men"><Button>MEN</Button></Link></li>
                                                <li><Button>KIDS</Button></li>
                                                <li><Link to="/"><Button>HOME</Button></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-1" style={{ textAlign: 'center', margin: 'auto' }}>
                                            <button className="topMenuButtom" type="button" data-dismiss="modal" aria-label="Close">X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section >
            </div >
        )
    };
}
