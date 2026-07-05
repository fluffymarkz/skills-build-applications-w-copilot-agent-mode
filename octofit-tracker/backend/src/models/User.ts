import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['student', 'coach'], required: true },
    team: { type: String, required: true },
    grade: { type: Number, min: 9, max: 12 },
    fitnessGoal: { type: String, required: true },
    points: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collection: 'users' },
);

export const User = model('User', userSchema);