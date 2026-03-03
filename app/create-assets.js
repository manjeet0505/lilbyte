// Creates a minimal valid PNG file (1x1 pixel) with the given color
const fs = require('fs');
const zlib = require('zlib');

function createPng(filename, width, height, r, g, b) {
  // For simplicity, create a small solid-color PNG
  // Use a 1x1 pixel, Expo will scale it
  const w = 1;
  const h = 1;
  
  function crc32(buf) {
    let c = 0xffffffff;
    const table = [];
    for (let n = 0; n < 256; n++) {
      let cc = n;
      for (let k = 0; k < 8; k++) cc = cc & 1 ? 0xedb88320 ^ (cc >>> 1) : cc >>> 1;
      table[n] = cc;
    }
    for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeData = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeData), 0);
    return Buffer.concat([len, typeData, crc]);
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type (RGB)
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Raw image data: filter byte (0) + RGB per pixel
  const raw = Buffer.alloc((1 + w * 3) * h);
  for (let y = 0; y < h; y++) {
    const offset = y * (1 + w * 3);
    raw[offset] = 0; // no filter
    for (let x = 0; x < w; x++) {
      const pOffset = offset + 1 + x * 3;
      raw[pOffset] = r;
      raw[pOffset + 1] = g;
      raw[pOffset + 2] = b;
    }
  }

  const compressed = zlib.deflateSync(raw);
  
  const png = Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0)),
  ]);

  fs.writeFileSync(filename, png);
  console.log('Created: ' + filename);
}

// Dark background color #05070E = rgb(5, 7, 14)
createPng('assets/icon.png', 1024, 1024, 5, 7, 14);
createPng('assets/splash.png', 1284, 2778, 5, 7, 14);
createPng('assets/adaptive-icon.png', 1024, 1024, 5, 7, 14);
createPng('assets/favicon.png', 48, 48, 5, 7, 14);
console.log('All assets created!');
