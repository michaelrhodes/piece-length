var test = require('tape')
var piece = require('./')

test('4mb', function (assert) {
  var bytes = 4 * Math.pow(2, 20)
  var result = piece(bytes)
  var expected = Math.pow(2, 14)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('50mb', function (assert) {
  var bytes = 50 * Math.pow(2, 20)
  var result = piece(bytes)
  var expected = Math.pow(2, 16)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('130mb', function (assert) {
  var bytes = 130 * Math.pow(2, 20)
  var result = piece(bytes)
  var expected = Math.pow(2, 17)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('350mb', function (assert) {
  var bytes = 350 * Math.pow(2, 20)
  var result = piece(bytes)
  var expected = Math.pow(2, 18)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('700mb', function (assert) {
  var bytes = 700 * Math.pow(2, 20)
  var result = piece(bytes)
  var expected = Math.pow(2, 19)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('1.4gb', function (assert) {
  var bytes = 1.4 * Math.pow(2, 30)
  var result = piece(bytes)
  var expected = Math.pow(2, 20)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('2.5gb', function (assert) {
  var bytes = 2.5 * Math.pow(2, 30)
  var result = piece(bytes)
  var expected = Math.pow(2, 21)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

test('4.5gb', function (assert) {
  var bytes = 4.5 * Math.pow(2, 30)
  var result = piece(bytes)
  var expected = Math.pow(2, 22)
  var pieces = Math.ceil(bytes / expected)
  var log = message(bytes, expected, pieces)

  assert.equal(result, expected, log)
  assert.end()
})

function message (bytes, expected, pieces) {
  var target = (bytes < 1e9 ?
    ~~(bytes / Math.pow(2, 20)) + 'mb' :
    (bytes / Math.pow(2, 30)).toFixed(1) + 'gb'
  )

  var size = (expected < 1e6 ?
    expected / Math.pow(2, 10) + 'kb' :
    expected / Math.pow(2, 20) + 'mb'
  )

  return target + ' should be ' + size +
    ' pieces (' + pieces + ' total)'
}
