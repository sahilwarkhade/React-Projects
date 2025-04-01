import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";

const Setting = () => {
  const {
    userInformation: {
      setting: { darkMode, language },
    },
    setUserInformation,
  } = useContext(FormDataContext);

  const handleChangeState = (field, value) => {
    setUserInformation((prev) => ({
      ...prev,
      setting: { ...prev.setting, [field]: value },
    }));
  };
  return (
    <div className="flex">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-black mb-6">Settings</h2>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600 font-medium">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={(e) => handleChangeState("darkMode", e.target.checked)}
            />
            <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-focus:ring peer-focus:ring-blue-300 transition"></div>
          </label>
        </div>

        {/* Language Selection */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">
            Language
          </label>
          <select
            value={language}
            onChange={(e) => handleChangeState("language", e.target.value)}
            className="w-full p-2 border rounded-lg bg-gray-50"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Sanskrit</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Setting;
