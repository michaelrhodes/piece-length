module.exports = length

function length (bytes, p) {
  bytes /= 1024
  for (p = 20; 13 < p && bytes < 2 << p; p--);
  return 2 << p + (bytes >= ((2 << p) + (2 << p + 1)) / 2)
}
