<h1 align="center">
  <a href="https://phaserplugins.com">
    <img alt="Phaser Plugins" src="https://raw.githubusercontent.com/austencm/phaser-plugins/main/static/logo.png" width="440" />
  </a>
</h1>

<h3 align="center">
  Unofficial plugin catalog for the <a href="https://phaser.io" target="_blank">Phaser framework</a>. Also includes some other useful stuff like starters & examples.<br />
</h3>

<h3 align="center">
  <a href="https://phaserplugins.com">phaserplugins.com</a>
</h3>

## Contributing

Add repos to [`data/repos.json`](https://github.com/austencm/phaser-plugins/data/repos.json).

Each repo should have the following properties:

```
{
  repo: 'owner/name',        // Owner and name of a GitHub repo, separated by a slash.
  compatibility: ['2', '3'], // List of Phaser versions this repo supports, as strings. If unknown, leave as an empty array.
  tags: ['plugin'],          // List of tags describing this repo. Common tags: 'plugin', 'example', 'starter'.
}
```

## To-do

- [x] ~~Move to Netlify~~
- [ ] Virtualize scrolling for improved performance
- [x] ~~Automatic data refresh~~
- [x] ~~Compatibility filter~~
- [x] ~~Tags~~
