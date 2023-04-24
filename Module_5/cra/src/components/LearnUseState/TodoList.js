import React, { useState, useRef } from "react";


function TodoList() {
    const [jobs, setJobs] = useState(["java", "react", "C#"]);
    const [jobName, setJobname] = useState();
    const jobnameRef = useRef();

    const handleAddJob = () => {
        // let newJobs = [...jobs, jobName];
        // setJobs(newJobs);

        setJobs((prev) => {
            let newJobs = [...prev, jobName];
            return newJobs;
        })
        setJobname("");
        jobnameRef.current.focus();
    }

    const handleRemove = (job) => {
        // let newJobs = jobs.filter((item) => item != job);
        // setJobs(newJobs)

        setJobs((prev) => {
            let newJobs = prev.filter(item => item != job);
            return newJobs;
        })
    }
    return (
        <div className="container">
            <h1 className="text-white">List Jobs</h1>
            <div className="form-group d-flex">
                <input type="text" className="form-control w-25 me-2" 
                    ref={jobnameRef}
                    value={jobName}
                    onInput={(e) => setJobname(e.target.value)}
                /> 
                <button className="btn btn-dark btn-sm"
                    onClick={handleAddJob}
                >
                    <i className="fa fa-plus me-2"></i>
                    Add
                </button>
            </div>
            <div className="mt-2">
                <ul className="list-group w-25">
                    {
                        jobs.map((job, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                {job}
                                <i role="button" className="fa fa-times text-danger fw-bolder"
                                    onClick={() => handleRemove(job)}
                                ></i>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;