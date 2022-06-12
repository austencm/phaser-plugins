import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'

import '@/css/main.css'
import { useLocalSearch } from '@/lib/use-local-search'
import RepoCard from '@/components/repo-card'
import SearchFields from '@/components/search-fields'
import Sidebar from '@/components/sidebar'
import Head from '@/components/head'

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
    <main className="lg:h-screen lg:grid lg:grid-cols-[280px_auto]">
      <Head />

      <header className="row-span-2 pb-8 sm:pb-0 border-r border-b lg:border-b-0">
        <Sidebar />
      </header>

      <div className="lg:h-screen lg:flex lg:flex-col">
        <div className="sticky top-0 z-10 lg:static h-min border-b lg:border-t-0 bg-white">
          <SearchFields
            totalItems={mostStarred.length}
            onChange={onChangeSearch}
          />
        </div>

        {filteredResults.length !== 0 ? (
          <ol className="grid md:grid-cols-2 xl:grid-cols-3 overflow-auto">
            {filteredResults?.map((result) => (
              <li
                key={result.id}
                className="p-6 lg:p-10 border border-t-0 border-l-0"
              >
                <RepoCard data={result} />
              </li>
            ))}
          </ol>
        ) : (
          <div className="max-w-sm mt-10 mx-auto">
            <div className="mx-6 px-16 py-4 border text-center text-sm">
              No results :(
            </div>
          </div>
        )}
      </div>
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
