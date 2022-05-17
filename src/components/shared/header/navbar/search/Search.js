import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.scss";
import { useRef } from "react";

const Search = (props) => {
    const searchInputRef = useRef();

    const search = (event) => {
        event.preventDefault();
        console.log(searchInputRef);
        props.onSearch(searchInputRef.current.value);
        searchInputRef.current.value = '';
    };

    return (
        <form className="d-flex flex-column my-0 mx-5 flex-1" onSubmit={search}>
            <div className="position-relative d-flex align-items-center">
                <input className="form-control me-2 p-2" type="text"
                       placeholder="Săn voucher hoàn 1 triệu xu" ref={searchInputRef}/>
                <button className="btn bg-primary search-btn" type="submit">
                    <FontAwesomeIcon icon="fa-magnifying-glass"/>
                </button>
            </div>
            {props.children}
        </form>
    );
};

export default Search;
