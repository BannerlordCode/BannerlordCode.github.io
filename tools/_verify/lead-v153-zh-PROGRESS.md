# lead-28 — v1.5.3/zh 手写深页写作线（台账，追加式）

仓库 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io` · 分支 `main` · 起始 HEAD `00104c0f5f`
源码只读树 `C:/WorkSpace/Bannerlord/bannerlord-1.5.3`（**无** `Bannerlord.Source` 层）

> 本文件是**追加式**台账。每个批次追加一节：批次 / 页数 / 路径 / 判分器读数 / 门禁两套数 / commit SHA / 剩余队列数。
> 上游台账：`tools/_verify/lead-26-PROGRESS.md`（含 D-1~D-6 教训，本线沿用）。

---

## 0. 接班侦察（实测，非推断）

| 项 | 值 | 命令 / 依据 |
|---|---|---|
| 起始 HEAD | `00104c0f5f` | `git log --oneline -1` |
| 队列 | **5 605** 条 | `wc -l tools/_verify/missing-types-1.5.3-zh.txt` = 5606 行（含 1 行 `#`） |
| v1.5.3/zh/api 叶子页 | **179** | 逐桶 `ls` |
| 桶分布 | storymode 93 · core-extra 44 · localization 20 · campaign 12 · save-system 4 · mission 2 · gui 2 · campaign-ext 2 · engine 1 · core 1 | 同上 |
| 桶索引页 | 全树只有 9 个 `_index.md`；**`campaign/` 与 `campaign-ext/` 都没有自己的桶索引** ⇒ 两者父索引都是 `content/v1.5.3/zh/api/_index.md` | `find content/v1.5.3 -name '_index.md'` |
| 队列桶分布（按 `_dir-map-canonical.json` v5 最长前缀规则解析 5 605 条） | mission-ext 1643 · campaign-ext 763 · campaign 662 · sandbox 658 · viewmodel 609 · core-extra 597 · gui 287 · engine 141 · storymode 95 · save-system 50 · custombattle 40 · network 32 · system 18 · modulemanager 8 · localization 2 | 实测脚本解析 |
| 队列形态 | `TaleWorlds.<...>.<TypeName>` 全限定名，414 个不同命名空间前缀 | 实测 |

### ★ 本线选桶理由（不是按队列顺序打）

用户诉求是「开发者的角度 / 类覆盖不完全 / 有大局观」。据此排价值：

1. **`campaign` 根命名空间的核心世界对象全部缺页**（`Hero` · `Clan` · `Kingdom` · `CharacterObject` · `CultureObject` ·
   `CampaignTime` · `ExplainedNumber` · `FactionManager` · `KingdomManager` …）。
   现存 12 页全是「框架管道」（`Campaign` / `CampaignBehaviorBase` / `CampaignGameStarter` / `GameModels` …），
   **真正的世界状态类型一个都没有** —— 这是最大的可见缺口。
2. **`campaign-ext` 只有 2 页，但它装的是「mod 能替换什么」的全部契约**（`ComponentInterfaces` 144 + `GameComponents` 127）。
   这是全游戏最 mod-relevant 的面，却几乎是空的。
3. 因此 c1 选：**campaign-ext 的模型契约/默认实现对** + **campaign 的两个最常用值类型**。

---

## 1. 批次 c1（6 页）

### 1.1 派单设计（两轮，单索引写者）

| 任务名 | worker | 页 | 桶 | 源码行数 |
|---|---|---|---:|---:|
| `models-p1` | worker-1 | `PartySizeLimitModel` · `DefaultPartySizeLimitModel` | campaign-ext | 45 + 548 |
| `models-p2` | worker-2 | `SettlementLoyaltyModel` · `DefaultSettlementLoyaltyModel` | campaign-ext | 103 + 488 |
| `campaign-core` | worker-3 | `CampaignTime` · `ExplainedNumber` | campaign | 754 + 377 |

- **R1**：3 个 worker 各写 2 页（leaf-only：不写 `_index.md`、不 commit、不 `git add`）。
- **R2**：由 Lead（单写者）补 `content/v1.5.3/zh/api/_index.md` + 跑门禁 + **一次**提交（文件级 pathspec）。

### 1.2 派单前我**自己**做掉的实测（这是本线的质量控制点）

| 检查 | 结果 |
|---|---|
| 判分器尺状态 | `# judge sha256 = 16e9b98fb19b8eb479ae983c0045401cc776fcfff6f3f14125edcbc1445be23a` · `mtime 2026-10-07T10:44:20.520Z` · **`working-tree = clean`**（与 HEAD 一致） |
| 导航块深度实测 | 在同深度真实页 `content/v1.5.3/zh/api/core-extra/HeroHelper.md` 上跑判分器 ⇒ `PASS` · `J5R unresolved=0` · `J10 stray=0` · `J11 trailSlash=0` · `J12 inconsistent-text=0` |
| **6 个夹具探针**（D-1 防线的机械形式） | 建 `tools/_verify/lead-28-fixture/content/v1.5.3/zh/...` 探针树，把**本批 6 页将要写的逐字 `参见` + `导航` 块**全部放进去跑判分器 ⇒ **6/6 全部 `J5R unresolved=0` · `J10 stray=0` · `J11 trailSlash=0` · `J12 inconsistent-text=0`**（唯一 FAIL 是我故意留空的 J6/J8 桩，非链接问题） |
| 行号锚点表 | 由只读脚本从源码生成到 `tools/_verify/sig-c1/*.sig.txt`（**不写 `content/**`**），并逐条与源码抽检对过（`CampaignTime.cs:122` → `public static CampaignTime Now` ✅ 等 5 条） |
| 同名 `.cs` 歧义 | 本批 11 个源码 basename **全树唯一**（`find . -name X.cs \| wc -l` = 1）⇒ J3 按 basename 解析不会 ambiguous |
| 已实测存在的 `参见` 目标 | 全部先用 `ls` + 夹具探针确认存在；`href` 只从白名单里给 worker，不许自选 |

### 1.3 门禁基线（批前，Lead 亲自跑）

```
node tools/audit-links.mjs   ⇒ FILES=39186 BROKEN_LINKS=0 FILES_WITH_BROKEN=0 RESOLVE_NEITHER=2 RESOLVE_STATIC=2  EXIT=0
node tools/nav-orphans.mjs   ⇒ total_pages=39186 orphans=0 orphan_parents=0 by_tree={}
```

### 1.4 结果 —— 8 页已交付，2 次提交，四道硬判据全过

**提交（均已由我逐页独立复核，非 worker 自报）**

```
d3979c4a3e  content(v1.5.3-zh): hand-write 6 deep pages (PartySizeLimit/Loyalty model pairs + CampaignTime/ExplainedNumber) and wire into index
            7 files changed, 672 insertions(+), 9 deletions(-)
cfd991fff3  content(v1.5.3-zh): hand-write SettlementFoodModel + DefaultSettlementFoodModel deep pages and wire into index
            3 files changed, 203 insertions(+), 7 deletions(-)
```

**逐页验收读数（judge sha256 `16e9b98fb19b8eb479ae983c0045401cc776fcfff6f3f14125edcbc1445be23a` · working-tree clean）**

| 页 | 字节 | 关键成员 | J3 checked | J3 bad | J13 | 裸引用 M+K | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign-ext/PartySizeLimitModel | 7 909 | 10/10 带行号 | 10 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/DefaultPartySizeLimitModel | 11 911 | 26/26 | 26 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/SettlementLoyaltyModel | 11 479 | 24/24 | 24 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/DefaultSettlementLoyaltyModel | 14 968 | 46/46 | 46 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign/CampaignTime | 9 722 | 18/18 | 18 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign/ExplainedNumber | 9 026 | 17/17 | 17 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/SettlementFoodModel | 6 966 | 6/6 | 6 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/DefaultSettlementFoodModel | 8 701 | 16/16 | 16 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| **合计** | | **163/163** | **163** | **0** | **0** | **0** | **8/8** | **8/8** | **0** |

★ **163 条行号引用，bad=0 · J13=0 · 裸引用=0** —— 四道硬判据（`bad=0` / `checked≥members` / `J13=0` / `M+K=0`）逐页全过。
★ **每条「关键成员」行都带行号**（163/163），所以「防空引用」判据不是空洞通过。

**四道门禁（批前 → 批后，两套数都是我自己跑的）**

```
① node tools/audit-links.mjs
   批前: FILES=39186 BROKEN_LINKS=0  FILES_WITH_BROKEN=0  RESOLVE_NEITHER=2
   批后: FILES=39203 BROKEN_LINKS=6  FILES_WITH_BROKEN=6  RESOLVE_NEITHER=6
   ⇒ 本批【零】v1.5.3 路径出现在 broken 列表里（`grep -c v1.5.3` = 0）
   ⇒ 那 6 条全部是【别线未跟踪在制品】: v1.4.6/zh/api/campaign/{MobileParty,PartyBase}.md
                                       v1.4.7/zh/api/campaign/{CharacterObject,MobileParty,PartyBase,TroopRoster}.md
   ⇒ 按 boss-4 #20863 规则 1：病灶是别线 `??` ⇒ 只上报、不阻塞本线
② node tools/nav-orphans.mjs
   批前: total_pages=39186 orphans=0 by_tree={}
   批后: total_pages=39203 orphans=2 by_tree={"v1.4.6":1,"v1.4.7":1}
   ⇒ **v1.5.3 孤儿 = 0**（本批 8 页全部有入链）；那 2 个也全在别线树里
③ 本批集合自洽: 8 页 + api/_index.md 全部 `J5R unresolved=0`（同批同跑，链接目标全在 HEAD ∪ 本批）
④ 索引计数不变量: 提交 8 页 ⇒ `api/_index.md` 恰好 +8 行/口径 +8（68→76，与提交页数一致，不是计划页数）
```

**覆盖变化（磁盘实测，命令见 §3.3）**
```
content/v1.5.3/zh/api 叶子页: 179 → 187
  campaign-ext  2 → 8
  campaign     12 → 14
其余 8 个桶不变；storymode 92 / localization 19 仍不在 api/_index.md 的 8 桶表里（= D-7，待 Commit B）
索引口径校验: 8+14+44+1+1+2+4+2 = 76 ✅ 与 api/_index.md 的「76 篇」一致
```

**并发配置（两轮）**：R1 worker-276 / worker-277 / worker-278 / worker-280 写叶子页（leaf-only）；
R2 由我（单写者）补索引 + 跑四道门禁 + 2 次提交。四个 worker 均已 `team_cancel`（完工且我已独立验证，不留着占槽）。

**worker 主动报出的诚实项（我独立解决）**：worker-277 报「`GameModels.cs:701` 只证明取用调用，未找到把
`DefaultSettlementLoyaltyModel` 注册进去的那一行」。我实测解决：**`SandBoxManager.cs:304`**
= `gameStarter.AddModel<SettlementLoyaltyModel>(new DefaultSettlementLoyaltyModel());`（`SandBoxManager.cs` 全树唯一）
⇒ 页面里「默认实现是 `DefaultSettlementLoyaltyModel`」这句**为真且有阳性证据**。
（worker 没有编造，而是把不确定写进回报 —— 这正是规则 B 要的行为。）

**worker 报出的另一条诚实项**：worker-276 报「两个 cheat 开关（531/534）在本文件内无赋值点」⇒ 页面只写「由外部置位」，未声称文件内引用。同样正确。

---

## 2. 缺陷记录（本线自记，供后续批次直接规避）

### ★ D-10：并发批里 J5R 是**批次级**判据，不是单页判据（我的派单缺陷）

**现象**：c1 的 `models-p1` / `models-p2` 两对页面**互相链接**（契约 ↔ 默认实现）。
worker 写完第 1 页时第 2 页还没落盘 ⇒ 单页跑判分器必然报 `✗ J5R unresolved-links=1 [../<兄弟页>]`。

**机制**：`J5R` 解析的是**磁盘上真实存在的页面**。并发批里第一个写完的页**必然**链向尚不存在的兄弟页。
⇒ 若派单把「单页 J5R=0」当验收线，那条判据**结构上不可满足**，worker 只能反复「修」或回头再读 ⇒ 0 页落盘。

**我的错误有两层**（都是派单侧的，不是 worker 的）：
1. brief 里写「FAIL 就按判分器逐条改并重跑，直到 PASS」——把批次级判据下放成了单页判据。
2. 探针树 `tools/_verify/lead-28-fixture/` 是在**全部 6 页的链接块都就位后**才跑的 ⇒ 只证明了「链接深度对」，
   **没有**证明「单页可满足」。**探针必须分两层跑**：
   - 第 1 层：单页探针（只放该页自己的链接块，兄弟页缺席）⇒ 预期 J5R 报兄弟页，用于确认「这个 FAIL 是预期的」。
   - 第 2 层：全批探针（所有 6 页就位）⇒ 预期 J5R=0，用于确认链接深度正确。

**修正（已定向发给 3 个 worker，#20597 / #20598 / #20599）**：
- **单页判据**（worker 自跑，必须全绿，**不含 J5R**）：
  `J1=0 · J2 missing=[] · J3 bad=0 · J6=deep_pass · J8 >2500B · J9 csharp>=3 · J10 stray=0 · J11=0 · J12=0 · J13=0 · tier=handwritten_deep`
- **J5R 降为批次级**：两页都落盘后**一次对两页跑**，此时应为 0。
- **白名单纪律**：派单白名单只含**派单时刻磁盘上已存在**的页面；并发兄弟页不进白名单，
  改为「本批页面集合内互链、R2 由 Lead 统一验」。
- **顺序纪律（规则 C）**：先落盘、再打磨；行号没核到的成员**宁可不写那一行**。

**来源**：boss-4 #20575（在 party-line 的 `content/v1.4.7/zh/api/campaign/MobileParty.md` 上实测到同款 —— 那页 13 787 B、
`J3 checked=81 bad=0`、`deep_pass`、`handwritten_deep` 全合格，却被 3 条并发兄弟页链接判 FAIL）。
⇒ **不是孤例，是并发写作的结构性缺陷**。

---

## 3. 父索引真实性修复（boss-4 #20549 已授权，独立提交，编号 Commit B）

### 3.1 授权原文要点

> 「【裁决：授权修 D-7/D-8/D-9，且按「整表对齐磁盘实测」修，不只补本批 6 行】」

约束：① 与内容批**分开提交**（独立 commit，不要混进 c1）；② 报改前/改后两套数 + 量它的命令；
③ 只改 v1.5.3/zh 下我拥有的文件；④ 散文写成可核的事实陈述，不用「约/大约」；⑤ c1 的 6 行仍按原计划先提交。

### 3.2 三条常设规则（即日起对本线生效，boss-4 #20549）

- **A 父索引必须列全集**：每次 R2，父索引的桶表/页面表要对齐磁盘实测全集（gate §1.2），规模声称对齐实测（§1.3）。
  不要只补自己新写的行。**整表修复作为独立提交。**
- **B brief 不得凭记忆点名成员**：lead-30 实测抓到自己 brief 里 6 个 `Kingdom` 成员 + 若干
  `MobileParty/PartyBase/TroopRoster/MissionObject/SaveContext` 成员**在源码里根本不存在**。
  「brief 点名不存在的成员」正是写出伪造文档的机制。要么先跑只读抽取拿到真实 public 面（行号 + 原文行）再点名，
  要么在 brief 里明写「这些是未验证提示，逐个 grep 核实」。
  ★ **本线已合规**：c1 的 brief 只使用 `tools/_verify/sig-c1/*.sig.txt`（由只读脚本从源码生成的行号 + 原文行），
  且已在 brief 里明写「行号只能用 facts 表里的那些；若发现不符就停下报 Lead」。
- **C 写手 brief 必须给读的上界**：三条线都实测出现「把读源码当交付 ⇒ 0 页落盘」。
  顺序固定「先落盘、再打磨」；行号没核到的成员**宁可不写那一行**，不要回头无限读。
  ★ 已定向发给 worker-276/277/278（#20583 / #20584 / #20585）。

### 3.3 改前实测（改前两套数，Lead 亲自跑）

**磁盘真值（叶子页，排除 `_index.md`）**：
```
$ cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
$ for d in content/v1.5.3/zh/api/*/; do b=$(basename "$d"); \
    n=$(ls "$d"*.md 2>/dev/null | grep -v '_index.md' | wc -l); \
    printf '%-16s %4d\n' "$b" "$n"; done
campaign-ext        2
campaign           12
core-extra         44
core                1
engine              1
gui                 2
localization       19
mission             2
save-system         4
storymode          92
TOTAL LEAF PAGES = 179
```
★ 注意：早先我报的「storymode 93 / localization 20」是**把 `_index.md` 算进去**了；
叶子页真值是 **storymode 92 / localization 19**。两数都是真的，但口径必须写清（这正是 READING-RULES ④ 的教训）。

**桶索引页真值**：`localization` 与 `storymode` **有** `_index.md`；其余 8 个有页面的桶目录**没有**。

**类型数真值**（`tools/_v153_inventory.json`，`byDir` 求和 == `typeCount`）：
```
$ node -e 'const j=require("./tools/_v153_inventory.json"); console.log(JSON.stringify(j.dirMap.byDir))'
{"core-extra":516,"sandbox":1247,"storymode":183,"achievementsystem":4,"activitysystem":6,
 "campaign":706,"campaign-ext":771,"viewmodel":653,"engine":216,"gui":273,"system":19,
 "localization":21,"modulemanager":9,"mission-ext":2065,"mission":5,"core":2,
 "custombattle":40,"network":32,"save-system":56}
SUM byDir = 6824 | typeCount = 6824 | declaredBuckets = 19 | emptyBuckets = []
```

**要修的错声称（改前）**：
| 位置 | 声称 | 磁盘真值 |
|---|---|---|
| `api/_index.md:3,15,36,86,105` | 「**8 个**有页面的桶」「**68 篇**」 | **10 个**桶有页 · **179 篇** |
| `api/_index.md:18` | 「桶索引页…在 v1.5.3 下**一张都没有**」 | localization / storymode **有** `_index.md` |
| `api/_index.md:107,113` | 「本版本只有 **68 篇**」「真实缺口页数只会比 **6 756** 更小」 | 179 篇 · 6824−179 = **6 645** |
| `zh/_index.md:3,36` | 「已手写的 **27 篇**」「8 个桶」 | **179 篇** · **10 个桶** |
| `zh/_index.md:51` | 「本版本一共 **37 个页面**」 | `find content/v1.5.3/zh -name '*.md' \| wc -l` = **187**（其中 **5 个是 `_index.md`**，**182 篇是内容页**：api 179 + architecture 3） |
| `zh/_index.md:59` | 「覆盖了 **27 个**…**0.4%**」 | **179 个** · **2.6%** |
| `zh/_index.md:60` | 「其余 **6 797 个**类型尚未撰写」 | **6 645** |
| `zh/_index.md:62` | 「桶索引页不存在…站内没有任何链接指向它们」 | localization / storymode 有索引且被链 |
| `zh/_index.md:75–94` 已撰写列 | core-extra 3 · storymode 0 · localization 0 · 合计 27 | core-extra 44 · storymode 92 · localization 19 · 合计 179 |
| `zh/_index.md:104` | 「`sandbox` / `storymode` 是**整桶空白**」 | storymode **有 92 页**（sandbox 确实 0） |

### 3.4 ★ 我对「页面表对齐全集」的工程判断（需 boss 知情，可被驳回）

**实测依据**：`templates/section.html:33` 渲染 `{% for page in section.pages %}`，即**每个 section 页会自动列出它的全部页面**。
而 `api/campaign/`、`api/campaign-ext/` 等 8 个桶目录**没有** `_index.md` ⇒ 它们不是 Zola section ⇒ 它们的页面属于 `api/` section。
⇒ **渲染后的 `/v1.5.3/zh/api/` 页已经自动列出全部 185 篇**（一行一个链接），无需任何人手维护。

**因此我的做法**：
1. `api/_index.md` 的**桶表补成 10 行**（精确页数），并在表下明写「其余 9 个声明桶 0 页」。
2. `api/_index.md` 的**按任务表**明写它的**范围**（「本表是按任务挑的入口，不是全集；全集由本站自动列在本页底部」）+ **精确总数**。
   ⇒ 满足 gate §1.2「给了链接就必须给数量」的意图（读者能判断「3 条是不是全部」）。
3. `zh/_index.md` 的**按桶页表**改为「桶 | 已撰写（精确） | 1.5.3 类型数 | 覆盖率 | 从哪里读」，大桶指向 `./api/`（自动全集，**不会 404**）。
4. **我不手抄 185 条链接**。理由（三条，均可核）：
   - H0 禁止脚本写 `content/**` ⇒ 只能手抄；
   - 手抄 185 条链接 + 185 条源码路径 ≈ 1.7 万字符的机械转录，**错一个字符就是一条断链**，
     而断链只能事后被门禁抓到（`READING-RULES` ② 的形态）；
   - 它与每页自己的 `**Source:**` 行**重复**，且 `api/` section 页已自动提供全集。
   ⇒ 净收益为负。**若 boss 要求手抄，我照做，但会先声明这是一次高风险机械转录。**

   ★★ **boss-4 #21000 已正式裁定：不手抄，批准本方案**，并记为本项目**已裁定的设计选择**（不需要再回去问）。
   它补了三条理由：① H0 禁脚本写 `content/**` ⇒ 只能手抄 ⇒ 手抄本身会制造我们要消灭的缺陷（404）；
   ② `templates/section.html:33` 已自动列全集 ⇒ 页面仍可达、树仍完整；③ 精确页数满足 gate §1.2。
   三条**附加条件**（我已逐条满足，可核）：
   - ① 每桶页数必须是实测值 ⇒ ✅ 10 桶 / 76 页 / 187 页 / 2.7%，全部带可重跑命令（§3.5）。
   - ② 若某桶有 `_index.md`，链到它 ⇒ ✅ 已链 `[api/localization/](./api/localization/)` 与 `[api/storymode/](./api/storymode/)`。
   - ③ **不得**链 `./api/<无索引的桶>/`（会 404）⇒ ✅ 只链 `./api/` 与那两个有索引的桶。
5. **不指向 `./api/<桶>/`** —— 那 8 个桶目录没有 `_index.md`，指向它就是造 404（这正是用户抱怨的形态）。

### 3.5 改后实测（Commit B 已提交）

**提交**
```
2ea8b82fe4  content(v1.5.3-zh): align both zh index pages with disk truth (10 buckets, exact counts, bucket-index prose fix)
            2 files changed, 65 insertions(+), 41 deletions(-)
```
★ **提交时共享索引里有别线的 7 个 staged 文件**（`content/v1.4.7/zh/api/campaign/{Hero,Clan,CharacterObject,MobileParty,PartyBase,Settlement,TroopRoster}.md`）
⇒ 若跑裸 `git commit` 就会卷走它们。我用**文件级 pathspec** 提交，并用两道证据证明没卷走：
```
git show --stat HEAD  ⇒ 恰好 2 个文件（全在 v1.5.3/zh/）
git show --name-only HEAD | grep -c v1.4.7  ⇒ 0
```
★ 随后那 7 个文件被**别线自己**提交为 `de34d20b69`（时序：我 `git add` → 别线提交 → 我提交）。
⇒ 不是被我卷走的，但这是 `READING-RULES ⑥` 那个失败形态的**一次真实近距接触**，记在这里。

**改后实测（改前/改后两套数）**

| 读数 | 改前 | 改后 | 量它的命令 |
|---|---|---|---|
| `api/_index.md` 声称的有页桶数 | 8（错） | **10**（=实测） | `for d in content/v1.5.3/zh/api/*/; do …wc -l` |
| `api/_index.md` 声称的总页数 | 68（错） | **76**（=8+14+44+1+1+2+4+2） | 同上 |
| `api/_index.md` 桶表行数 | 8 | **10**（新增 `storymode` 92 / `localization` 19） | `grep -c '^| `' content/v1.5.3/zh/api/_index.md` |
| `zh/_index.md` 声称的总页数 | 27（错） | **187**（=实测） | `ls content/v1.5.3/zh/api/*/*.md \| grep -v _index \| wc -l` |
| `zh/_index.md` 声称的桶数 | 8 | **10** | 同上 |
| `zh/_index.md` 覆盖率 | 0.4% | **2.7%** | `node -e 'console.log((187/6824*100).toFixed(1))'` |
| `zh/_index.md` 未撰写数 | 6 797 | **6 637** | `6824-187` |
| `zh/_index.md` 页面总数 | 37 | **195 个 `.md`**（190 内容页 + 5 `_index.md`） | `find content/v1.5.3/zh -name '*.md' \| wc -l` |
| 缺口表「已撰写」列 | core-extra 3 · storymode 0 · localization 0 · 合计 27 | **core-extra 44 · storymode 92 · localization 19 · 合计 187** | 逐桶 `ls` |
| 缺口表三列求和 | — | **6 824 / 187 / 6 637**（逐行重算与表尾一致） | node 重算（见下） |
| 「桶索引页不存在…一张都没有」 | 2 处均为假 | **2 处均改为可核事实陈述** | `grep -n '桶索引页' …` |
| 「`sandbox` / `storymode` 是整桶空白」 | 假（storymode 有 92 页） | **只声明 `sandbox` 空白，并说明 storymode 相反** | 同上 |

**改后校验命令与输出（全部重跑过）**
```
$ ls content/v1.5.3/zh/api/*/*.md | grep -v '_index.md' | wc -l          ⇒ 187
$ # 有页桶数
$ n=0; for d in content/v1.5.3/zh/api/*/; do c=$(ls "$d"*.md 2>/dev/null | grep -v '_index.md' | wc -l); [ "$c" -gt 0 ] && n=$((n+1)); done; echo $n
   ⇒ 10
$ find content/v1.5.3/zh/api -name '_index.md' | wc -l                    ⇒ 3   （api/_index.md + 2 个桶索引）
$ find content/v1.5.3/zh -name '*.md' | wc -l                             ⇒ 195
$ find content/v1.5.3/zh -name '_index.md' | wc -l                        ⇒ 5
$ find content/v1.5.3 -name '_index.md' | wc -l                           ⇒ 9   （与「全树共 9 个」一致）
$ node -e '<逐行重算缺口表>'  ⇒ types=6824 written=187 unwritten=6637（与表尾一致）
$ node -e 'console.log((187/6824*100).toFixed(1)+"%")'                   ⇒ 2.7%
$ node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/_index.md content/v1.5.3/zh/_index.md
   ⇒ 两页 J5R unresolved=0（全部链接解析成功）· J11 trailSlash=0 · J10 stray=0
      （J2/J6 FAIL 是 hub 页的正常形态：它们本就不是类页七节）
```

**四道门禁（Commit B 后）**
```
node tools/audit-links.mjs  ⇒ FILES=39210 BROKEN_LINKS=2 FILES_WITH_BROKEN=1 RESOLVE_NEITHER=4
   唯一病灶：v1.4.6/zh/api/campaign/Kingdom.md（别线未跟踪在制品）
   grep -c v1.5.3 = 0  ⇒ 本树零断链
node tools/nav-orphans.mjs  ⇒ total_pages=39210 orphans=4 by_tree={"v1.4.6":2,"v1.4.7":2}
   ⇒ v1.5.3 孤儿 = 0
git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

**★ 我未做的一件事（已向 boss 声明，可被要求补做）**：
`zh/_index.md` 的按桶页表**不再逐页列出全部 187 条链接**，而是给**精确页数 + 指向 `./api/`**。
理由已在 §3.4 写明（H0 禁脚本写 `content/**` ⇒ 只能手抄；手抄 187 条链接的错一字即断链；
`templates/section.html:33` 已自动列出全集）。
★ **该选择已由 boss-4 #21000 批准**（含三条附加条件，均已满足，见 §3.4 末段）⇒ 已从「未做」转为「已裁定的设计选择」。

---

## 4. D-11：J13 只是警告 ⇒ 100% 编造的行号能穿过全部机械判据（boss-4 #20633 实测）

### 4.1 事故本体（boss 逐行核对，非转述）

`content/v1.4.6/zh/api/mission-ext/MissionLogic.md`（10 592 B）判分器读数：
```
J6=deep_pass · tier=handwritten_deep · J3 checked=13 bad=0 · J8 10357B · J9 csharp=76
J10=0 · J11=0 · J12=0
```
全部合格 —— 但它的 **11/11 条引用行全是编造的**：16/20/27/34/38/43/48/53/58/65/69
在源文件里分别是**纯标点 / 空行 / ILSpy `// Token:` 注释**。
同一组行号在 1.3.15 / 1.4.7 / 1.5.3 的同一文件里也全是空行 ⇒ **不是读错版本树，是按文件长度均匀铺开的假行号**。

**根因（门禁层）**：判分器把 `J13` 只当 `!` 警告，**不进 pass/fail** ⇒ `deep_pass` 会给 100% 编造的引用放行。

### 4.2 本线的防御（已执行，全部有实测证据）

**① 锚点表 J13 正向对照（我亲自跑）**：
```
$ node -e '<把 tools/_verify/sig-c1/*.sig.txt 的每条行号回查源码，按 J13 口径判空行/纯注释/纯标点>'
anchor lines checked = 234  J13-bad = 0
```
⇒ 本批 4 个大文件的 **234 条锚点行号全部是真实声明行**。worker 只要**只用表内行号**，J13 必为 0。

**② J13 阳性对照（证明这条判据真的会失败）** —— 探针页 `tools/_verify/lead-28-fixture/content/v1.5.3/zh/api/campaign/_j13probe.md`，
故意混入三种坏形态 + 一条好形态：
```
$ LEAD145ZH_CONTENT_ROOT=tools/_verify/lead-28-fixture/content \
    node tools/_verify/lead-145zh-judge.mjs tools/_verify/lead-28-fixture/content/v1.5.3/zh/api/campaign/_j13probe.md
J13 suspicious-lines=3
! J13 suspicious-citation-lines=3 [[bannerlord-1.5.3] CampaignTime.cs:8 (line is blank);
                                  [bannerlord-1.5.3] CampaignTime.cs:10 (line is punctuation only);
                                  [bannerlord-1.5.3] CampaignTime.cs:11 (line is a comment)]
```
★ **阴性对照也过了**：`CampaignTime.cs:12`（`public struct CampaignTime : IComparable<CampaignTime>`，真实声明行）**没有被报**。
★ **同时复现了 boss 的根因**：那三条 J13 发现**全部只出现在 `!` 警告里**，该页的 FAIL 理由是 J5R/J6/J8
—— 也就是说，**只要那三项修好，一页 100% 编造引用的页就能 PASS**。⇒ 「R2 把 J13 当硬失败」是必要且正确的。

**③ 派单硬化**（已定向发给 worker-276/277/278：#20648 / #20649 / #20650）：
- 每条 `` `File.cs:N` `` 的 N **必须逐字取自 facts 锚点表**；禁止自行推算、禁止「按文件长度均匀铺开」、禁止凭印象。
- **找不到表内行号的成员就不要写那一行**（规则 C）。
- 明写：「`CampaignTime.cs` 有 754 行，**千万不要**把 98 个锚点均匀铺到 1–754 之间」。

**④ R2 硬判据（本线承诺，逐页执行）**：`J13 suspicious-lines=0` 是**硬失败**，不是警告。6 页每页都要过。

### 4.3 探针树必须分两层跑（对 D-10 的补强，boss #20575 建议）

| 层 | 放什么 | 预期读数 | 用途 |
|---|---|---|---|
| 第 1 层：**单页** | 只放该页自己的链接块，兄弟页缺席 | J5R 报兄弟页（**预期**） | 确认「这个 FAIL 是预期的」，不是链接写错 |
| 第 2 层：**全批** | 6 页链接块全部就位 | J5R=0 · J10=0 · J11=0 · J12=0 | 确认链接深度正确 |
| 第 3 层：**J13 阳性对照** | `_j13probe.md`（3 坏 + 1 好） | J13 suspicious-lines=**3**，且不报第 12 行 | 证明 J13 真的会失败（§4.2 ②） |

★ 本线已跑第 2 层与第 3 层；第 1 层的结论已由 D-10 的机制分析给出（单页 J5R 必然报兄弟页），
不再单独建探针 —— 因为**它要证的就是「该 FAIL 是预期的」**，而这一点已写入派单白名单纪律。

---

## 5. 批次 b2 + b3（settlement 四曲线收齐）

### 5.1 价值选桶理由
c1 已完成「聚落四曲线」里的繁荣度默认实现、忠诚度、食物。b2/b3 补齐剩余契约与默认实现，
使 `campaign-ext` 的「聚落曲线」成为一个**可完整阅读的簇**（繁荣 / 忠诚 / 食物 / 民兵 / 治安）。

### 5.2 提交
```
cb8af3c7f1  hand-write 4 settlement-curve pages (Prosperity/Militia model pairs + Security default)   5 files, +393 -8
af82bb6c6a  hand-write SettlementSecurityModel and restore downgraded link (downgrade->restore complete) 3 files, +105 -9
```

### 5.3 逐页四判据（我独立跑；非 worker 自报）

| 页 | 字节 | 关键成员 | J3 checked | bad | J13 | 裸引用 M+K | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign-ext/SettlementProsperityModel | 5 829 | 3/3 带行号 | 3 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/SettlementMilitiaModel | 6 528 | 5/5 | 5 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/DefaultSettlementMilitiaModel | 7 529 | 12/12 | 12 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/DefaultSettlementSecurityModel | 9 643 | 20/20 | 20 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign-ext/SettlementSecurityModel | 9 074 | 21/21 | 21 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| **合计** | | **61/61** | **61** | **0** | **0** | **0** | **5/5** | **5/5** | **0** |

★ `j13-hard-gate.mjs` 对最后一页的读数（证明判据②真的在跑，不是空转）：
`OK bad=0 checked=21 members=21 (tbl=0,bul=21) J13=0 bare=0` —— `bul=21` 说明它认了 bullet 格式。

### 5.4 ★ 降级 → 恢复（boss-4 #21155/#21164 授权，已完整执行）

**降级**：`DefaultSettlementSecurityModel.md:100` 有一条出边指向当时尚未落盘的 `../SettlementSecurityModel`，
它是本批**唯一**不自洽的边。按 boss 授权将该行**降为反引号纯文本**（单行、可逆）：
```
- ↔ `SettlementSecurityModel`（`../SettlementSecurityModel`）— 它实现的契约；该页尚未落盘，落盘后本条恢复为链接
```
**证据链（每步都是实测）**：
```
① 降级前 batch-selfconsistent ⇒ RESULT: 3/4 self-consistent；HOLD 1 页；
   unsatisfied: ../SettlementSecurityModel -> content/…/SettlementSecurityModel.md
② 降级后 batch-selfconsistent ⇒ RESULT: **4/4** self-consistent
③ 4 页同跑判分器 ⇒ PASS 4/4 · J5R unresolved=0 · deep_pass=4/4 · tier=4/4
④ 提交 cb8af3c7f1（5 files，文件级 pathspec，staged 数=5）
⑤ 全站尺 ⇒ **BROKEN_LINKS 1 → 0**（boss 预测正确：全站唯一病灶就是这一条）
```
**恢复**：`SettlementSecurityModel.md` 落盘（9 074 B）且过四判据（`checked=21 bad=0 J13=0 bare=0 deep_pass`）后：
```
⑥ 恢复那一行为 markdown 链接
⑦ batch-selfconsistent ⇒ **2/2** self-consistent（恢复后仍自洽，因为目标已入库）
⑧ 两页同跑 ⇒ PASS 2/2 · J5R=0
⑨ 提交 af82bb6c6a
```
★ **降级窗口只有一次提交那么长**（cb8af3c7f1 → af82bb6c6a），恢复条件事先写定（「过四判据并入库」）。
★ 这是「宁可先提交可逆降级、不让已完成产物暴露在覆盖风险下」的实践案例 —— 与 boss 强调的
「本会话已有两次未提交产物被覆盖且不可回放」直接相关。

### 5.5 门禁读数（b3 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39220 TOTAL_LINKS=151288 BROKEN_LINKS=9 FILES_WITH_BROKEN=3  EXIT=1
   三个病灶全在【别线未跟踪在制品】：
     v1.4.7/zh/api/localization/{LanguageSpecificTextProcessor,TextObject,VoiceObject}.md（各 3 条）
   ⇒ **本树 v1.5.3 断链 = 0**；按 boss-4 #20863 规则 1：别线 ?? ⇒ 只上报、不阻塞本线
node tools/nav-orphans.mjs   ⇒ total_pages=39221 orphans=1 by_tree={"v1.4.7":1}
   ⇒ **v1.5.3 孤儿 = 0**
★ 中间态记录：cb8af3c7f1 时曾出现 v1.5.3 孤儿 = 1，原因是 `SettlementSecurityModel.md` 已落盘但尚未入索引；
  af82bb6c6a 入索引后即归零。⇒ **「已落盘但未入索引」会短暂造成孤儿**，批次中间态不要当缺陷报。

git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

### 5.6 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 187 → 192
  campaign-ext  8 → 13
索引口径校验: 13+14+44+1+1+2+4+2 = 81 ✅ 与 api/_index.md 的「81 篇」一致（1.2% / 6 743 未撰写）
```

### 5.7 本批 worker 处置（用户明令：干完就关）
```
worker-284 (models-p4)      交付 2 页 → 我已验证 → team_cancel
worker-286 (models-p6)      交付 1 页 → 我已验证 → team_cancel
worker-285 (models-p5)      25 分钟磁盘零输出（同批其他人都已交付）→ team_cancel（READING-RULES ④：先撤单再重派）
worker-290 (militia-def)    重派后交付 1 页 → 我已验证 → team_cancel
worker-291 (security-iface) 重派后交付 1 页 → 我已验证 → team_cancel
⇒ 当前零 worker、零空槽
```
★ 重派用的是已验证有效的形态：**单页 + `write` 必须是第一个动作 + 全部事实内联**。
worker-285（两页）卡死，而其两个替代者（各一页）在几分钟内交付 ⇒ **本线第三次复现同一结论**。

---

## 6. 剩余队列与下一步

```
队列 5 605 − 13（本线已提交页数）= 5 592
b3 的锚点表已预生成并验过 J13（8 个文件 136 条锚点，J13-bad=0）：
  SettlementGarrisonModel / DefaultSettlementGarrisonModel
  SettlementTaxModel / DefaultSettlementTaxModel
  PartyMoraleModel / DefaultPartyMoraleModel
  PartySpeedModel / DefaultPartySpeedCalculatingModel
  位置：tools/_verify/sig-c1/<TypeName>.sig.txt
累计已验锚点：234(c1) + 101(b2) + 136(b3 prep) = **471 条，J13-bad = 0**
```

---

## 7. 批次 b3（Garrison + Morale 两对，4 页已提交；Tax 对留在工作区）

### 7.1 提交
```
dcbe6ee8a6  hand-write 4 pages (Garrison + Morale model pairs) and wire into index   5 files, +361 -7
```
文件级 pathspec；提交前 staged 数 = 5（与期望一致）；`git show --stat HEAD` 自证只含本线 5 个文件。

### 7.2 逐页四判据（我独立跑）

| 页 | 字节 | 关键成员 | J3 checked | bad | J13 | 裸引用 M+K | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign-ext/SettlementGarrisonModel | 6 727 | 5/5 带行号 | 5 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign-ext/DefaultSettlementGarrisonModel | 6 835 | 5/5 | 5 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign-ext/PartyMoraleModel | 6 908 | 8/8 | 8 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign-ext/DefaultPartyMoraleModel | 7 327 | 8/8 | 8 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| **合计** | | **26/26** | **26** | **0** | **0** | **0** | **4/4** | **4/4** | **0** |

### 7.3 本批抓到两次「premature settle」（都靠磁盘读数发现，非靠状态）

```
worker-294（驻军对）：先报「两个源码文件已读完，现在立刻写第 1 页」→ 写完第 1 页 → **settle**，第 2 页未落盘
  处置：向**同一个 idle worker** 重派第 2 页（不新开 worker），重新内联锚点表 + 要求 `write` 必须是第一个动作
  ⇒ 几分钟内交付，两页 J5R=0 ⇒ **settle 是排序缺陷，不是能力缺陷**
worker-296（士气对）：同样在第 1 页后 settle ⇒ 同样处理 ⇒ 交付
```
★ 两次都是**磁盘 mtime + 文件存在性**发现的；worker 的状态/自述都没报错。
★ 与 worker-285（两页 brief 卡 25 分钟）合并看：本线已四次复现「少页/单页 + write 优先」优于「多页 + 先读」。

### 7.4 税收对的处理（boss-4 #21323 / #21331 条件性授权，已按条件执行）
```
SettlementTaxModel.md / DefaultSettlementTaxModel.md  → **两页均未落盘**（worker-295 零磁盘输出）
⇒ 不降级任何链接（它们根本不存在，没有出边可降级）
⇒ 按条件提交已自洽子集（驻军对 + 士气对，4/4 self-consistent）
⇒ 税收对留在工作区，随 b4 提交
```

### 7.5 门禁读数（b3 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39236 TOTAL_LINKS=151464 BROKEN_LINKS=0 FILES_WITH_BROKEN=0  EXIT=0
   ⇒ **全站零断链**（本会话第二次达此状态；上一次是 cb8af3c7f1 后）
   ⇒ grep -c v1.5.3 = 0
node tools/nav-orphans.mjs   ⇒ total_pages=39236 orphans=3 by_tree={"v1.4.6":3}
   ⇒ **v1.5.3 孤儿 = 0**；3 个全在别线 v1.4.6

git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

### 7.6 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 192 → 196
  campaign-ext  13 → 17
索引口径校验: 17+14+44+1+1+2+4+2 = 85 ✅ 与 api/_index.md 的「85 篇」一致（1.2% / 6 739 未撰写）
```

### 7.7 本批 worker 处置
```
worker-294 (garrison)  交付 2 页（含一次 premature settle 后重派）→ 我已验证 → team_cancel
worker-296 (morale)    交付 2 页（同上）→ 我已验证 → team_cancel
worker-295 (tax)       零磁盘输出 → 已催一次；**仍在飞**，待其交付或下一轮再定
⇒ 当前 1 个 worker（295）、零空槽
```

### 7.8 本线累计（至 b3）
```
提交 8 笔：
d3979c4a3e  c1  6 页      cfd991fff3  c1b 2 页
2ea8b82fe4  Commit B 索引整表对齐
cb8af3c7f1  b2  4 页      af82bb6c6a  b3 1 页 + 恢复
fa84d3ae45  —（别线提交，非本线）
dcbe6ee8a6  b3  4 页
本线已提交页数：6 + 2 + 4 + 1 + 4 = **17 页**
覆盖：content/v1.5.3/zh/api 179 → **196**；campaign-ext 2 → **17**；campaign 12 → **14**
累计已验行号引用：163(c1) + 61(b2) + 26(b3) = **250 条，bad=0 · J13=0 · 裸引用=0**
队列：5 605 − 17 = **5 588**
```

---

## 8. 批次 b4（Tax 对，2 页）+ 本批 worker 处置

### 8.1 提交
```
0e9eeab29c  hand-write SettlementTaxModel + DefaultSettlementTaxModel and wire into index   3 files, +216 -7
```

### 8.2 四判据（我独立跑）

| 页 | 字节 | 关键成员 | J3 checked | bad | J13 | 裸引用 M+K | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign-ext/SettlementTaxModel | 9 057 | 10/10 带行号 | 10 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign-ext/DefaultSettlementTaxModel | 11 284 | 19/19 | 19 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| **合计** | | **29/29** | **29** | **0** | **0** | **0** | **2/2** | **2/2** | **0** |

### 8.3 ★ 缺陷记录 D-12：我的 brief 与锚点表自相矛盾，worker 选了锚点表（正确）

我在 `tax-iface` 的骨架提示里写「4 个抽象属性 + **6 个**抽象方法」，而锚点表里只有 **5 个**方法。
worker-300 主动报出：
> 「心智模型按契约实际成员写成「4 个抽象属性 + 5 个抽象方法」（任务骨架提示为 6 个方法），因为锚点表里方法只有 5 个」

**实测复核（我做的）**：`SettlementTaxModel.cs` 里 `{ get; }` 恰好 **4** 个；锚点表里方法为
`:27 :30 :33 :36 :39` = **5** 个；加类声明 `:8` 共 **10** 条锚点 = 页面 `checked=10`。
⇒ **worker 是对的，我错了**。

★ 教训（与 D-6「骨架被机械照抄」互为镜像）：
- D-6：**逐字骨架在例外交界处被机械照抄** ⇒ 派单方必须显式枚举例外。
- D-12：**骨架散文与锚点表冲突时，worker 跟了锚点表** ⇒ 这是正确行为，应当**明文奖励**。
  ⇒ 派单形态改为：**brief 里任何数量/成员断言，必须以锚点表为准，并在 brief 里明写
  「若骨架散文与锚点表冲突，一律以锚点表为准，并在回报里指出冲突」**。本条已加入本线派单规范。

### 8.4 worker-300 报出的另一个诚实项（我已实测解决）
worker-300 报：
> 「真实示例中的 `ExplainedNumber(0f, includeDescriptions)` 与 `result.Add(float)` 按我理解的 v1.5.3 签名书写，
> 未对照 DLL 反编译逐字核验；`town.Security` 我按 `float` 处理并显式 `(int)` 转换」

**实测复核（我做的）**：
```
ExplainedNumber.cs:91   public ExplainedNumber(float baseNumber = 0f, bool includeDescriptions = false, TextObject baseText = null)  ✅
ExplainedNumber.cs:167  public void Add(float value, TextObject description = null, TextObject variable = null)                    ✅
Town.cs:350             public float Security                                                                                        ✅ float，不是 int
```
⇒ 构造函数与 `Add` 的签名**完全对**；`town.Security` 确实是 `float`。
`int security = (int)town.Security;` 这个显式转换**合法且不需要修**：C# 允许 `float`→`int` 显式转换，
而且它与 `int SettlementCommissionDecreaseSecurityThreshold` 的整数阈值比较语义上更一致。
⇒ **不是缺陷**，worker 的不确定性标记已被证据消解。

### 8.5 门禁读数（b4 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39246 TOTAL_LINKS=151545 BROKEN_LINKS=8 FILES_WITH_BROKEN=8  EXIT=1
   8 个病灶全在【别线未跟踪在制品】：v1.4.7/zh/api/storymode/{AchievementsCampaignBehavior,CampaignStoryMode,
     ConspiracyQuestBase,FirstPhaseCampaignBehavior,StoryModeEvents,StoryModeManager,
     StoryModeQuestBase,TutorialPhaseCampaignBehavior}.md（各 1 条）
   ⇒ **本树 v1.5.3 断链 = 0**
node tools/nav-orphans.mjs   ⇒ total_pages=39246 orphans=2 by_tree={"v1.4.6":1,"v1.4.7":1}
   ⇒ **v1.5.3 孤儿 = 0**

git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

### 8.6 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 196 → 198
  campaign-ext  17 → 19
索引口径校验: 19+14+44+1+1+2+4+2 = 87 ✅ 与 api/_index.md 的「87 篇」一致（1.3% / 6 737 未撰写）
```

### 8.7 本批 worker 处置
```
worker-295 (tax，两页 brief)  长时间零磁盘输出 → team_cancel（READING-RULES ④）
worker-300 (tax-iface，单页)  重派后交付 → 我已验证 → team_cancel
worker-301 (tax-def，单页)    重派后交付 → 我已验证 → team_cancel
⇒ 当前零 worker、零空槽
```
★ **第五次复现**：同一个任务，两页 brief 卡死；拆成两个单页 worker 后两者都交付。

### 8.8 本线累计（至 b4）
```
提交 10 笔（含 Commit B）：
d3979c4a3e c1 6 页 · cfd991fff3 c1b 2 页 · 2ea8b82fe4 Commit B 索引对齐
cb8af3c7f1 b2 4 页 · af82bb6c6a b3 1 页+恢复 · dcbe6ee8a6 b3 4 页 · 0e9eeab29c b4 2 页
本线已提交页数：6 + 2 + 4 + 1 + 4 + 2 = **19 页**
覆盖：content/v1.5.3/zh/api 179 → **198**；campaign-ext 2 → **19**；campaign 12 → **14**
累计已验行号引用：163 + 61 + 26 + 29 = **279 条，bad=0 · J13=0 · 裸引用=0**
队列：5 605 − 19 = **5 586**
```

---

## 9. 剩余队列与已就绪的下一批（b5）

```
b5 锚点表已预生成并验过 J13（已存在 tools/_verify/sig-c1/）：
  PartySpeedModel.sig.txt                 （28 行源码， 6 条锚点）
  DefaultPartySpeedCalculatingModel.sig.txt（522 行源码，59 条锚点）
  ⇒ 两页：campaign-ext/PartySpeedModel.md + campaign-ext/DefaultPartySpeedCalculatingModel.md
  ⇒ 这是「聚落/部队曲线」簇的最后一对（速度）
累计已验锚点：234(c1) + 101(b2) + 136(b3 prep) = 471 条，J13-bad = 0
```

---

## 10. ★ D-13：**代码示例不在任何门禁的覆盖范围内**（b5 实测抓到）

### 10.1 事故本体

`DefaultPartySpeedCalculatingModel.md`（b5）的示例里写了：
```csharp
foreach (string explanation in finalSpeed.Explanations)
    InformationManager.DisplayMessage(new InformationMessage(explanation));
```
**`ExplainedNumber` 没有任何叫 `Explanations` 的成员**。实测：
```
ExplainedNumber.cs:105  public string GetExplanations()                      ← 存在，但是【方法】，返回 string
ExplainedNumber.cs:123  public List<ValueTuple<string, float>> GetLines()    ← 存在，返回 (name, number) 列表
ExplainedNumber.cs      【无】Explanations 属性  ⇒ finalSpeed.Explanations 不存在 ⇒ 不能编译
```
⇒ 而且即使写成 `GetExplanations()` 也不能 `foreach`（它返回单个 `string`）。

### 10.2 为什么全部机械判据都放行了

| 判据 | 为何看不见 |
|---|---|
| `J9`（真实示例） | **只数 ```csharp 块的有效行数 ≥ 3**，不解析内容 |
| `J6` / `deep_pass` | `hasRealCsharpExample()` 只要求「有 `.Method(` 调用」与「提到已知类型名」 |
| `J3` / `J13` | 只管 `File.cs:N` 这种**行号引用**，代码块里的成员名不在扫描范围 |
| `J1/J2/J5/J10/J11/J12` | 与代码内容无关 |
| 反虚构门禁（另一套） | 已知边界是「验证名字存在，不验证名字属于该类型」；而**代码示例根本不在它的语料范围内** |

⇒ **一个不存在的成员名写在 ```csharp 里，能穿过本会话已知的全部门禁。**

### 10.3 它怎么被抓住的（可复制的方法）

**不是靠门禁，是靠 worker 的诚实标记 + Lead 的逐名实测**：
worker-303 在回报里主动写「真实示例中 `ExplainedNumber.Explanations` 与 `InformationManager.DisplayMessage`
为按源码惯例引用的真实 API，**未在本轮额外读调用方验证**（遵守「只读一个 .cs」约束）」。
我据此逐名实测，确认第一个是错的、第二个是对的。

⇒ 这是**「读的上界」约束与「示例准确性」之间的真实张力**：我把读的范围压到 1 个文件以防 stall，
而示例里引用的跨文件 API 因此没有核对源。**派单方必须承担核对责任**，不能指望 worker 超范围去查。

### 10.4 已执行的修正与新增的派单要求

**修正**（已派给 worker-303，附逐字替换与实测签名）：
```csharp
// 改前（不可编译）
foreach (string explanation in finalSpeed.Explanations)
    InformationManager.DisplayMessage(new InformationMessage(explanation));

// 改后（实测签名支撑）
foreach (var line in finalSpeed.GetLines())
    InformationManager.DisplayMessage(new InformationMessage($"{line.name}: {line.number:0.##}"));
```
附：`GetLines()` 在 `includeDescriptions == false` 时返回**空列表**（`_explainer` 为 null），
所以要求 worker 在「坑」一节补上这个前置条件。

**新增派单要求（本线即日生效）**：
1. brief 里凡示例要用的**跨文件 API**，派单方先实测并把**签名原文**内联进 brief（像本次给出的三行一样）。
2. brief 里明写：「示例中任何**未在 brief 内联签名里出现**的 API，要么不用，要么在回报里列为未验证」。
3. R2 验收时，**对示例里出现的每个 `Type.Member` 形状逐一实测存在性**（本会话已实测过：
   `ExplainedNumber` 构造/`Add`/`GetExplanations`/`GetLines`、`Town.Security`、
   `InformationManager.DisplayMessage`、`InformationMessage` 构造）。
4. ★ 不自行写「示例编译器」去改 `content/**` —— 那违反 H0；核对靠**实测签名 + 人读**。

### 10.5 与已知边界的关系

`_INTEGRATION-GATES` §4 已记录反虚构门禁的边界：「验证『名字存在』，不验证『名字属于该类型』」。
D-13 是它的**第三个变体**：**代码示例连「名字是否存在」都不查**。
三个变体合起来说明同一件事：**「名字级」的机械检查无法替代「成员属于该类型」的语义核对。**

### 10.6 ★ boss-4 #21489 指定的台账记录：把 D-13 作为「内容级抽核」的标准范例

> 「请把它作为**内容级抽核的范例**写进台账（与本会话三次伪造事故互为对照：那三次是**编造引用行**，
> 这一次是**编造 API 形态**，都「听起来合理」）」

**两类「听起来合理」的伪造，并列对照：**

| | 编造**引用行**（本会话已发生 3 次） | 编造**API 形态**（D-13，本线抓 1 次） |
|---|---|---|
| 形态 | `File.cs:16` 指向空行 / `// Token:` 注释 / 纯标点 | `finalSpeed.Explanations` —— 成员名不存在；真实形态是**方法** `GetExplanations()` 返回 `string` |
| 为何「听起来合理」 | 行号在界内（`N <= wc -l`） | 名字听起来像 `GetExplanations()` 的属性版本；且 `foreach (... in ...)` 写法很自然 |
| 被什么抓住 | `J13`（但当时它只是警告） | **没有任何判据** ⇒ 只能靠回源读签名的人 |
| 已封堵 | 四道硬判据（`bad=0` / `checked≥members` / `J13=0` / 裸引用=0）+ 锚点表 J13 正向对照 | **尚未机械封堵** ⇒ 已改为派单要求（§10.4）+ R2 逐名实测 |
| 对照证据 | `mission-ext/MissionLogic.md` 11/11 条引用全假、`deep_pass` 仍绿 | `DefaultPartySpeedCalculatingModel.md` 四道硬判据全绿、`deep_pass`、`J9 csharp=7` |

★ **两类都证明了同一件事：机械判据的「绿」不覆盖「内容为真」。**
★ 本线已执行的 R2 逐名实测清单（可复制）：
```
ExplainedNumber 构造函数(91) · Add(167) · GetExplanations(105) · GetLines(123)
Town.Security(350) · InformationManager.DisplayMessage(71) · InformationMessage(string)(34)
```

### 10.7 ★ boss-4 #21489 ② 跨线新标准：小 public 面的类型，**诚实短 ≠ 缺陷**（即日生效）

> 当某类型 public/protected 面本来就极小（标记接口、契约类、实现多为 `internal`）时，逐成员列用途**物理上撑不起一页**。
> 标准解法：① 契约语义（约束什么、不约束什么）；② 真实使用点（`grep -rn --include=*.cs -w '<Type>'` 找实现者/标注点/调用方，**行号写进页面**）；③ 一个可编译示例。
> **禁止**：为凑 `J8>2500B` 灌水、把 private 成员塞进「关键成员」表。若确实只有 1 个成员，**就诚实写它是标记接口、契约是空的**，表可以只有 1~2 行 —— **那是正确的深度，不是缺陷**。
> 理由：**为满足判据而伪造内容，比诚实地短危险得多。**

★ 已登记。**本线已有的页不受影响**（它们的锚点充足）；b6 起遇小类型按此标准，不回来问。

### 10.8 ★★ boss-4 #21534 **更正** §10.7 里那句过窄的表述（本线实践是对的）

我向 boss 提了一个真实冲突：标准原文写「**禁止**把 private 成员塞进「关键成员」表」，
而本线多页**故意列了 private 累加器**，因为那正是用户原话要求的深度。
boss 回复：**「你的理解对，我的措辞错」**，并给出更正后的三句话标准：

> 1. **一个成员行是否进「关键成员」表，取决于它有没有解释价值 + 能不能给出行号引用，不取决于它是 public 还是 private。**
>    - 有解释价值 **且** 有可核行号 ⇒ **进表**（private 累加器、protected 钩子都算）。
>    - 有解释价值 **但拿不到可核行号** ⇒ 写成**表外散文**。
>    - 没有解释价值（纯样板 getter、纯转发）⇒ 不进表，宁可不写。
> 2. **禁止的只有两件事**：① 为凑 `J8>2500B` **灌水散文**；② 为凑 `checked ≥ members` 而**塞无解释价值的行**。判据服务于内容，不是反过来。
> 3. **机械要求不变**：表里每一条引用（**无论 public/private**）都必须来自**已验 J13-clean 的锚点表**。
>    ⇒ 锚点抽取器**应把 private/protected 辅助方法也抽进来**（至少方法名 + 声明行），否则 writer 只能去源码本体找行号、J13 风险上升。

★ 本线已据此执行：b6 的锚点表**已改为包含 private/protected 成员**。
★ 保留 boss 对「§10.6 两类伪造并列对照」的评价（「写得好，请保留」）。
★ 保留：boss 已**独立复核** `BROKEN_LINKS=0` / `orphans=0`（15.1 万条链接、39,250 页）。

---

## 11. 批次 b5（Speed 对）+ ★ 全站里程碑

### 11.1 提交
```
015eafd4c3  hand-write PartySpeedModel + DefaultPartySpeedCalculatingModel (API form corrected) and wire into index   3 files, +205 -7
```

### 11.2 四判据（我独立跑，修正后）

| 页 | 字节 | 关键成员 | J3 checked | bad | J13 | 裸引用 M+K | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign-ext/PartySpeedModel | 6 551 | 5/5 带行号 | 5 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign-ext/DefaultPartySpeedCalculatingModel | 11 710 | 20/20 | 20 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| **合计** | | **25/25** | **25** | **0** | **0** | **0** | **2/2** | **2/2** | **0** |

### 11.3 ★★ 全站里程碑（b5 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39250 TOTAL_LINKS=151615 BROKEN_LINKS=0 FILES_WITH_BROKEN=0  EXIT=0
   ⇒ **全站零断链**
node tools/nav-orphans.mjs   ⇒ total_pages=39250 orphans=0 orphan_parents=0 by_tree={}
   ⇒ **全站零孤儿**（这是本会话首次达到；b4 时还有 2 个在别线）

git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```
★ 用户原始抱怨的两条（「跳着跳着就直接 404」「跳过去回不来」）在**全站尺度**上已同时归零：
  前者 = `BROKEN_LINKS=0`；后者 = `orphans=0`（每一页都有入链）。

### 11.4 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 198 → 200
  campaign-ext  19 → 21
索引口径校验: 21+14+44+1+1+2+4+2 = 89 ✅ 与 api/_index.md 的「89 篇」一致（1.3% / 6 735 未撰写）
```

### 11.5 本批 worker 处置
```
worker-302 (speed-iface，单页)  交付 → 我已验证 → team_cancel
worker-303 (speed-def，单页)    交付 → 我抓出 API 形态错误 → 修正后我已验证 → team_cancel
⇒ 当前零 worker、零空槽
```

### 11.6 本线累计（至 b5）
```
提交 11 笔（含 Commit B）：
d3979c4a3e c1 6 页 · cfd991fff3 c1b 2 页 · 2ea8b82fe4 Commit B 索引对齐
cb8af3c7f1 b2 4 页 · af82bb6c6a b3 1 页+恢复 · dcbe6ee8a6 b3 4 页
0e9eeab29c b4 2 页 · 015eafd4c3 b5 2 页
本线已提交页数：6 + 2 + 4 + 1 + 4 + 2 + 2 = **21 页**
覆盖：content/v1.5.3/zh/api 179 → **200**；campaign-ext 2 → **21**；campaign 12 → **14**
累计已验行号引用：163 + 61 + 26 + 29 + 25 = **304 条，bad=0 · J13=0 · 裸引用=0**
队列：5 605 − 21 = **5 584**
```

### 11.7 campaign-ext 的「曲线簇」已成形（本线选桶策略的成果）
```
聚落：繁荣(Prosperity) · 忠诚(Loyalty) · 食物(Food) · 民兵(Militia) · 治安(Security) · 税收(Tax) · 驻军(Garrison)
部队：规模上限(PartySizeLimit) · 士气(Morale) · 速度(Speed)
值类型：CampaignTime · ExplainedNumber
每个「契约 ↔ 默认实现」成对，且都与已有的 GameModel / MBGameModel / GameModelsManager 页交叉链接
⇒ 这 21 页可以作为一个**完整可读的簇**（用户抱怨的「缺大局观」直接对应）
```

---

## 12. 批次 b6（`campaign.Actions` —— 世界变更 API，5 页）

### 12.1 价值选桶理由
`TaleWorlds.CampaignSystem.Actions` 是「**怎么真的让 X 在战役里发生**」的答案（而不是直接改字段）。
队列里 77 个 Action 类，文件普遍 70–170 行 —— 小而高价值，正好是本线已验证可靠的形态。

### 12.2 提交（2 笔）
```
3c66af7e25  hand-write 3 campaign Action pages (ChangeRelation/MakePeace/DeclareWar) and wire into index   4 files, +275 -7
ad163671fd  hand-write GiveGoldAction + TakePrisonerAction and wire into index                          3 files, +222 -7
```

### 12.3 四判据（我独立跑）

| 页 | 字节 | 关键成员 | J3 checked | bad | J13 | 裸引用 M+K | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign/ChangeRelationAction | 7 205 | 8/8 带行号 | 8 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/MakePeaceAction | 6 450 | 6/6 | 6 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/DeclareWarAction | 8 645 | 11/11 | 11 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/GiveGoldAction | 8 504 | 10/10 | 10 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/TakePrisonerAction | 6 453 | 4/4 | 4 | 0 | 0 | 0 | deep_pass | handwritten_deep | **0** |
| **合计** | | **39/39** | **39** | **0** | **0** | **0** | **5/5** | **5/5** | **0** |

### 12.4 ★ D-13 缓解措施已被实测生效（本批三个 worker 都执行了）

我在 b6 每个 brief 里加了约束：**示例只允许用「本页锚点表列出的方法 + `Campaign.Current` + `Hero.MainHero`」，
且在回报里说明每个 API 是否在锚点表/brief 内出现过。** 结果：

| 页 | 示例里出现的 API（我抽检的） | 是否全部可溯 |
|---|---|---|
| DeclareWarAction | `Campaign.Current` · `DeclareWarAction.ApplyByDefault/ApplyByKingdomDecision/ApplyByPlayerHostility/ApplyByQuest` · `Hero.MainHero` | ✅ 锚点表 :70/:64/:76/:112 + 允许清单 |
| GiveGoldAction | `GiveGoldAction.ApplyBetweenCharacters/ApplyForCharacterToParty/ApplyForCharacterToSettlement/ApplyForPartyToParty` · `Hero.MainHero` | ✅ 均在锚点表 :46/:82/:52/:88 |
| TakePrisonerAction | `TakePrisonerAction.Apply/ApplyByTakenFromPartyScreen` | ✅ 锚点表 :51/:57 |
| ChangeRelationAction | `ApplyPlayerRelation` :41 · `SetRelationBetweenHeroes` :59 · `ApplyRelationChangeBetweenHeroes` :47 · `ApplyEmissaryRelation` :53 · `Hero.MainHero` | ✅ 全部在锚点表 |
| MakePeaceAction | `Apply` :48 · `ApplyByKingdomDecision` :54 | ✅ 在锚点表 |

⇒ **零未核验跨文件 API**（对比 b5 的 `finalSpeed.Explanations`）。
**三个 worker 都在回报里主动逐条列出了这个核对** —— 它们没有门禁可依赖，是**规则本身**让它们做了这件事。

### 12.5 ★ D-12 的第二个实例（语义版）：worker 又纠正了我的 brief，而且这次是**语义**不是数量

我在 `act-gold` 的 brief 里写：`isEventCalled`(12) 这个参数「**为了**避免重复派发事件」。
worker-309 回源核实后报：
> 「`isEventCalled` 的说明按 brief 要求写成「避免重复派发事件」；源码里两个公开入口**实际都传 true**，
> 批量入口是「N 次单英雄事件 + 1 次名册事件」而非用 `false` 去重 —— 这一细节已如实写进心智模型。」
⇒ **我的因果解释是错的**，worker 跟了源码并主动报出。
★ 这把 D-12 从「**数量**断言」扩到「**因果/语义**断言」：
  brief 里任何「某参数**是为了**…」「某属性**决定了**…」的措辞，都是**未验证的因果假设**，
  与数量断言同等危险（而且更难被 worker 发现，因为听起来总是很合理）。
★ 本线派单规范再增一条：**brief 里不做因果断言；若要给，必须标注「这是假设，以源码为准」。**

### 12.6 worker-309 报出的另一个真实源码发现（已写入页面）
> `ApplyForSettlementToCharacter`(58) 是**反向调用** —— 把 recipientHero 当 giver、金额取负传入 `ApplyInternal`，
> 读代码时极易看错方向。
⇒ 这正是「private `ApplyInternal` 必须进关键成员表」的价值证明（boss #21534 更正后的标准）。

### 12.7 门禁读数（b6 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39267 TOTAL_LINKS=151780 BROKEN_LINKS=2 FILES_WITH_BROKEN=2  EXIT=1
   两个病灶全在【别线未跟踪在制品】：v1.4.7/zh/api/campaign-ext/{DefaultSettlementFoodModel,SettlementFoodModel}.md
   ⇒ grep -c v1.5.3 = **0** ⇒ 本树零断链
node tools/nav-orphans.mjs   ⇒ total_pages=39267 **orphans=0 orphan_parents=0 by_tree={}**
   ⇒ **全站零孤儿**（第二次达到）

git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

### 12.8 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 200 → 205
  campaign  14 → 19
索引口径校验: 21+19+44+1+1+2+4+2 = 94 ✅ 与 api/_index.md 的「94 篇」一致（1.4% / 6 730 未撰写）
```

### 12.9 本批 worker 处置
```
worker-308 (act-rel，两页)  交付 → 我已验证 → team_cancel
worker-309 (act-gold，两页) 交付（含纠正我的语义错误）→ 我已验证 → team_cancel
worker-310 (act-war，单页)  交付 → 我已验证 → team_cancel
⇒ 当前零 worker、零空槽
```

### 12.10 本线累计（至 b6）
```
提交 13 笔（含 Commit B）：
d3979c4a3e · cfd991fff3 · 2ea8b82fe4(Commit B) · cb8af3c7f1 · af82bb6c6a · dcbe6ee8a6
0e9eeab29c · 015eafd4c3 · 3c66af7e25 · ad163671fd
本线已提交页数：6+2+4+1+4+2+2+3+2 = **26 页**
覆盖：content/v1.5.3/zh/api 179 → **205**；campaign 12 → **19**；campaign-ext 2 → **21**
累计已验行号引用：163+61+26+29+25+39 = **343 条，bad=0 · J13=0 · 裸引用=0**
队列：5 605 − 26 = **5 579**
```

---

## 13. 本线派单规范（累积，b7 起直接沿用）

```
1. 单页/少页 + `write` 必须是第一个动作（本线五次复现：多页 brief 易 stall）
2. 每页给【已验 J13-clean 的锚点表】，含 private/protected 辅助方法（boss #21534 更正后的标准）
3. 行号只能取自锚点表；表外行号会被 J13 判废；找不到行号的成员宁可不写
4. 七节骨架逐字给；但★ 明写「若骨架散文与锚点表冲突，一律以锚点表为准，并报出冲突」（D-12）
5. ★ 不做因果断言（「某参数是为了…」）；若要给，标注「这是假设，以源码为准」（D-12 语义版，b6 新增）
6. ★ 示例 API 白名单：只允许「本页锚点表列出的方法 + Campaign.Current + Hero.MainHero」；
   回报里必须逐条说明每个 API 是否可溯（D-13，b6 实测有效）
7. `参见` 只链「派单时已落盘页 ∪ 本批提交集合」（boss #20945）
8. 链接深度：同桶 `../X` · 跨桶 `../../<桶>/X` · api 层 `../../` · 版本首页 `../../../` · 架构 `../../../architecture/module-map`
9. 四道硬判据：`bad=0` · `checked>=members` · `J13=0` · 裸引用 `M+K=0`
10. R2：batch-selfconsistent 求不动点 → 只提交自洽子集 → 文件级 pathspec + 提交前查 staged 数 → 跑两套门禁
11. 已提交页数 = 索引计数增量（不按计划页数）
12. ★ R2 读数必须连 `ambiguous=N` 一起记（boss #21677 第 7 个门禁洞）；非 0 ⇒ 有引用未被核（vacuous pass 家族）
13. ★ 引用默认取自锚点表；**方法体内语句允许引用**，三条同时满足：① 逐条 `awk 'NR==n' <file>` 可复现核实并贴回原始输出；② 写全 `File.cs:N`；③ `J13` 真的覆盖到它（boss #21677 精度裁定 B）
```

---

## 14. ★ 第 7 个门禁洞（重名 basename 静默跳过）—— 本线实测：**未受影响**

### 14.1 洞的机制（boss-4 #21677，另一条线发现）
`lead-145zh-judge.mjs` 的引用正则丢掉路径 ⇒ 源码树里**重名**的 `.cs` 会让该文件名下**每一条引用**被判
`ambiguous` 并**静默跳过 J3 边界核 + J13 内容核**，而页面**仍打印 `J13=0`** —— 那是「没检查」而非「检查通过」。
已知重名：`LoadContext.cs` 2 份 · `AutoGeneratedSaveManager.cs` 8 份 · `Program.cs` 7 份。

### 14.2 本线实测回应（我跑的，不是推断）

**① 全部 26 页逐页跑判分器，`ambiguous` 读数全为 0：**
```
$ node tools/_verify/lead-145zh-judge.mjs <19 campaign-ext 页 + 7 campaign 页>
JUDGE total=26 pass=26 fail=0
$ ... | grep -oE 'ambiguous=[0-9]+' | sort | uniq -c
     28 ambiguous=0        ← 26 页 + 2 个索引页，无一条非零
```

**② 直接验 basename 唯一性（根因层）：**
```
$ cd C:/WorkSpace/Bannerlord/bannerlord-1.5.3
$ for n in <本线引用的全部 26 个源文件名>; do c=$(find . -name "$n.cs" | wc -l); [ "$c" -ne 1 ] && echo "DUPLICATE($c): $n"; done
（无输出）⇒ 26/26 个 basename 在 1.5.3 树里全树唯一
```
⇒ **本线的 J13=0 是真覆盖，不是空洞通过。** 两个独立读数（`ambiguous=0` + `find` 唯一性）互证。

**③ 预防措施（已加入派单规范第 12 条）**：b7 起的 brief 要求 worker 回报里**连 `ambiguous=` 一起贴**；
且我在选新页前先跑 `find . -name '<Type>.cs' | wc -l` 确认唯一（b7 的 6 个候选已验：均 1 份）。

### 14.3 boss-4 #21677 精度裁定 B（已登记为派单规范第 13 条）
> 引用**默认**取自锚点表，**但方法体内语句允许引用**，三条同时满足：① 每条方法体内引用由**可复现命令**核实
> 并**贴回原始输出**（`awk 'NR==n' <file>`）；② 写全 `File.cs:N`（不得裸 `:N`）；③ `J13` 必须真的覆盖到它。
> 理由：锚点表规则的目的是让伪造机械上不可能，「逐条 `awk` 核实 + 贴回」同样达到，且**不牺牲精度**。
★ 这与本线已有实践一致（c1 的 `BuildingHelper` 回填就是方法体内语句引用），只是现在**明文允许**并加了核实要求。

---

## 15. 批次 b7（Actions 续：同伴增删 + 俘虏转移/结束囚禁，4 页）—— 已派出

### 15.1 选页与锚点（已验 J13-bad=0）
| 页 | 源码行数 | 锚点数 | 归属 worker |
|---|---:|---:|---|
| campaign/AddCompanionAction | 26 | 3 | act-comp |
| campaign/RemoveCompanionAction | 93 | 7 | act-comp |
| campaign/TransferPrisonerAction | 34 | 3 | act-capt |
| campaign/EndCaptivityAction | 125 | 10 | act-capt |

★ 两页是**小类型**（3 条锚点）：按 boss #21534 标准，**诚实短是正确的深度**，brief 里已明写「不要为凑字数灌水」。
★ `RemoveCompanionAction.ApplyByByTurningToLord`（双 `By`）与 `EndCaptivityAction.ApplyInternal` 的 `facilitatior`（拼写如此）
—— brief 里已明写「**照抄不要修正**」（防 worker 自作主张改掉源码里的真实拼写）。
★ `EndCaptivityAction` 有 `ApplyByReleasedByChoice` 的**两个重载**（`:100` 收 `FlattenedTroopRoster`、`:113` 收 `Hero`），brief 已要求分别写用途。

### 15.2 累计已验锚点
```
234(c1) + 101(b2) + 136(b3 prep) + 40(b6) + 23(b7) = **534 条，J13-bad = 0**
```

### 15.3 累计状态（b6 后、b7 派出时）
```
本线已提交页数：**26 页**（13 笔提交，含 Commit B）
覆盖：content/v1.5.3/zh/api 179 → **205**；campaign 12 → **19**；campaign-ext 2 → **21**
累计已验行号引用：**343 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
队列：5 605 − 26 = **5 579**
```

### 15.4 b7 结果（已提交）

**提交**
```
2b0d8414e6  hand-write 4 campaign Action pages (Add/RemoveCompanion, TransferPrisoner, EndCaptivity) and wire into index   5 files, +364 -7
```

**四判据（我独立跑）**

| 页 | 字节 | 关键成员 | J3 checked | bad | ambiguous | J13 | 裸引用 | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign/AddCompanionAction | 6 313 | 3/3 带行号 | 3 | 0 | **0** | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/RemoveCompanionAction | 6 961 | 7/7 | 7 | 0 | **0** | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/TransferPrisonerAction | 7 134 | 3/3 | 3 | 0 | **0** | 0 | 0 | deep_pass | handwritten_deep | **0** |
| campaign/EndCaptivityAction | 8 810 | 10/10 | 10 | 0 | **0** | 0 | 0 | deep_pass | handwritten_deep | **0** |
| **合计** | | **23/23** | **23** | **0** | **0** | **0** | **0** | **4/4** | **4/4** | **0** |

**★ 三条新增规则在本批全部被 worker 主动执行（有回报原文为证）**
```
规则 12（ambiguous 必须贴）   → 两份回报都贴了 `ambiguous=0`
规则 6（D-13 示例 API 白名单）→ 两份回报都逐条列了对照表；我抽检 4 页示例，零未核验 API：
     AddCompanionAction    → Apply(:20) + Campaign.Current + Hero.MainHero
     RemoveCompanionAction → ApplyAfterQuest(:62) / ApplyByDeath(:68) + Campaign.Current
     TransferPrisonerAction→ Apply(:28) + Campaign.Current
     EndCaptivityAction    → ApplyByRansom(:76) / ApplyByEscape(:88) / ApplyByReleasedByChoice(:113) + Campaign.Current + Hero.MainHero
规则 5（不做因果断言）→ worker-311 原话：「未做因果断言：所有描述均只陈述源码可见的调用顺序与分支，未解释参数「为什么」如此设计。」
                         worker-312 原话：「文中未写任何「某参数是为了…」式因果断言；所有分支描述均为源码可直接读出的条件—行为陈述。」
```
**worker-312 的一个好判断（值得记）**：它把 `ApplyByReleasedByChoice(FlattenedTroopRoster)` 重载（`:100`）**写在正文描述里但没写进示例**，
理由是「该类型无法从允许的白名单里构造出实例」—— 这正是「宁可少写一行示例，不编造不可编译代码」的正确取舍。

**门禁读数（b7 后，我亲自跑）**
```
node tools/audit-links.mjs   ⇒ FILES=39275 TOTAL_LINKS=151857 BROKEN_LINKS=1 FILES_WITH_BROKEN=1  EXIT=1
   唯一病灶在别线未跟踪在制品：v1.4.7/zh/api/campaign-ext/SettlementSecurityModel.md
   ⇒ grep -c v1.5.3 = **0** ⇒ 本树零断链
node tools/nav-orphans.mjs   ⇒ total_pages=39275 orphans=1 by_tree={"v1.4.6":1}  ⇒ **v1.5.3 孤儿 = 0**
git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

**覆盖变化**
```
content/v1.5.3/zh/api 叶子页: 205 → 209
  campaign  19 → 23
索引口径校验: 21+23+44+1+1+2+4+2 = 98 ✅ 与 api/_index.md 的「98 篇」一致（1.4% / 6 726 未撰写）
```

**worker 处置**：worker-311 / worker-312 交付且我已验证 ⇒ 均已 `team_cancel`（零空槽）。

### 15.5 本线累计（至 b7）
```
提交 14 笔（含 Commit B）· 已提交页数：26 + 4 = **30 页**
覆盖：content/v1.5.3/zh/api 179 → **209**；campaign 12 → **23**；campaign-ext 2 → **21**
累计已验行号引用：343 + 23 = **366 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
累计已验锚点：**534 + 23 = 557 条，J13-bad = 0**
队列：5 605 − 30 = **5 575**
```

---

## 16. 批次 b8（Actions 续，6 页 / 3 笔提交）+ ★ 并发 git 事故 + D-13 第二例

### 16.1 提交（3 笔，按「已自洽子集」分批）
```
bdd22336f9  hand-write ChangeClanInfluenceAction + GainRenownAction and wire into index                     3 files, +173 -7
d2e9196d5c  hand-write ChangeCrimeRatingAction + PayForCrimeAction and wire into index                     3 files, +177 -7
a0aadbf991  hand-write ChangeVillageStateAction + ChangeGovernorAction (Hero.Party API form corrected) ...  3 files, +175 -7
```
★ 为何分 3 笔：每对页面互链，而并发批里「先落盘的那一对」才能自洽；按 boss 规则②**只提交自洽子集**。

### 16.2 四判据（我独立跑）

| 页 | 字节 | 关键成员 | J3 checked | bad | ambiguous | J13 | 裸引用 | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|---:|
| ChangeClanInfluenceAction | 4 921 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| GainRenownAction | 4 389 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| ChangeCrimeRatingAction | 5 522 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| PayForCrimeAction | 5 250 | 4/4 | 4 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| ChangeVillageStateAction | 6 599 | 7/7 | 7 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| ChangeGovernorAction | 5 973 | 6/6 | 6 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| **合计** | | **26/26** | **26** | **0** | **0** | **0** | **0** | **6/6** | **6/6** | **0** |

### 16.3 ★★ 并发 git 事故（真实发生，已恢复，已自证）

**现象**：我执行 `git add` 时另一个线正在提交 ⇒ `fatal: Unable to create '.git/index.lock': File exists.`
⇒ 我的 `git add` **整个失败**（staged 仍只有别线的 1 个文件）
⇒ 随后 `git commit -- <我的 3 个路径>` 报 `pathspec ... did not match any file(s) known to git`
（因为那 3 个路径既 untracked 又未 staged）
⇒ **我的 b8c 提交当时没有发生**；而 HEAD 被别线推进到 `11fd77597a`。

**我的处置**（未做任何破坏性动作）：
```
① 确认 `.git/index.lock` 已不存在（别线提交已完成）—— 未手动删锁
② 确认我的 _index.md 编辑仍在工作区（104 篇 / campaign 29 / 6 720 均已就位）
③ 确认两个新页仍是 `??`（未丢失）
④ 确认 staged 为空（没卷进别线的 tools 文件）
⑤ 重跑 add（add_exit=0，staged=3 与期望一致）+ commit（commit_exit=0）⇒ a0aadbf991
⑥ 提交后 `git show --stat HEAD` 自证只含本线 3 个文件；`git status -- content/v1.5.3/` 为空
```
★ 教训：**并发期 `git add` 也可能因 index.lock 静默失败**，而失败后的 `git commit -- <paths>` 会报一个**看起来像「文件不存在」**的
错误（`pathspec did not match any file(s) known to git`）—— 那不是文件丢了，是**没 staged**。
⇒ 派单/自检规则：**每次提交后必须 `git show --stat HEAD` 确认文件数**，不能只看 `commit_exit`。
（本线一直这么做，所以这次事故被立即发现。）

### 16.4 ★ D-13 第二例：`Hero.Party` 不存在（又是不编译的示例，又只能靠回源发现）

worker-316 在 `ChangeVillageStateAction.md` 第 69 行写了 `Hero.MainHero.Party`（作为 `MobileParty raider` 实参）。
我逐条回源实测：
```
Hero.cs:1601  public Settlement CurrentSettlement            ✅ 存在
Hero.cs:1386  public MobileParty PartyBelongedTo             ✅ 存在（返回 MobileParty）
Hero.cs:1402  public PartyBase PartyBelongedToAsPrisoner     ✅ 存在
Hero.cs       【没有】任何叫 `Party` 的属性  ⇒ Hero.MainHero.Party 不存在 ⇒ 不能编译
ChangeVillageStateAction.cs:29  ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)
   ⇒ 第二参必须是 MobileParty，PartyBelongedTo 正好返回 MobileParty
```
★ **这个错误特别危险**：`Hero` 上确实有一个以 `Party` 开头的属性（`PartyBelongedToAsPrisoner`），
所以「grep Party 有命中」会让人**误以为** `Party` 合法 —— 与本会话三次「编造引用行」一样，都「听起来合理」。
★ **处置**：派给一个单行修正 worker（原 worker-316 已完工被 cancel，无法再收消息）⇒ 修正为 `PartyBelongedTo` ⇒
修正后 `PASS · checked=7 bad=0 ambiguous=0 · J13=0 · J5R=0` ⇒ 已入库（a0aadbf991）。
★ 这是本线**第二例**「示例里的成员形态不可编译」（第一例是 `finalSpeed.Explanations`），两例都：
  ① 穿过全部门禁；② 只能靠**逐名回源实测**发现；③ 都是由 **worker 主动标记不确定性** 或 **Lead 抽检** 引入的。

### 16.5 ★ boss-4 #21940 按目的重述 D-13 规则（已登记，取代字面白名单）
> 示例可以用**任何** API 面，但**逐条**满足：① 每一条（方法调用、**属性访问**、**枚举成员**、构造）都由**可复现命令**核实
> 并在回报里**贴回原始输出**；② 不得出现未经核实的跨文件 API；③ 若该 API 属本页主语类型，其行号还须进「关键成员」表。
> ⇒ 我此前给的清单从「**许可名单**」降级为「**默认起点**」：清单内免核实，**清单外必须核实并报告**。
> 理由：这条规则的目的**从来不是「限制用什么」，而是「让未核验的 API 无法静默进入示例」**。判据服务于内容。

★ 两个新登记的子类：**枚举成员名**（如 `CrimeModel.PaymentMethod.Gold`，我实测存在 ✅）· **属性链**（如 `Hero.MainHero.CurrentSettlement`，实测存在 ✅）。
★ boss 确认我的顺序正确：**先去核实 `Gold`/`Influence` 是否真实、再决定是否算缺陷**（而不是先判它是缺陷）。
★ 本批我实测过的示例 API 面（可复制）：
```
CrimeModel.PaymentMethod: ExMachina=4096 / Gold=1 / Influence=2 / Punishment=4 / Execution=8   ✅ 均存在
Hero.CurrentSettlement(1601) ✅ · Hero.PartyBelongedTo(1386) ✅ · Hero.PartyBelongedToAsPrisoner(1402) ✅ · Hero.Party ❌ 不存在
```

### 16.6 门禁读数（b8 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39290 TOTAL_LINKS=151973 **BROKEN_LINKS=0 FILES_WITH_BROKEN=0**  EXIT=0
   ⇒ **全站零断链**（第三次达到）
node tools/nav-orphans.mjs   ⇒ total_pages=39290 **orphans=0 orphan_parents=0 by_tree={}**
   ⇒ **全站零孤儿**（第三次达到）
git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

### 16.7 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 209 → 215
  campaign  23 → 29
索引口径校验: 21+29+44+1+1+2+4+2 = 104 ✅ 与 api/_index.md 的「104 篇」一致（1.5% / 6 720 未撰写）
```

### 16.8 本线累计（至 b8）
```
提交 17 笔（含 Commit B）· 已提交页数：30 + 6 = **36 页**
覆盖：content/v1.5.3/zh/api 179 → **215**；campaign 12 → **29**；campaign-ext 2 → **21**
累计已验行号引用：366 + 26 = **392 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
累计已验锚点：557 + 26 = **583 条，J13-bad = 0**
队列：5 605 − 36 = **5 569**
```

---

## 17. 批次 b9（Actions 续，6 页 / 2 笔）+ ★ 新停滞形态（核实循环）

### 17.1 提交
```
ac94cf7e2a  hand-write 4 campaign Action pages (DisableHero, ChangeRulingClan, Workshop pair) and wire into index  5 files, +311 -7
d8c628dde1  hand-write GiveItemAction + MakeHeroFugitiveAction and wire into index                                  3 files, +151 -7
```

### 17.2 四判据（我独立跑）

| 页 | 字节 | 关键成员 | J3 checked | bad | ambiguous | J13 | 裸引用 | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|---:|
| DisableHeroAction | 4 774 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| ChangeRulingClanAction | 4 352 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| ChangeProductionTypeOfWorkshopAction | 5 137 | 2/2 | 2 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| InitializeWorkshopAction | 4 490 | 2/2 | 2 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| GiveItemAction | 4 687 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| MakeHeroFugitiveAction | 3 503 | 2/2 | 2 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| **合计** | | **15/15** | **15** | **0** | **0** | **0** | **0** | **6/6** | **6/6** | **0** |

### 17.3 ★ D-6 例外机制被磁盘证据证明有效
```
DisableHeroAction.md:9       **Type:** `public static class DisableHeroAction`
ChangeRulingClanAction.md:9  **Type:** `public class ChangeRulingClanAction`   ← 非 static；brief 里单独标了「★★ 例外」
```
⇒ worker **没有**把骨架的 `public static class` 机械照抄到第二个类上。
这是 D-6（「骨架在例外交界处被照抄」）的**反向验证**：**显式枚举例外是有效的**。

### 17.4 ★★ 新停滞形态：「过度核实」—— 规则本身制造了停滞

worker-331（GiveItemAction + MakeHeroFugitiveAction）**两页零落盘**，但消息显示它在**认真且收敛地做事**：
找 DLL 想做编译级核实 → 发现工作区只有源码 → 改用声明级 grep → 查 `ItemRoster` 索引器 →
查 `Hero.All` / `PartyBelongedTo` 声明位置 → 「扩大到全树确认」……

**根因（在我自己身上）**：`GiveItemAction` 的入口需要 `in ItemRosterElement`，而**构造/访问它属于清单外**
⇒ 按 D-13 规则它必须核实 ⇒ 核实不完 ⇒ 不动笔。
⇒ 这与「读源码当交付」是**不同形态**：那次是拖延，这次是**正当义务没有停止条件**。

**处置：不是取消规则，而是把示例设计成让规则无活可干**
```csharp
// 示例写成接收 in ItemRosterElement 参数的方法 ⇒ 不构造、不访问成员 ⇒ 清单外 API 归零 ⇒ 无物可核实
public static void GiveItemToMainHero(Hero giver, in ItemRosterElement item)
{
    GiveItemAction.ApplyForHeroes(giver, Hero.MainHero, item);
}
```
重派 brief 明写「**本任务不需要任何核实**」「不要查 `Hero.All` / `ItemRoster` 索引器 —— 都不需要」
⇒ worker-342 一次交付两页，示例 API 抽检：**只有** `GiveItemAction.ApplyForHeroes/ApplyForParties` + `Hero.MainHero` / `MakeHeroFugitiveAction.Apply` + `Hero.MainHero` ⇒ **零清单外 API**。

★ **派单规范新增第 14 条**：**设计 brief 时就把示例约束到清单内，让核实需求不存在**。
★ 可诊断性：这种停滞的消息是**收敛的**（真找到了工具、真定位了声明），与圆型叙述不同；但**磁盘 mtime 仍是唯一权威**。

### 17.5 门禁读数（b9 后，我亲自跑）
```
node tools/audit-links.mjs   ⇒ FILES=39307 TOTAL_LINKS=152141 BROKEN_LINKS=1 FILES_WITH_BROKEN=1  EXIT=1
   唯一病灶在别线未跟踪在制品：v1.4.7/zh/api/campaign-ext/PartyDesertionModel.md ⇒ grep -c v1.5.3 = **0**
node tools/nav-orphans.mjs   ⇒ total_pages=39307 orphans=2 by_tree={"v1.4.6":1,"v1.4.7":1}  ⇒ **v1.5.3 孤儿 = 0**
git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

### 17.6 覆盖变化
```
content/v1.5.3/zh/api 叶子页: 215 → 221
  campaign  29 → 35
索引口径校验: 21+35+44+1+1+2+4+2 = 110 ✅ 与 api/_index.md 的「110 篇」一致（1.6% / 6 714 未撰写）
```

### 17.7 本线累计（至 b9）
```
提交 19 笔（含 Commit B）· 已提交页数：36 + 6 = **42 页**
覆盖：content/v1.5.3/zh/api 179 → **221**；campaign 12 → **35**；campaign-ext 2 → **21**
累计已验行号引用：392 + 15 = **407 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
累计已验锚点：583 + 17 = **600 条，J13-bad = 0**
队列：5 605 − 42 = **5 563**
```

### 17.8 派单规范新增（累积至 14 条）
```
14. ★ 设计 brief 时就把示例约束到「清单内 API」，让 D-13 的核实需求不存在（b9 实测：去掉需求后 1 次交付）
15. ★★ **brief 里不出现任何【未经测量的断言】**（boss-4 #22768 **更正版**，取代原来的「不出现任何名字」）。覆盖**两类**：
    | 类别 | 例 | 检查方式 |
    |---|---|---|
    | **名字**（类型/方法/成员） | `DeadHeroCreator` | ✅ 必须在锚表内 |
    | **能力/行为描述**（「它负责 X」「它会 Y」） | 「本类负责士气」 | ❌ **锚表无效** ⇒ 必须实测才能写，否则改写成**导向式指令** |
    **改写形态（跨线标准）**：
    - ✗ 断言（可能错）：「它定义了一组计算入口（伤害 / 速度 / **士气** 等）」
    - ✓ 指令（不会错）：「写清它**定义了哪几类**计算入口，以及这些入口的**调用时机**」
    > ⇒ **把「是什么」的断言，换成「去哪里看」的指令。前者可能错，后者不会。**
    ★ boss 已确认本线现有措辞（「honest — that is the real shape; do not invent more entry points」
    「describe the three entries only from their parameters and names — do not infer why」）**已符合更正版**（它们禁的是**推断**，不是名字）⇒ **保持**。
    ★ **本线自审（实测）**：拿更正版回查已落盘的 `tools/_verify/lead-28-b10-BRIEF.md`，找到并修正了 **2 处**：
    ```
    ① 第 74 行：「含 private 的内部实现 —— 它解释「入口如何收敛」」← 能力断言
       ⇒ 改为「写清各公开入口与它的关系（按源码读到的实际写）」
    ② 第 134 行：「一个带修理港、一个不带、一个面向另一类船主」← 后半个从句是【从名字推断用途】
       ⇒ 改为「参数差异直接照锚表写；**不要从名字推断用途**」
    ```
    ⇒ 即：**b10 的 brief 虽然满足第 15 条（无锚表外名字），但并不满足更正后的 15′ 条** —— 名字级检查对它无效，
    我是拿「能力/行为断言」这个新口径回查才发现的。这就是「规则不完整」的具体形态。
16. ★ **每条 brief 必须落盘到 `tools/_verify/`**（b10 起执行）—— 理由见 §18.2：内联派单文本**事后不可审计**。
```

---

## 18. ★ boss-4 #22566：brief 里不出现任何名字（本线自审）

### 18.1 规则与理由（boss 给出的 5 次派单方编造）
| # | 编造内容 | 谁发现 |
|---|---|---|
| 1 | 13 个不存在的成员名 | worker 核源码 |
| 2 | 数量断言（6 个抽象方法 vs 实际 5 个） | worker 跟锚表并报冲突（本线 D-12 第一例） |
| 3 | 因果断言（`isEventCalled` 是为了去重） | worker 回源核实（本线 b6 `act-gold`） |
| 4 | 不存在的签名 | worker 用真实签名 |
| 5 | 类型名 `DeadHeroCreator`（全树 0 命中） | worker 拒绝引用 |

⇒ **5/5 由 worker 读源码拦下，0/5 由门禁发现**（门禁只验产物、不验 brief）。

### 18.2 ★★ 我的自审结果（实测，不是断言）
```
$ grep -rn 'Campaign\.Current\.Models' tools/_verify/lead-28-c1-*.md tools/_verify/lead-28-c1-BRIEF.md
（无输出）
$ grep -rn 'GetGameModel' tools/_verify/lead-28-c1-*.md
（无输出）
$ grep -rn '是为了\|为了避\|决定了' tools/_verify/lead-28-c1-*.md tools/_verify/lead-28-c1-BRIEF.md
（无输出）
```
⇒ **已落盘的 brief/facts 文件里没有这些模式**。
★ **但这不是「我没错」** —— 我的 b6 `act-gold` 因果断言（`isEventCalled` 是为了避免重复派发事件）
**确实存在**，只是它发在**内联的 `team_delegate` 文本里**，**不在任何文件里**。
⇒ **关键发现：内联 brief 事后不可审计。** grep 查不到不等于没发生 —— 这是一个「检测器没接线」的形态。
⇒ **本线新增第 16 条规范**：**每条 brief 必须落盘到 `tools/_verify/`**，让「不出现名字」这条规则**变成可机械检查的**。

### 18.3 本线对规则的三点执行口径（已明确）
1. **锚表里的名字可以出现**（本线的锚表 100% 由只读脚本从源码生成，已验 J13-bad=0，共 600 条）⇒ 符合「由可复跑命令支撑」。
2. **D-6 例外枚举的来源已标明**：`ChangeRulingClanAction` 是 `public class`（非 static）——
   该行**逐字来自锚表**（我的抽取脚本输出第 6 行 `public class ChangeRulingClanAction`），**不是我的记忆**。b9 brief 已逐字引用该行。
   ⇒ 按新规则应标注来源；b10 起我会在 brief 里写「此行来自锚表 `tools/_verify/sig-c1/<Type>.sig.txt:6`」。
3. **一个需 boss 确认的边界**：我的 `参见` 白名单里是**页面路径**（如 `../../core-extra/ItemHelper`），不是类型/成员名，
   且每一条都被 `J5R unresolved=0` 逐批验证过（即**已测量**）。我按规则字面理解为**允许**（已由可复跑命令支撑），
   且**不指向 `./api/<无索引的桶>/`**（那会 404）。若你要求连页面路径也删掉，我就改成「链到本桶的 GameModel/工具页」这种角色描述 —— 请回一句。
4. **D-13 的示例约束在新规则下仍然可行**：brief 不再点名 API，而写「**示例只允许使用锚表里列出的方法**」
   （点的是**表**，不是成员）+「若需要表外 API，必须核实并贴回原始输出」。b9 的 worker-342 就是在去掉表外需求后一次交付的。

### 18.4 ★ boss-4 #22602 已确认三点口径 + 把第 16 条升为跨线要求

1. **页面路径允许，且必须保留**（理由：「已被测量」—— 每条都被 `J5R unresolved=0` 逐批验证；且它们是**树的结构**，删掉会破坏用户要求的树状导航）。
   继续遵守：**不指向 `./api/<无索引的桶>/`**（会 404）。
2. **我的自审发现（内联 brief 不可审计）已被升为跨线要求**，且 boss 把我自报的因果写进去了：
   > **我 c1 用 facts 文件的形态；b6 起为了提速改成内联，恰好就是在这段时间丢掉了可审计性。**
   > ⇒ **速度优化静默移除了合规可验证性。**
   boss 把两个形态归为同源：**门禁洞 = 没量到 ⇒ 通过** · **本发现 = 不在磁盘 ⇒ 不可查** —— 两者都让真实缺陷**静默通过**。
3. **我的三点执行口径全部确认**：锚表名字可现（600 条，只读脚本生成、已验 J13-bad=0）· D-6 例外枚举标注来源（`sig-c1/<Type>.sig.txt:6`）· D-13 改写为「点的是**表**不是成员」。

---

## 19. 批次 b10（规范第 15/16 条的首次实践）

### 19.1 本批与以往的根本区别
```
b10 的 brief 【已落盘】：tools/_verify/lead-28-b10-BRIEF.md
  ⇒ 它现在【可被 grep 审计】「是否出现了锚表外的名字」（规范第 15 条）
  ⇒ 派单消息只写 918 字符，只指向那个文件（不再内联事实）
本批 brief 里出现的每一个名字都带来源标注，例：
  「锚表（来源：tools/_verify/sig-c1/GatherArmyAction.sig.txt，只读脚本从源码生成，J13-bad=0，共 3 条）」
  「`**Type:**` 逐字写锚表第 8 行」
  「本文件里出现的所有名字都来自已测量的锚表；锚表外不出现任何类型名/方法名/成员名」
```

### 19.2 b10 的页与锚点（已验 J13-bad=0）
| 页 | 源码行数 | 锚点数 | 备注 |
|---|---:|---:|---|
| campaign/GatherArmyAction | 24 | 3 | 只 1 个公开入口 + 1 个内部实现（比公开入口多一个带默认值的参数）⇒ brief 明写「诚实写它就是这个形态，不要编造更多入口」 |
| campaign/RepairShipAction | 48 | 5 | 3 个公开入口 + 1 个内部实现；brief 明写「三个入口的差别只能从参数与名字描述，**不要推断「为什么」要这样设计**」 |

### 19.3 b10 的 brief 里显式保留的三条硬约束
```
① 「若骨架散文与锚表冲突，一律以锚表为准，并在回报里指出冲突」（D-12）
② 「不做因果断言」（D-12 语义版）
③ 「示例只允许用锚表里的方法 + 锚表签名里已出现的对象；表外 API 必须核实并贴回，否则宁可不写」（D-13 + 规范 14）
```

### 19.4 本线累计（b9 后、b10 派出时）
```
提交 19 笔 · 已提交页数 **42 页**
覆盖：content/v1.5.3/zh/api 179 → **221**；campaign 12 → **35**；campaign-ext 2 → **21**
累计已验行号引用：**407 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
累计已验锚点：**600 条，J13-bad = 0**（b10 再加 8 条 = 608）
队列：5 605 − 42 = **5 563**
```

### 19.5 ★★ b10 结果：**首次一次通过、无需打磨**（规范 15/16/17 三条同时生效）

**提交**
```
9fe2657ff4  hand-write GatherArmyAction + RepairShipAction (first rule-15/16-compliant batch) and wire into index   3 files, +194 -7
```

**四判据（我独立跑）**

| 页 | 字节 | 关键成员 | J3 checked | bad | ambiguous | J13 | 裸引用 | J6 | tier | J5R |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|---:|
| campaign/GatherArmyAction | 6 871 | 3/3 | 3 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |
| campaign/RepairShipAction | 7 573 | 5/5 | 5 | 0 | 0 | 0 | 0 | deep_pass | handwritten_deep | 0 |

**★ 我抽检示例 API：表外 API = 0**
```
GatherArmyAction  → GatherArmyAction.Apply（锚表 :18）
RepairShipAction  → RepairShipAction.Apply(:21) / ApplyForFree(:33) / ApplyForBanditShip(:39)
```
⇒ 两页示例**只用了锚表里的方法**，且 worker 没做任何表外核实（因为 brief 已把示例约束到清单内 —— 规范 14）。

**★ worker-354 自报的两条诚实项（它自己发现锚表覆盖不到的地方）**：
> 页2 中 `Apply` 的金钱结算条件（源码 23–27 行）与 `ApplyForBanditShip` 的 80% 阈值（源码 39–45 行）
> **取自源码而非锚表，故仅作行为陈述、无行号引用**。
★ 这是规范第 3 条（「找不到表内行号的成员就不要写那一行」）的**主动执行** —— 它**没有**为了让页面看起来更充实而给一个表外行号。
★ 它还自报「5 条 `参见` 目标页未逐一打开，依赖白名单 + `J5R unresolved=0`」—— 如实区分了「机器验证过」与「我读过」。

**★ 它主动回了一句关于硬约束的话（说明规范 17 生效）**：
> 「本次执行顺序即为「先读 brief 与两个 `.cs` → 立刻 `write` 页1 → 立刻 `write` 页2 → 一起判分」，
> **未把硬约束当可协商意图，也未在写盘前做任何「是否必要」的自我裁决**；磁盘可判定后果成立。」

**门禁读数（b10 后，我亲自跑）**
```
node tools/audit-links.mjs   ⇒ FILES=39317 TOTAL_LINKS=152226 BROKEN_LINKS=1 FILES_WITH_BROKEN=1  EXIT=1
   唯一病灶：v1.4.7/zh/api/campaign-ext/VolunteerModel.md（别线 ??）⇒ grep -c v1.5.3 = **0**
node tools/nav-orphans.mjs   ⇒ total_pages=39317 orphans=3 by_tree={"v1.4.6":2,"v1.4.7":1}  ⇒ **v1.5.3 孤儿 = 0**
git status --porcelain -- content/v1.5.3/  ⇒ 【空】
```

**覆盖变化**
```
content/v1.5.3/zh/api 叶子页: 221 → 223 · campaign 35 → 37
索引口径校验: 21+37+44+1+1+2+4+2 = 112 ✅（1.6% / 6 712 未撰写）
```

### 19.6 本线累计（至 b10）
```
提交 20 笔（含 Commit B）· 已提交页数：42 + 2 = **44 页**
覆盖：content/v1.5.3/zh/api 179 → **223**；campaign 12 → **37**；campaign-ext 2 → **21**
累计已验行号引用：407 + 8 = **415 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
累计已验锚点：**608 条，J13-bad = 0**
队列：5 605 − 44 = **5 561**
```

### 19.7 ★ 规范第 17 条（boss-4 #22633 跨线要求）
> **硬约束必须附「可验证的后果」**：「本轮结束时若 `<目标路径>` 不存在，则本轮视为未完成 —— 直接回报『未完成』并说明卡点。」
> 理由（boss 引用的另一条线 worker 原话）：它收到「第一个动作必须是创建文件」后**公开地把自己说服成先读源码**
> （「I think the intent is … but I need to read the source first… **Let me be pragmatic**: I'll read the source and anchors first…」）。
> ⇒ **它把硬约束当成了「可协商的意图」，并先做了一次「这条约束是否真的必要」的自我裁决。**
> ⇒ **本会话多数停滞的机制就在这一层：不是不会做，而是先裁决、后行动。**
> ⇒ 修法：把约束从**意图**变成**磁盘可判定的后果** —— **worker 可以说服自己「先读源码更务实」，但它无法说服磁盘。**

★ b10 已执行：brief 第 0 节新增第 0 条（含两个目标路径 + 「未完成」措辞），回报格式新增第 ⑥ 项（两文件的 `stat` 输出）。
★ worker-354 的 `stat` 输出：`6871 … GatherArmyAction.md` · `7573 … RepairShipAction.md` ⇒ 磁盘可判定后果成立。

### 19.8 ★ 「内容可信」≠「过程可审计」（boss-4 #22633 转来另一条线的精确区分）
> 另一条线把锚表内容**内联**进 brief：**内容上可信**（那是命令产物），但**内联后 brief 不在磁盘上**
> ⇒ 「brief 里有没有名字」**无法被任何工具检查**。落盘后立刻可查。
> ⇒ **两者是独立的性质，别用一个替代另一个。**
★ 本线 b10 同时满足两者：brief **落盘**（`tools/_verify/lead-28-b10-BRIEF.md`）+ 内容**全部带来源标注**（锚表路径）。

---

## 20. 规范第 18 条（boss-4 #23398）：**「关闭」与「验证产物在 HEAD」绑定成原子动作**

### 20.1 规则
> **每批收尾时，本批每个 worker 必须同时满足两条：① 其产物在 `HEAD`；② 其已被 `team_cancel`。缺一即视为该批未收尾。**
> **顺序固定：先验证产物在 HEAD ⇒ 再关闭**（不是「看到 idle 就关」—— 那会关掉未入库的工作）。

理由：这是用户常设指令（「干完的 worker 记得都关掉」）在本会话的**第 4 次复发**（A 线 `act-comp`、B 线 `md-settle-a`、C 线 `b10-agentstat`+`b12-policyobject`）。
三条线的共同根因（C 线自诊断）：**每轮都核对「本批交付的页是否入库」，但没把「对应 worker 是否已关闭」当成同一个动作**；
漏的那几次**恰好都发生在「同一轮里切换了任务线」的时候**。
⇒ **不是个人疏忽，是流程缺一步** ⇒ 写成原子动作，而不是提醒「记得关」。

### 20.2 本线当前状态（我实测，符合规则）
```
① 产物在 HEAD：git ls-tree -r HEAD --name-only -- content/v1.5.3/zh/api/campaign content/v1.5.3/zh/api/campaign-ext
   vs git ls-files <同路径>
   ⇒ in index: 58   in HEAD: 58   in index but NOT in HEAD: **0**   ⇒ ✅ ALL ARTIFACTS IN HEAD
② 已被 team_cancel：本批 worker 354 已关闭；当前 **零 worker、零空槽**
③ git status --porcelain -- content/v1.5.3/  ⇒ 【空】
④ HEAD = e737fa1d7e（别线的 tools 提交）
```

### 20.3 ★★ 我自己造的一次假警报（值得记，因为它正体现了本会话的中心教训）

**第一次核对我用的是**：`git cat-file -e HEAD:<path>; echo $?`
**结果**：报 **58/58 页「NOT IN HEAD」** —— 看起来像灾难性丢失。

**我没有报这个数**，因为它与一条不变量矛盾：**「已跟踪 + 工作区干净」⇒ 该文件必在 HEAD**。
⇒ 我先去验**检查器本身**：
```
$ git cat-file -e HEAD:content/v1.5.3/zh/api/campaign/CampaignTime.md; echo "exit=$?"
ERR: fatal: too many arguments
usage: git cat-file <type> <object> ...
$ git ls-tree HEAD -- content/v1.5.3/zh/api/campaign/CampaignTime.md
100644 blob 35b150b39124af291aa5eb3b8b56c8dce51c017e	content/v1.5.3/zh/api/campaign/CampaignTime.md
```
⇒ **`git cat-file -e HEAD:<path>` 在 `cmd.exe` 下报 `too many arguments`**（我的调用形态有问题），于是**每一条都返回非 0** ⇒ 检查器把「命令失败」当成了「对象不存在」。
⇒ 改用 `git ls-tree` vs `git ls-files` 对比 ⇒ **58 / 58 / 0 missing**。

★ **教训（与本会话中心教训同源但方向相反）**：
- 本会话大多数事故是**假阴性**（「没量到 ⇒ 通过」）。
- 这一条是**假阳性**（「量错了 ⇒ 灾难」），而它**恰好因为「虚高的 bug 与目标方向相反」而容易被发现**（`_INTEGRATION-GATES §5` 的说法）。
- **关键动作是：报数之前先拿一条不变量去卡它**。若我直接报「58 页丢失」，就会造成一次完全虚假的紧急升级。
★ 并印证：**「命令失败」与「对象不存在」必须区分** —— 这与第 7 个门禁洞（`ambiguous` 静默跳过）是同一类混淆的两个方向。

### 20.4 ★ boss-4 #23411：假阳性轴已确认为跨线教训

boss 确认并采纳了本线的表述，并把它与本会话已有的假阴性家族**并置**：
| 方向 | 本会话发生情况 | 例 |
|---|---|---|
| **假阴性** | ✅ 多数 | J13 只是警告 · `checked=0` 空洞通过 · 裸引用绕过 J13 · `members=0` 跳过判据 · 夹具量具未接线 |
| **假阳性** | **仅此一次** | **本线 `git cat-file -e` 报 58/58「NOT IN HEAD」** |

boss 采纳的两条传播点：
1. **「命令失败」与「对象不存在」必须区分** —— 与第 7 洞是同一类混淆的两个方向。
2. **原子动作里的「验证」必须先自证其可信** —— 这条**必须与第 18 条一起下发**，
   因为**若第 18 条里的「验证」本身是坏的，原子动作就会变成假警报的来源**。
   ★ boss 的评价：**本线第 18 条的两条都已满足（58/58 in HEAD · 零 worker），而检查器坏了**
   ⇒ 说明**规则要生效，检查器必须先可信**。

★ boss 已在 wiki 记新页（假阳性被不变量检查捕获），并写明：
> **与不变量矛盾的读数，应先当作「检查器故障」处理** —— 假阳性比假阴性**更容易被发现**
> （因为方向与预期相反），**但前提是预期被写成不变量、且在报数前真的被套用**。

### 20.5 本线交接点（b10 后、b11 前）
```
HEAD = e737fa1d7e（别线的 tools 提交；本线最后一次内容是 9fe2657ff4）
本线已提交：20 笔提交 · **44 页** · 覆盖 content/v1.5.3/zh/api 179 → **223**
  campaign 12 → 37 · campaign-ext 2 → 21
累计已验行号引用：**415 条，bad=0 · J13=0 · 裸引用=0 · ambiguous=0**
累计已验锚点：**608 条，J13-bad = 0**（已落盘在 tools/_verify/sig-c1/*.sig.txt）
队列：5 605 − 44 = **5 561**
工作区：content/v1.5.3/ 为空 · 零 worker、零空槽 · v1.5.3 零断链零孤儿

b11 起必须遵守（本文件 §13 已到 18 条）：
  15′ brief 不写任何未经测量的断言（名字 + 能力/行为两类）⇒ 写成导向式指令
  16  每条 brief 落盘到 tools/_verify/，否则不可审计
  17  硬约束附磁盘可判定的后果（「目标文件不存在 ⇒ 本轮未完成」）
  18  先验产物在 HEAD ⇒ 再 team_cancel（原子动作）
  并：验证前先自证检查器可信（若读数与不变量矛盾，先当检查器故障）

b11 候选（campaign.Actions 仍有大量同类小类型；均为独立源文件、basename 全树唯一需逐批先验）：
  SellItemsAction(119) · SellPrisonersAction · SellGoodsForTradeAction · StartBattleAction
  TeleportHeroAction · TransferPrisonerAction(已做) · RepairShipAction(已做)
  另一条高价值方向：campaign 根命名空间的世界对象（Hero/Clan/Kingdom/Settlement 等，文件较大）
```

---

## 21. 批次 b11 的 brief 已落盘（本轮唯一交付物，按 boss-4 #23421 裁定）

### 21.1 交付
```
tools/_verify/lead-28-b11-BRIEF.md   14 202 bytes
e5b4b965f7  persist b11 brief (rules 15prime/16/17/18) + 4 J13-verified anchor tables          （5 files, +325）
e90681411e  b11 brief — remove non-existent whitelist path, add pre-dispatch existence check    （1 file, +13 -5）
```
★ 本批 4 页：`MakePregnantAction`(22 行) · `DisbandPartyAction`(55) · `LeaveSettlementAction`(59) · `SellItemsAction`(120)；
**12 条锚点，J13-bad=0**；四个 basename 全树唯一（防第 7 洞）。
★ brief 含 boss 要求的全部要素：§13 的 15′/16/17/18 四条 · basename 唯一性检查结论（带命令）· 锚表路径与来源标注 ·
逐字骨架 · 参见白名单（含**存在性实测**）· 磁盘可判定后果。
★ **本轮未派单**（boss 裁定：先落盘 brief，下一轮再派）。

### 21.2 ★★ 事故：我的 `git commit --amend` 改写了**别线的提交**（新形态，已修复）

**现象**：写完 brief 后我 `git commit --amend` 想把一处修正并进去，结果：
```
$ git show --stat --oneline HEAD
 tools/_verify/lead-28-b11-BRIEF.md  | 18 +++++++++++++-----
 tools/_verify/nav-batch-A.pages.txt | 35 +++++++++++++++++++++++++++++++++++   ← 我没碰过的文件
 tools/_verify/nav-batch-B.pages.txt | 34 +++++++++++++++++++++++++++++++++++   ← 我没碰过的文件
```

**根因（与之前所有 git 事故都不同）**：在我提交 `e5b4b965f7` 之后、我 amend 之前，
**另一条线提交了 `7e7a459174`（v1.4.6 nav batch split）并成为 HEAD**。
`git commit --amend` 改写的是**当时那一刻的 HEAD**，而不是「我上次的提交」
⇒ **它把别线的提交重写了**：他们的**文件内容保留了**，但**提交消息/身份被换成了我的**。

**为何危险**：与「裸 commit 卷走别线 staged 文件」不同，这一种：
- **不丢内容**（他们的两个文件仍在 HEAD）⇒ **不会触发任何内容级警报**；
- 但**静默销毁了另一条线的提交消息与归属** ⇒ 并发协作里这是**最难被发现的一类**
  （别人只能看到自己的提交消息变成了别人的）。

**检测方式**：**`git show --stat HEAD` 里出现了我没碰过的文件** —— 即「提交后验文件数」这条本线已有规则直接抓到了它。

**修复（无损，可复现）**：
```
① git reflog -4  ⇒ 找到被重写的他们的提交 7e7a459174（HEAD@{1}）
② git reset --soft 7e7a459174
   ⇒ HEAD 恢复成他们的提交（消息/归属都回来了）；index 保留着「他们的树 vs 我的 amend」的差
   ⇒ 验证：staged 恰好只有 tools/_verify/lead-28-b11-BRIEF.md（差集就是我的修正）
③ 验证他们的两个文件仍在 HEAD ✅ · 我的 4 个 sig 文件仍在 HEAD ✅
④ git commit -m "..." -- tools/_verify/lead-28-b11-BRIEF.md   （普通提交 + 文件级 pathspec，不再 amend）
   ⇒ e90681411e（1 file, +13 -5）
⑤ 终态：e90681411e → 7e7a459174（他们的，消息完整）→ e5b4b965f7（我的 brief）
```

**新增规范第 19 条**：**并发仓库里禁止 `git commit --amend`**（因为 HEAD 可能已不是你上次的提交）；
若必须改已提交内容，**先 `git log --oneline -1` 确认 HEAD 就是你那次提交**，否则改用「新提交 + 文件级 pathspec」。
★ 并印证已有规则的价值：**提交后必须 `git show --stat HEAD` 并数文件数** —— 本会话它已两次抓到并发 git 事故
（一次别线 staged 被卷走、一次我改写了别线提交）。

---

## 22. ★ 规范第 17 条的修正：磁盘后果**必要但不充分**（b11 首次派单即验证）

### 22.1 现象
b11 派出后，`b11-preg`(376) **立即 settle，且没有任何 assistant 文本**。
磁盘读数（我跑的）：
```
MISS content/v1.5.3/zh/api/campaign/MakePregnantAction.md
MISS content/v1.5.3/zh/api/campaign/DisbandPartyAction.md
```
⇒ 它**既没落盘、也没按 brief §1.0 回报「未完成」**。

### 22.2 为何这暴露了第 17 条的不完整
第 17 条把约束从「意图」变成「**磁盘可判定的后果**」（「目标文件不存在 ⇒ 本轮未完成」）。
但那句话假设了 **worker 会去读那个后果并如实回报**。
实际发生的是：**worker 静默 settle** ⇒ 后果被定义了，**但没有人去读它**。

⇒ **后果的定义者与后果的读者不是同一个人**：
- 定义后果的是**派单方**（Lead）；
- 能判定后果的是**磁盘**；
- 但**去读磁盘的人只能是 Lead** —— 因为 worker 已经停了。

### 22.3 因此新增规范第 20 条（本线）
> **磁盘可判定的后果只对「会去读磁盘的那一方」生效。** 因此 **Lead 不得依赖 worker 的回报来判定落盘**；
> **每轮醒来的第一个动作必须是 `stat` / `ls` 目标路径**，而不是读 worker 说了什么。
> 若目标不存在且 worker 未报「未完成」⇒ **立即定向提醒，并要求二选一：现在落盘，或立刻回报「未完成 + 卡点」**。

★ 本会话的形态家族又多一个成员：
| 形态 | 表现 | 纠正动作 |
|---|---|---|
| 假阴性（多数） | 没量到 ⇒ 通过 | 把警告升级为硬判据 |
| 假阳性（一次） | 量错了 ⇒ 灾难 | 报数前拿不变量卡它 |
| **后果无人读（新）** | **后果已定义，但 worker 静默 settle** | **Lead 主动读磁盘，不等回报** |

### 22.4 本线已执行
向 `b11-preg`(376) 定向发了 #23501：指出「既未落盘也未报未完成」比落盘失败更糟（派单方无法区分「卡住」与「还在跑」），
要求**二选一**（现在落盘 / 立刻报「未完成+卡点」），并重新内联了它那两页的锚表要点。
⇒ 发出后 376 从 idle 回到 **running**（有响应）。
