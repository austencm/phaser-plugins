import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'
import { useLocalSearch } from '@/lib/use-local-search'

export default function IndexPage(props) {
  const { localSearchRepos } = props.data
  const [query, setQuery] = useState('')
  const [compat, setCompat] = useState('')

  const mostStarred = useMemo(
    () =>
      Object.values(localSearchRepos.store).sort((a, b) => b.stars - a.stars),
    [localSearchRepos]
  )

  const searchResults = useLocalSearch(
    localSearchRepos.index,
    localSearchRepos.store,
    query
  )

  const filteredResults = useMemo(() => {
    const baseResults = query ? searchResults : mostStarred

    return compat
      ? baseResults.filter((result) =>
          compat === 'unknown'
            ? result.compatibility.length === 0
            : result.compatibility.includes(compat)
        )
      : baseResults
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
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <ul>
        {filteredResults?.map((result, i) => (
          <li key={i}>{result.name}</li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    localSearchRepos {
      index
      store
    }
  }
`
