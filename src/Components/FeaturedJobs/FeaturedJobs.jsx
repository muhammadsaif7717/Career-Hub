import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setaajobs] = useState([]);

    // this is not the best away to load data
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setaajobs(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Featured Jobs: {jobs.length}</h2>
            <p className="text-center">Explore  thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`my-5 flex justify-center ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;