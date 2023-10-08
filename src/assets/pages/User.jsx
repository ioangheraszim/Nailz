import React from "react";
import "../SASS/User.scss"
function User() {

    const handleLogin = (e) =>  {
        e.preventDefault();
    }
  return (
    <>
      <section className="container">
        <h1 className="title">Login</h1>
        <div className="cont">
            <div className="form-wrapper">
                <form action="">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button onClick={handleLogin}className="btn" type="submit">Login</button>
                </form>
                <p>Don't have an account? <span class="highlight">Sign up</span> here.</p>
            </div>
        </div>
       
      </section>
    </>
  );
}

export default User;
