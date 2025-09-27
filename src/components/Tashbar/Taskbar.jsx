import { use, useState } from "react"
import TicketCard from "../TicketCard/TicketCard"
import StatusBar from "../StatusBar/StatusBar"

const Taskbar = ({ticketFetchData, handleInProgressCount, inProgress, handleCompleteTicket, resolved}) => {
    const ticketData = use(ticketFetchData)

    const [tickets, setTickets] = useState(ticketData)
    const completedCard = (completedTicket) =>{
        setTickets(prev => prev.filter(ticket => ticket.id !== completedTicket.id ))
            }
    return(
        <div className="max-w-[1140px] mx-auto flex justify-center items-center md:items-start flex-col md:flex-row gap-5">
            <div className="max-w-9/12">
                <p className="font-semibold font-inter text-[#34485A]">Customer Ticket</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 my-10">
                    {
                        tickets.map(tickets => <TicketCard key={tickets.id} tickets={tickets}
                        setInProgress = {handleInProgressCount}
                        ></TicketCard> )
                    }
                </div>
            </div>

            <StatusBar inProgress = {inProgress} handleCompleteTicket= {handleCompleteTicket} completedCard = {completedCard} resolved= {resolved}></StatusBar>
        </div>
    )
}
export default Taskbar