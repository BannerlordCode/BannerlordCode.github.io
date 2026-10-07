# nav-C 报告：类页页脚纯文本路径陈述扫描

> **测量时点：merge 后，HEAD 55658f4d9d0450335f2b12e160bfb8c9b37fbc57**（merge commit `55658f4d9d` 已落地；本报告为 post-merge 重测读数）。
> 任务来源：boss-3/lead-13 event #9320 / #9638 / #9731（「类页页脚纯文本路径陈述」独立 worker 单元）。
> 范围：`content/**/api/**/*.md`，排除 `_index.md`（按任务书）。只读扫描，未改任何 content/ 文件。
>
> **post-merge 相对 merge 前的计数变化**（merge 前 HEAD 92df55b699 → merge 后 HEAD 55658f4d9d）：
>
> | 指标 | merge 前 | merge 后 | 变化 |
> |---|---|---|---|
> | 类页分母 | 38,274 | 38,274 | 0 |
> | 命中总数 | 107 | 107 | 0 |
> | 不符 | 18 | 18 | 0 |
> | 符合 | 59 | 59 | 0 |
> | 非导航 | 30 | 30 | 0 |
> | 3 张 ItemRoster 页仍命中 | 是（18 条全在 ItemRoster） | 是（同样 3 页、同样行号、同样 `./X` 陈述） | 无变化 |
>
> merge 带入的 fdd540f17e 只改了 `content/v1.4.5/en/api/campaign/KingdomDecisionMapNotification.md`（campaign 桶，非 campaign-ext），未触及 ItemRoster 页——18 条不符原样保留。

## 1. 结论

| 判定 | 条数 | 说明 |
|---|---|---|
| **不符** | **18** | 全部是叶子页写 `./X`（§4.1.0 的「多一层」静默 404），集中在 **3 张 ItemRoster 页** |
| 符合 | 59 | 同桶兄弟 `../X` ×28、跨桶 `../../<桶>/X` ×20、跨语言 `../../../<lang>/api/...` ×10、深度说明 ×1 |
| 非导航 | 30 | 源码引用 `../../<桶>/<文件>.cs:行` ×24、域值（BasePath 返回值）`../../` ×6 |
| **合计命中** | **107** | 分母：38,274 张类页 |

**类页页脚一类（§1.1 门槛）当前为 0**：v1.4.6 的 16 张事故页（「父级导览位于版本根 `../../../`」）已修成 markdown 链接，反引号形态在全树 0 残留（关键词+反引号组合扫描零命中）。

## 2. 18 条不符明细（全部 `./X` → 应为 `../X`）

| 文件 | 行 | 现状 | 应为 |
|---|---|---|---|
| `content/v1.3.15/zh/api/campaign-ext/ItemRoster.md` | 59,59,119,131,131,134 | `./GiveItemAction/` `./SellItemsAction/` `./DefaultItems/` `./PartySizeLimitModel/` `./PartyWageModel/` `./CampaignEvents/` | `../<同名>` |
| `content/v1.4.5/zh/api/campaign-ext/ItemRoster.md` | 59,59,119,131,131,134 | 同上 | `../<同名>` |
| `content/v1.4.5/en/api/campaign-ext/ItemRoster.md` | 59,59,119,198,198,201 | 同上 | `../<同名>`（注意下方边界） |

**为什么必然 404（数学证明）**：叶子页 `content/a/b/Foo.md` 的 route 是 `/a/b/Foo/`（§4.1.0：叶子页 route 比目录深一层）。`./X` 解析为 `/a/b/Foo/X/`——而 `content/` 下**不存在任何以类名命名的目录**（`find content -type d -name ItemRoster` 等零命中），所以叶子页里的任何 `./X` 路径陈述都注定落空。这正是「跳着跳着就 404」的纯文本同类缺陷，且断链审计与 orphan 口径都看不见它（它不是 markdown 链接）。

**目标存在性核验**：
- v1.3.15/zh 与 v1.4.5/zh：6 个目标全部是同桶真实兄弟页（`ls` 逐一核实）→ 把 `./` 改 `../` 即修复。
- v1.4.5/en：仅 3 个目标在 campaign-ext（`GiveItemAction`/`SellItemsAction`/`CampaignEvents`）；`DefaultItems`/`PartySizeLimitModel`/`PartyWageModel` 实际在 **campaign 桶**（`find content/v1.4.5/en` 核实）→ 这 3 条除层数错误外还叠加「目标桶错误」，正确写法应是 `../../campaign/<类名>`（若意图指 campaign 桶的那一版）。

## 3. 证据（命令原文）

```bash
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io
git rev-parse HEAD   # 92df55b69904a402bca09aa573d8df6ac88a089e（merge 前）

# 扫描器（只读 content/）：tools/_verify/_navC-scan.mjs
node tools/_verify/_navC-scan.mjs > tools/_verify/_navC-scan-out.tsv
# 输出：CLASS_PAGES_SCANNED=38274 / BACKTICK_PATH_HITS=107

# 分类器（按 §4.1 推导式逐条判定）：tools/_verify/_navC-classify.mjs
node tools/_verify/_navC-classify.mjs > tools/_verify/_navC-classify-out.tsv
# 输出：TALLY={"符合":59,"不符":18,"非导航":30} BAD_COUNT=18 BAD_PAGES=3

# 正式 TSV（文件、行号、路径、所在位置、意图、正确写法、判定、依据）：
# tools/_verify/_navC-final.tsv（107 行数据 + 表头）

# 阳性对照（已知坏样本 = v1.4.6 事故原文；已知良品 = 修复后形态）：
node -e "..."   # PositiveControl.md: hits=1（开火）/ NegativeControl.md: hits=0（不误报）

# v1.4.6 事故形态残留检查：
grep -rn '父级\|返回\|导览\|版本根\|语言首页' content/ --include="*.md" | grep -v '_index.md' | grep '/api/' | grep -E '`(\.\./)+[^`]*`'
# → 零条「父级导览位于版本根 ../../../」形态；仅余合法用法（同桶 ../X、跨桶 ../../campaign/X、域值 ../../）

# 叶子类名目录不存在（./X 必然 404 的证明）：
find content -type d -name "ItemRoster" -o -type d -name "GiveItemAction"   # 零命中
```

阳性对照 fixture 与输出：`tools/_verify/_navC-fixture/PositiveControl.md`（事故原文「父级导览位于版本根 `../../../`」→ 命中 1）、`NegativeControl.md`（修复后 markdown 链接形态 → 命中 0）。事故文本由 commit `035f00cf5d` 引入（`git log -S` 核实）。

## 4. 边界与说明

1. **非导航陈述不计入不符**：24 条 `../../<桶>/<文件>.cs:行` 是对游戏源码的引用（如 `../../campaign/Campaign.cs:612-629`），不参与站点路由；6 条 `` `../../` `` 是 `ApplicationPlatform` 描述 `BasePath` 返回值的域值。两者都不是导航路径陈述，但已登记在 TSV 里供抽读。
2. **`_index.md` 不在任务范围**（任务书明确排除）。范围外登记：`_index.md` 里有 33 条反引号路径，未判定、未修。
3. **v1.4.5/en 的 3 条叠加缺陷**：`./DefaultItems/` 等除层数错外，目标类在 campaign 桶而非 campaign-ext；修的时候要决定意图（同桶兄弟 vs 跨桶），不能机械把 `./` 改 `../`。
4. **merge 后重测**：本读数基于 HEAD 92df55b699（merge 前）。release 线 merge 落地后，分母与命中集可能变化，需重跑 `_navC-scan.mjs`。
5. **检测器边界**：本扫描只认「反引号包裹 + 以 `./` 或 `../` 开头」的路径陈述；不覆盖「不带反引号的裸路径」或「方括号外的纯文本 URL」。意图分类基于行内关键词（同桶/跨桶/跨语言/源码/域值），18 条不符的意图均经上下文人工确认（"优先用 `./GiveItemAction/`" 明确指同桶兄弟）。

## 5. 建议

- 18 条不符的修复：v1.3.15/zh 与 v1.4.5/zh 的 12 条机械替换 `./` → `../`；v1.4.5/en 的 6 条中 3 条同上、3 条需先确认意图再定 `../` 还是 `../../campaign/`。
- 修复后重跑本扫描器应得 不符=0；建议把 `_navC-scan.mjs` + `_navC-classify.mjs` 纳入集成门禁 §2 的第 5 条（纯文本路径陈述检查），因为现有 audit-links/orphan 口径对这一类完全失明。
