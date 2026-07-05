import { useCollection } from '../api'
import DataTable from './DataTable'

function DataPage({ columns, emptyMessage, resourceName, resourceUrl, title }) {
  const { data, error, loading } = useCollection(resourceName, resourceUrl)

  return (
    <section className="data-page">
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
        <div>
          <p className="section-label mb-2">OctoFit Tracker</p>
          <h1 className="mb-0">{title}</h1>
        </div>
        <div className="summary-chip align-self-start align-self-md-center">
          {loading ? 'Loading' : `${data.length} records`}
        </div>
      </div>

      {error && (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      )}

      {loading && (
        <div className="placeholder-panel rounded-3 border bg-white shadow-sm">
          <span className="placeholder col-8"></span>
          <span className="placeholder col-5"></span>
          <span className="placeholder col-10"></span>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="empty-panel rounded-3 border bg-white shadow-sm">
          {emptyMessage}
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <DataTable columns={columns} rows={data} />
      )}
    </section>
  )
}

export default DataPage