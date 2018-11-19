import React, {Component} from 'react'
import './header.css'


class Header extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            desc: '',
            center: '',
            centerList: [],
            homePage: false
        };

    }

    render() {
        return (
            <div className={'head-title'}>headersdfasdfa</div>
        )
    }
}

export default Header