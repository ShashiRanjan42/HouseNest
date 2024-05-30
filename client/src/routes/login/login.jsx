import React, { useContext, useState } from 'react'
import "./login.scss";
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/AuthContext';
import Footer from "../../components/footer/footer"

export default function login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {updateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login",{
        email,
        password,
      });

      // console.log(res.data);
      // localStorage.setItem("user", JSON.stringify(res.data));
      updateUser(res.data);
      navigate("/");
    }
    catch(error) {
      setError(error.response.data.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="top"></div>
      <div className='down'>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Welcome back</h1>
                <input name="email" type="text" placeholder="email" />
                <input name="password" type="password" placeholder="Password" />
                <button disabled={isLoading}>Login</button>
                {error && <span>{error}</span>}
                <Link to="/register">{"Don't"} you have an account?  </Link>
            </form>
        </div>
        <div className="imgContainer">
            <img src="/sideBuilding3.jpg" alt="" />
        </div>
      </div>
      {/* <Footer /> */}
      
    </div>
  )
}
