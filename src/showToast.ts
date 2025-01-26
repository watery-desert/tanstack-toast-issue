import toast from "react-hot-toast";

export const showToast =  (error: Error) => {
        toast.error(error.message, {
            position: 'bottom-right',
          });
}