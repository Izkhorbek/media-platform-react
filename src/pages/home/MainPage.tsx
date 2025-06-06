import NavbarComponent from "../../components/NavbarComponent";
import SearchComponent from "../../components/SearchComponent";

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
      <div className="flex h-[478px] bg-[#96FD87] relative">
        {/* Slider */}
        {/* Slider Navbar */}
        <div className="flex max-h-[50px] mt-2  px-[40px] ">
          <NavbarComponent />
        </div>
        {/* Slider Footer Reklama */}
      </div>
      {/* Hot Products and  */}
      <div className=""></div>
      {/* Latest Products and New Products */}
      <div className=""></div>
      {/* Cooperated Brands and Companies */}
      <div className=""></div>
    </div>
  );
}

export default MainPage;
