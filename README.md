<h1 align="center">
  <a href="https://phaserplugins.com">
    <img alt="Phaser Plugins" src="https://raw.githubusercontent.com/austencm/phaser-plugins/main/static/logo.png" width="440" />
  </a>
</h1>

<h3 align="center">
  Unofficial plugin catalog for the <a href="https://phaser.io" target="_blank">Phaser framework</a>.<br />
</h3>

<h3 align="center">
  <a href="https://phaserplugins.com">phaserplugins.com</a>
</h3>

## Contributing

Add plugins to [`data/repos.json`](https://github.com/austencm/phaser-plugins/data/repos.json).

Each plugin should include the following data:

```
{
  repo: 'owner/name',  // Owner and name of a GitHub repo, separated by a slash
  compatibility: [],   // A list Phaser versions this plugin supports, as strings. Typically either '2' or '3'. If unknown, leave as an empty array.
}
```

## Roadmap

- [x] ~~Move to Netlify~~
- [ ] Virtualize scrolling for improved performance
- [x] ~~Automatic data refresh~~
- [x] ~~Compatibility filter~~
- [ ] Tags
- [ ] Phaser templates section
- [ ] Phaser examples section
