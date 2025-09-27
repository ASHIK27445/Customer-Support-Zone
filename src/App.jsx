import { Suspense, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ProgreeBar from './components/ProgressBar/ProgressBar'
import Taskbar from './components/Tashbar/Taskbar'
import Footer from './components/Footer/Footer'
import { ToastContainer} from 'react-toastify';
import { toast } from 'react-toastify'

const ticketFetchData = fetch('./tickets.json').then(res => res.json())

function App() {
  const [inProgress, setInProgress] = useState([])
  const [resolved, setResolved] = useState([])
  const handleInProgressCount = (ticket) => {
        const newProgress = [...inProgress, ticket]
        setInProgress(newProgress)
    }
  
  const handleCompleteTicket = (completedTicket) => {
    const completed = inProgress.filter(ticket => ticket.id !== completedTicket.id)
    setInProgress(completed)
    toast.success("Completed")
    setResolved(prev => {
      if (!prev.some(ticket => ticket.id === completedTicket.id)) {
        return [...prev, completedTicket]
      }
      return prev
    })

  }
  
  console.log("count:", inProgress.length)
  return (
    <>
      <Navbar></Navbar>
      <ProgreeBar inProgress={inProgress} resolved={resolved}></ProgreeBar>
      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <Taskbar 
        ticketFetchData={ticketFetchData}
        handleInProgressCount = {handleInProgressCount}
        inProgress = {inProgress}
        handleCompleteTicket = {handleCompleteTicket}
        resolved = {resolved}
        ></Taskbar>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
