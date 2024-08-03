import React from 'react'
import { useParams, useLocation, Outlet } from 'react-router-dom';
import Header from './Header';

const JobDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { id: stateId, title, company, city, timeFar, salary } = location.state || {};

  const jobId = id || stateId;

  console.log('ID from useParams:', id);
  console.log('ID from state:', stateId);
  console.log('Location State:', location.state);

  return (
    <div>
      <Header></Header>
      <div  className="container mt-5">
      <h2>جزئیات شغل</h2>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h5 className="card-subtitle mb-2 text-muted">{company}</h5>
          <p className="card-text">موقعیت: {city}</p>
          <p className="card-text">زمان انتشار: {timeFar}</p>
          {salary && <p className="card-text">حقوق: {salary}</p>}
        </div></div>
      </div>
    </div>
  )
}

export default JobDetails