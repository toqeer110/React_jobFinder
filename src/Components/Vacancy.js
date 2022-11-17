import React from "react";

const Vacancy = ({ job, handleDelete }) => {
  return (
    <div className="box mt-4 mb-5">
      <h1 className="title is-5">{job.title}</h1>
      <span>{job.company}</span>
      <p>{job.city}</p>
      <div className="block"></div>
      <p>{job.description}</p>
      <div className="is-flex is-justify-content-space-between">
        <button  onClick={() => {
          window.alert(`Successfully applied for position ${job.title}`)
        }} className="button is-primary mt-4">Apply</button>
        <button  onClick={() => handleDelete(job.id)}   className="button is-danger mt-4">Delete</button>
      </div>
    </div>
  );
};

export default Vacancy;
