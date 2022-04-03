import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'
import { useLocalSearch } from '@/lib/use-local-search'

export default function IndexPage(props) {
  const { localSearchRepos } = props.data
  const [query, setQuery] = useState('')
  const [compat, setCompat] = useState(null)

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
    localSearchRepos {
      index
      store
    }
  }
`
