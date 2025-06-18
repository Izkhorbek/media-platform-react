import { Outlet } from "react-router";
import { AdsComponent, Header } from "../components/index";
import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function MainLayout() {
  return (
    <>
      {/* Advertisement */}
      <div className="width-full h-screen  mx-auto flex flex-col  max-w-[1440px] relative">
        <AdsComponent onAdClosed={() => console.log("Ad closed")} />
        <header className="w-full">
          <Header />
        </header>
        <Outlet />
        <footer className="mt-auto bg-gray-100">
          <div className="grid grid-cols-2 text-gray-500 text-sm h-[340px] p-4">
            {/*Left Side  */}
            <div className="flex flex-col p-4">
              <div className="flex-1 flex flex-col justify-center items-center ">
                <div className="flex flex-col w-1/2">
                  <span className="md:text-[40px] text-2xl font-bold">Mahalliy market</span>
                  <p className="flex flex-wrap flex-1/4 mt-4">Your number one site for selling and buying clothes, cosmetics and home goods.</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span>© 2025 Mahalliy market</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex p-4">
              <div className="grid grid-cols-2 grid-rows-2 w-2/3">
                  <div className="flex flex-col gap-y-2">
                      <span className="font-bold">Buy</span>
                      <span>Create a profile</span>
                      <span>Set up payment type</span>
                      <span>Inbox</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                      <span className="font-bold">Sell</span>
                      <span>Create a profile</span>
                      <span>List your items</span>
                      <span>Boost your items</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                      <span className="font-bold">Help</span>
                      <span>FAQ</span>
                      <span>How to guides</span>
                      <span>Contact us</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                      <span>Terms and conditions</span>
                      <span>Privacy policy</span>
                  </div>
              </div>
              <Box className="flex flex-col justify-end border-gray-300  w-1/3 items-end">
                <Box>
                    <span className="font-bold pl-3">Follow us</span>
                    <Box className="flex justify-center items-center ">
                      <IconButton size="large">
                        <Instagram />
                      </IconButton >
                      <IconButton size="large">
                        <Facebook />
                      </IconButton>
                      <IconButton size="large">
                        <LinkedIn />
                      </IconButton>
                    </Box>
                </Box>
              </Box>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
