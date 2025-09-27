import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';
const FooterDiv = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 m-10 max-w-[1140px] mx-auto">
      <nav className='flex flex-col w-full'>
        <h6 className="font-bold text-xl text-white">CS — Ticket System</h6>
        <p className="text-[#A1A1AA] text-xs">
          CS — Ticket System is a streamlined customer support solution designed
          to help teams manage, track, and resolve customer issues efficiently.
          With real-time ticket updates, status tracking, and intuitive UI,
          support teams can stay organized and deliver faster resolutions.
        </p>
      </nav>

      <nav className='flex flex-col w-3/4'>
        <h6 className="font-medium text-lg text-white">Company</h6>
        <a className="link link-hover text-[#A1A1AA] text-xs">About us</a>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Our Mission
        </a>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Contact Saled
        </a>
      </nav>

      <nav className='flex flex-col w-3/4'>
        <h6 className="font-medium text-lg text-white">Services</h6>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Products & Services
        </a>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Customer Stories
        </a>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Download Apps
        </a>
      </nav>

      <nav className='flex flex-col w-3/4'>
        <h6 className="font-medium text-lg text-white">Information</h6>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Terms of use
        </a>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Privacy policy
        </a>
        <a className="link link-hover text-[#A1A1AA] text-xs">
          Join Us
        </a>
      </nav>

      <nav className='flex flex-col w-3/4'>
        <h6 className="font-medium text-lg text-white">Social Links</h6>
        <a className="link link-hover text-[#A1A1AA] text-xs"><FontAwesomeIcon icon={faFacebook} /> @CS — Ticket System</a>
        <a className="link link-hover text-[#A1A1AA] text-xs"><FontAwesomeIcon icon={faLinkedin} /> @CS — Ticket System</a>
        <a className="link link-hover text-[#A1A1AA] text-xs"><FontAwesomeIcon icon={faSquareXTwitter} /> @CS — Ticket System</a>
        <a className="link link-hover text-[#A1A1AA] text-xs">support@cst.com</a>
      </nav>
    </div>
  );
};
export default FooterDiv;
