
import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.password}</h1>
      <p>Enter your UserName:</p>
      <input
        type='text'
        name='username'
        placeholder='Enter Your UserName.....'
        onChange={this.myChangeHandler}
      />
      <p>Enter your password:</p>
      <input
        type='password'
        name='password'
        placeholder='Enter Your Password.....'
        onChange={this.myChangeHandler}
      />
       <p> </p>
      <button type="submit">Login</button>
      </form>
    );
  }
}

ReactDOM.render(<Login/>, document.getElementById('root'));

export default Login;
