import React, { PropTypes as T } from 'react';
import classNames from 'classnames';

import styles from './styles/button.scss';

export default class Button extends React.Component {

    render() {

        let classes = classNames(
            styles.btn,
            {
                [styles.block]: this.props.block
            }
        );

        return (
            <button className={classes} onClick={this.props.onClick}>
                { this.props.children }
            </button>
        )
    }
}

Button.propTypes = {
    block: T.bool,
    onClick: T.func
};
