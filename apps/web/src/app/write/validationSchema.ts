import * as Yup from "yup";

export const validationSchema = Yup.object({
    title: Yup.string().required("Title is Required"),
    category: Yup.string().required("category is Required"),
    thumbnail: Yup.array().min(1),
    description: Yup.string().required("Description is required"),
    content: Yup.string().required("content is required"),

})