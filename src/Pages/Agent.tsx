
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";


export const Agent = () => {
    return (
        <Box>
            <Grid container spacing={2} className='Rolex'>
                
                <Grid xs={4}>
                        
                    <Box width='18.38px' height='17.72px' top='1.97px' left='1.31px'>
                        <img src={process.env.PUBLIC_URL + '/publish.svg'} alt=""></img>
                        
                        <Box width='119px' height='36px' top='523px' left='201px'>
                            <Typography  variant="body2">Published</Typography>
                        </Box>
                        
                    </Box>
                    
                </Grid>
                
                <Grid xs={2}>
                    <Box width='144px' height='41px' top='511px' left='848px' borderRadius='5px' bgcolor='white'>
                        <Button startIcon={<AddIcon/>} variant="text" >Add Listing</Button>
                    </Box>
                </Grid>
                
                <Grid xs={4}>
                   <Box width='374px' height='41px' top='511px' left='1008px' borderRadius='5px'> 
                    <Button startIcon={<AddIcon/>} variant="text" >Maps</Button>
                    <Button startIcon={<AddIcon/>} variant="text" >Cards</Button>
                    <Button startIcon={<AddIcon/>} variant="text" >Table</Button>
                    </Box>
                </Grid>
                
                <Grid xs={2}>
                    <Box width='127px' height='41px' top='512px' left='1397px' borderRadius='5px'>
                    <Button endIcon={<AddIcon/>} variant="text" >Lable</Button>
                    </Box>
                </Grid>
                <Grid xs={3}>
                <Card sx={{ width: 432, height: 719, top: 590, left: 150, borderRadius: 15 }} className='card-outer'>
                    <Card sx={{ width: 402, height: 302, top: 605, left: 165, borderRadius: 10 }} className='card-inner'>
                    <CardMedia       
                        component="img"
                        
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                        alt=""
                    />
                    </Card>
                </Card>
                   
                </Grid>
            </Grid>
        </Box>
    )
}

