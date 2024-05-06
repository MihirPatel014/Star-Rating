import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./style.css";
export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hove, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseOver(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return( <FaStar
            key={index}
            className={index <= (hove || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove ={() => handleMouseOver(index)}
            onMouseLeave ={() => handleMouseLeave(index)}
            size={100}
            />)
      })}
    </div>
  );
}
