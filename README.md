# trailing-newline [![Build Status](https://travis-ci.org/bendrucker/trailing-newline.svg?branch=master)](https://travis-ci.org/bendrucker/trailing-newline) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/trailing-newline.svg)](https://greenkeeper.io/)

Check whether a string ends with a newline on Unix or Windows.

## Installing

```sh
$ npm install trailing-newline
```

## API

##### `trailingNewline(text)` -> `Boolean`

Checks whether the `text` ends in a newline character (`\n` or `\r\n`).

```js
// unix
trailingNewline('Hello world\n') === true;

// windows
trailingNewline('Hello world\r\n') === true;
```
