# piece-size
piece-size finds the optimal piece size for a given number of bytes. Optimal for what exactly? BitTorrent. [VuzeWiki](http://wiki.vuze.com/w/Torrent_Piece_Size) and [TorrentFreak](http://torrentfreak.com/how-to-make-the-best-torrents-081121/) have both released some examples of ideal piece lengths, and this algorithm will reproduce them.

[![Build status](https://travis-ci.org/michaelrhodes/piece-size.png?branch=master)](https://travis-ci.org/michaelrhodes/piece-size)

[![Browser support](https://ci.testling.com/michaelrhodes/piece-size.png)](https://ci.testling.com/michaelrhodes/piece-size)

## Install
```
npm install piece-size
```

### Example
``` js
var optimum = require('piece-size')

// 350mb should be 256kb
optimum(367001600) // => 262144
```

### License
[MIT](http://opensource.org/licenses/MIT)
