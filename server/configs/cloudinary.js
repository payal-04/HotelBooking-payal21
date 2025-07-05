import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async()=> {
    cloudinary.config({
        cloud_name: process.env.CLOIDINARY_CLOUD_NAME,
        api_key: process.env.CLOIDINARY_API_KEY,
        api_secret: process.env.CLOIDINARY_API_SECRET,

    })
}
export default connectCloudinary;