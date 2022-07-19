//Sidebar
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CategoryIcon from "@mui/icons-material/Category";
export const SidebarData = [
    {
      icon: DashboardIcon,
      heading: "Dashboard",
      link: "/admin",
    },
    {
      icon: CategoryIcon,
      heading: "Categories",
      link: "/admin/categories",
    },
    {
      icon: StoreIcon,
      heading: "Products",
      link: "/admin/products",
    },
    {
      icon: PersonIcon,
      heading: "Employees",
      link: "/admin/employees",
    },
    {
      icon: ListAltIcon,
      heading: "Orders",
      link: "/admin/orders",
    },
    {
      icon: HowToRegIcon,
      heading: "Permission",
      link: "",
    },
];
  
