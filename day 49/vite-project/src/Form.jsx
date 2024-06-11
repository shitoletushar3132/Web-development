import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  //   let handleNameChange = (event) => {
  //     console.log(event.target.value);
  //     setFullName(event.target.value);
  //   };
  //   let handleUserNameChange = (event) => {
  //     console.log(event.target.value);
  //     setuserName(event.target.value);
  //   };

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newVal = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newVal };
    });
    console.log(fieldName);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
    });
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        name="fullName"
        type="text"
        placeholder="type something "
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
      />

      <br />

      <label htmlFor="userName">UserName</label>
      <input
        name="userName"
        type="text"
        placeholder="Username "
        value={formData.userName}
        onChange={handleInputChange}
        id="userName"
      />
      <br />
      <button>submit </button>
    </form>
  );
}
