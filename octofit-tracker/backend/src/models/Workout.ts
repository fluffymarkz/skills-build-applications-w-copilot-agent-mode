import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    recommendedFor: [{ type: String, required: true }],
    description: { type: String, required: true },
  },
  { timestamps: true, collection: 'workouts' },
);

export const Workout = model('Workout', workoutSchema);