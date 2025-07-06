import Button from '@mui/material/Button';
import { Link } from 'react-router';

function Header() {
   return (
      <div className="w-full h-full flex justify-between items-center px-4 text-white border-2">
         <div className="flex items-center text-primary">
            <Link to="/" style={{ fontSize: '40px', fontWeight: 'bold' }}>
               Mahalliy Market
            </Link>
         </div>
         <div className="flex items-center gap-8 ">
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
               <Link to={'/signup'}> Sign up</Link>
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
               <Link to={'/login'}>Log in</Link>
            </Button>
         </div>
      </div>
   );
}

export default Header;
