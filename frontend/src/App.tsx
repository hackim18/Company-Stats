import { RouterProvider } from "react-router-dom";
import router from "./routes";
export const dynamic = "force-dynamic";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
