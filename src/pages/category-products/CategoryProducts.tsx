import CardComponent from '@/components/CardComponent';
import ImageWrapper from '@/components/ImageWrapper';
import { categories } from '@/constants';
import type { ICardComponentProps } from '@/interface/ICardComponentProps';
import { NavigateBefore } from '@mui/icons-material';
import { Box, Link, Pagination } from '@mui/material';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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

         {/* Products List */}
         <Box sx={{ width: '100%', height: '100%' }}>
            <Swiper
               slidesPerView={1}
               effect={'fade'}
               autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
               }}
               fadeEffect={{
                  crossFade: true,
               }}
               navigation={true}
               pagination={{ clickable: true }}
               loop={true}
               modules={[Autoplay, EffectFade]}
            >
               {products.map((slide) => (
                  <SwiperSlide key={slide.title}>
                     <CardComponent
                        imageUrl={slide.imageUrl}
                        title={slide.title}
                        description={slide.description}
                        price={slide.price}
                        quantity={slide.quantity}
                        onClickLiked={slide.onClickLiked}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </Box>
      </Box>
   );
}

export default CategoryProducts;
