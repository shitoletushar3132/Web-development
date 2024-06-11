import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputchange = (event) => {
    const { name, value } = event.target;
    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give your comment</h4>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          name="username"
          onChange={handleInputchange}
          id="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <br />
        <textarea
          placeholder="remarks"
          value={formData.remarks}
          name="remarks"
          onChange={handleInputchange}
          id="remarks"
        >
          remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          name="rating"
          onChange={handleInputchange}
          id="rating"
        />
        <br />
        <br />
        <button>Add comment</button>
      </form>
    </div>
  );
}
