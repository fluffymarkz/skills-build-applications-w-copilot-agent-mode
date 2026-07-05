import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    userEmail: { type: String, required: true },
    activityType: { type: String, required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    intensity: { type: String, enum: ['low', 'moderate', 'high'], required: true },
    pointsEarned: { type: Number, required: true, min: 0 },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true, collection: 'activities' },
);

export const Activity = model('Activity', activitySchema);