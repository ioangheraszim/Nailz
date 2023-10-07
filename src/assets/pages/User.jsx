import React from "react";
import "../SASS/User.scss"
function User() {
  return (
    <>
      <section className="container cont">
        <h1 className="title">Login</h1>
        <div className="form-wrapper">
            <form action="">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button className="btn" type="submit">Login</button>
            </form>
            <p>Don't have an account? <span class="highlight">Sign up</span> here.</p>
        </div>
       
      </section>
    </>
  );
}

export default User;
