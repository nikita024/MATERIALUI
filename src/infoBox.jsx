import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
export default function infoBox(info) {
    const INIT_URL = "https://images.unsplash.com/photo-1694153273644-68a821119e2e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D"
    
    return(
        <div className="InfoBox">
            
            <div className="cardContainer" > 
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}</p>
         <p>Max Temp={info.tempMax}</p>
         <p>THe weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}</p>
         
         
         
        </Typography>
      </CardContent>
  </Card>
  </div>
 </div>
);
}
