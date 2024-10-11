import toast from "react-hot-toast";

import { SuccessIcon, ErrorIcon } from "@/assets/icons";

const useToast = () => {
  const options = (backgroundColor: string, color: string) => ({
    style: {
      backgroundColor,
      color,
      fontWeight: "400",
      minWidth: "200px",
      maxWidth: "800px",
      minHeight: "52px",
      opacity: 0.9,
      paddingLeft: "20px",
      paddingRight: "20px"
    },
    duration: 4000
  });

  const toastSuccess = (message: string) => {
    toast.success(message, {
      ...options("#D5F4D3", "#4CD169"),
      icon: <SuccessIcon />
    });
  };

  const toastError = (message: string) => {
    toast.error(message, {
      ...options("#FECECE", "#EE3148"),
      icon: <ErrorIcon />
    });
  };

  return { toastSuccess, toastError };
};

export default useToast;
