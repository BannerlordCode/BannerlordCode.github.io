import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inv = JSON.parse(readFileSync(join(__dirname, 'data', 'type-inventory.json'), 'utf8'));
for (const ver of ['1.3.0', '1.3.15', '1.4.5']) {
  let missing = 0;
  let first = null;
  for (const lang of ['zh', 'en']) {
    for (const [group, types] of Object.entries(inv[ver][lang])) {
      for (const [name, info] of Object.entries(types)) {
        if (!info.hasDoc) {
          missing++;
          if (!first) first = { lang, group, name, ...info };
        }
      }
    }
  }
  console.log(`${ver}: ${missing} missing entries`);
  if (first) console.log('  example:', first);
}
