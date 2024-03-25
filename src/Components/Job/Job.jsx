import PropTypes from 'prop-types'
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='border p-10 space-y-3'>
            <img src={logo} alt="logo" />
            <h1 className='font-bold text-3xl'>{job_title}</h1>
            <h1 className='font-bold text-xl text-gray-500'>{company_name}</h1>
            <div className='gap-5 flex'>
                <button className='btn bg-transparent rounded-none border-2 border-purple-700 font-bold text-purple-700'>{remote_or_onsite}</button>
                <button className='btn bg-transparent rounded-none border-2 border-purple-700 font-bold text-purple-700'>{job_type}</button>
            </div>
            <div className='flex gap-10'>
                <div className='flex items-center gap-1'>
                    <CiLocationOn></CiLocationOn>
                    <h1 className='font-bold text-gray-500'>{location}</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                    <h1 className='font-bold text-gray-500'>{salary}</h1>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className='btn btn-primary border-none rounded-none bg-purple-700 text-white text-xl font-bold'>View Details</button>
            </Link>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;