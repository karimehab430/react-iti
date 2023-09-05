import React, { useState } from "react";

const UserInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Information</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const UserInfoDisplay = ({ userInfo }) => {
  return (
    <div>
      <h2>User Information Display</h2>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
};

const InfoForm = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleFormSubmit = (data) => {
    setUserInfo(data);
  };

  return (
    <div>
      <UserInfoForm onSubmit={handleFormSubmit} />
      {userInfo && <UserInfoDisplay userInfo={userInfo} />}
    </div>
  );
};

export default InfoForm;
