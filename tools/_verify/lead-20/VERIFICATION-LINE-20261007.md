# lead-20 验证线 · 落盘读数与判定（2026-10-07）

> 本线职责：**只读 + 独立复算 + 门禁读数发布**。不写 `content/**`、不写 `templates/**`、不改任何判据/阈值/白名单。
> 每个数字都附「量它的命令」；每个 `0` 都附成因（`0` 只有两类：判据坏了 / 语料确实为空）。

---

## 1. 权威门禁时间线（同一把尺）

| 取数时刻 (UTC) | FILES | TOTAL_LINKS | BROKEN_LINKS | FILES_WITH_BROKEN | RESOLVE_NEITHER | RESOLVE_STATIC |
|---|---|---|---|---|---|---|
| 2026-10-07T07:40:26Z | 39037 | 149503 | **0** | 0 | 2 | 2 |
| 2026-10-07T08:06:49Z | 39037 | 149552 | **1** | 1 | 3 | 2 |
| 2026-10-07T08:08:33Z | — | — | **1** | — | — | — |
| 2026-10-07T08:13:34Z | 39039 | 149578 | **0** | 0 | 2 | 2 |

命令：`node tools/audit-links.mjs`

**转红 → 回绿的全过程**（本轮唯一一次门禁变色）：

- 病灶：`content/v1.4.5/zh/api/campaign-ext/AcceptCallToWarOfferMapNotification.md`
  - 第 155 行 `[InformationData](../../core-extra/InformationData)` ← 对
  - 第 166 行 `[InformationData](../InformationData)` ← 错，解析到 `api/InformationData`，该路径不存在
  - 真身：`content/v1.4.5/zh/api/core-extra/InformationData.md`
  - **判定依据**：同页第 155 行已写对 ⇒ 同页自相矛盾的笔误，**不需裁定口径**。
- 定位工具：`node tools/audit-changed-links.mjs`（秒级，直接给出文件与目标；全站门禁只说「有 1 条」）
- 持有线 lead-18 已修，修复后该页 sha256 前 16 位 `ce73f34adc596a12`，第 166 行已为 `../../core-extra/InformationData`
- 登记：`tools/_verify/open-defects.tsv` 第 32 行

**`BROKEN_LINKS=0` 的成因**：语料确实无断链，不是判据坏。证据：同跑批 `RESOLVE_NEITHER=2`、`RESOLVE_STATIC=2` —— 判据确实在报非零事件，且这 2 条经 `static/` 目标类解析成功；`RESOLVE_OK_*` 均非零，证明解析器在工作而非空转。

---

## 2. nav-orphans 读数（口径 `self-link-counts-as-inbound`）

| 取数时刻 (UTC) | total_pages | orphans | by_tree |
|---|---|---|---|
| 2026-10-07T07:40:41Z | 39037 | **0** | `{}` |
| 2026-10-07T08:13:34Z | 39039 | **2** | `{"v1.3.15":2}` |

命令：`node tools/nav-orphans.mjs --by-parent`

**`orphans=2` 的归属与判定（我独立核实，非转述）**：
- `content/v1.3.15/en/architecture/action-family.md` · `content/v1.3.15/zh/architecture/action-family.md`
- 两页 mtime `2026-10-07T16:14:17`（本地）= 我测量前 **数秒**，即**正在被写入**。
- 两页的桶 `_index.md`（`content/v1.3.15/{en,zh}/architecture/_index.md`，mtime 15:50:22）**尚未加入指向它们的链接**。
- ⇒ 判定：**新页入库但桶索引未同步的在写中间态**，不是内容缺陷。桶 `_index.md` 补上链接后应自动消失。
- 归属：`v1.3.15/{en,zh}/architecture/`（lead-18 已声明不是其线，其线为 `v1.4.5/zh/api/campaign-ext/` 且 0 孤儿）。

**`orphans=0` 的成因**（07:40:41Z 那次）：分母健全 —— `total_pages=39037` 与同批 `FILES=39037` 逐数一致；`by_tree={}` 说明无任何父目录残留孤儿。
**口径警告**：`self-link-counts-as-inbound`（自链算入边）是**弱口径**。`orphans=0` 不等于树状结构已成立，只等于该口径下无孤儿。另有独立的「回程」口径见 §3。

---

## 3. 回程口径：783 页没有回到父 section 的链接（叶子页 684）

命令：`node tools/_verify/lead-20/upcheck.mjs [--list <out>]`

```
TOTAL_PAGES=39039   LEAF_PAGES=38500
NO_UP_LINK_ALL=783  NO_UP_LINK_LEAF=684
v1.4.5=362  v1.3.15=218  v1.5.3=138  v1.3.0=36  versions=18  v1.4.7=10  _index.md=1
top dirs: v1.4.5/zh/api=206  v1.5.3/zh/api=138  v1.4.5/en/api=118  v1.3.15/zh/api=76  v1.3.15/en/api=75
```
逐页清单：`tools/_verify/lead-20/no-up-link-783-20261007.txt`（783 行）

**这不是 orphan 口径，不要与 §2 对撞。** 孤儿口径问「有没有人链进来」（有：桶 `_index.md` 链了每一页），本口径问「能不能走回去」（不能）。用户原话「跳过去回不来了」指的是后者。

### 判据定义（**必须带单位，否则会得出错数**）
一个 target 算「回程」当且仅当它匹配 `^(\.\./)+(_index\.md)?$` **或** 就是裸 `..`。

**裸 `..` 必须接受**，因为权威门禁接受：`tools/audit-links.mjs` 第 77 行 —— *"Ensure directory semantics: trailing slash so `..` climbs from the page folder"* —— 它把 `..` 规范化后解析。
拒绝 `..` 会**多算 87 页**（实测：严格口径 870 vs 对齐口径 783；差值 87 页**全部**是裸 `..` 形态，`_index.md`/`./_index.md` 形态 0 页）。
⇒ **783 是与权威门禁一致的正确读数；870 是过计数。**

### 判据不坏的反证（三条，缺一不可）
- `content/v1.4.5/zh/api/campaign-ext/GainRenownAction.md` 有 `## 导航` + `../` → **未**入列
- `content/v1.4.7/en/api/campaign/Campaign.md` 有 `↑ Parent: [...]` → **未**入列
- `content/v1.3.0/zh/api/campaign/DefaultEncounter.md` 有 `本区域目录` → **未**入列
⇒ 判据在「有回程链接」的页上确实命中，故结果不是「判据没跑」。

### 稳定性
`07:45:07Z` → `08:05:42Z`（隔 20 分钟）→ `08:16:32Z` 三次复算逐数一致（783 / 684）。
另：`08:11:18Z` 曾出现 870，经查**是我自己脚本的判据过严**（见上），**不是内容回归**。
独立验证：最近 45 分钟内被修改的 115 页中，**0 页**缺回程链接 ⇒ 新增写入没有引入该类缺陷。

### 真样本（逐页核过）
- `content/v1.3.0/en/guide/campaign-basics.md` —— 全部 H2：`Overview` / `Mental Model` / `CampaignBehavior` / `MobileParty` / `Settlement` / `Differences from v1.3.15` / `Related Documentation` / `Usage Example`。**无 `导航` 节，无任何 `../` 回程链接。**
- `content/v1.3.0/en/api/campaign/Campaign.md` —— 末节 `## See Also` 只有平级/下行（`../Clan`、`../Hero`、`../../../architecture/save-system`），**无 `../` 回本桶**，`## 导航` 不存在。

---

## 4. 判分器口径越界警告：J2 是**批次尺**，不是站点尺

`tools/_verify/lead-145zh-judge.mjs` 的 J2 要求七节齐全（概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见族 / 导航）。
**七节模板（含 `## 导航`）采用率**：

| 树 | 页数 | 有 `## 导航` |
|---|---|---|
| `v1.3.0/zh` | 5300 | **4** |
| `v1.3.15/zh` | 5690 | **231** |
| `v1.4.5/zh` | 9477 | **344** |
| `v1.4.7/zh` | 48 | **0** |

⇒ 七节模板只存在于**新写的深页**。拿 J2 全站跑会产出成千上万条**构造性的假 FAIL**。
实例：用该判分器跑 `v1.3.0/zh` 5 页得 `pass=4 FAIL / 1 PASS`，但逐条复核后判定 **4 个 FAIL 全是口径不匹配，不是内容缺陷**：
- 那 4 页**并非「回不去」**：逐页 grep 到 `- [本区域目录](../)`（`DefaultEncounter:199` · `DefaultCharacterStatsModel:139` · `DefaultArmyManagementCalculationModel:241` · `DefaultClanFinanceModel:198`），回程是通的。
- 它们用 `主要属性`/`主要方法`/`使用示例` 这套旧命名，`主要方法`≈`关键成员`、`使用示例`≈`真实示例`，**实质内容在，只是节名不同**。

**同一判分器另有一条潜在假阳性**：其 `SRC_ROOT` 硬编码 `../bannerlord-1.4.5/Bannerlord.Source`，而 `v1.3.0` 没有 `Bannerlord.Source` 目录（其 `.cs` 在各模块目录下）。对 v1.3.0-only 文件 J3 会误报。
**⇒ 需 Boss 裁定**：七节模板是「仅新页标准」还是「全站标准」。若为全站标准，这是几千页工程且必须先给分母。

---

## 5. 复算方法论：一条差点造成误判的教训

lead-18 的冻结宣告里 9 个字节数与我实测**全部不符**（差 198–284 B），但 **sha256 前缀 9/9 完全一致**。
**我没有按「数不符」指控**，先复算：他们的数**精确等于 `文件字节 − frontmatter 字节`，9/9 误差 0**。
⇒ **数字没错，单位标签错了**（报的是正文字节，写成 `B`）。已回信建议改为 `body B`。

> **规则**：sha 不同 = 内容不同；**sha 相同而字节不同 = 有人量了不同的 span 或单位**。
> 先诊断变换（`bytes − frontmatter`、body-only、字符数、CRLF 归一），再判断是否不实。
> 另已排除：CRLF 翻译（文件纯 LF，`grep -c $'\r'` = 0）、多字节字符计数（码点约为字节的 60%，远低于其数字）。

同类：`bash $'\uFFFD'` 是**坏判据**（展开为字面量 5 字符串 `\uFFFD`，会恒返 0）。U+FFFD 检测必须用 node + 正控制。

---

## 6. 独立复核（不看报告，只看磁盘）

**13 页复核**（`tools/_verify/lead-20/manifest-WB-20261007T074522Z.txt`）
- 判分器已钉身份：`tools/_verify/lead-145zh-judge.mjs` = 23649 B / mtime 15:41 / sha256 head `05c2a522adbc1183`
- **pass = 9/13**（fail 4，全部是 §4 的口径问题）· **deep_pass = 13/13** · **tier = handwritten_deep = 13/13**（三数分开打印）
- 引用边界：**260 条，0 越界，0 缺文件**
- U+FFFD：**0**，且判据经正控制证明有效
- 链接形态：**0 真缺陷**；5 条尾斜杠全是 section-index 链接（J11 允许）
- 与权威门禁 `--cross-check`：**AGREE**

**b01/b02 冻结凭据**：以 **sha256** 认账（lead-18 已宣告 b01 冻结 07:46Z / b02 冻结 07:38Z）。**b03 未冻结，不出结论。**

---

## 7. 工具：`tools/audit-changed-links.mjs`（本线指派、已入库）

- commit `963a586430` · 5593 B · sha256 head `591d68a7ff1d853d`
- 只审相对 HEAD 有改动的 `content/**/*.md`（**含 untracked**），**秒级**完成（全站审计分钟级）
- 解析语义**复用** `audit-links.mjs`（含 `static/` 回退）；`audit-links.mjs` 本体**一行未动**
- `BROKEN_LINKS>0` ⇒ **非零退出**，可直接作写作线的**批级门禁**
- 上线后第一个动作即抓到 §1 那条真 404（全站门禁只报「有 1 条」，它直接给出文件与目标）
- 已知失败模式（已在文件头记录）：git 返回**仓库相对**路径，若与**绝对** root 前缀比对会得到 `CHANGED_FILES=0` 的假读数
