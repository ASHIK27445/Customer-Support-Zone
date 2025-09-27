import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCalendar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';


const TicketCard = ({tickets, setInProgress}) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClicked = () =>{
        if(!isClicked){
        setIsClicked(true)
        setInProgress(tickets)
        toast(<p className='text-blue-600'><FontAwesomeIcon className='text-blue-600' icon={faCircleCheck} /> Progress...</p>,{
            autoClose: 1000
        })
        }

    }
    return(
        <div className="p-4 border-1 border-amber-300 rounded-md" onClick={handleClicked}>
            <div className='flex justify-between items-center mb-2 gap-3'>
                <p className='text-[#001931] text-md font-semibold font-inter'>{tickets.title}</p>
                <p className=' text-nowrap rounded-4xl bg-[#B9F8CF] text-xs text-[#02A53B] px-2 py-0.5 flex items-center'><FontAwesomeIcon icon={faCircle} className={`pr-1 ${isClicked? 'text-[#FEBB0C]' : 'text-[#02A53B]' }`}/>
                {tickets.status}</p>
            </div>
            <div className='text-[#627382] text-xs mb-3'>{tickets.description}</div>
            <div className='text-xs flex justify-between'>
                <div>
                    <span className='text-[#627382] pr-3'>{tickets.id}</span> <span className={`${tickets.priority === "High" ? 'text-[#F83044] font-medium' : 
                    tickets.priority === "Urgent" ? 'text-[#F83044] font-extrabold' :
                    tickets.priority === "Medium" ? 'text-[#FEBB0C] font-medium' :
                    'text-[#02A53B] font-medium'} `}>{tickets.priority}</span>
                </div>
                <div>
                    <span className='text-[#627382] pr-3'>{tickets.customer}</span> <span className='text-[#627382]'><FontAwesomeIcon icon={faCalendar} style={{color: "#627382",}} /> {tickets.createdAt}</span>
                </div>
            </div>
        </div>
    )
}
export default TicketCard