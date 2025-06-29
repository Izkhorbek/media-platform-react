import CardComponent from '@/components/CardComponent';
import { categories } from '@/constants';
import type { ICardComponentProps } from '@/interface/ICardComponentProps';
import { LocalFireDepartment, NavigateBefore, Star } from '@mui/icons-material';
import { Box, Icon, Link, Typography } from '@mui/material';

import { Navigation } from 'swiper/modules';
import SwiperComponent from '@/components/SwiperComponent';

const products: ICardComponentProps[] = [
   {
      imageUrl: 'width_800.jpg',
      title: 'Lizard',
      description: 'Lizard is a common pet',
      price: '1000',
      quantity: '10',
      onClickLiked: () => {
         console.log('Liked');
      },
   },
   {
      imageUrl: 'width_800.jpg',
      title: 'Lizard',
      description: 'Lizard is a common pet',
      price: '1000',
      quantity: '10',
      onClickLiked: () => {
         console.log('Liked');
      },
   },
   {
      imageUrl: 'width_800.jpg',
      title: 'Lizard',
      description: 'Lizard is a common pet',
      price: '1000',
      quantity: '10',
      onClickLiked: () => {
         console.log('Liked');
      },
   },
   {
      imageUrl: 'width_800.jpg',
      title: 'Lizard',
      description: 'Lizard is a common pet',
      price: '1000',
      quantity: '10',
      onClickLiked: () => {
         console.log('Liked');
      },
   },
   {
      imageUrl: 'width_800.jpg',
      title: 'Lizard',
      description: 'Lizard is a common pet',
      price: '1000',
      quantity: '10',
      onClickLiked: () => {
         console.log('Liked');
      },
   },
   {
      imageUrl: 'width_800.jpg',
      title: 'Lizard',
      description: 'Lizard is a common pet',
      price: '1000',
      quantity: '10',
      onClickLiked: () => {
         console.log('Liked');
      },
   },
];

function CategoryProducts() {
   return (
      <Box
         sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         {/* Category Navigation */}
         <ul className="list-none p-0 m-0 flex border-y border-gray-200 h-[64px]">
            {categories.map(
               (category) =>
                  category.isActive !== false && (
                     // Render only if the category is active
                     <li
                        key={category.id}
                        className="p-4 hover:bg-gray-100 h-full"
                     >
                        <a className="text-sm font-bold w-full h-full">
                           {category.label}
                        </a>
                     </li>
                  ),
            )}
         </ul>
         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
               href="/"
               underline="hover"
               color="inherit"
               sx={{
                  my: 2,
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <NavigateBefore />
               Go back
            </Link>
         </Box>
         <div className="flex w-full items-center justify-center h-[78px] border-2 bg-primary text-white text-xl md:text-3xl lg:text-4xl">
            Category Name
         </div>

         {/* Products List by category */}
         <Box
            sx={{
               width: '100%',
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               gap: 2,
               marginBlock: 8,
            }}
         >
            {/* Hot Products */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <LocalFireDepartment color="error" />
               <Typography variant="h5" color="error">
                  Hot Products
               </Typography>
            </Box>
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  border: '1px solid #ccc',
               }}
            >
               <SwiperComponent
                  props={{
                     slidesPerView: 5,
                     spaceBetween: 30,
                     navigation: true,
                     loop: false,
                     modules: [Navigation],
                  }}
               >
                  {products.map((slide) => (
                     <CardComponent
                        key={slide.title}
                        imageUrl={slide.imageUrl}
                        title={slide.title}
                        description={slide.description}
                        price={slide.price}
                        quantity={slide.quantity}
                        onClickLiked={slide.onClickLiked}
                     />
                  ))}
               </SwiperComponent>
            </Box>

            {/* Best Seller */}
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
               }}
            >
               <Star color="warning" />
               <Typography variant="h5" color="warning">
                  Best Seller
               </Typography>
            </Box>
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
               }}
            >
               <SwiperComponent
                  props={{
                     slidesPerView: 5,
                     spaceBetween: 30,
                     navigation: true,
                     loop: false,
                     modules: [Navigation],
                  }}
               >
                  {products.map((slide) => (
                     <CardComponent
                        key={slide.title}
                        imageUrl={slide.imageUrl}
                        title={slide.title}
                        description={slide.description}
                        price={slide.price}
                        quantity={slide.quantity}
                        onClickLiked={slide.onClickLiked}
                     />
                  ))}
               </SwiperComponent>
            </Box>

            {/* Promoted recently */}
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
               }}
            >
               <Star color="success" />
               <Typography variant="h5" color="success">
                  Promoted recently
               </Typography>
            </Box>
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
               }}
            >
               <SwiperComponent
                  props={{
                     slidesPerView: 5,
                     spaceBetween: 30,
                     navigation: true,
                     loop: false,
                     modules: [Navigation],
                  }}
               >
                  {products.map((slide) => (
                     <CardComponent
                        key={slide.title}
                        imageUrl={slide.imageUrl}
                        title={slide.title}
                        description={slide.description}
                        price={slide.price}
                        quantity={slide.quantity}
                        onClickLiked={slide.onClickLiked}
                     />
                  ))}
               </SwiperComponent>
            </Box>

            {/* New Arrival */}
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
               }}
            >
               <Star color="success" />
               <Typography variant="h5" color="success">
                  New Arrival
               </Typography>
            </Box>
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
               }}
            >
               <SwiperComponent
                  props={{
                     slidesPerView: 5,
                     spaceBetween: 30,
                     navigation: true,
                     loop: false,
                     modules: [Navigation],
                  }}
               >
                  {products.map((slide) => (
                     <CardComponent
                        key={slide.title}
                        imageUrl={slide.imageUrl}
                        title={slide.title}
                        description={slide.description}
                        price={slide.price}
                        quantity={slide.quantity}
                        onClickLiked={slide.onClickLiked}
                     />
                  ))}
               </SwiperComponent>
            </Box>
         </Box>
      </Box>
   );
}

export default CategoryProducts;
