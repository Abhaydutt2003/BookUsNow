import { useState, useEffect, useRef } from "react";
import "./style.scss";
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const options = ["Option-1", "Option-2", "Option-3", "Option-4"];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="searchBar">
      <div ref={selectRef} className="catg">
        <div onClick={() => setIsOpen(!isOpen)} className="categories">
          <FaBars></FaBars>
          {selectedOption || "Categories"}
        </div>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              border: "1px solid black",
              backgroundColor: "white",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  borderTop: index !== 0 ? "1px solid #ccc" : "none",
                  borderBottomLeftRadius:
                    index === options.length - 1 ? "5px" : "0",
                  borderBottomRightRadius:
                    index === options.length - 1 ? "5px" : "0",
                  borderTopLeftRadius: index === 0 ? "5px" : "0",
                  borderTopRightRadius: index === 0 ? "5px" : "0",
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="search">
        <input placeholder="DJI phantom"></input>
        <div className="sIcon">
        <IoIosSearch></IoIosSearch>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
