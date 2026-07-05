import { useEffect, useState } from 'react'

const viteCodespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = viteCodespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function getApiUrl(resourceName) {
  return `${apiBaseUrl}/${resourceName}/`
}

function normalizeCollectionResponse(payload, resourceName) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  if (Array.isArray(payload[resourceName])) {
    return payload[resourceName]
  }

  if (Array.isArray(payload.results)) {
    return payload.results
  }

  if (Array.isArray(payload.data)) {
    return payload.data
  }

  if (Array.isArray(payload.items)) {
    return payload.items
  }

  return []
}

export function useCollection(resourceName, resourceUrl = getApiUrl(resourceName)) {
  const [state, setState] = useState({
    data: [],
    error: null,
    loading: true,
  })

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollection() {
      setState({ data: [], error: null, loading: true })

      try {
        const response = await fetch(resourceUrl, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        const data = normalizeCollectionResponse(payload, resourceName)

        setState({ data, error: null, loading: false })
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        setState({ data: [], error: error.message, loading: false })
      }
    }

    loadCollection()

    return () => controller.abort()
  }, [resourceName, resourceUrl])

  return state
}