import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import '../CSS/register.css';
import emailjs, { send } from 'emailjs-com';
import Footer from '../layout/footer';
import Modal1 from './modal';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
const [modalIsOpen, setmodalIsOpen] = useState(false);
const [RedirectToDashboard, setRedirectToDashboard] = useState(false);
const { name, email, password, password2 } = formData;

  // making a controlled component
  const onChange = (e) =>
    setFormData({
       ...formData, 
       [e.target.name]: e.target.value 
      });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      if(register({ name, email, password })){
        setmodalIsOpen(true)
        emailjs.sendForm('service_z5x24cu', 'template_4jidrme', e.target, 'user_RW0h4aDDnGKOvwFJ4ePmy')
        .then((result) => {
            setmodalIsOpen(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
      // setmodalIsOpen(true)
      // emailjs.sendForm('service_z5x24cu', 'template_4jidrme', e.target, 'user_RW0h4aDDnGKOvwFJ4ePmy')
      // .then((result) => {
      //     setmodalIsOpen(true);
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
    }
  };
  const addModalClose = () => {
    setmodalIsOpen(false);
    setRedirectToDashboard(true)
  }

  const sendLink = (
    <Modal1
        name={formData.name}
        show={modalIsOpen}
        onHide={addModalClose}
      />
  );
  const onsame = (
    <Redirect to='/register'></Redirect>
  );

 if(isAuthenticated && RedirectToDashboard){
    return <Redirect to='/dashboard'></Redirect> 
  }

  return (
    <div className="main12">
    <div className='register'>
      <div className="register-form" style={{border: '1px solid darkgrey'}}>
      {/* <Modal1
        name = {formData.name}
        show={modalIsOpen}
        onHide = {addModalClose}
      /> */}
        <h1>Create Account</h1>
        <form className="form" onSubmit={onSubmit}>
          <h5 className="text-size">Your name</h5>
          <input type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
          <h5 className="text-size">Email</h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
                </small>
          <h5 className="text-size">Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <h5 className="text-size">Confirm Password</h5>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
          <input type="submit" className="signIn" value="Register" style={{backgroundColor:'darkorange',color:'white',borderColor:'darkorange'}}/>
          <p>
            Already have an account? <Link style={{ fontSize: "1.1rem", fontWeight: "bold", textDecoration: "underline" }} to="/login">Sign in</Link>
          </p>
          <div>{isAuthenticated ? sendLink : onsame}</div>
        </form>
      </div>
    </div>
      {/* <Footer /> */}
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
