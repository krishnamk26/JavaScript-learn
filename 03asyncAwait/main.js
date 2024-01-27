const myObj = {
  usersList: [],
};

// const users = async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData =await res.json()
//     console.log(usersData)
//     return usersData
// }
// // users()

// const user = async()=>{
//     const data = await users()
//     myObj.usersList=data
//     console.log(myObj)
//     return data
// }
// user()

// simplyfy the code

const users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await res.json();
  console.log(userData);
  myObj.usersList = userData;
  console.log(myObj.usersList);
  anotherFunction(userData);
};

const anotherFunction = (data) => {
  myObj.usersList = data;
  console.log(myObj);
  return data;
};
users();

const getDadJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //above mentioned Accept is return json format
      // Accept:"text/plain"
      //its return plain text
    },
  });
  const dadJoke = await res.json();
  // const dadJoke = await res.text()
  console.log(dadJoke.joke);
};
getDadJoke();

const myJoke = {
  id: "ZDAlOZgydxc",
  joke: "How many optometrists does it take to change a light bulb? 1 or 2? 1... or 2?",
};
const postJoke = async (myJokes) => {
  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(myJokes)
  });
  const jsonPost = await res.json();
  console.log(jsonPost)
};
postJoke(myJoke)
