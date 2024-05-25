const token = require("./login");

const username = document.getElementById("username");
const email = document.getElementById("email");


async function change_card_detail() {
  const fetchOptions = {
    method: "GET", // or 'POST', 'PUT', etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const user_data_string = await fetch("http://localhost:5001/api/users/current",fetchOptions);
  const user_data = await user_data_string.json()

  username.innerText=user_data.username;
  email.innerText=user_data.email;
}

