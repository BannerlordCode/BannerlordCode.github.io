# nav-C：类页页脚纯文本路径陈述扫描报告

> **测量时点：merge 前，HEAD 92df55b699**（本地 68 ahead / 4 behind origin/main cc39aaf811，merge 尚未落地；merge 后需重测）。
> 任务来源：boss-3/lead-13 event #9320 / #9638。范围：`content/**/api/**/*.md`，排除 `_index.md`。只读扫描，未改任何 content/ 文件。
> 配套 TSV：`tools/_verify/nav-C-footer-plaintext.tsv`（107 行，列：文件相对路径 / 行号 / 当前路径陈述 / 所在位置 / 正确层数 / 是否符合）。

## 1. 扫描分母（页数）

**38,274 张类页**（`content/**/api/**/*.md`，排除 `_index.md`；`CLASS_PAGES_SCANNED=38274`）。

## 2. 命中总数

**107 条**反引号包裹的路径陈述（`BACKTICK_PATH_HITS=107`）。判据：路径被反引号包住、以 `./` 或 `../` 开头、且不是 markdown 链接——正是断链审计与 orphan 口径都看不见的「纯文本路径陈述」类。

## 3. 不符数

**18 条不符**（占命中 16.8%），全部是**叶子页写 `./X`**——§4.1.0 的「多一层」静默 404。其余：符合 59 / 非导航 30。

## 4. 按版本树 / 桶分布

| 版本树 / 桶 | 命中 | 不符 | 非导航 |
|---|---|---|---|
| v1.3.0 / campaign-ext | 4 | 0 | 0 |
| v1.3.15 / campaign-ext | 25 | 6 | 0 |
| v1.4.5 / campaign | 10 | 0 | 0 |
| v1.4.5 / campaign-ext | 31 | 12 | 0 |
| v1.4.5 / core-extra | 36 | 0 | 30 |
| v1.4.5 / mission-ext | 1 | 0 | 0 |
| **合计** | **107** | **18** | **30** |

按版本树：v1.3.0 ×4、v1.3.15 ×25、v1.4.5 ×78。**v1.4.6 / v1.4.7 / v1.5.3 命中 0**——包括 v1.4.6 的 16 张事故页（见 §7 阳性对照）。

## 5. 18 条不符明细

列：文件相对路径 / 行号 / 当前路径陈述 / 所在位置 / 正确层数 / 是否符合。

| # | 文件相对路径 | 行号 | 当前路径陈述 | 所在位置 | 正确层数 | 是否符合 |
|---|---|---|---|---|---|---|
| 1 | `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 59 | `` `./GiveItemAction/` `` | 叶子 | 1 层（`../GiveItemAction/`） | 否 |
| 2 | `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 59 | `` `./SellItemsAction/` `` | 叶子 | 1 层（`../SellItemsAction/`） | 否 |
| 3 | `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 119 | `` `./DefaultItems/` `` | 叶子 | 1 层（`../DefaultItems/`） | 否 |
| 4 | `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 131 | `` `./PartySizeLimitModel/` `` | 叶子 | 1 层（`../PartySizeLimitModel/`） | 否 |
| 5 | `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 131 | `` `./PartyWageModel/` `` | 叶子 | 1 层（`../PartyWageModel/`） | 否 |
| 6 | `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 134 | `` `./CampaignEvents/` `` | 叶子 | 1 层（`../CampaignEvents/`） | 否 |
| 7 | `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 59 | `` `./GiveItemAction/` `` | 叶子 | 1 层（`../GiveItemAction/`） | 否 |
| 8 | `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 59 | `` `./SellItemsAction/` `` | 叶子 | 1 层（`../SellItemsAction/`） | 否 |
| 9 | `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 119 | `` `./DefaultItems/` `` | 叶子 | 1 层（`../DefaultItems/`） | 否 |
| 10 | `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 131 | `` `./PartySizeLimitModel/` `` | 叶子 | 1 层（`../PartySizeLimitModel/`） | 否 |
| 11 | `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 131 | `` `./PartyWageModel/` `` | 叶子 | 1 层（`../PartyWageModel/`） | 否 |
| 12 | `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 134 | `` `./CampaignEvents/` `` | 叶子 | 1 层（`../CampaignEvents/`） | 否 |
| 13 | `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 59 | `` `./GiveItemAction/` `` | 叶子 | 1 层（`../GiveItemAction/`） | 否 |
| 14 | `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 59 | `` `./SellItemsAction/` `` | 叶子 | 1 层（`../SellItemsAction/`） | 否 |
| 15 | `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 119 | `` `./DefaultItems/` `` | 叶子 | 1 层（`../DefaultItems/`） | 否 |
| 16 | `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 198 | `` `./PartySizeLimitModel/` `` | 叶子 | 1 层（`../PartySizeLimitModel/`） | 否 |
| 17 | `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 198 | `` `./PartyWageModel/` `` | 叶子 | 1 层（`../PartyWageModel/`） | 否 |
| 18 | `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 201 | `` `./CampaignEvents/` `` | 叶子 | 1 层（`../CampaignEvents/`） | 否 |

**判定依据**（§4.1.0 推导式 + L1b）：叶子页 `content/a/b/Foo.md` 的 route 是 `/a/b/Foo/`（比目录深一层）。指向同目录叶子 `Foo` 须写 `../Foo`；写 `./Foo` 会解析到 `/a/b/Foo/Foo/`——多一层。

**为什么必然 404（数学证明）**：`content/` 下不存在任何以类名命名的目录（`find content -type d -name ItemRoster` / `-name GiveItemAction` 零命中），所以叶子页里的任何 `./X` 路径陈述都注定落空。这正是「跳着跳着就 404」的纯文本同类缺陷，且断链审计与 orphan 口径都看不见它（它不是 markdown 链接）。

**目标存在性核验**：
- v1.3.15/zh 与 v1.4.5/zh：6 个目标全部是同桶真实兄弟页（`ls` 逐一核实）→ 把 `./` 改 `../` 即修复。
- v1.4.5/en：仅 3 个目标在 campaign-ext（`GiveItemAction`/`SellItemsAction`/`CampaignEvents`）；`DefaultItems`/`PartySizeLimitModel`/`PartyWageModel` 实际在 **campaign 桶**（`find content/v1.4.5/en` 核实）→ 这 3 条（#15–#17）除层数错误外还叠加「目标桶错误」，正确写法应是 `../../campaign/<类名>`（若意图指 campaign 桶的那一版），修时需先确认意图。

## 6. 非导航陈述的排除说明（30 条）

以下 30 条**不是导航路径陈述**，不计入不符，但登记在 TSV 里供抽读：

| 类别 | 条数 | 实例 | 排除理由 |
|---|---|---|---|
| 源码引用 | 24 | `` `../../campaign/Campaign.cs:612-629` ``、`` `../../campaign/MenuHelper.cs:350/385` `` | 指向**游戏源码文件**（`.cs:行号`），是对代码位置的引用，不参与站点路由；读者不会把它当站点导航点击 |
| 引擎/API 基准路径返回值 | 6 | `` `../../` ``（`ApplicationPlatform.md` ×6，en/zh 各 3） | 描述 `BasePath.Name` 的**返回值**（`/app0/`、`/` 或 `../../`，见 `BasePath.cs:12-28`），是引擎域值而非导航路径；出现在 `core-extra/ApplicationPlatform.md` 的「消费者」段，语境明确 |

## 7. 阳性对照证据（证明扫描器不是「什么都没扫到」）

**v1.4.6 的 16 张事故页反引号形态已消失**——`_INTEGRATION-GATES.md` §1.1 记载：v1.4.6 一批 16 张类页的页脚写「父级导览位于版本根 `../../../`」，而叶子页到桶索引实际是 `../`。当前实测：

```bash
grep -rn '父级\|返回\|导览\|版本根\|语言首页' content/ --include="*.md" | grep -v '_index.md' | grep '/api/' | grep -E '`(\.\./)+[^`]*`'
# → 零条「父级导览位于版本根 ../../../」形态
```

那 16 张页（`Campaign.md`、`Hero.md`、`Settlement.md`、`Agent.md`、`Mission.md` 等）现在页脚是 markdown 链接形态 `- 父级：[campaign API 目录导览](../)`，反引号路径陈述 0 残留。**这证明扫描器扫到了东西、且事故形态已被修复**——若扫描器失灵（什么都没扫到），v1.4.6 的分布行不会以「0 命中」的形式精确对应事故页的修复状态。

**检测器自证（已知坏样本 / 已知良品）**：

| Fixture | 内容 | 命中 | 结论 |
|---|---|---|---|
| `tools/_verify/_navC-fixture/PositiveControl.md` | 事故原文「父级导览位于版本根 `` `../../../` ``」 | **1** | 检测器在已知坏样本上开火 |
| `tools/_verify/_navC-fixture/NegativeControl.md` | 修复后形态 `- 父级：[campaign API 目录导览](../)` | **0** | 检测器在已知良品上不误报 |

事故文本由 commit `035f00cf5d` 引入（`git log -S '父级导览位于版本根'` 核实）。

## 8. 证据（命令原文）

```bash
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io
git rev-parse HEAD   # 92df55b69904a402bca09aa573d8df6ac88a089e（merge 前）

# 扫描器（只读 content/）：tools/_verify/_navC-scan.mjs
node tools/_verify/_navC-scan.mjs > tools/_verify/_navC-scan-out.tsv
# CLASS_PAGES_SCANNED=38274 / BACKTICK_PATH_HITS=107

# 分类器（按 §4.1 推导式逐条判定）：tools/_verify/_navC-classify.mjs
node tools/_verify/_navC-classify.mjs > tools/_verify/_navC-classify-out.tsv
# TALLY={"符合":59,"不符":18,"非导航":30} BAD_COUNT=18 BAD_PAGES=3

# 正式 TSV（Boss 指定列格式）：tools/_verify/nav-C-footer-plaintext.tsv
# 列：文件相对路径 / 行号 / 当前路径陈述 / 所在位置（叶子/索引）/ 正确层数 / 是否符合
# 18 否 / 59 是 / 30 非导航（排除）

# 阳性对照：
node -e "..."   # PositiveControl.md: hits=1 / NegativeControl.md: hits=0

# v1.4.6 事故形态残留检查：零命中（见 §7）

# 叶子类名目录不存在（./X 必然 404 的证明）：
find content -type d -name "ItemRoster" -o -type d -name "GiveItemAction"   # 零命中
```

## 9. 边界与说明

1. **`_index.md` 不在任务范围**（任务书明确排除）。范围外登记：`_index.md` 里有 33 条反引号路径，未判定、未修。
2. **检测器边界**：本扫描只认「反引号包裹 + 以 `./` 或 `../` 开头」的路径陈述；不覆盖「不带反引号的裸路径」或「方括号外的纯文本 URL」。意图分类基于行内关键词（同桶/跨桶/跨语言/源码/域值），18 条不符的意图均经上下文人工确认（如「优先用 `./GiveItemAction/`」明确指同桶兄弟）。
3. **merge 后重测**：本读数基于 HEAD 92df55b699（merge 前）。release 线 merge 落地后，分母与命中集可能变化，需重跑 `_navC-scan.mjs`。

## 10. 建议

- 18 条不符的修复：v1.3.15/zh 与 v1.4.5/zh 的 12 条机械替换 `./` → `../`；v1.4.5/en 的 6 条中 3 条（#13、#14、#18）同上，3 条（#15–#17）需先确认意图再定 `../` 还是 `../../campaign/`。
- 修复后重跑本扫描器应得 不符=0；建议把 `_navC-scan.mjs` + `_navC-classify.mjs` 纳入集成门禁 §2 作为第 5 条（纯文本路径陈述检查），因为现有 audit-links/orphan 口径对这一类完全失明。
