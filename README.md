<h1 align="center"><a href="https://lesesalen.github.io/ordbok/">ordbok</a></h1>
<p align="center">
    <a href="https://github.com/lesesalen/ordbok/actions"><img alt="GitHub Actions Status" src="https://github.com/lesesalen/ordbok/workflows/pipeline/badge.svg" /></a>
</p>

<p align="center">
    <b>Ever been confused by words and phrases used at informatics? Look no further</b>
</p>

<p align="center">
</p>

## Contributing

Add your phrases and words to `./lib/entries.json` using the following format:

```ts
{
  // The actual name of the entry
  name: string;
  // Aliases, or commonly used nicknames
  aliases?: Array<string>;
  // Keywords for the entry, e.g. course, editor
  keywords?: Array<string>;
  // A description for it
  description: string;
}
```

Look in the file itself for examples, or use the following as a simple example:

```json
{
  "name": "Mitt UiB",
  "aliases": ["mitt", "MittUiB"],
  "description": "UiB sitt internsystem for fag, kommunikasjon, innleveringer etc"
},
```

## LICENSE

MIT
