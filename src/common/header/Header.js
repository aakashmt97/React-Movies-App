import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
    }

    openModalhandler = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalhandler}> Login </Button>
                    </div>
                    <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModalHandler} contentLabel="Login">

                    </Modal>
                </header>
            </div>
        );
    }
}

export default Header;