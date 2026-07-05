import DataPage from './DataPage'

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
      columns={columns}
      emptyMessage="No workout recommendations are available yet."
    />
  )
}

export default Workouts