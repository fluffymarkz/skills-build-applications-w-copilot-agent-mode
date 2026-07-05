import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      {
        name: 'Blue Barracudas',
        mascot: 'Barracuda',
        coach: 'Paul Octo',
        memberCount: 4,
        totalPoints: 1480,
      },
      {
        name: 'Gold Griffins',
        mascot: 'Griffin',
        coach: 'Jessica Cat',
        memberCount: 4,
        totalPoints: 1325,
      },
      {
        name: 'Green Gazelles',
        mascot: 'Gazelle',
        coach: 'Morgan Lee',
        memberCount: 3,
        totalPoints: 980,
      },
    ]);

    await User.insertMany([
      {
        name: 'Maya Chen',
        email: 'maya.chen@mergington.edu',
        role: 'student',
        team: 'Blue Barracudas',
        grade: 10,
        fitnessGoal: 'Improve 5K pace before spring track tryouts',
        points: 520,
      },
      {
        name: 'Jordan Smith',
        email: 'jordan.smith@mergington.edu',
        role: 'student',
        team: 'Gold Griffins',
        grade: 11,
        fitnessGoal: 'Build upper-body strength for climbing club',
        points: 475,
      },
      {
        name: 'Ava Patel',
        email: 'ava.patel@mergington.edu',
        role: 'student',
        team: 'Blue Barracudas',
        grade: 9,
        fitnessGoal: 'Stay active for at least 30 minutes after school',
        points: 450,
      },
      {
        name: 'Ethan Rivera',
        email: 'ethan.rivera@mergington.edu',
        role: 'student',
        team: 'Green Gazelles',
        grade: 12,
        fitnessGoal: 'Balance cardio and strength training each week',
        points: 410,
      },
      {
        name: 'Paul Octo',
        email: 'paul.octo@mergington.edu',
        role: 'coach',
        team: 'Blue Barracudas',
        fitnessGoal: 'Help every student build a sustainable fitness habit',
        points: 0,
      },
    ]);

    await Activity.insertMany([
      {
        userEmail: 'maya.chen@mergington.edu',
        activityType: 'Outdoor run',
        durationMinutes: 38,
        intensity: 'high',
        pointsEarned: 95,
        completedAt: new Date('2026-07-01T15:45:00Z'),
      },
      {
        userEmail: 'jordan.smith@mergington.edu',
        activityType: 'Strength circuit',
        durationMinutes: 45,
        intensity: 'moderate',
        pointsEarned: 80,
        completedAt: new Date('2026-07-02T16:20:00Z'),
      },
      {
        userEmail: 'ava.patel@mergington.edu',
        activityType: 'Brisk walk',
        durationMinutes: 30,
        intensity: 'moderate',
        pointsEarned: 55,
        completedAt: new Date('2026-07-03T14:10:00Z'),
      },
      {
        userEmail: 'ethan.rivera@mergington.edu',
        activityType: 'Yoga mobility flow',
        durationMinutes: 25,
        intensity: 'low',
        pointsEarned: 35,
        completedAt: new Date('2026-07-04T13:30:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        rank: 1,
        userName: 'Maya Chen',
        team: 'Blue Barracudas',
        points: 520,
        streakDays: 9,
      },
      {
        rank: 2,
        userName: 'Jordan Smith',
        team: 'Gold Griffins',
        points: 475,
        streakDays: 7,
      },
      {
        rank: 3,
        userName: 'Ava Patel',
        team: 'Blue Barracudas',
        points: 450,
        streakDays: 6,
      },
      {
        rank: 4,
        userName: 'Ethan Rivera',
        team: 'Green Gazelles',
        points: 410,
        streakDays: 5,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'After-School Cardio Kickstart',
        focusArea: 'Cardio endurance',
        difficulty: 'beginner',
        durationMinutes: 25,
        recommendedFor: ['new runners', 'general fitness'],
        description: 'A walk-jog interval session designed to build confidence and steady pacing.',
      },
      {
        title: 'Bodyweight Strength Builder',
        focusArea: 'Strength training',
        difficulty: 'intermediate',
        durationMinutes: 35,
        recommendedFor: ['team training', 'upper-body strength'],
        description: 'Pushups, squats, planks, and lunges arranged in coach-approved circuits.',
      },
      {
        title: 'Recovery Mobility Reset',
        focusArea: 'Mobility',
        difficulty: 'beginner',
        durationMinutes: 20,
        recommendedFor: ['recovery days', 'injury prevention'],
        description: 'Gentle stretching and mobility work for students balancing school and sports.',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
