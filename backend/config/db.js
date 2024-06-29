import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://prasannaachar:ironman8230prasanna@cluster0.tjuumqp.mongodb.net/Food-delivery').then(()=>console.log("DB Connected"));
}