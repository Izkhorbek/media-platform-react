import { CardActions, CardMedia, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Card from '@mui/material/Card'
import type { ICardComponentProps } from '@/interface/ICardComponentProps'


function CardComponent({ props }: ICardComponentProps) {
      return (
            <Card
                  sx={{
                        maxWidth: 275,
                        width: '100%',
                        height: 355,
                        backgroundColor: 'fff',
                        padding: '10px',
                        borderRadius: '0px',
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
                                    transition: 'opacity 0.3s ease-in-out',
                              },
                        }}
                        component="img"
                        image="/image/width_800.jpg"
                        alt=""
                  />
                  <div className="flex  items-center justify-between">
                        <Typography
                              noWrap
                              align="left"
                              color="text.primary"
                              component="div"
                              sx={{
                                    fontSize: '16px',
                                    flexGrow: 1,
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2, // Hide everything after the first line
                                    whiteSpace: 'normal',
                                    lineHeight: '1.4em',
                                    mt: 1,
                              }}
                        >
                              Lizard_Lizard_ Lizard _Lizard_Lizard_Lizard_
                        </Typography>
                        <CardActions disableSpacing sx={{ flexGrow: 0 }}>
                              <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                              </IconButton>
                        </CardActions>
                  </div>
                  <div className="flex w-full justify-between">
                        <Typography
                              variant="h6"
                              color="text.secondary"
                              noWrap
                              sx={{ mt: 1 }}
                        >
                              Price : $100
                        </Typography>
                        <Typography
                              variant="h6"
                              color="text.secondary"
                              noWrap
                              sx={{ mt: 1 }}
                        >
                              Quantity : 1
                        </Typography>
                  </div>
            </Card>
      )
}

export default CardComponent
