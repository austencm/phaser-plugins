import searchIcon from '@/images/magnify.svg'
import compatIcon from '@/images/set-none.svg'
import tagIcon from '@/images/tag-outline.svg'

const filterClasses =
  'group h-8 sm:h-auto grid grid-stack items-center border-l border-t sm:border-t-0 focus-within:bg-black/5'

export default function SearchFields(props) {
  const { totalItems, onChange } = props

  return (
    <div className="flex relative">
      <div className="group h-[46px] sm:h-[56px] flex flex-col grow border-l-4 border-black focus-within:bg-black/5">
        <label htmlFor="search-query" className="sr-only">
          Search {totalItems} repos
        </label>
        <div className="h-full grid grid-stack items-center">
          <img
            src={searchIcon}
            width="26"
            alt=""
            aria-hidden="true"
            className="ml-3 pointer-events-none z-10 opacity-50 group-focus-within:opacity-100"
          />
          <input
            id="search-query"
            className="h-full pl-11 pr-3 text-base lg:text-lg bg-transparent focus-visible:outline-none"
            type="search"
            placeholder={`Search ${totalItems} repos`}
            onChange={(e) => onChange({ query: e.target.value })}
          />
        </div>
      </div>

      <div className="absolute sm:static bottom-full right-0 flex">
        <div className={filterClasses}>
          <label htmlFor="search-compat" className="sr-only">
            Compatibility
          </label>
          <img
            src={compatIcon}
            width="26"
            alt=""
            aria-hidden="true"
            className="ml-3 pointer-events-none z-10 opacity-50 group-focus-within:opacity-100"
          />
          <select
            className="h-full pl-11 pr-3 mr-3 bg-transparent text-xs sm:text-sm lg:text-base focus-visible:outline-none"
            id="search-compat"
            onChange={(e) => onChange({ compat: e.target.value })}
          >
            <option value="">Any Version</option>
            <option value="3">Phaser 3</option>
            <option value="2">Phaser 2/CE</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className={filterClasses}>
          <label htmlFor="search-tags" className="sr-only">
            Tags
          </label>
          <img
            src={tagIcon}
            width="26"
            alt=""
            aria-hidden="true"
            className="ml-3 pointer-events-none z-10 opacity-50 group-focus-within:opacity-100"
          />
          <select
            className="h-full pl-11 pr-3 mr-3 bg-transparent text-xs sm:text-sm lg:text-base focus-visible:outline-none"
            id="search-tags"
            onChange={(e) => onChange({ tags: e.target.value })}
          >
            <option value="">All Tags</option>
            <option value="plugin">Plugin</option>
            <option value="example">Example</option>
            <option value="starter">Starter</option>
          </select>
        </div>
      </div>
    </div>
  )
}
