import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Search from "./search/Search";
import logo from '../../../../assets/images/logo-full-white.png';

const NavBar = (props) => {
    let [cartNumber, setCartNumber] = useState(props.shoppingCartNumbers);
    const favorites = [
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
    
    const updateCart = () => {
        const newCartNumber = cartNumber + 1;
        setCartNumber(newCartNumber);
        console.log(cartNumber);
    }
    
    const searchHandler = (searchTerm) => {
        console.log(searchTerm);
        props.onSearchNav(searchTerm);
    }
    
    return (
        <nav className="wrapper navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="162px"/>
                </a>
                <Search onSearch={searchHandler}>
                    <div className="text-small mt-2 align-self-start">
                        {favorites.map(item => {
                            return <span className="me-3" key={item.name}>{item.name}</span>
                        })}
                    </div>
                </Search>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item position-relative" onClick={updateCart}>
                        <FontAwesomeIcon icon="fa-cart-shopping"/>
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-primary">
                            {cartNumber}
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
