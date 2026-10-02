# 撤回脚本「反向完整性检查」有效性论证（可复跑版）

本文件只回答一个问题：**`tools/_v153_withdraw.mjs` / `tools/_v146_withdraw.mjs` 里新增的
「反向完整性检查」到底有没有用。** 里面每一条结论都配了**可原样粘贴的命令 + 实测输出**。

> 与 `tools/_V146_PROSE_NAME_CHECKER_VERDICT.md` **无关**。VERDICT 是「那把已删的尺（prose name
> checker）的判别力报告」，本文件是**撤回脚本的守卫论证**。两者混读会让人误以为那把尺还活着。

---

## 0. 运行前提

```bash
# 必须先 cd 到仓库根。tools/_v146_ruler_fixtures.mjs 用 path.resolve('.')，
# 从别处跑会静默给出错误结果（此条已实测）。
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io
node -v   # v24.13.0（本文件全部输出由它产出）
```

本文件所有实验都在 `%TEMP%/bl-guard-evidence/` 沙箱里跑，**仓库内一行都没改**。
沙箱用完即删，回滚方式见 §7。

---

## 1. 被证明的对象

新增的这段（`tools/_v153_withdraw.mjs` 第 106–125 行 / `tools/_v146_withdraw.mjs` 第 94–111 行）：

```js
// --- reverse integrity check: disk holds pages the whitelist does not know --
if (move.length) {
  console.error(`ABORT: keep-snapshot is stale. ${move.length} page(s) on disk are NOT in HANDWRITTEN ∪ snapshot.` ... );
  process.exit(1);
}
```

语义：**磁盘上有、保留集里没有 → ABORT，一个都不移**，而不是把它们当生成页 `renameSync` 走。

破坏性分支在它后面，只要守卫响了就到不了（`tools/_v153_withdraw.mjs`）：

```
128:  if (!DRY) {
133:    renameSync(join(REPO, src), absDst);
```

`tools/_v146_withdraw.mjs` 同构：

```
119:  if (!APPLY) process.exit(0);
128:  fs.renameSync(from, to);
```

---

## 2. 真实漂移输入（不是造的）

仓库里现成的一条 **rebucketing 漂移**，带提交号：

```bash
$ git show HEAD:tools/_v153_withdraw.mjs | grep -n ICampaignBehavior
25:  'zh/api/campaign-ext/ICampaignBehavior.md','zh/api/campaign-ext/CampaignBehaviorManager.md',

$ git log --all --oneline -- content/v1.5.3/zh/api/campaign-ext/ICampaignBehavior.md
df15c2ff8e checkpoint: three new version trees withdrawn + hand-written skeleton, legacy trees untouched
2ef575495c checkpoint: R2 deep-write, nav repair, three new version trees

$ ls -l content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
-rw-r--r-- 1 ModerRAS 197609 4877 ... content/v1.5.3/zh/api/campaign/ICampaignBehavior.md

$ ls content/v1.5.3/zh/api/campaign-ext/
CampaignBehaviorManager.md
DefaultSettlementProsperityModel.md
```

即：`HANDWRITTEN` 登记的是 `zh/api/campaign-ext/ICampaignBehavior.md`（**在 df15c2ff8e 已被删除的那个路径**），
页面本身在 `zh/api/campaign/ICampaignBehavior.md`。工作区里的脚本已经把路径改成新的并加了注释：

```js
'zh/api/campaign/ICampaignBehavior.md', // rebucketed out of campaign-ext/ in df15c2ff8e — keep this path in sync
```

**这条漂移是 100% 真实的**：陈旧条目逐字来自 `git show HEAD:...`（不是我手写的），页面位置来自当前磁盘。

### 2.1 两个基线（B0 / B1），先把对照关系说死

| 名字 | 是什么 | 怎么来的 |
|---|---|---|
| **B0** | **真实历史原版** | `git show HEAD:tools/_v153_withdraw.mjs` 逐字导出。有正向检查，**没有**快照并集，**没有**反向检查。含真实陈旧条目。 |
| **B1** | **最小反事实 A/B 对照** | 现在的守卫脚本 **只删掉反向检查那 20 行**，其余逐字不动（快照并集保留）。 |
| **GUARD** | 现在工作区里的脚本 | 快照并集 + 正向 + 反向，路径已修正。 |

```bash
$ diff GUARD_v153.mjs B1_v153.mjs
106,125d105
< // --- reverse integrity check: disk holds pages the whitelist does not know --
< if (move.length) {
<   ...
<   process.exit(1);
< }
```

**B1 是 A/B 里的「无守卫」一侧**：它和 GUARD 之间**只差这一个块**，没有第二个变量。
R3 用 B1，R4 用 GUARD，同一份白名单、同一份快照。

---

## 3. 沙箱搭建（可原样粘贴）

```bash
REPO=/c/WorkSpace/Bannerlord/BannerlordCode.github.io
SBX="$TEMP/bl-guard-evidence"
rm -rf "$SBX"; mkdir -p "$SBX/tools" "$SBX/content"
cp -r "$REPO/content/v1.5.3" "$SBX/content/v1.5.3"
cp -r "$REPO/content/v1.4.6" "$SBX/content/v1.4.6"
cd "$REPO"
git show HEAD:tools/_v153_withdraw.mjs > "$SBX/tools/B0_v153.mjs"   # 真实原版
git show HEAD:tools/_v146_withdraw.mjs > "$SBX/tools/B0_v146.mjs"
cp tools/_v153_withdraw.mjs "$SBX/tools/GUARD_v153.mjs"
cp tools/_v146_withdraw.mjs "$SBX/tools/GUARD_v146.mjs"
cp tools/_v153_keep_whitelist.txt "$SBX/tools/snap_synced_v153.txt"   # 已同步的快照（= 仓库现状）
cp tools/_v146_keep_whitelist.txt "$SBX/tools/snap_synced_v146.txt"

# B1 = GUARD 去掉反向检查（锚点：该块横幅行以 "// --- " / "// —— " 开头，
#      文件头注释里同样提到 reverse integrity check 但以 "//   " 开头，不会误伤）
node strip_reverse.mjs "$SBX/tools/GUARD_v153.mjs" "$SBX/tools/B1_v153.mjs"
node strip_reverse.mjs "$SBX/tools/GUARD_v146.mjs" "$SBX/tools/B1_v146.mjs"

# 「天真修法」：把死路径从白名单里删掉就完事（真的删，不是改名）
sed '/campaign\/ICampaignBehavior\.md/d'       "$SBX/tools/B1_v153.mjs"   > "$SBX/tools/B1NAIVE_v153.mjs"
sed '/campaign\/ICampaignBehavior\.md/d'       "$SBX/tools/GUARD_v153.mjs" > "$SBX/tools/NAIVE_v153.mjs"
# 快照「未同步」= 那条路径压根没登记（操作者只顾着删死路径，没补新位置）
sed '/^zh\/api\/campaign\/ICampaignBehavior\.md$/d' "$SBX/tools/snap_synced_v153.txt" > "$SBX/tools/snap_pruned_v153.txt"
```

`strip_reverse.mjs`（只做一件事：按行删掉反向检查块，其余逐字不动）：

```js
import { readFileSync, writeFileSync } from 'node:fs';
const [src, dst] = process.argv.slice(2);
const lines = readFileSync(src, 'utf8').split('\n');
const start = lines.findIndex((l) => /^\/\/ (?:-{3}|—)/.test(l) && /reverse integrity check|反向完整性检查/.test(l));
const exit  = lines.findIndex((l, i) => i > start && l.trim() === 'process.exit(1);');
const end   = lines.findIndex((l, i) => i > exit  && l === '}');
writeFileSync(dst, lines.slice(0, start).concat(lines.slice(end + 1)).join('\n'));
```

### 3.1 「天真修法」到底是什么操作（别读歪了）

漂移现场有两张表提到这个页面：脚本里的 `HANDWRITTEN`、快照文件。操作者的直觉修法是
**把那个找不到的路径 grep 出来删掉**，觉得「不存在的条目删了，问题就没了」。
删完之后 —— 新位置从来没被登记过 —— **页面从「白名单里有但盘上没有」变成了「盘上有但白名单里没有」**，
也就是漂移的**方向整个翻了过来**。R3/R4 就在这个状态下跑。

---

## 4. 五个场景（贴的都是实测输出）

> 输入来源标注：
> **合成输入** = 为了触发某条分支而造的；
> **真实漂移** = §2 那条有提交号、可定位到 df15c2ff8e 的 rebucketing。
>
> ⚠️ 沙箱内**一次 move 都没执行过**：v1.5.3 全程 `--dry`，v1.4.6 全程默认 DRY-RUN。

### R1 · 合成对照 · 该响的时候响了（充分性）

**输入来源：合成输入** —— 临时放一张没列出过的页。

```bash
$ cd "$SBX"
$ cp tools/snap_synced_v153.txt tools/_v153_keep_whitelist.txt
$ printf -- "-- synthetic probe\n" > content/v1.5.3/zh/api/campaign/ZZSyntheticProbe.md
$ node tools/GUARD_v153.mjs --dry
ABORT: keep-snapshot is stale. 1 page(s) on disk are NOT in HANDWRITTEN ∪ snapshot.
  class pages at risk: 1
    UNLISTED: zh/api/campaign/ZZSyntheticProbe.md
  Fix: add these paths to tools/_v153_keep_whitelist.txt (and to HANDWRITTEN above if they are new hand-written pages).
  Nothing moved. Re-run after syncing.
exit=1
```

**符合期望**：反向检查响了，并明确点名是哪一页。

### R2 · 原版脚本 · 真实漂移原样（正向分支）

**输入来源：真实漂移。零 fixture** —— 直接跑 git 里的历史原版。

```bash
$ cd "$SBX"
$ cp tools/snap_synced_v153.txt tools/_v153_keep_whitelist.txt
$ node tools/B0_v153.mjs --dry     # B0 = git show HEAD:tools/_v153_withdraw.mjs
ABORT: whitelist integrity check failed. Nothing moved.
  MISSING on disk: content/v1.5.3/zh/api/campaign-ext/ICampaignBehavior.md
exit=1

$ ls -l content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
-rw-r--r-- 1 ModerRAS 197609 4877 Oct  3 01:03 content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
$ ls content/v1.5.3/zh/api/campaign-ext/
CampaignBehaviorManager.md
DefaultSettlementProsperityModel.md
```

**符合期望**：**既有正向检查** ABORT，页面原地未动（4877 字节不变，`campaign-ext/` 下依旧没有它）。

### R2b · 补充：同一条漂移同时违反两个方向时，谁先响

**输入来源：真实漂移 + 合成（把工作区脚本那条路径还原成 git HEAD 的陈旧写法）**。
目的是验证「正向先执行，反向轮不到」这句排序论断**不是推测**。

```bash
$ cd "$SBX"
$ cp tools/snap_pruned_v153.txt tools/_v153_keep_whitelist.txt   # 快照也没同步 → 两个方向同时违规
$ node tools/DRIFT_v153.mjs --dry
ABORT: whitelist integrity check failed. Nothing moved.
  MISSING on disk: content/v1.5.3/zh/api/campaign-ext/ICampaignBehavior.md
exit=1

$ grep -n "reverse integrity check\|ABORT: whitelist integrity check failed" tools/GUARD_v153.mjs
13://   The reverse integrity check below exists to enforce exactly that: when the
99:  console.error('ABORT: whitelist integrity check failed. Nothing moved.\n  ' + problems.join('\n  '));
106:// --- reverse integrity check: disk holds pages the whitelist does not know --
```

反向块**在脚本里（第 106 行，比正向的 exit 晚 7 行）**，两个方向同时违规时仍然只有正向的报错。
顺序论断成立。

### R3 · 原版脚本（去掉反向检查）· 天真修法 → **静默通过**

**输入来源：真实漂移**（天真修法落在真实的陈旧条目上）。

```bash
$ cd "$SBX"
$ cp tools/snap_pruned_v153.txt tools/_v153_keep_whitelist.txt
$ node tools/B1NAIVE_v153.mjs --dry
total=150  keep=149  withdraw=1  (DRY RUN)
remaining under content/v1.5.3: 150
exit=0
```

**符合期望**：**没有任何检查命中**，`withdraw=1`，`exit 0`，输出里连一句警告都没有。

★ **代价是什么**：脚本已经决定要移走 1 页。去掉 `--dry` 后（`tools/_v153_withdraw.mjs` 128–133 行）
`for (const src of move) { … renameSync(join(REPO, src), absDst) }` 会把它搬到
`_withdrawn/v1.5.3/zh/api/campaign/ICampaignBehavior.md`，**没有报错、没有点名、退出码 0**。
那一页是人手写的手写页，白名单里刚被删掉的那一行就是它自己的名字。

> 诚实说明：**`renameSync` 本身在本轮实验里从未被执行**（R3 跑的是 `--dry`，仓库与沙箱都零 move）。
> 上面的代价论断由「实测到的 `withdraw=1` + `exit 0` + 输出无警告」加上**逐行可读的破坏性分支**
> 共同推出，不是由一次真实移动推出。

### R4 · 改后脚本 · **同一份**天真修法、**同一份**未同步快照 → 拦下

**输入来源：真实漂移**。与 R3 的差别**只有**反向检查那 20 行（§2.1）。

```bash
$ cd "$SBX"
$ cp tools/snap_pruned_v153.txt tools/_v153_keep_whitelist.txt
$ node tools/NAIVE_v153.mjs --dry
ABORT: keep-snapshot is stale. 1 page(s) on disk are NOT in HANDWRITTEN ∪ snapshot.
  class pages at risk: 1
    UNLISTED: zh/api/campaign/ICampaignBehavior.md
  Fix: add these paths to tools/_v153_keep_whitelist.txt (and to HANDWRITTEN above if they are new hand-written pages).
  Nothing moved. Re-run after syncing.
exit=1

$ ls -l content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
-rw-r--r-- 1 ModerRAS 197609 4877 Oct  3 01:03 content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
```

**符合期望**：反向检查 ABORT，并打印 `UNLISTED: zh/api/campaign/ICampaignBehavior.md` ——
**正是要同步的那一条**，操作者照着改就不会错。

### R5 · 改后脚本 · 操作者正确同步了快照 → 正常放行

**输入来源：真实漂移**（快照补回新位置）。

```bash
$ cd "$SBX"
$ cp tools/snap_synced_v153.txt tools/_v153_keep_whitelist.txt
$ node tools/NAIVE_v153.mjs --dry
total=150  keep=150  withdraw=0  (DRY RUN)
remaining under content/v1.5.3: 150
exit=0

$ ls -l content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
-rw-r--r-- 1 ModerRAS 197609 4877 Oct  3 01:03 content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
```

**符合期望**：同步后 `exit 0`、`0` 移出。**守卫不会挡路**——它只要求你把表同步，不要求你别用脚本。

### R6 · 快照文件被删掉 → fail-closed

```bash
$ cd "$SBX"
$ cp tools/snap_synced_v146.txt tools/_v146_keep_whitelist.txt
$ node tools/GUARD_v146.mjs
ABORT: keep-snapshot is stale. 1 page(s) on disk are NOT in WHITELIST ∪ snapshot.
  class pages at risk: 1
    UNLISTED: zh/api/campaign-ext/Hero.md
  ...
exit=1

$ rm tools/_v153_keep_whitelist.txt
$ node tools/GUARD_v153.mjs --dry
ABORT: frozen keep-snapshot missing or empty: tools/_v153_keep_whitelist.txt
  Refusing to run — without it every unlisted page would be treated as generator output.
exit=1

$ rm tools/_v146_keep_whitelist.txt
$ node tools/GUARD_v146.mjs
ABORT: frozen keep-snapshot missing or empty: tools/_v146_keep_whitelist.txt
  Refusing to run — without it every unlisted page would be treated as generator output.
exit=1

$ node tools/B1NAIVE_v146.mjs     # 就算把反向检查去掉也不能幸免
ABORT: frozen keep-snapshot missing or empty: tools/_v146_keep_whitelist.txt
  Refusing to run — without it every unlisted page would be treated as generator output.
exit=1
```

**符合期望**：快照缺失/为空一律 ABORT，且**这条不依赖反向检查**（快照缺失守卫写在并集之前），
所以它和 R1–R5 是**另一条独立的 fail-closed 分支**，不是反向检查的功劳。

---

## 5. v1.4.6 的镜像（合成输入）

v1.4.6 那棵树**没有** ICampaignBehavior 这种真实漂移，所以这里用合成 rebucketing 复现同一形状：

```bash
$ cd "$SBX/content/v1.4.6/zh/api" && mv campaign/Hero.md campaign-ext/Hero.md   # 合成：模拟改桶
$ cd "$SBX"
$ sed "/zh\/api\/campaign\/Hero\.md/d" tools/B1_v146.mjs   > tools/B1NAIVE_v146.mjs   # 天真修法
$ sed "/zh\/api\/campaign\/Hero\.md/d" tools/GUARD_v146.mjs > tools/NAIVE_v146.mjs
$ sed '/^zh\/api\/campaign\/Hero\.md$/d' tools/snap_synced_v146.txt > tools/snap_pruned_v146.txt
```

### R3′ · 无反向检查 · 天真修法

```bash
$ cp tools/snap_pruned_v146.txt tools/_v146_keep_whitelist.txt
$ node tools/B1NAIVE_v146.mjs
MODE=DRY-RUN
whitelist=111  missing=0  suspect=0
files_on_disk=112  to_move_out=1  to_keep=111
exit=0
```

### R4′ · 有反向检查 · 同一份天真修法

```bash
$ node tools/NAIVE_v146.mjs
ABORT: keep-snapshot is stale. 1 page(s) on disk are NOT in WHITELIST ∪ snapshot.
  class pages at risk: 1
    UNLISTED: zh/api/campaign-ext/Hero.md
  Fix: add these paths to tools/_v146_keep_whitelist.txt (and to WHITELIST above if they are new hand-written pages).
  Nothing moved. Re-run after syncing.
exit=1
```

### R5′ · 操作者同步快照（把记录改成新位置）

```bash
$ sed 's#^zh/api/campaign/Hero\.md$#zh/api/campaign-ext/Hero.md#' tools/snap_synced_v146.txt > tools/_v146_keep_whitelist.txt
$ grep -n "Hero.md" tools/_v146_keep_whitelist.txt
22:zh/api/campaign-ext/Hero.md
$ node tools/NAIVE_v146.mjs
MODE=DRY-RUN
whitelist=112  missing=0  suspect=0
files_on_disk=112  to_move_out=0  to_keep=112
exit=0
```

---

## 6. ⚠️ 诚实性声明：这几条**不是**互相独立的证据

上一轮口头论证里，**沙箱阳性对照（R1）与 R4/R4′ 命中的是同一条反向分支**
（`if (move.length) { … ABORT … }`）。它们**不能算成两份独立证据**。正确读法：

| 证据 | 证明什么 | 输入 |
|---|---|---|
| **合成对照 R1** | **充分性**：该响的时候响了，且能点名是哪一页 | 合成输入（临时探针页） |
| **R3/R4 A/B** | **必要性**：不响的时候会付出什么代价 —— 页面被静默 `renameSync` 移进 `_withdrawn/` | 真实漂移 |
| **R2 / R2b** | 正向分支单独有效，与反向无关 | 真实漂移 |
| **R6** | 快照缺失是**另一条** fail-closed 分支，不依赖反向检查 | 合成输入 |
| **R5 / R5′** | 守卫不挡路：同步后正常放行 | 真实漂移 / 合成输入 |

**两者不可互相替代**：R1 删掉照样成立（R3 证明了它删掉后的实际损失），
R3 的结论也不依赖 R1（R3 的输入里没有任何合成页）。

### 6.1 两条正切分支的职责 —— **已分离**，证据如下

```
正向（既有）  白名单 → 磁盘 ：白名单里的页在盘上找不到       → 拦「登记了但被删/被挪走」
反向（新增）  磁盘 → 白名单 ：盘上的页不在白名单里          → 拦「新增/挪走后没登记」
```

* **分离实验成功**：
  * 只让正向响 → **R2 / R2b**：输出只有 `MISSING on disk: …`，反向块（第 106 行）根本没执行到。
  * 只让反向响 → **R4**：正向检查 0 命中（脚本直接越过第 99 行的 exit），只有 `UNLISTED:` 打印。
  * 两者都不响 → **R3**：`withdraw=1  exit=0`。
* **原始漂移同时违反两个方向，但正向先执行，所以 R2 由它拦下** —— R2b 用**同一个守卫脚本**
  配「两个方向同时违规」的输入实测出「只有正向报错」，排序论断不是推测。
* **真正只有反向能救的是漂移的「第二张脸」**：一旦按天真修法把死路径删掉，漂移整体迁移到反向方向
  （R3 vs R4），此时正向检查已经无话可说 —— 白名单里根本没有缺页。

### 6.2 与期望不符的一条（如实报）

Boss 给的 R2 期望是「**既有正向检查 ABORT**」。这条在 **v1.5.3 成立（R2 实测 exit=1）**，
在 **v1.4.6 不成立**：`_v146_withdraw.mjs` 的正向检查是**只报告、不拦截**：

```bash
$ node tools/B0_v146.mjs        # git HEAD 原版：KEEP 只剩 WHITELIST，没有快照并集
MODE=DRY-RUN
whitelist=53  missing=1  suspect=0
  MISSING: zh/api/campaign/Hero.md
files_on_disk=112  to_move_out=60  to_keep=52
exit=0
```

即 v1.4.6 的历史原版看到缺页只是打印一行 `MISSING:`，然后照样以 `exit 0` 决定移走 60 页。
**v1.4.6 上能拦住这种漂移的只有反向检查**（见 §6.1 的 R4′）。这也是 1.4.6 的 A/B 对照必须用 B1
而非 B0 的原因 —— B0 没有快照并集，`withdraw` 会是 60 而不是 1，A/B 就失去可比性。

---

## 7. 沙箱改动与回滚

所有「修改脚本」的动作**只发生在副本上**：

| 沙箱文件 | 怎么来的 | 仓库对应物 |
|---|---|---|
| `B0_v153.mjs` / `B0_v146.mjs` | `git show HEAD:…` 导出 | 仓库副本**未被触碰** |
| `GUARD_v153.mjs` / `GUARD_v146.mjs` | `cp` 只读拷贝 | 同上 |
| `B1_v153.mjs` / `B1_v146.mjs` | `strip_reverse.mjs` 只删一个块 | 同上 |
| `B1NAIVE_*.mjs` / `NAIVE_*.mjs` | `sed` 删一行 | 同上 |
| `DRIFT_v153.mjs` | 单行替换，替换文本取自 `git show HEAD:…` | 同上 |
| `snap_pruned_*.txt` / `_v*_keep_whitelist.txt` | `sed` / `cp` | 同上 |
| `content/v1.5.3/zh/api/campaign/ZZSyntheticProbe.md` | 临时造，R1 结束即 `rm` | 仓库内**未造过** |
| `content/v1.4.6/zh/api/campaign/Hero.md → campaign-ext/Hero.md` | 合成 rebucketing（沙箱内 `mv` 一次） | 仓库内**未 mv** |

**回滚 = `rm -rf "$TEMP/bl-guard-evidence"`。仓库副本从未被改**，`git status` 可证（§8）。

**全程没执行过一次 move**：
* v1.5.3 一律 `--dry`（`--dry` 时脚本在第 128 行 `if (!DRY)` 处直接跳过 rename 段）；
* v1.4.6 一律默认 DRY-RUN（第 119 行 `if (!APPLY) process.exit(0)` 在 rename 段之前）；
* 唯一一次 `mv` 是我自己搭 1.4.6 合成漂移的 fixture，只发生在 `%TEMP%` 里。

---

## 8. 收尾：真实脚本 dry-run，仓库未变

```bash
$ cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io
$ node tools/_v146_withdraw.mjs
MODE=DRY-RUN
whitelist=112  missing=0  suspect=0
files_on_disk=112  to_move_out=0  to_keep=112
exit=0

$ node tools/_v153_withdraw.mjs --dry
total=150  keep=150  withdraw=0  (DRY RUN)
remaining under content/v1.5.3: 150
exit=0
```

与 Boss 预期**逐字一致**（`MODE=DRY-RUN to_move_out=0 to_keep=112` / `total=150 keep=150 withdraw=0`）。

仓库残留检查：本轮在仓库里**只新建了这一个 `.md`**，未改 `content/`、未改 `tools/` 下任何既有文件、
未动 `_author_brief_v146.md`、未 `git add`/`commit`、未跑 zola。
`git status --porcelain content` 里的 21 个 `M` + 1 个 `??`（`content/v1.4.6/zh/api/mission-ext/_index.md`），
mtime 跨 `10-02 23:53` – `10-03 00:42`，**全部早于本轮开工（本轮首个命令在 `10-03 01:0x`）**，
是历史遗留与另一路并行 worker 留下的改动，与本文件无关。

可复核的正面证据：本轮的目标页面**逐字节未动**（4877 字节、mtime 仍是 `2026-10-02 20:01`）：

```bash
$ find . -name 'ZZSyntheticProbe.md'          # 合成探针有没有漏进仓库
(空 —— 没漏)
$ ls -l --time-style=+%Y-%m-%d_%H:%M content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
-rw-r--r-- 1 ModerRAS 197609 4877 2026-10-02_20:01 content/v1.5.3/zh/api/campaign/ICampaignBehavior.md
```

---

## 9. 结论（一句话）

**反向完整性检查有效，但它的价值不在「原始漂移」上** —— 原始漂移是正向检查拦的（R2/R2b 实测）。
它的价值在**天真修法之后**：把死路径从白名单删掉这个最自然的操作，会让漂移整个翻到反向方向，
此时无守卫脚本以 `exit 0` 静默决定 `withdraw=1`（R3 实测），有守卫脚本点名 `UNLISTED` 并 ABORT（R4 实测），
操作者照着同步后一切正常放行（R5 实测）。**必要性由 R3↔R4 的 A/B 支撑，充分性由 R1 支撑，
两者命中同一条分支，不重复计数。**
