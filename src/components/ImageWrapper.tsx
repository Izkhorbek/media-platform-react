import { Box } from '@mui/material';
import type { ImageProps } from '@/props';
const ImageWrapper = ({
  src,
  alt = '',
  className = '',
  style = {},
  onClick = () => {},
  loading = 'lazy',
}: ImageProps) => {
  const defaultPath = '/images/';
  return (
    <Box sx={style}>
      <img
        src={`${defaultPath}${src}`}
        alt={alt}
        loading={loading}
        className={className}
        onClick={onClick}
        // onError={(e) => {
        //   e.currentTarget.src = `${defaultPath}default-image.png`;
        // }}
      />
    </Box>
  );
};

export default ImageWrapper;
