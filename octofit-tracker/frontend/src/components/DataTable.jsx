function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value === undefined || value === null || value === '') {
    return '-'
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return value
}

function DataTable({ columns, rows }) {
  return (
    <div className="table-responsive rounded-3 border bg-white shadow-sm">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            {columns.map((column) => (
              <th scope="col" key={column.header}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row._id ?? row.id ?? JSON.stringify(row)}>
              {columns.map((column) => (
                <td key={column.header}>
                  {formatValue(column.render ? column.render(row) : row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable