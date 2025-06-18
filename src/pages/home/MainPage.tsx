import NavbarComponent from "@/components/mainpage/NavbarComponent";
import SearchComponent from "@/components/mainpage/SearchComponent";
import SwiperComponent from "@/components/mainpage/SwiperComponent";
import HotProducts from "./HotProducts";
import { exampleData } from "@/constants";
import CardComponent from "@/components/CardComponent";
import { Button } from "@mui/material";

const Tags: string[] = ["tag1", "tag2", "tag3", "tag4", "tag5"];

function MainPage() {
  return (
    <div className="flex flex-col gap-4">
	{/* Subheader:  Search , Tags */}
	<div className="flex justify-center items-center h-[220px] w-full">
	  <div className="w-2/4">
	    <SearchComponent placeholder="Search" tags={Tags} />
	  </div>
	</div>
	{/* Navigation, Categories and Carousel */}
	<div className="flex h-[480px] relative">
	  <div className="absolute top-0 left-0 w-full h-full -z-0">
	    <SwiperComponent />  
	  </div>
	  {/* Slider Navbar */}
	  <div className="flex max-h-[50px] mt-2  px-[40px]  z-0">
	    <NavbarComponent />
	  </div>
	</div>
	{/* Hot Products and Latest Products */}
	<div className="flex flex-col gap-8">
		{/* Hot Products and  */}
		<div className="flex w-full pt-4">
			<div className="flex flex-col w-full ">
				<h4 className="text-3xl font-bold border-b-2 border-gray-300 mb-8" >Hot Products</h4>
				<HotProducts />
			</div>
		</div>
		{/* Latest Products and New Products */}
		<div className="flex w-full  flex-col ">
		<h4 className="text-3xl font-bold border-b-2 border-gray-300  mb-8 " >Latest Products</h4>
			<div className={`grid grid-cols-5 ${exampleData.length < 10 ? "grid-rows-1" : "grid-rows-2"} gap-x-2 gap-y-8`}>
				{
					exampleData.slice(0, 10).map((item, index) => (
						<CardComponent {...item} key={index} />
					))
				}	
			</div>
			<div className="flex justify-end pt-4">
				<Button variant='text' color='success'>Ko'proq ko'rish</Button>
			</div>
		</div>
		{/* Cooperated Brands and Companies */}
		<div className="flex w-full h-[100px] bg-primary items-center justify-center">
			<h1 className="text-3xl font-bold text-white">Hamkor brandalar</h1>
		</div>
	</div>
    </div>
  );
}

export default MainPage;