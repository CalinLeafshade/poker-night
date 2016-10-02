import React from 'react';

import styles from './styles/gametable.scss';

export default class Pot extends React.Component {
    render() {
        return (
            <span>{this.props.value}</span>
        )
    }
}
