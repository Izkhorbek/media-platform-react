import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import ImageWrapper from '../ImageWrapper';
import { Box, Link } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const slides = [
   {
      id: 1,
      image: 'swiper_1.svg',
   },
   {
      id: 2,
      image: 'swiper_2.svg',
   },
   {
      id: 3,
      image: 'swiper_3.svg',
   },
   {
      id: 4,
      image: 'swiper_4.svg',
   },
];

function SwiperComponent() {
   return (
      <>
         <div className="h-full w-full z-0">
            {/* Main Swiper -> pass  thumbs swiper instance */}
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
               modules={[Autoplay, EffectFade, Pagination, Navigation]}
            >
               {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                     <ImageWrapper
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="w-full h-full object-cover"
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <div className="h-[40px] absolute inline-flex items-center justify-center p-8 right-0 bottom-0 z-1">
            <Box>
               <Link
                  href="/product/1"
                  underline="hover"
                  color="inherit"
                  sx={{
                     color: 'white',
                     bgColor: 'rgba(0, 0, 0, 0.5)',
                     border: '1px solid white',
                     padding: '10px',
                     ':hover': {
                        color: 'black',
                        bgColor: 'white',
                     },
                  }}
               >
                  Go to show
                  <ArrowForward />
               </Link>
            </Box>
         </div>
      </>
   );
}

export default SwiperComponent;
