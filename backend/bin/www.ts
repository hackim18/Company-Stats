import { app } from "../app";

const PORT: number = parseInt(process.env.PORT ?? "3000");

app.listen(PORT, () => {
  console.clear();
  console.log("server is running on port ", PORT);
});
