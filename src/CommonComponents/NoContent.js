import { Typography, TextField, Button, Box, Grid } from '@mui/material';
import NoContentImage from '../assets/image/NoContentImage.svg'

const NoContent = () => {

    return (
        <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item md={12} textAlign={"center"}>
                <img src={NoContentImage}  height={"400px"} width={"auto"}/>
            </Grid>
            <Grid md={12} textAlign={"center"}>
                <h2>No Record Found</h2>
            </Grid>
        </Grid>
    )
}

export default NoContent;