import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
    render() {
        let indonesia = require('moment/locale/id');
        Moment.updateLocale('id', indonesia);
        return (
            <div>
                <h1>Todo Application</h1>
                <p>{ Moment().format('dddd') } { Moment().format('LLL') }</p>
            </div>
        );
    }
}

export default Header;
