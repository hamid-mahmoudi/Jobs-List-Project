import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Job = ({ id, title, company, city, timeFar, salary }) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="border rounded col-3 shadow-sm p-3 m-4"  style={{padding:"0 10rem"}} >
      <div className="d-flex justify-content-between">
        <img
          className="border rounded"
          src={require("../assets/icon.png")}
          alt=""
          style={{ width: "60px", height: "60px" }}
        />
        <div className="w-100 px-3">
          <h5 className="fw-bold">{title}</h5>
          <p className="mb-2">{company}</p>
          <div className="d-flex">
            <p className="mb-2"style={{ fontSize: "14px" }}>{city}</p>
            {salary && (
              <div className="ms-2 d-flex text-success">
                <div className="mx-2">|</div>
                <span >{salary}</span>
              </div>
            )}
          </div>
        </div>
        <i
          className={isActive ? "bi bi-heart" : "bi bi-heart-fill text-danger"}
          style={{ cursor: "pointer",padding:"5px",scale:"1.1" }}
          onClick={handleClick}
        ></i>
      </div>
      <div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-secondary" style={{ fontSize: "14px" }}>
            {timeFar}
          </span>
          <NavLink 
  to={`/job-details/${id}`} 
  state={{ id, title, company, city, timeFar, salary }}
  className="btn btn-success m-0"
>
  مشاهده
</NavLink>      </div>
      </div>
    </div>
  );
};

export default Job;