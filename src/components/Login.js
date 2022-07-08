export default function Login(props) {
    return (
        <div className="App">
            <h1>Login to continue learning!</h1>
            <form className="form" onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                placeholder="Username"
                className="form--input"
                name="username"
                onChange={props.handleChange}
                value={props.username}
            />
            {props.showErrorUser}
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={props.handleChange}
                value={props.password}
            />
            {props.showErrorPwd}
            <button 
                className="form--submit"
            >
                Log In
            </button>
            </form>
        </div>
    )
}