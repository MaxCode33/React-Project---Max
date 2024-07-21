

import Swal from "sweetalert2";
export const showSuccessDialog = (title: string, text: string) => {
    return Swal.fire({
        title,
        text,
        icon: "success",
        iconColor: "#181bcc",
        confirmButtonColor: "#181bcc",


    });
};
export const showErrorDialog = (title: string, text: string) => {
    return Swal.fire({
        title,
        text,
        icon: "error",
        iconColor: "#181bcc",
        confirmButtonColor: "#181bcc",

    });
};

export const showSuccessCreate = (title: string, text: string) => {
    return Swal.fire({
        position: "top-end",
        icon: "success",
        iconColor: "#181bcc",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500

    });
}

const dialogs = { success: showSuccessDialog, error: showErrorDialog, create: showSuccessCreate };
export default dialogs;