import DataPage from './DataPage'

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
      columns={columns}
      emptyMessage="No teams have been created yet."
    />
  )
}

export default Teams