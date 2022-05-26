const Demo = (props) => {
    let content = (<p>Không tìm thấy kết quả nào</p>);
    if (props.searchResults && props.searchResults.length) {
        content = (
            <div>
                <p>
                    <span className="me-2">Kết quả tìm kiếm cho từ khóa:</span>
                    <span className="text-primary">{props.searchTerm}</span>
                </p>
                {props.searchResults.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    
    return (
        <div className="wrapper">
            {content}
        </div>
    );
};

export default Demo;
