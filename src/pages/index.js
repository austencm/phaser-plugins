import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'

import '@/css/main.css'
import { useLocalSearch } from '@/lib/use-local-search'
import RepoCard from '@/components/repo-card'
import SearchFields from '@/components/search-fields'

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

  const onChangeSearch = ({ query, compat }) => {
    if (typeof query !== 'undefined') setQuery(query)
    if (typeof compat !== 'undefined') setCompat(compat)
  }

  return (
    <div>
      <title>Home Page</title>

      <main>
        <SearchFields onChange={onChangeSearch} />

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
