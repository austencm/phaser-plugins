import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'

import '@/css/main.css'
import { useLocalSearch } from '@/lib/use-local-search'
import RepoCard from '@/components/repo-card'

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
  }, [query, searchResults, mostStarred, compat])

  console.log(searchResults, mostStarred)

  return (
    <div>
      <title>Home Page</title>

      <main>
        <input type="search" onChange={(e) => setQuery(e.target.value)} />

        <div>
          <label htmlFor="search-compat">Compatibility</label>
          <select
            id="search-compat"
            onChange={(e) => setCompat(e.target.value)}
          >
            <option value="">Any</option>
            <option value="3">Phaser 3</option>
            <option value="2">Phaser 2</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <ol className="grid grid-cols-3">
          {filteredResults?.map((result) => (
            <li key={result.id} className="p-10 border border-t-0 border-l-0">
              <RepoCard data={result} />
            </li>
          ))}
        </ol>
      </main>
    </div>
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
