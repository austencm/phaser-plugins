<h1 align="center">
  <a href="https://phaserplugins.com">
    <img alt="Lumen" title="Lumen" src="https://raw.githubusercontent.com/austencm/phaser-plugins/master/static/phaser-plugins-logo.png" width="208" />
  </a>
</h1>

<h5 align="center">
  Unofficial open source plugin repository for the <a href="https://phaser.io" target="_blank">Phaser</a> framework. Created with <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>. <a href="https://lunrjs.com/" target="_blank">Lunr</a> for search.
</h5>

<h5 align="center">
  <a href="https://phaserplugins.com">phaserplugins.com</a>
</h5>

## Contributing

Add plugins to the master list in [`content/plugins.js`](https://github.com/austencm/phaser-plugins/content/plugins.js).

Each plugin should include the following data:
```
{
  repo: 'owner/name',  // Owner and name of a Github repo, separated by a slash.
  compatibility: [],   // A list Phaser versions this plugin supports, as strings. Typically either '2' or '3'. If unknown, leave as an empty array.  
}
```

## Folder Structure

```
└── content
    └── plugins.js
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── components
    ├── constants
    ├── templates
    └── utils

```
