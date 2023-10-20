import React from 'react'
import './Register.css';

function Register() {
  return (

    <div className='my'>
    <div className="content_register">
      <div class="container_register">
        <form>
          <h2>Registration Form</h2>
          <div class="form-group">
            <p>
              <label>Username:</label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                required
                className="R"
              />
            </p>
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="R"
            />
          </div>
          <div class="form-group">
            <p>
              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                required
                className="R"
              />
            </p>
          </div>
          <div class="form-group">
            <p>
              <label for="confirm_password">Confirm Password:</label>
              <br />
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                required
                className="R"
              />
            </p>
          </div>
        <div className='we'>  <button type="submit">Sign up</button></div>
        </form>

      
      </div>  <div registerimage2>
          <img src="login-user.jpg" className="registerimage" />
        </div>
    </div>
    </div>
  );
} export default  Register
