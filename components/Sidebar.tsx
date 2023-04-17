import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { SidbarLogo } from "./SidbarLogo";
import { SidbarItem } from "./SidbarItem";
import SidebarTweetButton from "./SideBarTweetBtn";

const items = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: BsBellFill,
  },
  {
    label: "Profile",
    href: "/users/123",
    icon: FaUser,
  },
];

export const Sidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-8">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidbarLogo />

          {items.map((item) => (
            <SidbarItem
              key="i"
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidbarItem
            onClick={() => {}}
            icon={BiLogOut}
            href={"href"}
            label={"LogOut"}
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};
