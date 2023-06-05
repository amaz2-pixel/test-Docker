import React, { useState } from "react";
import IoAddCircle from "react-icons/io5";
import { Link } from "react-router-dom";
function Case() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true);
    window.open("https://www.example.com", "_blank");
  };
  return (
    <div className="case-history" dir="rtl">
      <h1>شرح حال</h1>

      <Link to="/page2">
        {!isButtonClicked && <IoAddCircle onClick={handleClick}></IoAddCircle>}
      </Link>
    </div>
  );
}

export default Case;
