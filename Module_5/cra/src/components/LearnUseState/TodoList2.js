import React, { useState } from "react";


function TodoList2() {
    // const [jobs, setJobs] = useState(["java", "react", "C#"]);
    // const [jobName, setJobname] = useState();

    const [state, setState] = useState({
        jobs: ["java", "react", "C#"],
        jobName: ""
    })

    const handleAddJob = (e) => {
        e.preventDefault()
        // setJobs((prev) => {
        //     let newJobs = [...prev, jobName];
        //     return newJobs;
        // })
        // setJobname("");
        setState({
            ...state,
            jobs: [...jobs, jobName],
            jobName: ""
        })
    }

    const handleInput = (e) => {
        setState({
            ...state,
            jobName: e.target.value
        })
    }

    const handleRemove = (job) => {
        // setJobs((prev) => {
        //     let newJobs = prev.filter(item => item != job);
        //     return newJobs;
        // })
        // setState((prev) => {
        //     prev = {
        //         ...prev,
        //         jobs: jobs.filter(item => item != job)
        //     }
        //     return prev;
        // })
        setState({
            ...state,
            jobs: jobs.filter(item => item != job)
        })
    }

    const { jobs, jobName } = state;
    return (
        <div className="container">
            <h1 className="text-white">List Jobs</h1>
            <div className="">
                <form onSubmit={handleAddJob} className="form-group d-flex">
                    <input type="text" className="form-control w-25 me-2"
                        value={jobName}
                        onInput={handleInput}
                    />
                    <button type="submit" className="btn btn-dark btn-sm">
                        <i className="fa fa-plus me-2"></i>
                        Add
                    </button>
                </form>
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

export default TodoList2;