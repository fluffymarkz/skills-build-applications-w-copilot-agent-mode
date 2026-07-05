import DataPage from './DataPage'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const usersUrl = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

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
      resourceUrl={usersUrl}
      columns={columns}
      emptyMessage="No users have been added yet."
    />
  )
}

export default Users