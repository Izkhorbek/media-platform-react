import { useState } from 'react';
import {
   Dialog,
   DialogTitle,
   DialogContent,
   Button,
   Chip,
   Typography,
   Box,
   Rating,
   IconButton,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
   ChevronLeft,
   ChevronRight,
   Close,
   Favorite,
   ShoppingCart,
} from '@mui/icons-material';
import type { ProductModalProps } from '@/interface';

const ProductModal = ({
   product,
   open,
   onClose,
   onToggleWishlist,
   onAddToCart,
   isInWishlist,
}: ProductModalProps) => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   if (!product) return null;

   const formatPrice = (price: number) => {
      return new Intl.NumberFormat('uz-UZ').format(price) + ' som';
   };

   const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
   };

   const prevImage = () => {
      setCurrentImageIndex(
         (prev) => (prev - 1 + product.images.length) % product.images.length,
      );
   };

   return (
      <Dialog
         open={open}
         onClose={onClose}
         maxWidth="md"
         fullWidth
         slotProps={{
            paper: { sx: { maxHeight: '90vh' } },
         }}
      >
         <DialogTitle
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
            }}
         >
            <Typography variant="h5">{product.name}</Typography>
            <IconButton onClick={onClose}>
               <Close />
            </IconButton>
         </DialogTitle>

         <DialogContent>
            <Grid container spacing={3}>
               <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ mb: 2 }}>
                     <Box sx={{ position: 'relative' }}>
                        <Box
                           component="img"
                           src={product.images[currentImageIndex]}
                           alt={product.name}
                           sx={{
                              width: '100%',
                              height: 320,
                              objectFit: 'cover',
                              borderRadius: 2,
                           }}
                        />
                        {product.images.length > 1 && (
                           <>
                              <IconButton
                                 sx={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    bgcolor: 'rgba(255,255,255,0.8)',
                                    '&:hover': { bgcolor: 'white' },
                                 }}
                                 onClick={prevImage}
                              >
                                 <ChevronLeft />
                              </IconButton>
                              <IconButton
                                 sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    bgcolor: 'rgba(255,255,255,0.8)',
                                    '&:hover': { bgcolor: 'white' },
                                 }}
                                 onClick={nextImage}
                              >
                                 <ChevronRight />
                              </IconButton>
                           </>
                        )}
                     </Box>

                     {product.images.length > 1 && (
                        <Box
                           sx={{
                              display: 'flex',
                              gap: 1,
                              mt: 2,
                              overflowX: 'auto',
                           }}
                        >
                           {product.images.map((image, index) => (
                              <Box
                                 key={index}
                                 component="img"
                                 src={image}
                                 alt={`${product.name} ${index + 1}`}
                                 sx={{
                                    width: 64,
                                    height: 64,
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    cursor: 'pointer',
                                    border: index === currentImageIndex ? 2 : 1,
                                    borderColor:
                                       index === currentImageIndex
                                          ? 'primary.main'
                                          : 'grey.300',
                                    transition: 'border-color 0.2s',
                                 }}
                                 onClick={() => setCurrentImageIndex(index)}
                              />
                           ))}
                        </Box>
                     )}
                  </Box>
               </Grid>

               <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                     {product.isHot && (
                        <Chip label="Hot" color="error" size="small" />
                     )}
                     {product.isNew && (
                        <Chip label="New" color="success" size="small" />
                     )}
                     <Chip
                        label={product.category}
                        variant="outlined"
                        size="small"
                     />
                  </Box>

                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 2,
                     }}
                  >
                     <Rating value={product.rating} precision={0.1} readOnly />
                     <Typography variant="body2" color="text.secondary">
                        ({product.reviews} reviews)
                     </Typography>
                  </Box>

                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                     }}
                  >
                     <Typography
                        variant="h4"
                        color="primary.main"
                        fontWeight="bold"
                     >
                        {formatPrice(product.price)}
                     </Typography>
                     {product.originalPrice && (
                        <Typography
                           variant="h6"
                           color="text.secondary"
                           sx={{ textDecoration: 'line-through' }}
                        >
                           {formatPrice(product.originalPrice)}
                        </Typography>
                     )}
                  </Box>

                  <Typography
                     variant="body1"
                     color="text.secondary"
                     sx={{ mb: 3 }}
                  >
                     {product.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                     <Typography variant="h6" sx={{ mb: 1 }}>
                        Key Features:
                     </Typography>
                     <Box component="ul" sx={{ pl: 0, m: 0 }}>
                        {product.features.map((feature, index) => (
                           <Box
                              key={index}
                              component="li"
                              sx={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 gap: 1,
                                 mb: 0.5,
                                 listStyle: 'none',
                              }}
                           >
                              <Box
                                 sx={{
                                    width: 6,
                                    height: 6,
                                    bgcolor: 'primary.main',
                                    borderRadius: '50%',
                                 }}
                              />
                              <Typography variant="body2">{feature}</Typography>
                           </Box>
                        ))}
                     </Box>
                  </Box>

                  <Typography
                     variant="body2"
                     color="text.secondary"
                     sx={{ mb: 3 }}
                  >
                     Sold by: <strong>{product.seller}</strong>
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                     <Button
                        variant="outlined"
                        onClick={() => onToggleWishlist(product.id)}
                        startIcon={
                           <Favorite
                           // size={20}
                           // color={isInWishlist ? '#ef4444' : 'currentColor'}
                           // fill={isInWishlist ? '#ef4444' : 'none'}
                           />
                        }
                        sx={{ flex: 1 }}
                     >
                        {isInWishlist
                           ? 'Remove from Wishlist'
                           : 'Add to Wishlist'}
                     </Button>
                     <Button
                        variant="contained"
                        onClick={() => onAddToCart(product.id)}
                        startIcon={<ShoppingCart />}
                        sx={{ flex: 1 }}
                     >
                        Add to Cart
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </DialogContent>
      </Dialog>
   );
};

export default ProductModal;
