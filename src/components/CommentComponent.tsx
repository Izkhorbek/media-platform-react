import type { CommentProps } from '@/props';
import { Avatar, Box } from '@mui/material';

function CommentComponent({
   sx,
   props,
}: {
   sx: React.CSSProperties;
   props: CommentProps;
}) {
   return (
      <Box sx={sx}>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box>
               <Avatar src={props.user?.avatarUrl} />
               <Box>
                  <span>{props.user?.username}</span>
                  <span>{new Date(props.createdAt).toLocaleDateString()}</span>
                  {props.updatedAt && (
                     <span style={{ marginLeft: '10px' }}>
                        (Updated:{' '}
                        {new Date(props.updatedAt).toLocaleDateString()})
                     </span>
                  )}
               </Box>
            </Box>
         </Box>
      </Box>
   );
}

export default CommentComponent;
