import {
  GraduationCap, Hammer, IdCard, BriefcaseBusiness,
  FolderDot, Medal, Origami, NotebookPen, Rss, Podcast
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = (props: { left: boolean }) => {
  const activeClasses = "border-r-4 border-r-primary bg-secondary text-accent-content duration-500";
  const baseStyle = "border-solid border-b-[0.5px] border-secondary-content px-2";

  const navItems = [
    { to: "", label: "À propos", icon: IdCard },
    { to: "education", label: "Education", icon: GraduationCap },
    { to: "capacites", label: "Capacités", icon: Hammer },
    { to: "experience", label: "Expérience", icon: BriefcaseBusiness },
    { to: "portfolio", label: "Portfolio", icon: FolderDot },
    { to: "blog", label: "Blog", icon: Podcast },
    { to: "realisations", label: "Réalisations", icon: Medal },
    { to: "conferences", label: "Conférences", icon: Origami },
    { to: "maj", label: "Mises à jour", icon: Rss },
    { to: "contact", label: "Contact", icon: NotebookPen },
  ];

  return (
    <div
      className={`flex flex-col mt-4 justify-between m-2 text-secondary-content text-[1rem] overflow-scroll ${
        !props.left ? "text-center h-[60vh]" : "text-left h-[50vh]"
      }`}
    >
      {navItems.map(({ to, label, icon: Icon }, index) => (
        <NavLink
          key={index}
          to={`/${to}`}
          end={to === ""}
          className={({ isActive }: { isActive: boolean }) =>
            `${baseStyle} flex ${
              props.left ? "flex-row items-center gap-2 py-2" : "flex-col justify-center py-3"
            } ${isActive ? activeClasses : ""}`
          }
        >
          <Icon className={props.left ? "text-secondary-content" : "text-secondary-content mx-auto"} />
          {props.left && <span>{label}</span>}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
