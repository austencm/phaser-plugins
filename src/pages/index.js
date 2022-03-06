import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'
import { useLocalSearch } from '@/lib/use-local-search'

export default function IndexPage(props) {
  const { localSearchPlugins } = props.data
  const [query, setQuery] = useState('')
  const [compat, setCompat] = useState(null)

  const mostStarred = useMemo(
    () =>
      Object.values(localSearchPlugins.store).sort((a, b) => b.stars - a.stars),
    [localSearchPlugins]
  )

  const searchResults = useLocalSearch(
    localSearchPlugins.index,
    localSearchPlugins.store,
    query
  )

  const filteredResults = useMemo(() => {
    return compat
      ? searchResults.filter((result) => result.compatibility.includes(compat))
      : searchResults
  }, [searchResults, compat])

  console.log(searchResults, mostStarred)

  return (
    <main>
      <title>Home Page</title>

      <input type="search" onChange={(e) => setQuery(e.target.value)} />

      <div>
        <label htmlFor="search-compat">Compatibility</label>
        <select id="search-compat" onChange={(e) => setCompat(e.target.value)}>
          <option value="">Any</option>
          <option value="3">Phaser 3</option>
          <option value="2">Phaser 2</option>
        </select>
      </div>

      <ul>
        {(query ? filteredResults : mostStarred)?.map((result, i) => (
          <li key={i}>{result.name}</li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    localSearchPlugins {
      index
      store
      # publicIndexURL
      # publicStoreURL
      # Both publicIndexURL and publicStoreURL will return a public URL that can be fetched at run-time. For example, you could call fetch with the URLs to load the data in the background only as the user focuses your interface's search input.
    }
  }
`
