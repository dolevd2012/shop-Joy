import React, { Component } from 'react'
import Header from './Header';
import Video from './Video';
import DiscountAd from './DiscountAd';

export default class Home extends Component {
    render() {
        const json = sessionStorage.getItem("itemsSelectedToPurchase");
        var list = JSON.parse(json);
        return (
            <div style={{ overflow: 'auto' }}>
                <Header itemsToPayFor={list} />
                <Video />
                <DiscountAd />
            </div>
        )
    }
}
