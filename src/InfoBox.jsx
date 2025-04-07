import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";
export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1699240893341-6750644e05aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsZWFyJTIwc2t5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const Hot_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Cold_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Rainy_URL = "https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            <h2>Weather Information</h2>
            <div className="cardcontainer">
                <Card sx={{ maxWidth: 345 ,backgroundColor: '#e1f5fe' ,borderRadius: '16px'}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.Humidity > 80 ? Rainy_URL : info.temp > 15 ? Hot_URL : Cold_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}  {info.Humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"} >
                            <p>Temperature={info.temp}&deg;C</p>
                            <p>Min Temp={info.tempMin}&deg;C</p>
                            <p>Max Temp={info.tempMax}&deg;C</p>
                            <p>Humidity={info.humidity}&deg;C</p>
                            <p>The weather can be described as <i> {info.weather}</i> and feels Like={info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}