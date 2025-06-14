import NavbarComponent from "@/components/mainpage/NavbarComponent";
import SearchComponent from "@/components/mainpage/SearchComponent";
import SwiperComponent from "@/components/mainpage/SwiperComponent";
import CardComponent from "../../components/CardComponent";

const Tags: string[] = ["tag1", "tag2", "tag3", "tag4", "tag5"];

function MainPage() {
  return (
    <div className="flex flex-col">
      {/* Subheader:  Search , Tags */}
      <div className="flex justify-center items-center h-[220px] w-full">
        <div className="w-2/4">
          <SearchComponent placeholder="Search" tags={Tags} />
        </div>
      </div>
      {/* Navigation, Categories and Carousel */}
      <div className="flex h-[478px] relative">
        <div className="absolute top-0 left-0 w-full h-full -z-0">
          <SwiperComponent />
        </div>
        {/* Slider */}
        {/* Slider Navbar */}
        <div className="flex max-h-[50px] mt-2  px-[40px]  z-0">
          <NavbarComponent />
        </div>
      </div>
      {/* Hot Products and  */}
      <BaseFrame>
        <CardComponent></CardComponent>
      </BaseFrame>
      {/* Latest Products and New Products */}
      <div className=""></div>
      {/* Cooperated Brands and Companies */}
      <div className=""></div>
    </div>
  );
}

export default MainPage;

const BaseFrame = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-[478px] border w-full">{children}</div>;
};
