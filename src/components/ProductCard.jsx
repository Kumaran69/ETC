import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export default function ProductCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ mt: 2 }}
        >
          {price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}