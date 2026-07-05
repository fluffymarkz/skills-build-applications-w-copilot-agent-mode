import DataPage from './DataPage'

const columns = [
  { header: 'Rank', key: 'rank' },
  { header: 'Name', key: 'userName' },
  { header: 'Team', key: 'team' },
  { header: 'Points', key: 'points' },
  { header: 'Streak', render: (entry) => `${entry.streakDays} days` },
]

function Leaderboard() {
  return (
    <DataPage
      title="Leaderboard"
      resourceName="leaderboard"
      columns={columns}
      emptyMessage="No leaderboard entries are available yet."
    />
  )
}

export default Leaderboard