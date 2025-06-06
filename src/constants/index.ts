// Navbar Items *****************************************/

import HomeIcon from "@mui/icons-material/Home";
import DevicesIcon from "@mui/icons-material/Devices";
import ElectricalIcon from "@mui/icons-material/ElectricalServices";
import BuildIcon from "@mui/icons-material/Build";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ComputerIcon from "@mui/icons-material/Computer";
import FactoryIcon from "@mui/icons-material/Factory";
import ScienceIcon from "@mui/icons-material/Science";
import DeckIcon from "@mui/icons-material/Deck";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { type SvgIconComponent } from "@mui/icons-material";

export interface INavbarItem {
  id: string | number;
  name: string;
  label: string;
  icon: SvgIconComponent;
  href: string;
  // If true, the category is active and should be displayed
  isActive?: boolean; // Optional property to indicate if the category is active (default is true)
}

export const categories: INavbarItem[] = [
  {
    id: "home-appliances",
    name: "home-appliances",
    label: "Maishiy texnika",
    isActive: true,
    icon: HomeIcon,
    href: "/category/home-appliances",
  },
  {
    id: "smart-devices",
    name: "smart-devices",
    label: "Aqlli qurilmalar",
    icon: DevicesIcon,
    isActive: true,
    href: "/category/smart-devices",
  },
  {
    id: "electrical",
    name: "electrical",
    label: "Elektr jihozlari",
    isActive: true,
    icon: ElectricalIcon,
    href: "/category/electrical",
  },
  {
    id: "industrial",
    name: "industrial",
    label: "Sanoat texnikalari",
    isActive: true,
    icon: BuildIcon,
    href: "/category/industrial",
  },
  {
    id: "agriculture",
    name: "agriculture",
    label: "Qishloq xo‘jaligi texnikalari",
    icon: AgricultureIcon,
    isActive: true,
    href: "/category/agriculture",
  },
  {
    id: "computers",
    name: "computers",
    label: "Kompyuter va periferiklar",
    icon: ComputerIcon,
    isActive: false,
    href: "/category/computers",
  },
  {
    id: "factory",
    name: "factory",
    label: "Zavod va fabrika texnikalari",
    isActive: true,
    icon: FactoryIcon,
    href: "/category/factory",
  },
  {
    id: "furniture",
    name: "furniture",
    label: "Mebellar",
    isActive: true,
    icon: DeckIcon,
    href: "/category/furniture",
  },
  {
    id: "metallurgy",
    name: "metallurgy",
    label: "Metallurgiya",
    isActive: true,
    icon: MiscellaneousServicesIcon,
    href: "/category/metallurgy",
  },
];
