import React, { Component } from 'react'
import './BaiTapThayDoiKinh.css'
export default class BaiTapThayDoiKinh extends Component {
    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', url: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    state = {
        imgSrc: './img/v1.png',
        name: 'GUCCI G8850U',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
    }
    changeGlasse = (sp) => {
        this.setState({
            imgSrc: `${sp.url}`,
            name: `${sp.name}`,
            desc: `${sp.desc}`
        })
    }
    renderGlasse = () => {
        const arrJSX = this.arrProduct.map((sp, index) => {
            return <div className="col-2 glasse_item" key={index}>
                <img src={sp.url} className="img_item" onClick={() => {
                    { this.changeGlasse(sp)}
                }} />
            </div>
        });
        return arrJSX;
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 text-center img_content">
                            <img src='./img/model.jpg' className="img_model" />
                            <div className="img1">
                                <img src={this.state.imgSrc} className="img_glasse"></img>
                            </div>
                            <div className="img_detail">
                                <h3>{this.state.name}</h3>
                                <p>{this.state.desc} </p>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <img src='./img/model.jpg' className="img_model" />
                        </div>
                    </div>
                    <div>
                        <div className="row mt-5    ">
                            {this.renderGlasse()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
