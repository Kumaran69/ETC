import {
AppBar,
Toolbar,
Typography,
Button,
Box
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

export default function Navbar() {

    const menu = [
        ["Home","/"],
        ["About","/about"],
        ["Categories","/categories"],
        ["Products","/products"],
        ["Contact","/contact"],
        ["Login","/login"]
    ];

    return (

<AppBar position="sticky">

<Toolbar>

<Typography
variant="h5"
sx={{
flexGrow:1,
fontWeight:"bold"
}}
>
Luxe Cosmetics
</Typography>

<Box>

{
menu.map((item)=>(
<Button
key={item[0]}
color="inherit"
component={Link}
to={item[1]}
>
{item[0]}
</Button>
))
}

<Button
color="inherit"
component={Link}
to="/cart"
startIcon={<ShoppingCartIcon />}
>
Cart
</Button>

</Box>

</Toolbar>

</AppBar>

    );
}