import { useContext, useState } from "react";
import formConfig from "./form.config";
import { FormDataContext } from "./context/FormDataContext";

const App = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const { userInformation, setUserInformation } = useContext(FormDataContext);
  // const [activeComponent, setActiveComponent] = useState(
  //   formConfig[currIndex].component
  // );

  // useEffect(() => {
  //   setActiveComponent(formConfig[currIndex].component);
  // }, [currIndex]);

  const ActiveComponent = formConfig[currIndex].component;

  const handleSubmit = () => {
    console.log("User Information : ", userInformation);
    setUserInformation({
      profile: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        bio: "",
      },
      interset: {
        interests: [],
        moreInformation: "",
      },
      setting: {
        darkMode: false,
        language: "english",
      },
    });
  };

  return (
    <>
      <div className="m-10 max-md:m-4">
        <div>
          {formConfig.map((element, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrIndex(index);
                }}
                className="p-4 border-2 text-lg font-medium rounded-lg mr-2.5 cursor-pointer max-md:p-1 max-md:mr-4"
              >
                {element.name}
              </button>
            );
          })}
        </div>
        <div className="border-2 mt-4.5 h-[600px] md:px-20 md:py-10 max-md:px-4 max-md:py-3.5">
          {<ActiveComponent />}
        </div>
        <div className="flex flex-row-reverse gap-10 justify-between mt-5">
          {currIndex === 2 ? (
            <button
              className="px-5 py-2.5 border-2 rounded-2xl bg-amber-700 cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="px-5 py-2.5 border-2 rounded-2xl cursor-pointer"
              onClick={() => {
                setCurrIndex((prev) => prev + 1);
              }}
            >
              Next
            </button>
          )}
          {currIndex !== 0 && (
            <button
              className="px-5 py-2.5 border-2 rounded-2xl cursor-pointer"
              onClick={() => {
                setCurrIndex((prev) => prev - 1);
              }}
            >
              Prev
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
