import CardComponent from '@/components/CardComponent';
import {
   categories,
   exampleData,
   type ICardComponentPropsWithId,
} from '@/constants';
import type { ICardComponentProps } from '@/interface/ICardComponentProps';
import {
   ArrowBack,
   Check,
   ExpandLess,
   ExpandMore,
   Inbox,
} from '@mui/icons-material';
import {
   Box,
   Checkbox,
   Collapse,
   IconButton,
   Input,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Slider,
   Typography,
} from '@mui/material';
import { useState } from 'react';

// Filter query
// GET /products?category=Maishiy+texnika&priceMin=1000000&priceMax=5000000&brand=SmartTech+UZ&sort=price-desc

export const filterList = {
   categories: categories,
   priceRange: {
      priceMin: 0,
      priceMax: 100,
      selectedRange: [0, 100],
      marks: [
         { value: 0, label: '0' },
         { value: 100, label: '100-mln' },
      ],
   },
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
   warranties: [
      { id: 1, label: '1 yil', value: '1' },
      { id: 2, label: '2 yil', value: '2' },
      { id: 3, label: '3 yil+', value: '3+' },
   ],
};

export const sortOptions = [
   { id: 1, label: 'Eng yangi', value: 'newest' },
   { id: 2, label: 'Ishlatilgan', value: 'used' },
   { id: 3, label: 'Eng ko`p ko`rilgan', value: 'views' },
   { id: 4, label: 'Eng ko`p sotilgan', value: 'bestseller' },
   { id: 5, label: 'Reytingi yuqori', value: 'rating' },
];

function valuetext(value: number) {
   return `${value}so'm`;
}

function SearchResult() {
   const [openCategory, setOpenCategory] = useState(true);
   const [checked, setChecked] = useState([0]);
   const [selectedRange, setSelectedRange] = useState<number[]>([1, 100]);

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

   // Slider handler
   const handleChange = (event: Event, newValue: number[]) => {
      setSelectedRange(newValue);
   };

   return (
      <Box
         sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 6fr',
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
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
               paddingRight: '32px',
            }}
         >
            <List sx={{ pb: '30px' }}>
               <ListItemButton
                  sx={{}}
                  divider
                  onClick={() => setOpenCategory(!openCategory)}
               >
                  <Typography
                     variant="h6"
                     sx={{ flexGrow: 1 }}
                     component="div"
                     fontWeight={600}
                  >
                     Kategoriyalar
                  </Typography>
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

               {/* Holati */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <Typography
                     variant="h6"
                     sx={{ flexGrow: 1 }}
                     component="div"
                     fontWeight={600}
                  >
                     Holati
                  </Typography>
               </ListItem>
               {sortOptions.map((option) => (
                  <ListItem key={option.label} disablePadding sx={{ pl: 2 }}>
                     <ListItemButton sx={{ paddingY: '0px' }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                           <Checkbox
                              edge="start"
                              onClick={handleToggle(option.id)}
                              checked={checked.indexOf(option.id) !== -1}
                              tabIndex={-1}
                              disableRipple
                              sx={{
                                 'aria-labelledby': option.value,
                              }}
                           />
                        </ListItemIcon>
                        <ListItemText secondary={option.label} />
                     </ListItemButton>
                  </ListItem>
               ))}

               {/*Pricing */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <Typography
                     variant="h6"
                     sx={{ flexGrow: 1 }}
                     component="div"
                     fontWeight={600}
                  >
                     Narxi bo'yicha qidirish
                  </Typography>
               </ListItem>
               <ListItem disablePadding sx={{ pl: 2, mt: '64px' }}>
                  <ListItemIcon sx={{ width: '100%' }}>
                     <Slider
                        getAriaValueText={valuetext}
                        getAriaLabel={() => 'Temperature range'}
                        min={filterList.priceRange.priceMin}
                        max={filterList.priceRange.priceMax}
                        value={selectedRange}
                        onChange={handleChange}
                        disableSwap
                        valueLabelDisplay="on"
                        marks={[
                           ...filterList.priceRange.marks,
                           // {
                           //    value: selectedRange[1],
                           //    label: `${selectedRange[1]} mln`,
                           // },
                        ]}
                     ></Slider>
                  </ListItemIcon>
               </ListItem>
               {/*Brands */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <Typography
                     variant="h6"
                     sx={{ flexGrow: 1 }}
                     component="div"
                     fontWeight={600}
                  >
                     Brend bo'yicha qidirish
                  </Typography>
               </ListItem>
               {filterList.brands.map((brand) => (
                  <ListItem key={brand.label} disablePadding sx={{ pl: 2 }}>
                     <ListItemButton sx={{ paddingY: '0px' }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                           <Checkbox
                              edge="start"
                              onClick={handleToggle(brand.id)}
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

               {/*warranty */}
               <ListItem divider sx={{ mt: '10px' }}>
                  <Typography variant="h6" component="div" fontWeight={600}>
                     Garantiya bo'yicha qidirish
                  </Typography>
               </ListItem>
               {filterList.warranties.map((warranty) => (
                  <ListItem disablePadding sx={{ pl: 2 }}>
                     <ListItemButton sx={{ paddingY: '0px' }}>
                        <ListItemIcon sx={{ minWidth: '32px' }}>
                           <Checkbox
                              edge="start"
                              onClick={handleToggle(warranty.id)}
                              checked={checked.indexOf(warranty.id) !== -1}
                              tabIndex={-1}
                              disableRipple
                              sx={{
                                 'aria-labelledby': warranty.label,
                              }}
                           />
                        </ListItemIcon>
                        <ListItemText secondary={warranty.label} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Box>

         {/* Product List */}
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
            }}
         >
            <Box
               sx={(theme) => ({
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, minmax(256px, 1fr))',
                  gap: '8px',
                  paddingBottom: '128px',
                  [theme.breakpoints.down('lg')]: {
                     gridTemplateColumns: 'repeat(4, minmax(256px, 1fr))',
                  },
                  [theme.breakpoints.down('md')]: {
                     gridTemplateColumns: 'repeat(3, minmax(256px, 1fr))',
                  },
                  [theme.breakpoints.down('sm')]: {
                     gridTemplateColumns: 'repeat(2, minmax(256px, 1fr))',
                  },
                  [theme.breakpoints.down('xs')]: {
                     gridTemplateColumns: 'repeat(1, minmax(256px, 1fr))',
                  },
               })}
            >
               {exampleData.map((product: ICardComponentPropsWithId) => {
                  // Destructure the id and rest of the properties
                  const { id, ...rest } = product;

                  return <CardComponent key={product.id} {...rest} />;
               })}
            </Box>
         </Box>
      </Box>
   );
}

export default SearchResult;
