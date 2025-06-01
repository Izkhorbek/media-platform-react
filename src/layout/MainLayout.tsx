import { Outlet } from "react-router";
import { AdsComponent, Header } from "../components/index";

function MainLayout() {
  return (
    <>
      {/* Advertisement */}
      <div className="width-full h-screen  mx-auto flex flex-col  max-w-[1440px] shadow-lg relative">
        <AdsComponent onAdClosed={() => console.log("Ad closed")} />
        <header className="">
          <Header />
        </header>
        <Outlet />
        <footer className="mt-auto">
          <div className="grid grid-cols-2 text-gray-500 text-sm">
            {/*Left Side  */}
            <div className="flex justify-between items-center h-[78px] px-14 text-gray-800 bg-footer-color">
              <span className="text-2xl font-bold">Mahalliy Market</span>
              <div className="flex items-center gap-8">
                <span>© 2023 Mahalliy Market</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
            {/* Right Side */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
