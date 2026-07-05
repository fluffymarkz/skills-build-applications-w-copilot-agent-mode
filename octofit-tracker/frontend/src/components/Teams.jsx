import DataPage from './DataPage'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const teamsUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { header: 'Team', key: 'name' },
  { header: 'Mascot', key: 'mascot' },
  { header: 'Coach', key: 'coach' },
  { header: 'Members', key: 'memberCount' },
  { header: 'Points', key: 'totalPoints' },
]

function Teams() {
  return (
    <DataPage
      title="Teams"
      resourceName="teams"
      resourceUrl={teamsUrl}
      columns={columns}
      emptyMessage="No teams have been created yet."
    />
  )
}

export default Teams