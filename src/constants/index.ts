// Navbar Items *****************************************/

interface INavbarItem {
  id: number;
  name: string;
  href?: string;
  isSubIndex: boolean;
  subIndex?: INavbarItem;
}

const NAVBAR_ITEMS: INavbarItem[] = [
  {
    id: 1,
    name: "",
    href: "",
    isSubIndex: false,
  },
];

// Section items **************************************/
interface ISectionItem {
  id: number;
  name: string;
  href?: string;
}

const SECTION_ITEMS: ISectionItem[] = [
  {
    id: 0,
    name: "Home",
    href: "#home",
  },
  {
    id: 1,
    name: "Top Rated",
    href: "#top-rated",
  },
  {
    id: 2,
    name: "New Arrivals",
    href: "#new-arrivals",
  },
  {
    id: 3,
    name: "Best Sellers",
    href: "#best-sellers",
  },
  {
    id: 4,
    name: "In sale",
    href: "#in-sale",
  },
  {
    id: 5,
    name: "#Cooperated Companies",
    href: "#cooperated-companies",
  },
  {
    id: 6,
    name: "About Us",
    href: "#about-us",
  },
];
