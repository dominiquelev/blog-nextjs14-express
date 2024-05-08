import * as Yup from "yup";

export const validationSchema = Yup.object({
    password: Yup.string().required("Please enter your passeord").min(8, "Your password is too short"),
    confirmPassword: Yup.string().required("Please retype your password.").oneOf([Yup.ref("password")], "Your passwords do not match.")
})