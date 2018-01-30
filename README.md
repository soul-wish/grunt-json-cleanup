# grunt-json-cleanup

> A plugin for removing empty strings from JSON files

## Getting Started

```shell
npm install grunt-json-cleanup --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-cleanup');
```

## The "json_cleanup" task

### Overview
In your project's Gruntfile, add a section named `json_cleanup` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_cleanup: {
    default: {
      files: {
        // Target-specific file lists and/or options go here.
        'dest/dir/': ['some/src/*.json', 'some/other/src/test.json']
      }
    }
  }
});
```

## License

MIT © [Sergey Lysenko](http://soulwish.info)