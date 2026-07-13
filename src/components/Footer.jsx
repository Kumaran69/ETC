import {
Box,
Container,
Grid,
Typography
} from "@mui/material";

export default function Footer(){

return(

<Box
sx={{
mt:8,
bgcolor:"#212121",
color:"white",
py:5
}}
>

<Container>

<Grid container spacing={4}>

<Grid item xs={12} md={4}>

<Typography variant="h5">
Luxe Cosmetics
</Typography>

<Typography>
Premium beauty products crafted for every skin tone.
</Typography>

</Grid>

<Grid item xs={12} md={4}>

<Typography variant="h6">
Quick Links
</Typography>

<Typography>Home</Typography>
<Typography>Products</Typography>
<Typography>About</Typography>
<Typography>Contact</Typography>

</Grid>

<Grid item xs={12} md={4}>

<Typography variant="h6">
Customer Care
</Typography>

<Typography>Email: support@luxecosmetics.com</Typography>

<Typography>
Phone: +1 800 555 LUXE
</Typography>

</Grid>

</Grid>

<Box mt={4} textAlign="center">

<Typography>

© 2026 Luxe Cosmetics. All Rights Reserved.

</Typography>

</Box>

</Container>

</Box>

)

}