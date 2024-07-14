import mongoose from "mongoose";

export const ConnectDB = async()=> {
    await mongoose.connect('mongodb+srv://agarwalharshvardhan081:**,,harsh2580**,,@cluster0.mrtzkg6.mongodb.net/food-del').then(()=> console.log('DB Connected'))

}