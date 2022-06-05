import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'

import '@/css/main.css'
import { useLocalSearch } from '@/lib/use-local-search'
import RepoCard from '@/components/repo-card'
import SearchFields from '@/components/search-fields'
import Sidebar from '@/components/sidebar'

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
    <main className="h-screen grid grid-cols-[280px_auto]">
      <Helmet>
        <title>Phaser Plugins</title>
      </Helmet>

      <header className="row-span-2 border-r">
        <Sidebar />
      </header>

      <div className="border-b">
        <SearchFields
          totalItems={mostStarred.length}
          onChange={onChangeSearch}
        />
      </div>

      <ol className="grid grid-cols-3 overflow-auto">
        {filteredResults?.map((result) => (
          <li key={result.id} className="p-10 border border-t-0 border-l-0">
            <RepoCard data={result} />
          </li>
        ))}
      </ol>
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
