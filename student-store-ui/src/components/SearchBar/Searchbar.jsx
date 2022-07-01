// import React from "react";
// import "./SearchBar.css";
// import { useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

// export function SearchBar({ products, handleOnChange }) {
//   const [filteredData, setFilteredData] = useState([]);

//   const [wordEntered, setWordEntered] = useState("");
//   const handlefilter = (ev) => {
//     const searchWord = ev.target.value;
//     setWordEntered(searchWord);
//     const newfilter = products.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase());
//     });
//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newfilter);
//     }
//   };
//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };
//   return (
//     <div className="search">
//       <div className="=searchInputs">
//         <input
//           type="text"
//           placeholder="search products..."
//           value={wordEntered}
//           onChange={handleOnChange}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.length != 0 && (
//         <div className="results">
//           {filteredData.map((value, key) => {
//             return <div>{value.name}</div>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
