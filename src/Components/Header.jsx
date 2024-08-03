import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <div className="row " style={{ background: "#f2f2f2", padding: "1rem" }}>
      <div className="col-3 text-center"><img src={require( "../assets/logo.png" )} style={{width:"40%"}} alt="Job Vision " /></div>
      <div className="col-6 d-flex gap-5 fw-bold align-items-center">
      <NavLink to={"/jobs-position"}>فرصت های شغلی</NavLink>
      <NavLink to={"/products"}>محصولات</NavLink>
      <NavLink to={"/my-resume"}>رزومه من</NavLink>
      <NavLink className="btn btn-danger" to={"/my-resume"}>مجله شغلی</NavLink>
      </div>

      <div className="col-3 d-flex fs-3 justify-content-center gap-3">
        <i class="bi bi-bell"></i>{" "}
        <div>
          <i class="bi bi-people"></i>{" "}
          <i class="bi bi-caret-down-fill fs-6" ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
