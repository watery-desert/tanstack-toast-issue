import toast from "react-hot-toast";

export const showToast =  (message: string) => {
        toast.error(message, {
            position: 'bottom-right',
          });
}