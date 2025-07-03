import { categories } from '@/constants';
import { ArrowBack, ExpandLess, ExpandMore, Inbox } from '@mui/icons-material';
import {
   Box,
   Checkbox,
   Collapse,
   IconButton,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Typography,
} from '@mui/material';
import { useState } from 'react';

// Filter query
// GET /products?category=Maishiy+texnika&priceMin=1000000&priceMax=5000000&brand=SmartTech+UZ&sort=price-desc

export const filterList = {
   categories: categories,
   priceRange: [
      { id: 1, label: '0 - 500 ming so‘m', min: 0, max: 500_000 },
      { id: 2, label: '500 ming - 1 mln', min: 500_000, max: 1_000_000 },
      { id: 3, label: '1 mln - 5 mln', min: 1_000_000, max: 5_000_000 },
      { id: 4, label: '5 mln dan yuqori', min: 5_000_000, max: Infinity },
   ],
   brands: [
      {
         id: 1,
         label: 'Mahalliy Brend A',
         value: 'Mahalliy Brend A',
      },
      {
         id: 2,
         label: 'Mahalliy Brend B',
         value: 'Mahalliy Brend B',
      },
      {
         id: 3,
         label: 'InnoTex',
         value: 'InnoTex',
      },
      {
         id: 4,
         label: 'SmartTech UZ',
         value: 'SmartTech UZ',
      },
      {
         id: 5,
         label: 'UzEnergy',
         value: 'UzEnergy',
      },
      {
         id: 6,
         label: "O'zAutoElektro",
         value: "O'zAutoElektro",
      },
   ],
   warranty: [
      { label: '1 yil', value: '1' },
      { label: '2 yil', value: '2' },
      { label: '3 yil+', value: '3+' },
   ],
   sizeOrPower: [
      { label: 'Kichik', value: 'mini' },
      { label: 'O`rtacha', value: 'medium' },
      { label: 'Yirik / Sanoat', value: 'industrial' },
   ],
};

export const sortOptions = [
   { label: 'Eng yangi', value: 'newest' },
   { label: 'Ishlatilgan', value: 'used' },
   { label: 'Narxi: pastdan yuqoriga', value: 'price-asc' },
   { label: 'Narxi: yuqoridan pastga', value: 'price-desc' },
   { label: 'Eng ko`p ko`rilgan', value: 'views' },
   { label: 'Eng ko`p sotilgan', value: 'bestseller' },
   { label: 'Reytingi yuqori', value: 'rating' },
];

function SearchResult() {
   const [openCategory, setOpenCategory] = useState(true);
   const [checked, setChecked] = useState([0]);

   const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
         newChecked.push(value);
      } else {
         newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
   };
   return (
      <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 5fr',
            gridTemplateRows: '40px 1fr',
            minHeight: '60vh',
         }}
      >
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'start',
            }}
         >
            <IconButton>
               <ArrowBack />
            </IconButton>
         </Box>
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               paddingX: '10px',
            }}
         >
            <Typography>Search Result</Typography>
            <Typography>1220 items</Typography>
         </Box>

         {/* Filter */}
         <Box
            sx={{
               border: '1px solid red',
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               px: '32px',
            }}
         >
            <List>
               <ListItemButton
                  sx={{}}
                  divider
                  onClick={() => setOpenCategory(!openCategory)}
               >
                  <ListItemIcon>
                     <Inbox />
                  </ListItemIcon>
                  <ListItemText primary="Categories" />
                  {openCategory ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>
               <Collapse in={openCategory} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {filterList.categories.map((category) => (
                        <ListItem key={category.id} disablePadding>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemIcon sx={{ minWidth: '32px' }}>
                                 <category.icon />
                              </ListItemIcon>
                              <ListItemText secondary={category.label} />
                           </ListItemButton>
                        </ListItem>
                     ))}
                  </List>
               </Collapse>

               {/*Pricing */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <ListItemText primary="Narxi bo'yicha qidirish" />
               </ListItem>
               {filterList.priceRange.map((range) => (
                  <ListItem key={range.label} disablePadding sx={{ pl: 2 }}>
                     <ListItemButton
                        sx={{ padding: '0px' }}
                        role={undefined}
                        onClick={handleToggle(range.id)}
                     >
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                           <Checkbox
                              edge="start"
                              checked={checked.indexOf(range.id) !== -1}
                              tabIndex={-1}
                              disableRipple
                              sx={{ 'aria-labelledby': range.label }}
                           />
                        </ListItemIcon>
                        <ListItemText secondary={range.label} />
                     </ListItemButton>
                  </ListItem>
               ))}

               {/*Brands */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <ListItemText primary="Brend bo'yicha qidirish" />
               </ListItem>
               {filterList.brands.map((brand) => (
                  <ListItem key={brand.label} disablePadding sx={{ pl: 2 }}>
                     <ListItemButton sx={{ padding: '0px' }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                           <Checkbox
                              edge="start"
                              checked={checked.indexOf(brand.id) !== -1}
                              tabIndex={-1}
                              disableRipple
                              sx={{
                                 'aria-labelledby': brand.value,
                              }}
                           />
                        </ListItemIcon>
                        <ListItemText secondary={brand.label} />
                     </ListItemButton>
                  </ListItem>
               ))}

               {/*Brands */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <ListItemText primary="Brend bo'yicha qidirish" />
               </ListItem>
            </List>
         </Box>

         {/* Product List */}
         <Box sx={{ border: '1px solid red' }}></Box>
      </Box>
   );
}

export default SearchResult;
