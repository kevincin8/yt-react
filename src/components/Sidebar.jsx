import homeIcons from "../assets/icons/home-icon.png";
import sborra from "../assets/icons/sub-icon.png";

function Sidebar() {
  return (
    <aside className="hidden md:block w-[72px]  mt-4">
      <div>
          <a href="" className="flex flex-col items-center gap-2  px-[2%] py-3 hover:bg-gray-300 rounded-xl">
            <img src={homeIcons} className="h-[20px]" alt="" />
            <span className="text-[12px]">Home</span>
          </a>
      </div>
      <div>
          <a href="" className="flex flex-col items-center gap-2  px-[2%] py-3 hover:bg-gray-300 rounded-xl">
            <img src={sborra} className="h-[20px]" alt="" />
            <span className="text-[12px]">iscrizioni</span>
          </a>
      </div>
    </aside>
  );
}

export default Sidebar;