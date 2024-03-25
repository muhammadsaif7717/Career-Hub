import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Components/Utility/localStorage"
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([   ]);

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {
            // const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            // console.log(jobs,storedJobIds,jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Jobs I Applied: {appliedJobs.length}</h2>
            <div className="my-5 flex justify-end">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite </a></li>
                    </ul>
                </details>
            </div>
            <div className="flex flex-col gap-5 p-5">
                {
                    displayJobs.map(job =>
                        <div key={job.id} className="flex border items-center justify-around">
                            <div className="p-5 items-center justify-center flex">
                                <img src={job.logo} className="max-w-36 bg-red-100 p-5" alt="logo" />
                            </div>
                            <div className="p-5 space-y-2">
                                <h1 className="font-bold text-2xl">{job.job_title}</h1>
                                <h1 className="text-lg text-gray-500">{job.company_name}</h1>
                                <div className='gap-5 flex'>
                                    <button className='btn bg-transparent rounded-none border-2 border-purple-700 font-bold text-purple-700'>{job.remote_or_onsite}</button>
                                    <button className='btn bg-transparent rounded-none border-2 border-purple-700 font-bold text-purple-700'>{job.job_type}</button>
                                </div>
                                <div className='flex gap-10'>
                                    <div className='flex items-center gap-1'>
                                        <CiLocationOn></CiLocationOn>
                                        <h1 className='font-bold text-gray-500'>{job.location}</h1>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                                        <h1 className='font-bold text-gray-500'>{job.salary}</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to={`/job/${job.id}`}>
                                    <button className='btn btn-primary border-none rounded-none bg-purple-700 text-white text-xl font-bold'>View Details</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;