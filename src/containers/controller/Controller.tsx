import React, {Component} from 'react';
import css from './controller.module.scss';

class Controller extends Component {
    render() {
        return (
            <div className={css.controller}>
                Текущий ход: крестик
            </div>
        );
    }
}

export default Controller;