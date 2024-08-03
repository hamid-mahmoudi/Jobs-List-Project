import React from "react";
import Job from "./Job";
import { getJob } from "../data/data";
import { useSearchParams } from "react-router-dom";

const Jobs = () => {
  let jobs = getJob();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="d-flex flex-column ">
      <div style={{ padding: "5rem 10rem" }}>
        <h3>دنبال چه شغلی می گردید؟</h3>
        <form className="d-flex flex-row gap-3">
          <div className=" col-10 d-flex gap-4">
            <input
                type="text"
              className="form-control col-5"
              placeholder="عنوان شغلی یا ..."
              value={searchParams.get("filter")}
              onChange={(event) => {
                let jobFilter = event.target.value;
                if (jobFilter) {
                  setSearchParams({ filter: jobFilter });
                } else setSearchParams({});
              }}
            />
          </div>
          <button className="col-2 btn btn-primary">جستجو در مشاغل</button>
        </form>
      </div>
      <div className="d-flex flex-wrap justify-content-start px-5">
        {jobs
          .filter((job) => {
            let jobFilter = searchParams.get("filter");
            if (!jobFilter) return true;
            let jobTitle = job.title;
            return jobTitle.includes(jobFilter);
          })
          .map((job) => (
            <Job key={job.id}
              title={job.title}
              company={job.company}
              city={job.city}
              timeFar={job.timeFar}
              salary={job.salary}
            />
          ))}
      </div>
    </div>
  );
};

export default Jobs;
