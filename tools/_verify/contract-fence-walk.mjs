// 围栏【深度游走】校验 v5
//
// ★ v4 的嵌套方向是错的（lead-6 自曝）：它把 w>L 当作「嵌套内容忽略」
//   实测证据：CONTRACT.md 全部 29 处 inner 行都是「块开 3、此行 4」
//   CommonMark：闭合围栏只需【不短于】开启围栏 ⇒ w>L 是合法闭合，不是内容
//   ⇒ v4 把 29 个真闭合当内容跳过，后续配对错位，最终报 final_depth=3（假 FAIL）
//   ⇒ v2 的 w>=L 本来是对的；v3/v4 在照抄一句错误规格时把对的改错了
//
// 正确口径：
//   depth==0 → >=3 反引号开块，记录宽度 L（info string 合法，如 ```text）
//   depth>0  → w >= L 闭合；w < L 是块内内容（合法嵌套）
//   唯一判坏：EOF 时 depth != 0。其余一律「不能判」。
//
// 版本史：v1 奇偶 · v2(>=L 闭合·对) · v3(<L 即损坏·错) · v4(w>L 忽略·错) · v5 本版
import { readFileSync } from "node:fs";
const f = process.argv[2];
if (!f) { console.error("usage: contract-fence-walk.mjs <file>"); process.exit(2); }
const lines = readFileSync(f, "utf8").split(/\r?\n/);
let L = 0, openLine = 0, opens = 0, closes = 0, inner = 0;
for (let i = 0; i < lines.length; i++) {
  const m = /^(`{3,})/.exec(lines[i]);
  if (!m) continue;
  const w = m[1].length;
  if (L === 0) { L = w; openLine = i + 1; opens++; continue; }
  if (w >= L) { L = 0; closes++; continue; }
  inner++;
}
console.log("file=" + f);
console.log("opens=" + opens + " closes=" + closes + " inner_legal=" + inner);
console.log("final_depth=" + (L === 0 ? "0 (归零)" : L + "  <-- 未闭合，自 line " + openLine));
console.log("verdict=" + (L === 0 ? "PASS" : "FAIL（文档陷在围栏里）"));
process.exit(L !== 0 ? 1 : 0);
