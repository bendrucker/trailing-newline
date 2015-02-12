'use strict';

var proxyquire = require('proxyquire').noPreserveCache();
var test       = require('tape');


test('detects unix trailing newlines', function (t) {
  t.plan(3);
  var trailingNewline = proxyquire('../', {
    os: {
      EOL: '\n'
    }
  });
  t.ok(trailingNewline('Hello world\n'), 'detects normal newline');
  t.ok(trailingNewline('Hello\nworld\n'), 'detects last newline');
  t.notOk(trailingNewline('Hello\nworld'), 'ignores mid-string newline');
});

test('detect windows trailing newlines', function (t) {
  t.plan(3);
  var trailingNewline = proxyquire('../', {
    os: {
      EOL: '\r\n'
    }
  });
  t.ok(trailingNewline('Hello world\r\n'), 'detects normal newline');
  t.notOk(trailingNewline('Hello world\n'), 'ignores unix newline');
  t.notOk(trailingNewline('Hello\r\nworld'), 'ignores mid-string newline');
});
