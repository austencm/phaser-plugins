import { graphql } from 'gatsby'
import { useMemo, useState } from 'react'
import { useLocalSearch } from '@/lib/use-local-search'

export default function IndexPage(props) {
  console.log(props)
  const { localSearchPlugins } = props.data
  const [query, setQuery] = useState('')

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
  console.log(searchResults, mostStarred)

  return (
    <main>
      <title>Home Page</title>

      <input type="search" onChange={(event) => setQuery(event.target.value)} />

      <ul>
        {(query ? searchResults : mostStarred)?.map((result, i) => (
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
