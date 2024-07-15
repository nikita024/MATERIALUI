import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1b4a7075ed9cfba2cfda9f53d4a346fb";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonResponse = await response.json();
            const result = {
                city: city.toUpperCase(),
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="City"
                    label="City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button
                    variant="contained"
                    type="submit"
                    endIcon={<SendIcon />}
                >
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists</p>}
            </form>
        </div>
    );
}
