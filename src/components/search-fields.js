export default function SearchFields(props) {
  const { onChange } = props

  return (
    <>
      <input
        type="search"
        onChange={(e) => onChange({ query: e.target.value })}
      />

      <div>
        <label htmlFor="search-compat">Compatibility</label>
        <select
          id="search-compat"
          onChange={(e) => onChange({ compat: e.target.value })}
        >
          <option value="">Any</option>
          <option value="3">Phaser 3</option>
          <option value="2">Phaser 2</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </>
  )
}
