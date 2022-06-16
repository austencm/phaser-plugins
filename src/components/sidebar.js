import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import phaserLogo from '@/images/phaser-logo.png'
import rocket from '@/images/rocket-launch-outline.svg'

dayjs.extend(localizedFormat)

const links = [
  {
    label: 'Phaser on GitHub',
    url: 'https://github.com/photonstorm/phaser',
  },
  {
    label: 'Phaser 3 FAQ',
    url: 'https://github.com/samme/phaser3-faq/wiki/Getting-started-with-Phaser-3',
  },
  {
    label: 'Make a plugin',
    url: 'https://github.com/photonstorm/phaser3-plugin-template',
  },
]

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col space-y-8 py-8 px-6 text-[15px] overflow-hidden">
      <h1 className="flex flex-col items-center space-y-1">
        <img src={phaserLogo} width="200" alt="Phaser" />
        <span className="ml-[0.9em] text-sm text-center font-black tracking-[1em] uppercase">
          Plugins
        </span>
      </h1>

      <div className="mt-6 px-3 text-center leading-snug text-neutral-700">
        <p>
          Unofficial plugin catalog for the{' '}
          <a
            href="https://github.com/photonstorm/phaser"
            className="text-black hover:underline"
          >
            Phaser framework
          </a>
        </p>
        <p className="mt-3">
          <a
            href="https://github.com/austencm/phaser-plugins"
            className="inline-flex mt-1 py-1.5 px-3 text-xs text-white bg-black rounded-md hover:bg-black/80"
          >
            Contribute on GitHub
          </a>
        </p>
      </div>

      <div className="hidden lg:block pt-6 border-t">
        <h2 className="mb-3 font-bold">Links</h2>
        <ul className="flex flex-col space-y-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                className="text-neutral-700 hover:text-black hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="group !mt-auto opacity-20 hover:opacity-100 hidden lg:inline-flex items-center text-xs">
        <img
          src={rocket}
          width="24"
          alt="Phaser"
          className="mr-4 group-hover:transition group-hover:duration-1000 group-hover:ease-in group-hover:translate-x-80 group-hover:-translate-y-36 group-hover:rotate-[25deg]"
        />
        Last data update: {dayjs().format('ll')}
      </div>
    </div>
  )
}
