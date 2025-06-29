import Button from '@mui/material/Button';

function Header() {
   return (
      <div className="w-full h-full flex justify-between items-center px-4 text-white border-2">
         <div className="flex items-center text-primary">
            <span className="text-[40px] font-bold">Mahalliy Market</span>
         </div>
         <div className="flex items-center gap-8 border border-white">
            <Button
               variant="contained"
               style={{
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '100px',
                  fontSize: '16px',
                  height: '36px',
                  width: '100px',
               }}
            >
               Sign up
            </Button>
            <Button
               variant="contained"
               color="primary"
               style={{
                  borderRadius: '100px',
                  fontSize: '16px',
                  height: '36px',
                  width: '100px',
               }}
            >
               Log in
            </Button>
         </div>
      </div>
   );
}

export default Header;
