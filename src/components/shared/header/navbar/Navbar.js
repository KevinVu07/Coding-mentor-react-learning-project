import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Search from "./search/Search";
import logo from '../../../../assets/images/logo-full-white.png';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartNumber: this.props.shoppingCartNumbers
        }
    }
    favorites = [
        {
            name: "Thời trang nam",
            id: 1
        },
        {
            name: "Áo đá bóng",
            id: 2
        },
        {
            name: "Mũ lưỡi trai",
            id: 3
        },
        {
            name: "Điện thoại",
            id: 4
        },
        {
            name: "Máy tính bảng",
            id: 5
        }
    ];
    
    updateCart = () => {
        const newCartNumber = this.state.cartNumber + 1;
        this.setState({
            cartNumber: newCartNumber
        })
    }
    
    searchHandler = (searchTerm) => {
        console.log(searchTerm);
        this.props.onSearchNav(searchTerm);
    }
    
    render() {
        return (
            <nav className="wrapper navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="162px"/>
                    </Link>
                    <Search onSearch={this.searchHandler.bind(this)}>
                        <div className="text-small mt-2 align-self-start">
                            {this.favorites.map(item => {
                                return <span className="me-3" key={item.name}>{item.name}</span>
                            })}
                        </div>
                    </Search>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item position-relative" onClick={this.updateCart.bind(this)}>
                            <FontAwesomeIcon icon="fa-cart-shopping"/>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
                            {this.state.cartNumber}
                        </span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;
