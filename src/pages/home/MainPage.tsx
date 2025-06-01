import Navbar from "../../components/Navbar";
import SearchComponent from "../../components/SearchComponent";

const Tags: string[] = ["tag1", "tag2", "tag3", "tag1", "tag2", "tag3"];

function MainPage() {
  return (
    <div className="flex flex-col">
      {/* Subheader:  Search , Tags */}
      <div className="flex justify-center items-center h-[220px] w-full">
        <div className="w-2/4">
          <SearchComponent placeholder="Search" tags={Tags} />
        </div>
      </div>
      {/* Navigation, Categories and Corousel */}
      <div className="flex  h-[478px] bg-[#96FD87] relative">
        {/* Slider Navbar */}
        <Navbar></Navbar>
        {/* Slider */}
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
