const ChangePasswordForm = () => {
    return (
        <>
            <div className="p-4 bg-white">
                <h5>Đổi mật khẩu</h5>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
                <div className="divider mb-3"/>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Mật khẩu hiện tại</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Mật khẩu mới</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Xác nhận mật khẩu</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="mb-3 row justify-content-center">
                    <button className="btn bg-primary w-25 text-white">Xác nhận</button>
                </div>
            </div>
        </>
    );
};

export default ChangePasswordForm;
