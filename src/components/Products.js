import React, { Component } from 'react'
import Header from './Header'
//import productService from '../service/productsHeaderService'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class Products extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            webProducts: [],
            selectedProducts: [],
        }
    }


    componentDidMount() {
        axios.get('/products').then((res) => {
            this.setState({
                webProducts: res.data,
                count: res.data.length
            })
        })
        const json = sessionStorage.getItem("itemsSelectedToPurchase");
        const list = JSON.parse(json);
        if (list) {
            this.setState(() => ({ selectedProducts: list }));
        }
    }
    //https://www.npmjs.com/package/react-notifications
    addNotification(item) {
        let Templist = this.state.selectedProducts
        Templist.push(item)
        this.setState({ selectedProducts: Templist });
        sessionStorage.setItem('itemsSelectedToPurchase', JSON.stringify(this.state.selectedProducts));
        NotificationManager.success('Success message', 'Product Added to your basket');
    }
    render() {
        return (
            <div>
                <Header itemsToPayFor={this.state.selectedProducts} />
                <NotificationContainer />
                <div className="products">
                    <ul style={{ padding: '0px', marginLeft: '7vw' }}>

                        {this.state.webProducts.map((item) => {
                            let imgSrc = './images/' + item.productId + '.jpg'
                            return <li key={item.productId}>
                                <div style={{ width: '25vw', height: '30vw' }}>
                                    <div style={{ height: '80%', position: 'relative' }}>
                                        <img src={imgSrc} alt="source not found" style={{ objectFit: 'fill', width: '100%', height: '100%' }}></img>
                                        <a className="productBagIcon" onClick={() => this.addNotification(item)} type="button"> <i className="bi bi-handbag-fill"></i></a>
                                    </div>
                                    <div style={{ height: '20%', position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: '50%', textAlign: 'center', transform: 'translateY(-50%)', left: '0', right: '0', margin: 'auto', fontSize: '1vw' }}>
                                            <div style={{ height: '1.5vw' }}>
                                                <p hidden={!item.productIsNew} style={{ fontWeight: 'bold', marginBottom: '0' }}>NEW</p>
                                            </div>
                                            <p style={{ marginBottom: '0', padding: '0' }}>{item.productString}</p>
                                            <p style={{ marginTop: '0', padding: '0' }}>₪{item.productPrice}</p>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        })}

                    </ul>
                </div>
            </div>
        )
    };
}
