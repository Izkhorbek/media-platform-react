import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import type { ICardComponentProps } from '@/interface';
import { RemoveRedEye, ShoppingCartOutlined, Star } from '@mui/icons-material';
import { formatPrice } from '@/utils';

function CardComponent({ props }: ICardComponentProps) {
   function setSelectedProduct(product: any): void {
      throw new Error('Function not implemented.');
   }

   function onAddToCart(id: any): void {
      throw new Error('Function not implemented.');
   }

   return (
      <Card
         sx={{
            maxWidth: 270,
            width: '100%',
            minHeight: 460,
            backgroundColor: 'fff',
            padding: '10px',
            borderRadius: '0px',
            '&:hover': {
               boxShadow: 6,
            },
         }}
      >
         <CardMedia
            sx={{
               objectFit: 'cover',
               height: 240,
               width: '100%',
               cursor: 'pointer',
               '&:hover': {
                  opacity: 0.8,
               },
            }}
            component="img"
            image="/images/width_800.jpg"
            alt=""
         />
         <CardContent
            sx={{
               flexGrow: 1,
               display: 'flex',
               flexDirection: 'column',
               paddingX: 0,
            }}
         >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
               <Star fontSize="small" sx={{ color: '#FFD700' }} />
               <Typography
                  variant="body2"
                  component="div"
                  fontWeight={'bold'}
                  color="text.secondary"
               >
                  {4.5}
               </Typography>
               <Typography variant="body2" ml={1} color="text.secondary">
                  ({67})
               </Typography>
            </Box>

            <Typography
               noWrap
               sx={{
                  height: '48px',
                  fontSize: '18px',
                  fontWeight: '500',
                  flexGrow: 1,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2, // Hide everything after the second line
                  whiteSpace: 'normal',
                  lineHeight: '1.2em',
               }}
            >
               Lizard_Lizard _Lizard_Lizard_Lizard_Lizard_Lizard_Lizard_Lizard_
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
               by {'product.seller'}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
               <Typography variant="h6" color="primary.main" fontWeight="bold">
                  {formatPrice(1500000)}
               </Typography>
               {/* {product.originalPrice && ( */}
               <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through' }}
               >
                  {formatPrice(2000000)}
               </Typography>
               {/* )} */}
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
               <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setSelectedProduct('product')}
                  startIcon={<RemoveRedEye />}
                  sx={{ flex: 1 }}
               >
                  View
               </Button>
               <Button
                  variant="contained"
                  size="small"
                  onClick={() => onAddToCart('product.id')}
                  startIcon={<ShoppingCartOutlined />}
                  sx={{ flex: 1 }}
               >
                  Add
               </Button>
            </Box>
         </CardContent>
      </Card>
   );
}

export default CardComponent;
