import DataPage from './DataPage'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const workoutsUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

const columns = [
  { header: 'Workout', key: 'title' },
  { header: 'Focus', key: 'focusArea' },
  { header: 'Difficulty', key: 'difficulty' },
  { header: 'Duration', render: (workout) => `${workout.durationMinutes} min` },
  { header: 'Recommended For', key: 'recommendedFor' },
]

function Workouts() {
  return (
    <DataPage
      title="Workouts"
      resourceName="workouts"
      resourceUrl={workoutsUrl}
      columns={columns}
      emptyMessage="No workout recommendations are available yet."
    />
  )
}

export default Workouts