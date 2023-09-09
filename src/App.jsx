import "./App.css";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import cities from "./data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <SearchAppBar />
            <Container sx={{ marginTop: "2rem" }}>
                {cities.map((city, index) => (
                    <>
                        <Typography
                            sx={{ marginTop: "2rem", marginBottom: "1rem" }}
                            variant="h4"
                            component="h2"
                        >
                            Top {city.name} tours
                        </Typography>
                        <Grid container spacing={5}>
                            {city.tours.map((dest, index) => (
                                <ToursCard {...dest} key={index} />
                            ))}
                        </Grid>
                    </>
                ))}
            </Container>
        </>
    );
}

export default App;
