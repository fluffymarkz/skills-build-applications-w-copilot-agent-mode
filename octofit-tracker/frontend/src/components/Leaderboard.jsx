import DataPage from './DataPage'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const leaderboardUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

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
      resourceUrl={leaderboardUrl}
      columns={columns}
      emptyMessage="No leaderboard entries are available yet."
    />
  )
}

export default Leaderboard