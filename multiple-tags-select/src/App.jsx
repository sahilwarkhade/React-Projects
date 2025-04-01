import React, { useEffect, useState } from "react";

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [selectedTags,setSelectedTags]=useState([]);
  const [uniqueTags,setUniqueTags]=useState(new Set());

  useEffect(() => {
    function fetchUsers() {
      if (searchTag === "") return;
      fetch(`https://dummyjson.com/users/search?q=${searchTag}`)
        .then((res) => res.json())
        .then((result) => setSuggestions(result.users))
        .catch((err) => console.log(err));
    }

    // fetchUsers();

    let timer;
    timer=setTimeout(fetchUsers,300);
    return ()=>clearTimeout(timer)
  }, [searchTag]);

  function handleOnclick(user){
    if(uniqueTags.has(user))return;
    const temp=[...selectedTags,user];
    setSelectedTags(temp)
    setUniqueTags(new Set(temp))
    // console.log(selectedTags)
  }

  function handleDelete(username){
    const filteredArray=selectedTags.filter(user => user.id !==username.id)
    setSelectedTags(filteredArray)
    setUniqueTags(new Set(filteredArray)) 
  }

  return (
    <div className="w-full flex flex-col gap-y-5 items-center ">
      <h1 className="text-2xl font-semibold mb-24">Multiple Select Tags</h1>
      <div className="w-[80%]">
        { selectedTags.length > 0 &&
        <div className="h-10 flex gap-2 mb-5 flex-wrap overflow-y-scroll">
        {
          selectedTags.map((user,index)=>{
            return <p key={user.id} className="max-w-25 h-8 border flex flex-row items-center justify-center rounded-2xl text-lg px-1 cursor-pointer" onClick={()=>handleDelete(user)}>
              {user.username} &times;
            </p>
          })
        }
        </div>}
        <input
          className="w-full h-9 border rounded-2xl p-5"
          type="text"
          placeholder="Enter the tags"
          onChange={(e) => setSearchTag(e.target.value)}
        />
        {searchTag && suggestions.length > 0 && (
          <ul className="ml-2.5 border max-h-56 w-[325px] overflow-y-auto p-1.5">
            {suggestions?.map((user, index) => {
              return (
                <li key={user.id} className="p-0.5 text-xl flex mb-1 cursor-pointer" onClick={()=>handleOnclick(user)}>
                  <img className="h-[25px] w-[25px] rounded-full" src={user.image} alt={user.firstName} />
                  {user.firstName} {user.lastName}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
