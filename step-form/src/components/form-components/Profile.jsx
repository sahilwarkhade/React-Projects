import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";

const Profile = () => {
  const {
    userInformation: {
      profile: { name, email, password, confirmPassword, bio },
    },
    setUserInformation,
  } = useContext(FormDataContext);

  const handleChangeState = (field, value) => {
    setUserInformation((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };
  return (
    <div className="flex flex-col w-full max-w-lg rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-black">
        Profile Information
      </h2>

      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700 font-medium">
          Name
        </label>
        <input
          id="username"
          type="text"
          onChange={(e) => handleChangeState("name", e.target.value)}
          placeholder="Enter Your Name"
          value={name}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-600 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          onChange={(e) => handleChangeState("email", e.target.value)}
          value={email}
          placeholder="Enter Your Email"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-600 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          onChange={(e) => handleChangeState("password", e.target.value)}
          value={password}
          placeholder="Enter Your Password"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="text-gray-600 font-medium">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          onChange={(e) => handleChangeState("confirmPassword", e.target.value)}
          value={confirmPassword}
          placeholder="Confirm Your Password"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bio */}
      <div className="flex flex-col">
        <label htmlFor="bio" className="text-gray-600 font-medium">
          Bio
        </label>
        <textarea
          id="bio"
          onChange={(e) => handleChangeState("bio", e.target.value)}
          value={bio}
          placeholder="Enter Your Bio"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
        />
      </div>
    </div>
  );
};

export default Profile;
