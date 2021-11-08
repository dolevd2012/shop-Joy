import React, { Component } from 'react'

export default class DiscountAd extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid px-0 mt-3 discountAd">
                    <img src="/images/discount.jpg" alt="discount" />
                </div>
                <div className="container-fluid px-0 mt-4 listImages">
                    <ul>
                        <li><img src="/images/man.jpg" alt="Men" /></li>
                        <li><img src="/images/woman.jpg" alt="Women" /></li>
                    </ul>
                </div>
                <div className="kidsPicture">
                    <img src="/images/kids.jpg" alt="Kids" />
                </div>
            </div>
        )
    }
}