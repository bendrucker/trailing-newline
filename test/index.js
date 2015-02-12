'use strict';

var proxyquire = require('proxyquire').noPreserveCache();
var test       = require('tape');


test('detects unix trailing newlines', function (t) {
  t.plan(3);
  var hasNewline = proxyquire('../', {
    os: {
      EOL: '\n'
    }
  });
  t.ok(hasNewline('Hello world\n'), 'detects normal newline');
  t.ok(hasNewline('Hello\nworld\n'), 'detects last newline');
  t.notOk(hasNewline('Hello\nworld'), 'ignores mid-string newline');
});

test('detect windows trailing newlines', function (t) {
  t.plan(3);
  var hasNewline = proxyquire('../', {
    os: {
      EOL: '\r\n'
    }
  });
  t.ok(hasNewline('Hello world\r\n'), 'detects normal newline');
  t.notOk(hasNewline('Hello world\n'), 'ignores unix newline');
  t.notOk(hasNewline('Hello\r\nworld'), 'ignores mid-string newline');
});
