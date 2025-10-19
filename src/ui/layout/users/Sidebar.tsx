import pesonaLogo from "@/assets/icon/pesona.webp";
import { useEffect } from "react";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface sidebarProps {
  openSidebar: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Gallery", destination: "#" },
  { name: "Destinations", destination: "#" },
  { name: "Service", destination: "#" },
] as const;

function Sidebar({ openSidebar, onClose }: sidebarProps) {

  useEffect(() => {
    const escapeClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escapeClose);

    return () => window.removeEventListener("keydown", escapeClose);
  }, [onClose]);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [openSidebar])

  return (
    <>
      <aside
        className={`fixed left-0 z-40 flex h-full md:w-80 md flex-col items-center bg-neutral-900/90 p-4 font-thin text-white 
          transition-all duration-500 ease-in-out backdrop-blur-lg 
          ${openSidebar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <div className=" flex w-full items-center justify-center flex-col mb-4 relative">
          <XMarkIcon className="size-10 rounded-full p-2 text-neutral-400  cursor-pointer  max-md:absolute max-md:right-2 max-md:top-1/2 max-md:-translate-y-1/2" onClick={onClose} />
          <img
            className="w-[40%] md:w-[90%]"
            src={pesonaLogo}
            alt="logo pesona indonesia"
          />
        </div>
        <hr className="mb-8 w-full border-neutral-700" />
        <nav className="w-full">
          <ul className="flex w-full flex-col gap-6">
            {menuItems.map((menuItem) => (
              <li key={menuItem.name}>
                <a
                  href={menuItem.destination}
                  className="group flex w-full items-center justify-between rounded px-4 py-3 text-xl transition-colors duration-300 hover:bg-neutral-800 focus:bg-neutral-700"
                >
                  <span>{menuItem.name}</span>
                  <ChevronRightIcon className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="mt-auto w-full pt-8 text-center text-xs text-neutral-400">
          <hr className="border-neutral-700 pb-4 hover:bg-red-500" />
          <p>Developed by Izadine Akhmad Zatnika</p>
          <p className="mt-1">All Rights Reserved &copy;</p>
        </footer>
      </aside>

      <div
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ${openSidebar ? `opacity-100` : `pointer-events-none opacity-0`}`}
        onClick={onClose}
      />
    </>
  );
}

export default Sidebar;
