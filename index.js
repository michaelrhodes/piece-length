module.exports = length

function length (bytes) {
  return Math.max(16384, 1 << Math.log2(Math.max(1024, bytes / 1024)) + 0.5 | 0)
}
