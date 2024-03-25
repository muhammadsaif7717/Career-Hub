import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobAppplication } from "../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob=()=>{
        saveJobAppplication(idInt)
        toast('Applied Successfully')
    }
    return (
        <div>
            <h2 className="text-center">Job Details of: {id}</h2>
            <div className="grid gap-5 md:grid-cols-4">
                <div className="border md:col-span-3 p-5 space-y-11">
                    <h2 className="text-2xl font-bold">Job Description: <span className="font-normal text-gray-500">{job.job_description}</span></h2>
                    <h2 className="text-2xl font-bold">Job Responsibility: <span className="font-normal text-gray-500">{job.job_responsibility}</span></h2>
                    <h2 className="text-2xl font-bold">Educational Requirements: <br /><span className="font-normal text-gray-500">{job.educational_requirements}</span></h2>
                    <h2 className="text-2xl font-bold">Experiences: <br /><span className="font-normal text-gray-500">{job.experiences}</span></h2>
                </div>
                <div className="border">
                    <div className=" p-5 bg-purple-200 space-y-3">
                        <h2 className="text-2xl">Job Details</h2>
                        <hr className="border-gray-400" />
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full rounded-none">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;