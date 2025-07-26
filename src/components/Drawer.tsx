"use client";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({ open, onClose }: DrawerProps) {
  return (
    <>
      <div
        className={`backdrop ${open ? "block" : "hidden"}`}
        onClick={onClose}
      ></div>

      <div
        id="drawer"
        className={`drawer ${open ? "translate-x-0" : "translate-x-full"}`}
        tabIndex={-1}
        aria-labelledby="drawer-backdrop-label"
      >
        <button
          type="button"
          className="text-green p-[15px] absolute right-5 top-5"
          onClick={onClose}
        >
          <svg
            className="w-[30px] h-[24px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4">
          <ul className="flex flex-col gap-[20px] **:text-[18px] items-stretch">
            {["About", "Experience", "Work", "Contact"].map((item, index) => (
              <li className="p-[10px] flex-1 text-center" key={index}>
                <a
                  href={`/#${item.toLowerCase()}`}
                  className="hover:text-green focus:text-green"
                  onClick={onClose}
                >
                  <div className="text-green mb-[5px]">{`0${index + 1}.`}</div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
