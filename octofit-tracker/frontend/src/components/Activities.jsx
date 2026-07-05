import DataPage from './DataPage'

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
      columns={columns}
      emptyMessage="No activities have been logged yet."
    />
  )
}

export default Activities