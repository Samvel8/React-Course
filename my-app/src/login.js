const Login = (props) => {
    

    return (
        <div>   
            <h2>{props.title}</h2>
            <from>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <button>Login</button>
            </from>

            <ul>
                {props.list.map((item) => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Login;