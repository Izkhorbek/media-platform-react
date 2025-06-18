import Button from "@mui/material/Button";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center h-[76px] px-14 text-white ">
        <div className="flex items-center text-primary">
          <span className="text-[40px] font-bold">Mahalliy Market</span>
        </div>
        <div className="flex items-center gap-8 border border-white">
          <Button
            variant="contained"
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "100px",
              fontSize: "16px",
              height: "36px",
              width: "100px",
            }}
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "100px",
              fontSize: "16px",
              height: "36px",
              width: "100px",
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
