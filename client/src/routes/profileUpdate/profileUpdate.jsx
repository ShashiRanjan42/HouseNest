import { useContext, useState } from "react";
import "./profileUpdate.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadwidget/UploadWidget";

export default function profileUpdate() {

  const {currentUser, updateUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const {username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`,{
        username, 
        email, 
        password, 
        avatar:avatar[0]
      });
      updateUser(res.data);
      navigate("/profile");
    }
    catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div className='top' style={{background:"linear-gradient(to bottom, #3559e0 0%, #7e87ff 100%", borderEndStartRadius:"35px", height: "20px",
            margin: "0px 20px"
        }}></div>
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget 
          uwConfig={{
            cloudName: "dzw7gejgs",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
    </div>
  );
}
