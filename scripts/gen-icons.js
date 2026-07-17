const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIcons() {
  const sourcePath = path.resolve(__dirname, "../Logo/Dr. Unnati's Skin Clinic  _ Logo - 2.png");
  if (!fs.existsSync(sourcePath)) {
    console.error("Source logo not found at:", sourcePath);
    process.exit(1);
  }

  console.log("Reading source logo from:", sourcePath);

  // Generate PNG sizes
  const png32 = await sharp(sourcePath).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const png64 = await sharp(sourcePath).resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const png180 = await sharp(sourcePath).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const png192 = await sharp(sourcePath).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  const png512 = await sharp(sourcePath).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

  // Save PNG files to public/
  fs.writeFileSync(path.resolve(__dirname, '../public/icon.png'), png512);
  fs.writeFileSync(path.resolve(__dirname, '../public/icon-192.png'), png192);
  fs.writeFileSync(path.resolve(__dirname, '../public/apple-icon.png'), png180);

  // Save PNG files to app/ for Next.js App Router metadata conventions
  fs.writeFileSync(path.resolve(__dirname, '../app/icon.png'), png512);
  fs.writeFileSync(path.resolve(__dirname, '../app/apple-icon.png'), png180);

  // Construct ICO buffer containing 32x32 and 64x64 PNG images
  const count = 2;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dataOffset = headerSize + count * dirEntrySize;

  const icoHeader = Buffer.alloc(headerSize);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type: 1 = ICO
  icoHeader.writeUInt16LE(count, 4); // count: 2 images

  const dir32 = Buffer.alloc(dirEntrySize);
  dir32.writeUInt8(32, 0); // width
  dir32.writeUInt8(32, 1); // height
  dir32.writeUInt8(0, 2);  // colors
  dir32.writeUInt8(0, 3);  // reserved
  dir32.writeUInt16LE(1, 4); // color planes
  dir32.writeUInt16LE(32, 6); // bpp
  dir32.writeUInt32LE(png32.length, 8); // size
  dir32.writeUInt32LE(dataOffset, 12); // offset

  const dir64 = Buffer.alloc(dirEntrySize);
  dir64.writeUInt8(64, 0); // width
  dir64.writeUInt8(64, 1); // height
  dir64.writeUInt8(0, 2);  // colors
  dir64.writeUInt8(0, 3);  // reserved
  dir64.writeUInt16LE(1, 4); // color planes
  dir64.writeUInt16LE(32, 6); // bpp
  dir64.writeUInt32LE(png64.length, 8); // size
  dir64.writeUInt32LE(dataOffset + png32.length, 12); // offset

  const icoBuffer = Buffer.concat([icoHeader, dir32, dir64, png32, png64]);

  // Save ICO files to public/ and app/
  fs.writeFileSync(path.resolve(__dirname, '../public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.resolve(__dirname, '../app/favicon.ico'), icoBuffer);

  console.log("Successfully generated and saved browser tab icons (favicon.ico, icon.png, apple-icon.png) across app/ and public/!");
}

generateIcons().catch(err => {
  console.error("Error generating icons:", err);
  process.exit(1);
});
