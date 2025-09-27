const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">

      <div className=" max-w-[1140px] mx-auto w-full flex gap-5 justify-between">
        <div>
          <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
        </div>

        <div className="flex gap-5 text-sm">
            <ul className="hidden  md:flex gap-5 items-center ">
              <li><a href="">Home</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Changelog</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Download</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            <div>
              <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md">+ New Ticket
              </button>
            </div>
        </div>

      </div>

    </div>
  );
};
export default Navbar;
