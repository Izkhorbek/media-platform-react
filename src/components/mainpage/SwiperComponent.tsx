import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import ImageWrapper from '../ImageWrapper';

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
      <div className="h-full w-full">
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
   );
}

export default SwiperComponent;
