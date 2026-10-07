// tools/_doc-check.mjs — the ONE shared page checker for every doc-writing line.
// Usage: node tools/_doc-check.mjs <page-path> [<page-path> ...]   (relative to cwd, or absolute)
//
// Prints one line per page:
//   <path>  FFFD=<n>  CR=<n> LF=<n>  DEEP=<pass|fail>
//   FFFD  = count of UTF-8 U+FFFD (EF BF BD) sequences, counted in RAW BYTES (must be 0)
//   CR    = CRLF count, byte level (0x0A preceded by 0x0D) — report only, never judged
//   LF    = bare-LF count, byte level — report only, never judged
//   DEEP  = tools/lib/handwritten-policy.mjs classifyPage(...).status === 'deep_pass'
//
// Exit codes:
//   0 = every page FFFD==0 AND DEEP==pass
//   1 = some page FFFD>0 or DEEP=fail
//   2 = the script could not run: no args, a path missing/unreadable, or an internal error.
//       A missing file is NEVER a silent pass.
//
// SELF-TESTS (this project was burned by a checker that printed "pass" while doing
// nothing — run these after ANY edit to this file, paste the output):
//   1. FFFD ruler is not blind:
//        node tools/_verify/gen-fffd-probe.mjs        # writes tools/_verify/fffd-probe.md
//        node tools/_doc-check.mjs tools/_verify/fffd-probe.md ; echo "exit=$?"
//      must print FFFD=<n> with n>0 and exit=1.
//   2. Known-good page passes, known stub fails, and agrees with _check_deep.mjs:
//        node tools/_doc-check.mjs content/v1.4.5/en/api/campaign/AcceptCallToWarOfferMapNotification.md ; echo "exit=$?"
//        node tools/_check_deep.mjs  content/v1.4.5/en/api/campaign/AcceptCallToWarOfferMapNotification.md
//        node tools/_doc-check.mjs content/v1.4.5/en/api/mission/ActionIndexCache.md ; echo "exit=$?"
//        node tools/_check_deep.mjs  content/v1.4.5/en/api/mission/ActionIndexCache.md
//      must print DEEP=pass/exit=0 for the first, DEEP=fail/exit=1 for the second,
//      and the two DEEP verdicts must match the two _check_deep.mjs statuses.
//   3. A bad path is loud:
//        node tools/_doc-check.mjs content/v1.4.5/en/api/nope/DOES_NOT_EXIST.md ; echo "exit=$?"
//      must print an error and exit=2, never exit=0.

import { readFileSync } from 'node:fs';
import { isAbsolute, resolve } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: node tools/_doc-check.mjs <page.md> [<page.md> ...]');
  process.exit(2);
}

// ponytail: validate every path BEFORE printing anything, so a missing file never
// leaves a half-printed report that looks like a partial pass.
const rows = [];
try {
  for (const given of args) {
    const abs = isAbsolute(given) ? given : resolve(process.cwd(), given);
    const buf = readFileSync(abs); // throws on missing / directory / unreadable
    let fffd = 0, cr = 0, lf = 0;
    for (let i = 0; i < buf.length; i++) {
      const b = buf[i];
      if (b === 0x0a) {
        if (i > 0 && buf[i - 1] === 0x0d) cr++;
        else lf++;
      } else if (b === 0xef && buf[i + 1] === 0xbf && buf[i + 2] === 0xbd) {
        fffd++;
        i += 2; // skip the rest of this 3-byte sequence
      }
    }
    const deep = classifyPage(abs, buf.toString('utf8')).status === 'deep_pass';
    rows.push({ fffd, bad: fffd > 0 || !deep, line: `${given}  FFFD=${fffd}  CR=${cr} LF=${lf}  DEEP=${deep ? 'pass' : 'fail'}` });
  }
} catch (err) {
  console.error(`ERROR: ${err && err.code ? err.code : 'EUNKNOWN'}: ${err && err.message}`);
  process.exit(2);
}

let exit = 0;
for (const row of rows) {
  console.log(row.line);
  if (row.bad) exit = 1;
}
process.exit(exit);