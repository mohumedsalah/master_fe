import swal from "sweetalert";

import i18N from "../../localization/i18n";

const DeleteConfirmation = (methodForDelete, success) => {
  return swal({
    title: i18N.t("Are you sure?"),
    text: i18N.t("Once deleted, you will not be able to recover this!"),
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      methodForDelete()
        .then((res) => {
          success();
          swal(i18N.t("Deleted Success"), {
            icon: "success",
          });
        })
        .catch((err) => {
          swal(i18N.t("Error in deleting"), {
            icon: "error",
          });
        });
    }
  });
};

export { DeleteConfirmation as deleteConfirmation };
