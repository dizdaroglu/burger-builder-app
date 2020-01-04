import React, { Component } from 'react';

import './Modal.css';
import Au from '../../../hoc/Au/Au';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    componentWillUpdate() {
        console.log('[modal] updating')
    }
    render() {
        return (
            <Au>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'

                    }}>
                    {this.props.children}
                </div>
            </Au>
        )
    }

}

export default Modal;