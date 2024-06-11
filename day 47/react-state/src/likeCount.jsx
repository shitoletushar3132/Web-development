import { useState } from "react";

export default function likeCount() {
  let [isliked, setIsliked] = useState(false);

  let toggleLike = () => {
    setIsliked(!isliked);
  };

  let likeStyle = {
    color: "red",
  };
  return (
    <div>
      <p onClick={toggleLike}>
        {isliked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
