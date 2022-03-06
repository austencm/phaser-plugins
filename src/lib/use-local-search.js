import { useMemo } from 'react'
import FlexSearch from 'flexsearch'

export function useLocalSearch(indexExport, store, query) {
  const index = useMemo(() => {
    const flexsearchIndex = new FlexSearch()
    flexsearchIndex.import(indexExport)
    return flexsearchIndex
  }, [indexExport])

  const results = useMemo(
    () => index.search(query).map((id) => store[id]),
    [index, store, query]
  )

  return results
}
