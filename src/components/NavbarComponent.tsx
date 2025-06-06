import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { categories, type INavbarItem } from "../constants";

function NavbarComponent() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(true);

  const handleCategoriesCollapse = () => {
    setValue(-1);
    setOpen(!open);
  };

  // Handle category click logic here, e.g., navigate to the category page
  const handleCategoryClick = (category: INavbarItem) => {
    alert(`Category clicked: ${category.label}`);
  };

  const handleRecentActionClick = (newValue: number) => {
    // Handle the click action for recent, favorites, or nearby
    setValue(newValue);
    setOpen(false);
  };
  return (
    <>
      <div className="flex gap-0.5 justify-center h-[50px] w-full      ">
        <div className="h-full relative w-[350px]">
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "absolute",
              top: 0,
              left: 0,
              paddingY: "0px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton selected={open} onClick={handleCategoriesCollapse}>
              <ListItemIcon
                sx={{
                  minWidth: "30px",
                  color: "primary",
                }}
              >
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary={"Categories"} />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                component="div"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {categories.map(
                  (category: INavbarItem) =>
                    category.isActive && (
                      <ListItemButton
                        key={category.id}
                        sx={{ pl: 4 }}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <ListItemIcon>
                          <category.icon />
                        </ListItemIcon>
                        <ListItemText primary={category.label} />
                      </ListItemButton>
                    ),
                )}
              </List>
            </Collapse>
          </List>
        </div>
        <BottomNavigation
          sx={{ width: "400px", height: "100%" }}
          showLabels
          value={value}
          onChange={(event, newValue) => handleRecentActionClick(newValue)}
        >
          <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction
            label="Shopping"
            icon={<LocalShippingIcon />}
          />
        </BottomNavigation>
      </div>
    </>
  );
}

export default NavbarComponent;
