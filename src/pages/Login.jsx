import React from 'react'
import './Tour.css';
import './login_page.css';
import {FcGoogle} from 'react-icons/fc';
import {LiaFacebookF} from 'react-icons/lia';
import { Link } from 'react-router-dom';
 function Login() {

  return (
    <section className="login_section">
      <div className="login_manager">
        <form className="LOGINF">
          <div className="loggin">
              <div >
              <div>
                <b>LOGIN</b>
              </div>
              <div>
                <p className='Signl'>
                  Does Not Have An Account Yet &nbsp;
                  <a href="Signup_page" className="alog">
                    Sign Up
                  </a>
                </p>
              </div>
              <div className='solve2'>
                <p>
                  <b>Email Address</b>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="you@example.com"
                    className="text_login"
                  />
                </p>
              </div>
            </div>  
            <div>
              <div className="password1">
                <div>
                  <b>Password</b>
                </div>
                <div>
                  <a href="/" className="alog">
                    Forget Password
                  </a>
                </div>
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="enter 6 characters or more"
                  className="login_butto0"
                />
              </div>
            </div> 

            <div>
              <input
                type="checkbox"
                value="Remember Me"
                name="Remember Me"
                className="contact_re"
              />
              Remember Me
            </div>

            <div className="login_butto1">
              <button type="submit" className="login_button">
                
                <Link to="/Dashboard/Users" >
                  LOGIN
                </Link>
              </button>
            </div>
            <div className="login_text">
              <div>
                <button id="google-login-button" className="login_butto2">
                  <FcGoogle />
                  Google
                </button>
              </div>

              <div>
                <button id="facebook" className="login_buttoa1">
                  <LiaFacebookF />
                  facebook
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="loginimage">
          <img src="login-user.jpg" className="loginimage" />
        </div>
      </div>
    </section>
  );
} export default Login
