import { Request, Response, NextFunction } from "express";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  let statusCode: number = 500;
  let errorMessage: string = "Internal Server Error";
  console.log({ errorName: err.name });
  console.log({ errorMessage: err.message });
  switch (err.name) {
    case "ValidationError":
      statusCode = 400;
      errorMessage = err.message || "Validation Error";
      break;
    case "BadRequest":
      statusCode = 400;
      errorMessage = err.message || "Bad Request";
      break;
    case "Unauthorized":
      statusCode = 401;
      errorMessage = err.message || "Unauthorized";
      break;
    case "NotFound":
      statusCode = 404;
      errorMessage = err.message || "Not Found";
      break;
    case "Forbidden":
      statusCode = 403;
      errorMessage = err.message || "You're not authorized";
      break;
    case "BSONError":
      statusCode = 400;
      errorMessage = err.message || "Invalid ObjectId";
    default:
      statusCode = 500;
      errorMessage = "Internal Server Error";
  }
  res.status(statusCode).json({ message: errorMessage });
}

export default errorHandler;
