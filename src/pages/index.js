import { graphql } from 'gatsby'

export default function IndexPage(props) {
  const { localSearchPlugins } = props

  return (
    <main>
      <title>Home Page</title>
    </main>
  )
}

export const query = graphql`
  query {
    localSearchPlugins {
      index
      store
    }
  }
`
