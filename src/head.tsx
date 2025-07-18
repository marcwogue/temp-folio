import Mouse from "./components/ui/mouse";
import SetTheme from "./components/ui/setTheme";
import Picture from "./components/ui/picture";
import acc from "./components/Json/acceuil.json"
import Setpup from "./components/ui/Setpup";
import Navbar from "./components/ui/navbar";
import { Laptop, HardDriveDownload } from "lucide-react";
import type { ReactHTMLElement } from "react";

const head = (props: {
  className?: string;
  value: boolean;
  fonc: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactHTMLElement<HTMLElement>;
}) => {
  return (
    <div
      className={`${
        props.className
      } col-span-12 gap-3 overflow-hidden grid grid-rows-11  sm:col-span-1  sm:mt-4 sm:mb-4 sm:rounded-[8px]  sm:row-span-12 row-span-4 border-b-4 border-solid border-base-100  bg-base-200 ${
        props.value ? `lg:col-span-2 gap-5` : `md:col-span-1`
      }`}
    >
      {/* Top Section (Avatar, Name, Download) */}
      <div className={`${props.value ? `md:row-span-5` : `md:row-span-2 lg:row-span-2`} sm:row-span-2`}>
        <Setpup
          onclick={props.fonc}
          value={props.value}
          classname={`absolute  sm:ml-[7%]  rounded-4xl scale-90 hidden lg:block ${
            props.value ? "md:ml-[15%]" : "ml-[7%]"
          }`}
        />
        <div className="flex sm:hidden justify-between">
          <SetTheme />
          <Mouse />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 items-center"> {/* Added items-center */}
          <div></div>
          <div className="col-span-1 sm:col-span-4 flex justify-center"> {/* Added flex justify-center */}
            <Picture
              src={acc.avatar}
              className={`sm:h-[4rem] w-full h-[5rem] sm:mt-[1rem] rounded-2xl ${
                props.value ? " lg:h-[6rem] " : "lg:h-[4rem]"
              } `}
            />
          </div>
          {props.children}
        </div>
        <div className="text-center m-2">
          {props.value ? (
            <div className="block sm:hidden lg:block">
              <h1 className="text-2xl flex items-center justify-center"> {/* Added flex items-center justify-center */}
                <Laptop className="text-2xl sm:hidden mr-2 text-secondary" />{" "}
                {/* Added mr-2 for spacing */}
                 <span className="text-secondary">{acc.name}</span>
              </h1>
              <span>{acc.profession}</span>
            </div>
          ) : (
            ""
          )}
          <div className="card bg-primary p-2 text-center">
            <a href={acc.resume} target="_blank" className="flex sm:scale-75 lg:scale-100 items-center justify-center"> {/* Added flex items-center justify-center */}
              <span className="block sm:hidden lg:block">{props.value ? "download resume" : ""}{" "}</span>
              <HardDriveDownload className="text-center inline-block mx-auto" />{" "}
              {/* Added spacing */}
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className={`hidden sm:row-span-6 sm:block ${props.value ? "row-span-9" : "row-span-6"}`}>
        <Navbar left={props.value} />
      </div>

      {/* Theme/Mouse Section */}
      <div
        className={`hidden sm:flex-col sm:mt-24  lg:mt-8 sm:flex  ${
          !props.value ? "lg:flex-col  justify-between  row-span-2 " : "row-span-1 justify-around  lg:flex-row"
        }`}
      >
        <SetTheme />
        <Mouse />
      </div>
    </div>
  );
};

export default head;