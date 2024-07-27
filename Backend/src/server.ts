// Import statements with types
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

/////  IMPORTING ROUTES  ////
import defaultRouter from "./routes/default.routes";
import authRouter from "./routes/auth.routes";
import noteRouter from "./routes/note.routes";


interface UserBasicInfo {
  idUser: number;
  username: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserBasicInfo | null;
    }
  }
}

const app = express(); // Type inference for app (express.Application)

/////  MIDDLEWARES /////
// Middlewares with type annotations
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8081"],
  } as cors.CorsOptions)
);
app.use(cookieParser());

app.use(express.json()); // Type inference for request body parsing
app.use(express.urlencoded({ extended: true })); // Type inference for form data parsing

// Route usage with type annotations
app.use(defaultRouter);
app.use(authRouter);
app.use(noteRouter);

// Error handler with type annotations
// En caso de que no se encuentre
app.use((req: express.Request, res: express.Response) => {
  res.status(404).send("No se encontro esta pagina");
});

export default app;
