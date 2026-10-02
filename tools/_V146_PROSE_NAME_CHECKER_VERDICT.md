# `tools/_v146_prose_name_check.mjs` 判别力实测报告

结论先行：**建议删除**（作为门禁）。四档口径里没有任何一档能同时满足「阳性 ≥18/20」与「阴性 ≤2/20」。
但它顺手挖出的 **20 处真缺陷**是实打实的收益，见 §6，别连这个一起扔。

实测人：worker-61 ｜ 全部数字由本人跑出，命令见 §7 ｜ 仓库零残留，未 git add/commit ｜ 未改动 `content/`

---

## 0. 量纲声明（每个数字的单位与统计对象）

| 记号 | 含义 |
|---|---|
| **页** | 一个 `.md` 页面文件 |
| **条 / instances** | 「某标识符在某页出现一次」计一条；同一标识符出现在 3 页 = 3 条 |
| **个 / unique** | 去重后的不同标识符个数（同一名字在 26 页出现 = 1 个、26 条） |
| **声明级** | 源码里 `class/struct/enum/interface/record <Name>` 的次数 |
| **简单名** | 不带命名空间与泛型参数的标识符 |

正文所有百分比一律以**条**为分母（不是页、不是 unique），并同时给出 unique 数，避免量纲错配。

---

## 1. A 类证据：阳性对照（灵敏度）

造 **20 页**，全部在 `%TEMP%`（仓库外），每页只植入**确定不存在**的假名，且形态无歧义 —— 每一种都在**声称一个类型存在**。
假名在造页前逐个断言 `hasWord(blob, fake) === false`，否则脚本 `exit 2` 中止（`positive proof: 20 页，20 个假名全部 hasWord=false`）。

| 形态 | 页数 | 内容示例 |
|---|---|---|
| BACKTICK | 4 | `` 入口类型写作 `FakeWidget` `` |
| BARE | 4 | `FakeWidget 是本页讨论的类型` |
| CONTEXT | 4 | 列表 + 行内反引号 `` `FakeWidget(agent)` `` |
| HEADING | 4 | `# FakeWidget 的用法` + 表格单元格 |
| QUALIFIED | 4 | `` `TaleWorlds.Campaign.FakeWidget` `` |

**四档全部 20/20，五个形态各 4/4。灵敏度不是瓶颈。**

### 1.1 CAMEL 诊断集（4 页）——这是**误报**目标，不是灵敏度目标

我第一版把「lowerCamel 形参里埋假名」（`lastFakeWidgetEnabled`）算进阳性，**这是我的造页错误**：
形参名不是类型声明，一把尺把它报成 miss 本身就是误报。已移出阳性集，单列为诊断集双记：

| 档 | CAMEL 诊断集命中（**命中=误报**） |
|---|---|
| M0 | **4/4（全是误报）** |
| M1 / M2 / M3 | 0/4 ✅ |

M0 把 `lastFakeWidgetEnabled` 切成 `FakeWidgetEnabled` 报 miss —— 与任务书预判一致，已实测坐实。

---

## 2. B 类证据：阴性对照（误报率）

造 **20 页**，同样在 `%TEMP%`，**零虚构名**，且机器可证：
页面里每个首字母大写的 token，要么在源码中逐词存在，要么是白名单里已验证「不在源码」的已知非类型名，要么是页面内某个真实源码标识符的 PascalCase 片段。
一条都不许有别的，否则脚本 `exit 2`（`clean proof: 20/20 页零虚构名`）。

| 形态 | 页数 | 内容 |
|---|---|---|
| TYPES | 7 | 只用源码里真实声明的类型名（反引号 + 裸名） |
| CAMEL | 7 | 真实 lowerCamel 源码标识符（含 `AddAppDependencyResult_t`、`CSteamAPIContext`） |
| NOISE | 6 | `` `AssemblyInfo` 指 `Properties/AssemblyInfo.cs`，不是类型 `` / `Suffixes`、`TypoNamespaces` 是 artifact 字段名 / `PointDirs` 是 `entryPointDirs` 的子串 / `` 标签页 `Sibling`、`Gaps` 是专有链接标签 `` |

**结果（要求 ≤2/20）：**

| 档 | 阴性误报 | TYPES | CAMEL | NOISE |
|---|---|---|---|---|
| M0 | **14/20** ❌ | 2/7 | 6/7 | 6/6 |
| M1 | **6/20** ❌ | 0/7 | 0/7 | **6/6** |
| M2 | **6/20** ❌ | 0/7 | 0/7 | **6/6** |
| M3 | **6/20** ❌ | 0/7 | 0/7 | **6/6** |

**四档全部不达标，最好 6/20 = 30% 误报率。误报 100% 集中在一个形态：NOISE。**

### 2.1 阴性对照不是我编的 —— 这些形态来自真实语料

`AssemblyInfo`/`Suffixes`/`TypoNamespaces`/`PointDirs`/`Sibling`/`Gaps` 不是我杜撰的，是任务书引用的**真实页面里出现过的名字**。已在当前树核对：

```
$ grep -rhoE "[A-Za-z_]*Suffixes[A-Za-z_]*|[A-Za-z_]*TypoNamespaces[A-Za-z_]*|[A-Za-z_]*PointDirs[A-Za-z_]*" \
    content/v1.4.6/zh --include=*.md | sort | uniq -c
      3 entryPointDirs      <- M0 切出 PointDirs（误报）
      2 excludeSuffixes     <- M0 切出 Suffixes（误报）
      1 sourceTypoNamespaces<- M0 切出 TypoNamespaces（误报）
```
这三个名字**现在已不在 M1 的 miss 列表里**（别的 worker 已把那几页改掉），但 M0 依然会切出来 —— 精确坐实了 `CAMEL_ARTIFACT` 这一类。

---

## 3. C 类证据：等价性 / 正确性对照（**已知输入**驱动，不靠「跑通了」）

这一类与 A/B 分开列出，结论不依赖任何准确率。

### C1 词表索引 ≡ 原 `hasWord`

我的加速索引（`TOKENS` 集合）声称等价于原脚本的 `hasWord`。用**已知答案**验证：60 个随机 token + 12 个专门挑的边界样本。

```
$ node tools/_v146_prose_name_ruler.mjs --selftest
selftest: 72/72 agree  tokens=201335
```
> 注：被删除的是**被测对象** `tools/_v146_prose_name_check.mjs`（那把尺，见 TOMBSTONE）。
> **上面这条命令本身可以跑**（实跑 exit=0 / 72/72 agree）——它属于为该尺搭建的 fixture 工具链，刻意保留以便复现判别力实测。
> 保留这层区分是因为「尺被删了」不等于「证明尺不行的工具也被删了」；删掉后者会让这份报告**不可复跑**。

**这次是靠「已知输入应当被抓住却没被抓住」抓到的缺陷，不是靠数字异常**：
第一版索引没有前置否定边界，把 `0x000CC031` 这类十六进制字面量里的 `x000CC031` 收进了词表 —— 当时数字完全正常（无异常、无离谱值），是靠 C1 的已知答案对照暴露的。修正后词表从 573456 降到 201335 且 72/72 一致。

### C2 M0 档 ≡ 原脚本（逐页逐 id，非只比总数）

「总数相等」可能是巧合，所以逐页逐标识符 diff，两个脚本跑**同一份快照**：

```
PASS 逐页逐 id 完全一致 -> M0 档是原脚本的忠实复刻
原脚本页数: 104   我的 M0 页数: 104   TOTAL_MISSING 均为 430
```
→ 后面所有「M1 相对 M0 的改进」都是对原脚本的改进，不是对一个被改坏的替身。

### C3 阴性对照「干净」是机器证的，不是声明的
`proveClean()` 会在阴性页里发现任何无法解释的大写 token 时 `exit 2`。**它当场抓到了我自己的造页错误**：NOISE 页里混入的小写英文单词 `canonical`（后来按「这把尺只提取大写 token」修正判定口径）。C3 有产出，不是装饰。

### C4 阳性/阴性集的构造缺陷自查（3 处，全部已修）
1. **CAMEL 形态混入阳性集** → 形参名不是类型声明，已移为诊断集（§1.1）。
2. **CAMEL 页正文里夹带裸假名** → 掩盖了词边界档的灵敏度损失，首轮 M1 显示 20/20 是假的。修掉后 M1 真实漏掉 4/4 CAMEL 页。
3. **`title: CAMEL 诊断` 这个 frontmatter 标签本身被尺测到** → 造页在测自己。改成小写后 M1 的 CAMEL 命中从 4/4 降到 0/4。

---

## 4. 阈值敏感性表

四档口径，同一份 104 页快照（`content/v1.4.6/zh` 全部 `.md`；**别的 worker 在并发改 content，绝对值会漂，本表是某一时点的切片**）。

| 档 | 口径 | 阳性命中 (页/20) | 阴性误报 (页/20) | CAMEL 诊断命中 (页/4，越少越好) | 真实语料 missing (条) | 真实语料 unique (个) |
|---|---|---|---|---|---|---|
| **M0** | 现状（原脚本） | 20/20 ✅ | **14/20** ❌ | 4/4 ❌ | 430 | 350 |
| **M1** | M0 + 页面侧词边界 | 20/20 ✅ | **6/20** ❌ | 0/4 ✅ | 153 | 97 |
| **M2** | M1 + 否定句/路径跳过 | 20/20 ✅ | **6/20** ❌ | 0/4 ✅ | 136 | 90 |
| **M3** | M1 + 白名单（77 条，**由真实语料分类反推**） | 20/20 ✅ | **6/20** ❌ | 0/4 ✅ | 20 | 20 |

**满足「阳性 ≥18 且阴性 ≤2」的档位：没有一档。**

### 4.1 各档的关键观察

- **M1（词边界）是唯一的真实改进**：真实语料 unique 从 350 → 97。抽验 M0 独有的 253 个 unique：
  **253/253（100%）在页面上只作为更长 token 的片段出现** —— 全是 `CAMEL_ARTIFACT`，零真阳性损失。
  并且 M1 的 97 个 unique **全部包含在** M0 的 350 个里 → **词边界一步砍掉 253 个误报，没漏掉任何一个真缺陷。**
- **M2（否定句关键词过滤）买不到东西**：阴性 6/20 → 6/20，**一分没降**；真实语料 153 → 136（−17 条）。
  在阴性对照上完全无效。注意 M2 的关键词表是照任务书给的例子写的，**不是照我的造页句子写的**，仍然 6/6 全漏。
- **M3（白名单）是记忆，不是泛化**：白名单由真实语料的 77 个噪声名反推而来，跑完真实语料 missing 恰好剩 20 条，
  且 **20/20 全部是 REAL_ERROR，精确率 100%**。但阴性对照**仍是 6/20** ——
  因为 6 个 NOISE 名字里有 4 个（`Suffixes`/`TypoNamespaces`/`PointDirs`/`Gaps`）**不在当前语料**，
  语料推导的白名单根本不可能知道它们。
  **白名单只能记住语料里已经出现过的东西，换一批新的噪声名立刻又变成误报。** 阴性对照测的正是这个泛化缺口。

---

## 5. 真实语料逐条分类标注

统计对象：**M1 档 unique 标识符**（在 1.4.6 `.cs` 全树逐词未命中的名字）
量纲：**97 个 unique / 出现于 44 个页面 / 累计 153 条**
标注完整性由脚本强制核对：漏标或多标都 `exit 2`（它当场抓到我漏标 `ForUsage`）。

| 类别 | unique 个 | 条 | 占比（分母=条） |
|---|---|---|---|
| `PROPER_NOUN` 缩写/专有名词/链接标签（NRE、ABI、LINQ、LOD、NPE、Sibling、CAS、DOM、ECS、FNV、ImGui、POCO、XSD、XSLT、Rebellios、Bover、SerializeNulls） | 17 | 49 | 32.0% |
| `PLACEHOLDER` 占位符（MyBehavior、OnXxx、YourType、SomeKey…） | 29 | 41 | 26.8% |
| `FAMILY_WILDCARD` 文档族名简写（`GetModified*`、`KeyPartN`、`Scaled*`、`*CoverType`…） | 16 | 20 | 13.1% |
| **`REAL_ERROR` 真缺陷** | **20** | **20** | **13.1%** |
| `FILE_NAME` .cs 文件名（AssemblyInfo） | 1 | 8 | 5.2% |
| `SUFFIX_TRUNC` 真名更长、只取片段 | 4 | 4 | 2.6% |
| `NEGATED` 页面明说「不是类型」 | 4 | 4 | 2.6% |
| `LITERAL_VALUE` 字符串/绑定路径字面值（Item10、UpperBody、SubPanel…） | 4 | 4 | 2.6% |
| `SCOPE_GAP` 目录/工程里有、`.cs` 文本里查不到 | 1 | 2 | 1.3% |
| `WORD_FRAGMENT` 反引号里引用的真名词根 | 1 | 1 | 0.7% |

**噪声 133/153 条 = 86.9%**，真缺陷 20/153 条 = 13.1%。

### 5.1 关于任务书给的 5 分类：不够用，我没有硬塞

`Suffixes`/`TypoNamespaces`/`PointDirs` 已被别的 worker 从语料修掉，当前树不再出现（§2.1），
`CAMEL_ARTIFACT` 在 M1 档归零（M0 档 253 个 unique 全部属于它）。
剩下的 miss 里，`PLACEHOLDER`（29 个）、`FAMILY_WILDCARD`（16 个）、`NEGATED`（4 个）、`LITERAL_VALUE`（4 个）
这四类共 53 个 unique，任务书的 5 类里**没有任何一个能诚实容纳它们** ——
硬塞进 `PROPER_NOUN` 会让「86.9% 是噪声」这个结论看起来像「86.9% 是专有名词」，反而掩盖问题。
**分类表扩到 10 类是实测结果，不是偷懒。**

### 5.2 分类纠错：两条差点被误判成 REAL_ERROR 的

- `PlayerUpgradedTroops` —— `grep -w` 未命中，看着像虚构。但源码里真名是 `OnPlayerUpgradedTroops` / `PlayerUpgradedTroopsEvent`，页面取了片段 → 改判 `SUFFIX_TRUNC`。
- `FindObject` —— 源码里只有 `FindObjectHolder` → `SUFFIX_TRUNC`。
- 对照组：`ISaveTypeSerializer`、`HourlyTickHero` 等 `grep -rl` 也命中 **0 个文件**，才是真 `REAL_ERROR`。

「源码里没有」不能直接等于「页面错了」—— 页面可能引用了真名的片段。

### 5.3 SUFFIX_TRUNC 单列（按 Boss 指示，与 CAMEL_ARTIFACT 不同源）

| unique | 源码里的真名 | 页面/提取拿到的 |
|---|---|---|
| `BallistaBolt` | `AirFrictionBallistaBolt`（枚举成员） | 去掉 `AirFriction` 前缀 |
| `NetworkHelper` | `MissionNetworkHelper` | 去掉 `Mission` 前缀 |
| `FindObject` | `FindObjectHolder` | 去掉 `Holder` 后缀 |
| `PlayerUpgradedTroops` | `OnPlayerUpgradedTroops` / `PlayerUpgradedTroopsEvent` | 去掉 `On` 前缀与 `Event` 后缀 |

同源但只在 M0 出现的还有 `AddAppDependencyResult` ← 源码声明 `AddAppDependencyResult_t`（下划线被 `[A-Za-z0-9]` 截断），已由阴性对照 TYPES 形态实测坐实。

### 5.4 SCOPE_GAP：证据域缺口

`AutoGenerate` 报 miss，但 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.AutoGenerate` **目录真实存在**（含 3+ 个 `.cs`），
只是这些 `.cs` 声明的是**另一个**命名空间 `TaleWorlds.MountAndBlade.GauntletUI.AutoGenerated`。
→ 这把尺的证据域只有「`.cs` 文件的文本」，**看不见目录名、`.csproj`、资源名**。
这一条是「页面可能对、尺报错」，属于尺的错，不是页面的错。

---

## 6. 结论：**删除**

三选一里选**删除**，理由按重要性排序：

1. **它宣称的能力不存在。** 文件头写「抽取页面里 PascalCase 标识符…逐个 grep」，
   但 97 个 M1 miss 里 **`asType` 判定为「源码里声明过的类型」的是 0 个**。
   一把自称反查类型名的尺，在真实语料上**没有一次命中过类型**。
2. **判别力不达标且无法靠调参达标。** 四档全部阴性 6–14/20（要求 ≤2）。
   M2 已经把否定句/路径关键词试过了：阴性 **6/20 → 6/20，一分没降**。
   M3 的白名单能把真实语料刷成 100% 精确率，但阴性对照仍是 6/20 —— **白名单只记忆、不泛化**。
   阴性对照存在的意义就是测泛化；它在泛化维度上直接判了 M3 死刑。
3. **留着比没有更糟。** 现在它每次报 `missing=N`，读的人无法判断 N 里有多少真缺陷。
   本次实测：**N=430 里只有 20 条是真缺陷（4.7%）**；M1 口径下 **N=153 里只有 20 条（13.1%）**。
   「本批未新增误报」这句话在这把尺上根本无法判定 —— 因为分子分母都是噪声。
   不知道噪声占比时，一个稳定的 `missing=0` 也可能是尺坏了（M0 在我的 camel 诊断页上就稳定报 4/4）。

### 6.1 设计前提的问题（不只是参数没调好）

任务书列的两个缺陷我都复现了，但**第三个更根本**：

> **它把「页面上出现了一个 PascalCase 字符串」等同于「页面声称存在这个类型」。**

散文里的 PascalCase token 绝大多数是：占位符、文档族名简写、缩写、字段/方法名、字符串字面值、
被页面自己否定的名字、目录名。这把尺没有「声明锚点」概念，所以无法把它们区分开 ——
**不是把正则调得更聪明就能解决，需要改判定对象**（例如只认「`class X` / `X 类` / `typeof(X)` /
类型签名表头」这类带类型上下文的 token），那是重写，不是调参。

### 6.2 删除时请一并保留的东西

**20 处真缺陷是真的，别跟着尺一起扔。** 明细（unique，各 1 页）：

| unique | 页面 | 性质 |
|---|---|---|
| `HourlyTickHero` | `api/campaign/CampaignEvents.md` | 页面写 `public override void HourlyTickHero(Hero hero)`，源码无此方法 |
| `HourlyTickHeroEvent` | 同上 | 真名应为 `HourlyTickEvent` 家族 |
| `OnPlayerStartRecruitmentEvent` | 同上 | 真名 `OnPlayerStartRecruitment(CharacterObject)` |
| `OnPlayerTraitChangedEvent` | 同上 | 同族 |
| `OnMissionStateActivatedEvent` | 同上 | 同族 |
| `OnCharacterPortraitPopUpOpenedEvent` | 同上 | 真名 `OnCharacterPortraitPopUpOpened(CharacterObject)` |
| `EndCaptivationDetail` | 同上 | 同族 |
| `InventoryOpenedEvent` | `api/core-extra/EventBase.md` | 页面写 `public class InventoryOpenedEvent : EventBase`，源码无此类 |
| `PlayerClanChanged` | `api/campaign/CampaignBehaviorBase.md` | 页面称 `Clan.PlayerClanChanged` |
| `MilitiaParty` | `api/campaign/Settlement.md` | 页面称可转型到 `MilitiaParty` |
| `Locatable` | `api/campaign/Settlement.md` | 页面称「三个 `Locatable` 相关的静态方法」 |
| `ISaveTypeSerializer` | `api/save-system/SaveableFieldAttribute.md` | 页面称序列化走该接口 |
| `DynamicHash` / `StaticHash` | `api/core-extra/BodyProperties.md` | 页面给的 `GetHashCode` 公式用了源码里不存在的操作数名（真码是 `EqualityComparer<DynamicBodyProperties>.Default.GetHashCode(...)`） |
| `IsMale` | `api/mission/Agent.md` | 页面称与 `IsFemale` 对应的性别属性，源码无 `IsMale` |
| `GetMissionCombatDifficulty` | `api/mission/Mission.md` | 页面表格列出该辅助方法，源码无 |
| `OnPostDisplayMissionTick` | `api/mission/MissionBehavior.md` | 页面把它写进生命周期时序，源码无此 hook |
| `OnRemoveLayerEvent` | `api/gui/ScreenBase.md` | 源码真名 `OnLayerRemovedEvent` |
| `TradeItem` | `api/core-extra/TradeItemComponent.md` | 页面称「名字叫 Food，类型是 TradeItem」，真名 `TradeItemComponent` |
| `WorkshopWorkshops` | `api/campaign/Campaign.md` | 页面自己都标注了「实际名 `Workshops`」 |

`CampaignEvents.md` 一个页面占 7 条，且是**同一个系统性错误**：给事件名批量加了 `Event` 后缀。

### 6.3 如果 Lead 决定不删（我认为不可，但给出边界）

只有一种用法是安全的：**当「人工标注的候选生成器」，不当门禁**，且必须配套：

- 只跑 **M1 口径**（词边界），不要用现状 M0；
- 输出**必须**附「本批 N 条中已标注为噪声 X 条」；
- 白名单必须**每次由当批人工标注结果重新生成**，不得跨批沿用（§4.1 已证明跨批不泛化）；
- 结论句只能说「本批新增 N 条候选，已逐条标注 M 条为真缺陷」，**不能说「未新增误报」**。

---

## 7. 复现命令

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io

# C1 索引等价性（已知答案对照）
node tools/_v146_prose_name_ruler.mjs --selftest
# -> selftest: 72/72 agree  tokens=201335

# A/B/阈值表 + 真实语料快照（造页在 %TEMP%，跑完自删）
node tools/_v146_ruler_fixtures.mjs
# -> clean proof / positive proof / 四档敏感性表 / ctx_M* 落盘

# 真实语料逐条分类（漏标或多标都 exit 2）
node tools/_v146_ruler_classify.mjs M1

# 查某个 id 在真实语料里的全部出现行
node tools/_v146_ruler_show.mjs HourlyTickHero PlayerUpgradedTroops

# 生成每个 unique miss 的机器可核对证据
node tools/_v146_ruler_evidence.mjs M1

# C2：M0 档 ≡ 原脚本（同一快照逐页逐 id diff，见 §3）
```

### 7.1 产出文件（全部在 `tools/`，`content/` 零改动）

| 文件 | 作用 |
|---|---|
| `_v146_prose_name_ruler.mjs` | 四档口径 + 一次性词表索引。同一份 104 页快照上：原脚本 **152,989 ms** vs 本脚本 M1 档 **2,241 ms**（68×，因为原脚本对每个标识符重扫 128MB blob，本脚本只建一次 201335 个极大 token 的集合）。`--selftest` 做 C1 |
| `_v146_ruler_fixtures.mjs` | 造 20 阳性 + 20 阴性 + 4 CAMEL 诊断页（仓库外），跑四档，出敏感性表 |
| `_v146_prose_name_probe.mjs` | 导出词表 / 真实声明类型名 |
| `_v146_ruler_labels_M1.mjs` | **人工标注结果**（97 个 unique 的分类） |
| `_v146_ruler_classify.mjs` | 标注完整性核对 + 分类统计 |
| `_v146_ruler_evidence.mjs` | 每个 miss 的机器可核对证据（asType / truncOfType / camelOfMember…） |
| `_v146_ruler_show.mjs` | 查某 id 的全部出现行 |
| `_v146_prose_name_allow.txt` | M3 用的白名单（77 条，由真实语料分类反推，**非人工调参**） |
| `_v146_ruler_result.json` / `_v146_ruler_labeled_M1.json` | 全部原始数字 |

### 7.2 复现注意事项
- 造页目录用 `os.tmpdir()`，跑完 `fs.rmSync` 自删；本次已确认 `%TEMP%` 下无 `v146-ruler-*` 残留。
- `content/` 由多个 worker 并发修改，**绝对数字每次跑都会漂**；本报告所有表格内部自洽（同一进程、同一份快照内跑完四档）。
- 未 `git add` / `git commit`。
