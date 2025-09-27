import { toast } from 'react-toastify';
const StatusBar = ({inProgress, handleCompleteTicket, completedCard, resolved}) => {
    return(
        <div className="ml-3 max-w-3/4 md:max-w-1/4 w-full">
            <div><p className="font-semibold font-inter text-[#34485A]">Task Status</p>
                    {                                   
                        inProgress.length === 0 ? (<p className="text-[#627382] text-sm mt-2 mb-5">Select a ticket to add to Task Status</p>) 
                        : (
                        inProgress.map(ticket =>(
                            <div key={ticket.id} className="bg-white border-amber-300 border-1 p-2 mb-2">
                                <p className="mb-2 text-[#001931] font-inter textarea-md font-medium">{ticket.title}</p>
                                <button onClick={() => {handleCompleteTicket(ticket); completedCard(ticket); completedClicked}} className="btn bg-[#02A53B] w-full text-white textarea-md">Completed</button>
                            </div>
                        ))
                      )
                    }
            </div>
            <div><p className="font-semibold font-inter text-[#34485A]">Resolved Status</p>
                {   
                    resolved.length === 0 ? (<p className="text-[#627382] text-sm mt-2 mb-5">No resolved tasks yet.</p>) 
                        : (
                    resolved.map(ticket => (
                        <p key={ticket.id} className="bg-[#E0E7FF] w-full text-[#001931] textarea-md mb-1.5 p-3 font-medium text-center shadow-cyan-800 shadow-sm">{ticket.title}</p>
                    ))
                  )
                }
            </div>
        </div>
    )
}
export default StatusBar