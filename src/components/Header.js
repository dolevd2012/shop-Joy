import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import salesHeaderService from '../service/salesHeaderService'
import axios from 'axios';
import MenuTools from './MenuTools'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            sale: [],
        }
    }
    myCount = 1
    componentDidMount() {
        axios.get('https://myprivateshop.herokuapp.com/sales').then((res) => {
            this.setState({
                sale: res.data,
                count: res.data.length
            })
        })
    }

    textAnimationRight() {
        document.getElementById('title').animate([
            // keyframes
            { transform: 'translateX(150px)' },
            { transform: 'translateX(0px)' }
        ], {
            // timing options
            duration: 500,
        });
    }
    textAnimationLeft() {
        document.getElementById('title').animate([
            // keyframes
            { transform: 'translateX(-150px)' },
            { transform: 'translateX(0px)' }
        ], {
            // timing options
            duration: 500,
        });
    }

    handlePlusClick = () => {
        document.getElementById('title').innerHTML = this.state.sale[this.myCount].saleString
        this.textAnimationRight()
        this.myCount += 1
        if (this.myCount === this.state.count) {
            this.myCount = 0
        }
    }
    handleMinusClick = () => {
        document.getElementById('title').innerHTML = this.state.sale[this.myCount].saleString
        this.textAnimationLeft()
        this.myCount -= 1
        if (this.myCount === -1) {
            this.myCount = this.state.count - 1
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="p-3 row" style={{ textAlign: 'center', backgroundColor: 'black', maxHeight: '7vw', minHeight: '5vw' }}>
                    <div className="col-2" />
                    <div className="col-2 TopButton" style={{ textAlign: 'right' }}>
                        <button onClick={this.handleMinusClick}>{'<'}</button>
                    </div>
                    <div className="col-4">
                        {this.state.sale.filter(item => {
                            return item.saleId === 1
                        }).map((item) => {
                            return <p key={item.saleId} id="title" style={{ color: 'white', fontSize: '1.3vw' }}>{item.saleString}</p>
                        }
                        )}
                    </div>
                    <div className="col-4 TopButton" style={{ textAlign: 'left' }}>
                        <button onClick={this.handlePlusClick}>{'>'}</button>
                    </div>

                </div>
                <MenuTools itemsToPayFor={this.props.itemsToPayFor} />

            </div>
        )
    }
}
