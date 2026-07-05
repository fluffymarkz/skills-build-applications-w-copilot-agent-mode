import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    rank: { type: Number, required: true, min: 1 },
    userName: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true, min: 0 },
    streakDays: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);