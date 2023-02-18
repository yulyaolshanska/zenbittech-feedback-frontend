import { toast } from "react-toastify";

export const successNotification = () =>
  toast.success("Thank you for your feedback!");
export const errorNotification = () => toast.error("Ooops, something wrong!");
