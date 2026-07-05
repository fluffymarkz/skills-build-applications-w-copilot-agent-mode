import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { API_PORT, getApiBaseUrl } from './config/apiUrl.js';
import './config/database.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import teamsRouter from './routes/teams.js';
import usersRouter from './routes/users.js';
import workoutsRouter from './routes/workouts.js';

const app = express();
const apiBaseUrl = getApiBaseUrl();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api', apiBaseUrl });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.listen(API_PORT, () => {
  console.log(`OctoFit Tracker API running on port ${API_PORT}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});