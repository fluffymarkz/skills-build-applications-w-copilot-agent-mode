import DataPage from './DataPage'

const columns = [
  { header: 'Name', key: 'name' },
  { header: 'Email', key: 'email' },
  { header: 'Role', key: 'role' },
  { header: 'Team', key: 'team' },
  { header: 'Grade', key: 'grade' },
  { header: 'Points', key: 'points' },
]

function Users() {
  return (
    <DataPage
      title="Users"
      resourceName="users"
      columns={columns}
      emptyMessage="No users have been added yet."
    />
  )
}

export default Users