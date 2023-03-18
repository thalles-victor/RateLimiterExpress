import express, { NextFunction, Request, Response } from "express";
import { RateLimiterMemory, IRateLimiterOptions } from "rate-limiter-flexible";

const app = express();
app.use(express.json());

/* ---------------Rater limiter config------------------- */
const opts: IRateLimiterOptions = {
  points: 8, //Número de requisições permitidas
  duration: 5, // Tempo de espera após exeder o número de requisições,
};

const limiter = new RateLimiterMemory(opts);

async function rateManyRequestMiddleWare(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    await limiter.consume(request.ip);
    next();
  } catch {
    return response.status(409).json({
      statusCode: 429,
      message: "Limit of requests exceeded",
    });
  }
}
/* -------------------------------------------------------- */

/* ---------------API-------------------------------------- */
app.get("/", rateManyRequestMiddleWare, (request, response) => {
  return response.status(200).json({
    message: "Hello api",
  });
});

const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVER_PORT}`);
});
/* -------------------------------------------------------- */
