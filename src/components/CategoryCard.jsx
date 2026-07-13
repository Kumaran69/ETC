import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export default function CategoryCard({
  image,
  title,
  description,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        textAlign: "center",
        transition: ".3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        height="240"
      />

      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography color="text.secondary">
          {description}
        </Typography>

        <Button
          sx={{ mt: 2 }}
          variant="contained"
        >
          Shop Now
        </Button>
      </CardContent>
    </Card>
  );
}