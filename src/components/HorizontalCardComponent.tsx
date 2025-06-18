import { Card, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
function HorizontalCardComponent() {
      return (
            <Card
                  sx={{
                        maxWidth: 380,
                        width: '100%',
                        height: 176,
                        backgroundColor: 'fff',
                        padding: '10px',
                        borderRadius: '0px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                  }}
            >
                   <div className="flex w-full flex-col h-full justify-around">
                        <div className="flex  items-center justify-between">
                              <Typography
                                    noWrap
                                    variant="h6"
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
                            
                        </div>
                        <div className="flex w-full justify-between mt-4">
                              <div className="flex-1">
                                    <Typography
                                          color="text.secondary"
                                          noWrap
                                    >
                                          Narxi : $100
                                    </Typography>
                                    <Typography
                                          color="text.secondary"
                                          noWrap
                                    >
                                          Soni : 1
                                    </Typography>
                              </div>
                              <CardActions disableSpacing sx={{ flexGrow: 0, width: 'auto'}}>
                                    <IconButton aria-label="add to favorites">
                                          <FavoriteIcon />
                                    </IconButton>
                              </CardActions>
                        </div>
                  </div>
                  <CardMedia
                        sx={{
                              objectFit: 'cover',
                              height: 176,
                              width: '50%',
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

            </Card>
      )
}

export default HorizontalCardComponent;
