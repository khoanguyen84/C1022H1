const handleLogin = () => alert('login');
const label_1 = "Tên đăng nhập: ";
const label_2 = "Mật khẩu: ";
const form = (
    <React.Fragment>
        <img style={{width: "60px"}} src="https://static.vecteezy.com/system/resources/previews/000/581/808/original/lock-icon-vector-illustration.jpg" alt="" />
        <form action="#" method="#">
            <h1 className="heading_1 h_1">Login</h1>
            <div>
                <label>{label_1}</label>
                <input type="email" />
            </div>
            <div>
                <label>{label_2}</label>
                <input type="password" />
            </div>
            <div>
                <button style={{
                    backgroundColor: "green",
                    padding: "10px",
                    color: "white",
                    border: "none",
                    borderRadius: "5px"
                }} onClick={handleLogin}>Login</button>
            </div>
        </form>
    </React.Fragment>
)


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(form);