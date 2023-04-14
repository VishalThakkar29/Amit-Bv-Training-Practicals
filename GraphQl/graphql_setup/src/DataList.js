import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./DataList.css"
const DataList = (data) => {
    console.log(data.data?.characters.results)
    const dataNew = data.data?.characters?.results

    return (
        <>

            {dataNew?.map((data) => {
                return (
                    <>


                        <Card sx={{ maxWidth: 345 }} key={data.id}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={data.image}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>

                        </Card>


                    </>
                )
            })}
        </>
    )
}

export default DataList








// export default function MediaCard() {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 sx={{ height: 140 }}
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 title="green iguana"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//     );
// }