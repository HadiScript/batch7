import React from "react"

// import { MenuList } from '../../assets/data/sidebarlinks'

import { MdAddAlert, MdArrowDownward, MdLogout, MdOutlineQueryStats, MdSettings, MdVerifiedUser } from "react-icons/md";
import { Link } from "react-router-dom";
import * as path from "../../assets/path";
import { Active } from "../../assets/Active";

const MenuList = [
  {
    icon: <MdOutlineQueryStats />,
    name: "Dashbaord",
    path: path.DashboardPath,
    gap: true,
  },
  {
    icon: <MdArrowDownward />,
    name: "Accordions",
    path: path.AccordionPath,
    gap: false,
  },
  {
    icon: <MdAddAlert />,
    name: "Alert",
    path: "/alert",
    gap: false,
  },
  {
    icon: <MdVerifiedUser />,
    name: "Profile",
    path: "/profile",
    gap: true,
  },
  {
    icon: <MdSettings />,
    name: "Settings",
    path: "/settings",
    gap: false,
  },
  {
    icon: <MdLogout />,
    name: "Logout",
    path: "/",
    gap: false,
  },
];





const NavLink = ({ from = "medScreen" }) => {
  return (
    <React.Fragment>

      {
        MenuList.map((x, index) => <div key={index} role="button" className={` ${Active(x.path) ? "border-end" : ""} d-flex  border-dark justify-content-start align-items-center gap-2 ${x.gap ? 'mt-5' : 'mt-3'}`}>
          {x.icon}
          <Link className="_link" to={x.path}> {x.name}</Link>
        </div>
        )
      }
    </React.Fragment>
  )
}

export default NavLink