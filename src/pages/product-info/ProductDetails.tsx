import ImageWrapper from '@/components/ImageWrapper';
import { categories } from '@/constants';
import {
   Avatar,
   Box,
   Button,
   Chip,
   IconButton,
   Rating,
   Typography,
} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { formatPrice } from '@/utils';
import {
   FavoriteBorder,
   ShoppingCart,
   WarningOutlined,
} from '@mui/icons-material';

const productTypes = [
   { id: '1', label: 'Hot', isActive: true },
   { id: '2', label: 'Yangi', isActive: false },
   { id: '3', label: 'Ishlatilgan', isActive: false },
];

const productDetailedInfo = {
   companyName: 'Company Name',
   productName: 'Product Name',
   madeId: 'Uzbekistan',
   sertificate: 'Certificate Name',
   address: '123 Main St, City, Country',
   isVerified: true,
   contact: '+1234567890',
   email: 'TtYyQ@example.com',
};

interface Product {
   id: number;
   name: string;
   price: number;
   originalPrice?: number;
   image: string;
   rating: number;
   reviews: number;
   seller: string;
   sellerRating?: number | string;
   category: string;
   isHot?: boolean;
   isNew?: boolean;
   isUsed?: boolean;
   isWishlisted: boolean;
   description: string;
   features: string[];
   images: string[];
}

const product: Product = {
   id: 1,
   name: 'Product Name',
   price: 12000000,
   originalPrice: 15000000,
   image: 'width_800.jpg',
   rating: 4.5,
   reviews: 500,
   seller: 'Company Name',
   sellerRating: 4.5,
   category: 'Category Name',
   isHot: true,
   isNew: false,
   isUsed: false,
   isWishlisted: false,
   description:
      'Product description goes here. It should be concise and informative, providing all necessary details about the product to help customers make an informed decision.',
   features: ['Feature one', 'Feature two', 'Feature three'],
   images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
};

function ProductDetails() {
   return (
      <Box className="w-full h-full">
         {/* Category Navigation */}
         <ul className="list-none p-0 m-0 flex border-y border-gray-200 h-[64px]">
            {categories.map(
               (category) =>
                  category.isActive !== false && (
                     // Render only if the category is active
                     <li
                        key={category.id}
                        className="p-4 hover:bg-gray-100 h-full"
                     >
                        <a className="text-sm font-bold w-full h-full">
                           {category.label}
                        </a>
                     </li>
                  ),
            )}
         </ul>

         {/* Product Details */}
         <Box className="container  flex flex-col gap-6 w-full h-full">
            <Box className="flex w-full items-center justify-self-start h-[32px]">
               <a href="" className="">
                  Go Back
               </a>
            </Box>
            {/* Product Images and Info */}
            <section>
               <Typography variant="h4" className="font-bold">
                  Product Name
               </Typography>
               <Box className="flex w-full h-[512px] items-start justify-between gap-4">
                  {/* Images on Left side */}
                  <Box className="w-3/5 h-full flex gap-2">
                     {/* Images options */}
                     <Box className="w-1/5 h-full border-2">
                        {/* <ImageList>Images</ImageList> */}
                     </Box>
                     {/* One Image */}
                     <Box className="w-4/5 h-full border border-gray-300">
                        <Box className="w-full h-full bg-gray-300">
                           <ImageWrapper
                              style={{ width: '100%', height: '100%' }}
                              src="width_800.jpg"
                              alt="width_800.jpg"
                              className="object-cover w-full h-full"
                           />
                        </Box>
                     </Box>
                  </Box>

                  {/* Product Info on Right side*/}
                  <Box
                     className="w-2/5 h-full"
                     sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                  >
                     <Box
                        sx={{
                           display: 'flex',
                           gap: 1,
                           alignItems: 'center',
                           justifyContent: 'space-between',
                        }}
                     >
                        {productTypes.map(
                           (type) =>
                              type.isActive && (
                                 // Render only if the type is active
                                 <Chip
                                    key={type.id}
                                    label={type.label}
                                    variant="filled"
                                    color={type.isActive ? 'error' : 'primary'}
                                 />
                              ),
                        )}
                        <Box
                           sx={{
                              width: '128px',
                              display: 'flex',
                              alignItems: 'center',
                           }}
                        >
                           <Typography>Shikoyat</Typography>
                           <IconButton>
                              <WarningOutlined />
                           </IconButton>
                        </Box>
                     </Box>
                     {/* Seller Company */}
                     <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                     >
                        <Avatar sx={{ width: 64, height: 64 }} />
                        <Box
                           sx={{
                              display: 'flex',
                              flexGrow: 1,
                              flexDirection: 'column',
                              gap: 0.5,
                           }}
                        >
                           <Typography>Company Name</Typography>
                           <Rating
                              name="half-rating"
                              defaultValue={3}
                              precision={1}
                              readOnly
                           ></Rating>
                        </Box>
                     </Box>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 1,
                        }}
                     >
                        <GradeIcon
                           sx={{ color: 'primary.main' }}
                           fontSize="large"
                        />
                        <Typography variant="body2" color="text.secondary">
                           <span className="font-bold text-xl">4.5</span> ({500}{' '}
                           reviews)
                        </Typography>
                     </Box>
                     {/* Price */}
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 2,
                           mt: 1,
                        }}
                     >
                        <Typography
                           variant="h4"
                           color="primary.main"
                           fontWeight="bold"
                        >
                           {formatPrice(12000000)}
                        </Typography>
                        {/* {product.originalPrice && ( */}
                        <Typography
                           variant="h6"
                           color="text.secondary"
                           sx={{ textDecoration: 'line-through' }}
                        >
                           {formatPrice(15000000)}
                        </Typography>
                        {/* )} */}
                     </Box>
                     <Typography
                        sx={{ fontSize: '16px' }}
                        color="text.secondary"
                     >
                        Product description goes here. It should be concise and
                        informative, providing all necessary details about the
                        product to help customers make an informed decision.
                     </Typography>
                     {/* Key Features */}
                     <Box>
                        <Typography variant="h6" fontWeight="bold" mb={1}>
                           Key Features
                        </Typography>
                        <Box
                           component="ul"
                           sx={{ listStyleType: 'disc', pl: 2, m: 0 }}
                        >
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
                                    <Typography variant="body2">
                                       {feature}
                                    </Typography>
                                 </Box>
                              ))}
                           </Box>
                        </Box>
                     </Box>
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           height: '100%',
                           justifyContent: 'flex-end',
                        }}
                     >
                        <Box
                           sx={{
                              display: 'flex',
                              gap: 2,
                           }}
                        >
                           <Button
                              variant="outlined"
                              // onClick={() => onToggleWishlist(product.id)}
                              startIcon={
                                 <IconButton
                                    aria-label="add to wishlist"
                                    color={
                                       product.isWishlisted
                                          ? 'primary'
                                          : 'default'
                                    }
                                 >
                                    <FavoriteBorder />
                                 </IconButton>
                              }
                              sx={{ flex: 1 }}
                           >
                              {product.isWishlisted
                                 ? 'Remove from Wishlist'
                                 : 'Add to Wishlist'}
                           </Button>
                           <Button
                              variant="contained"
                              // onClick={() => onAddToCart(product.id)}
                              startIcon={<ShoppingCart />}
                              sx={{ flex: 1 }}
                           >
                              Add to Cart
                           </Button>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </section>
            {/* Related Product Gallery */}
            <section>
               <Typography variant="h5" fontWeight="bold" mb={2}>
                  Related Products
               </Typography>
               <Box
                  sx={{
                     display: 'flex',
                     gap: 2,
                     height: '216px',
                     border: '1px solid red',
                     overflowX: 'auto',
                     padding: '8px',
                     '&::-webkit-scrollbar': {
                        display: 'none', // Hide scrollbar
                     },
                  }}
               >
                  {product.images.map((image, index) => (
                     <Box
                        key={index}
                        sx={{
                           minWidth: '200px',
                           height: '100%',
                           border: '1px solid #ccc',
                           borderRadius: '4px',
                           overflow: 'hidden',
                        }}
                     >
                        <ImageWrapper
                           src={image}
                           alt={`Product Image ${index + 1}`}
                           className="object-cover w-full h-full"
                        />
                     </Box>
                  ))}
               </Box>
            </section>

            {/* Company of a product necessary info  */}
            <section>
               <table className="w-full h-[128px] border-2">
                  <tr className="border-1 border-gray-300">
                     <th className="w-2/12 border-1 border-gray-300 p-1 bg-gray-200">
                        <Typography variant="h6" fontWeight="bold">
                           Product Name
                        </Typography>
                     </th>
                     <td className="w-4/12 p-1">
                        <Typography>
                           {productDetailedInfo.productName}
                        </Typography>
                     </td>
                     <th className="w-2/12 border-1 border-gray-300 p-1 bg-gray-200">
                        <Typography variant="h6" fontWeight="bold">
                           Compnany Name
                        </Typography>
                     </th>
                     <td className="w-4/12 p-1">
                        <Typography>
                           {productDetailedInfo.companyName}
                        </Typography>
                     </td>
                  </tr>
                  <tr className="border-1 border-gray-300">
                     <th className="border-1 border-gray-300  p-1 bg-gray-200">
                        <Typography variant="h6" fontWeight="bold">
                           Made In
                        </Typography>
                     </th>
                     <td className="p-1">
                        <Typography>{productDetailedInfo.madeId}</Typography>
                     </td>
                     <th className="border-1 border-gray-300  p-1 bg-gray-200">
                        <Typography variant="h6" fontWeight="bold">
                           Sertificate / License
                        </Typography>
                     </th>
                     <td className="p-1">
                        <Typography>
                           {productDetailedInfo.sertificate}
                        </Typography>
                     </td>
                  </tr>
                  <tr className="border-1 border-gray-300">
                     <th className="border-1 border-gray-300  p-1 bg-gray-200">
                        <Typography variant="h6" fontWeight="bold">
                           Contact
                        </Typography>
                     </th>
                     <td className="p-1">
                        <Typography>
                           {productDetailedInfo.contact}, Mahalliy Market
                           costumer center{' '}
                        </Typography>
                     </td>
                  </tr>
               </table>
            </section>

            {/* Image Reklama */}
            <section>
               <ImageWrapper
                  src="ProductDetailedInfo.svg"
                  alt=""
                  style={{ width: '100%', height: '100%', padding: '64px' }}
                  className="object-cover w-full h-full"
               ></ImageWrapper>
            </section>

            {/* Comments */}
            <section>
               <Typography variant="h5" fontWeight="bold" mb={2}>
                  Comments
               </Typography>
               <Box sx={{ height: '216px', border: '1px solid red' }}>
                  Comments
               </Box>
            </section>

            {/* Leave feedback */}
            <section>
               <Typography variant="h5" fontWeight="bold" mb={2}>
                  Leave Feedback
               </Typography>
               <Box sx={{ height: '128px', border: '1px solid red' }}></Box>
            </section>
         </Box>
      </Box>
   );
}

export default ProductDetails;
