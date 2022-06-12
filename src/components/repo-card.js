import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import starIcon from '@/images/star-outline.svg'
import forkIcon from '@/images/source-fork.svg'
import compatIcon from '@/images/set-none.svg'

dayjs.extend(localizedFormat)

const numberFormat = Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
  notation: 'compact',
  compactDisplay: 'short',
})

function Stat(props) {
  const { value, label, icon } = props

  return (
    <div
      role="presentation"
      className="grid grid-flow-col auto-cols-min gap-x-1"
    >
      <img
        src={icon}
        width={20}
        height={20}
        className="min-w-[20px] mt-1 mr-0.5 row-span-2 opacity-50"
        loading="lazy"
        alt=""
        aria-hidden="true"
      />
      <dd className="mb-0.5 sm:text-lg leading-tight">{value}</dd>
      <dt className="text-neutral-500 text-sm">{label}</dt>
    </div>
  )
}

export default function RepoCard(props) {
  const { data } = props
  const date = dayjs(data.updatedAt)

  return (
    <article className="flex flex-col h-full overflow-hidden">
      <div className="flex justify-between items-start space-x-6">
        <div>
          <address className="text-neutral-400 leading-tight after:content-['/']">
            <a
              href={data.ownerUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {data.ownerLogin}
            </a>
          </address>
          <h2 className="text-xl sm:text-2xl mb-3 font-bold leading-tight">
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: data.name }}
            />
          </h2>
          <p
            className="text-sm text-neutral-700"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <time
            datetime={date.format()}
            className="block mt-4 text-xs text-neutral-800 font-medium"
          >
            Updated {date.format('ll')}
          </time>
        </div>

        <a
          href={data.ownerUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
        >
          <img
            src={data.imageUrl}
            width={50}
            height={50}
            alt={data.ownerLogin}
            loading="lazy"
            className="h-[50px] object-cover rounded-full border"
          />
        </a>
      </div>

      <dl className="flex items-center space-x-7 mt-auto pt-6">
        <Stat
          value={numberFormat.format(data.stars)}
          label="Stars"
          icon={starIcon}
        />
        <Stat
          value={numberFormat.format(data.forks)}
          label="Forks"
          icon={forkIcon}
        />
        <Stat
          value={data.compatibility.join(' / ') || '?'}
          label="Compat."
          icon={compatIcon}
        />
      </dl>
    </article>
  )
}
