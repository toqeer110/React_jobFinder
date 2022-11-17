import React, { useState, useEffect } from "react";
import Data from "../Data";
import Vacancy from "../Components/Vacancy";
import JobForm from '../Components/JobForm';


const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(Data);
   // console.log(Data);
  }, []);

  const onSubmit = (form) => {
    setJobs([form , ...jobs])
   
  }
   const handleDelete = (id) => {
 
  const _jobs = jobs.filter(job => job.id !== id);
   setJobs(_jobs)
   }              





  return (
    <>
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <p className="title">Find Your Dream Job Today</p>
          <p className="subtitle">Apply for any Vanacies below</p>
        </div>
      </section>




<section className="form">

<JobForm submit={onSubmit} />

</section>




      <section>

      {jobs.map((job) => {
        return <Vacancy key={job.id} job={job}  handleDelete={handleDelete}  />;
      })}

      </section>





    </>
  );
};

export default Home;
