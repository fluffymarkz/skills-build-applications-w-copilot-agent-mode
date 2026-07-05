import DataPage from './DataPage'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const activitiesUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short',
})

const columns = [
  { header: 'Student', key: 'userEmail' },
  { header: 'Activity', key: 'activityType' },
  { header: 'Duration', render: (activity) => `${activity.durationMinutes} min` },
  { header: 'Intensity', key: 'intensity' },
  { header: 'Points', key: 'pointsEarned' },
  {
    header: 'Completed',
    render: (activity) => dateFormatter.format(new Date(activity.completedAt)),
  },
]

function Activities() {
  return (
    <DataPage
      title="Activities"
      resourceName="activities"
      resourceUrl={activitiesUrl}
      columns={columns}
      emptyMessage="No activities have been logged yet."
    />
  )
}

export default Activities