import React from 'react';
import ReactDOM from 'react-dom';
// import './register.css';

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: null,
      email: '',
      phoneno: '',
      gender: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form >
         <h1>Hello {this.state.username} {this.state.password} {this.state.email} {this.state.phoneno}{this.state.gender}</h1>
      <p>Enter your name:</p>
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
      <p>Enter your Email:</p>
      <input
        type='email'
        name='email'
        placeholder='Enter Your Email.....'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Phone Number:</p>
      <input
        type='number'
        name='phoneno'
        placeholder='Enter Your PhoneNo.....'
        onChange={this.myChangeHandler}
      />
      
      <p>Enter your Gender:</p>
      <input
        type='radio'
        name='Male'
        onChange={this.myChangeHandler}
      />
      <span>Male</span> <br></br>
      <input
        type='radio'
        name='FeMale'
        onChange={this.myChangeHandler}
      />
      <span>FeMale</span><br></br>
      <input
        type='radio'
        name='Other'
        onChange={this.myChangeHandler}
      />
      <span>Other</span> <br></br>

      <p>Enter your Address:</p> 
      <label>
          <textarea value={this.state.value} onChange={this.myhandleChange}  placeholder='Enter Your Address.....'/>
          
        </label>    
      <p> </p>
      <button type="submit">Register</button>
      </form>
    );
  }
}

// ReactDOM.render(<register/>, document.getElementById('root'));
export default  register;

