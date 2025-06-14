import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const slides = [
  {
    id: 1,
    image: "/image/swiper_1.svg",
  },
  {
    id: 2,
    image: "/image/swiper_2.svg",
  },
  {
    id: 3,
    image: "/image/swiper_3.svg",
  },
  {
    id: 4,
    image: "/image/swiper_4.svg",
  },
];

function SwiperComponent() {
  return (
    <div className="h-full w-full">
      {/* Main Swiper -> pass  thumbs swiper instance */}
      <Swiper
        slidesPerView={1}
        effect={"fade"}
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
        modules={[Autoplay, EffectFade, Pagination]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img style={{ objectFit: "cover" }} src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
