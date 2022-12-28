import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import enviroments from "./config/enviroments";
import AllRoutes from "./routes/mysql.routes"

const app = express();

// Settings
app.set("PORT", process.env.PORT);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to my application'});
});

app.use('/api', AllRoutes);

export default app;