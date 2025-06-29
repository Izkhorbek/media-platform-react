import React from 'react';
import { type SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SwiperComponentProps {
   props: SwiperOptions;
   dataList?: any[];
   renderItem?: (item: any, index: number) => React.ReactNode;
   children?: React.ReactNode;
}

function SwiperComponent({
   props,
   dataList,
   renderItem,
   children,
}: SwiperComponentProps) {
   return (
      <Swiper {...props}>
         {dataList && renderItem ? (
            dataList.map((item, index) => (
               <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
            ))
         ) : children ? (
            React.Children.map(children, (child, index) => (
               <SwiperSlide key={index}>{child}</SwiperSlide>
            ))
         ) : (
            <div>No items to display</div>
         )}
      </Swiper>
   );
}

export default SwiperComponent;
