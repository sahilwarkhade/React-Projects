import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContext";

const Interset = () => {
  const {
    userInformation: {
      interset: { interests, moreInformation },
    },
    setUserInformation,
  } = useContext(FormDataContext);

  const handleClickInterests = (e) => {
    if (!e.target.checked) {
      setUserInformation((prev) => ({
        ...prev,
        interset: {
          ...prev.interset,
          interests: prev?.interset?.interests.filter(
            (ele) => ele !== e.target.name.toLowerCase()
          ),
        },
      }));
    } else {
      setUserInformation((prev) => ({
        ...prev,
        interset: {
          ...prev.interset,
          interests: [
            ...prev?.interset?.interests,
            e.target.name.toLowerCase(),
          ],
        },
      }));
    }
  };
  return (
    <>
      <div>
        <label className="block text-lg font-bold text-black">
          Select Interests
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {["Technology", "Sports", "Music", "Travel", "Gaming", "Art"].map(
            (interest) => (
              <label
                key={interest}
                className="flex items-center space-x-2 bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-300 transition"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name={interest}
                  checked={interests.find(
                    (ele) => ele === interest.toLowerCase()
                  )}
                  onClick={(e) => handleClickInterests(e)}
                />
                <span>{interest}</span>
              </label>
            )
          )}
        </div>
      </div>
      <div className="mt-20">
        <label className="block text-lg font-bold text-black">
          Tell us about yourself
        </label>
        <textarea
          rows="4"
          placeholder="Write something..."
          value={moreInformation}
          onChange={(e) => {
            setUserInformation((prev) => ({
              ...prev,
              interset: {
                ...prev.interset,
                moreInformation: e.target.value,
              },
            }));
          }}
          className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring focus:ring-blue-200"
        ></textarea>
      </div>
    </>
  );
};

export default Interset;
