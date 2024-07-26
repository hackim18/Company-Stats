import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successAlert = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const errorAlert = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const warningAlert = (message: string) => {
  toast.warning(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const infoAlert = (message: string) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const alert = (message: string, type: "success" | "error" | "warning" | "info") => {
  switch (type) {
    case "success":
      successAlert(message);
      break;
    case "error":
      errorAlert(message);
      break;
    case "warning":
      warningAlert(message);
      break;
    case "info":
      infoAlert(message);
      break;
  }
};
