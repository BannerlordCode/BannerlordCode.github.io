# nav-K：open-defects.tsv 登记报告（需改类页正文的缺陷）

> **测量时点：merge 后，HEAD 55658f4d9d0450335f2b12e160bfb8c9b37fbc57**（种子读取与初验时点，`git log --oneline -1` 实测）。
> **复核时点：HEAD b46a3cfdc5**（登记落盘后逐条复核工作态，发现 nav-A 唯一缺陷已被并发修复，见 §2.1）。
> 任务：导航树完整性线 worker K。本线修复轮只改导航结构（索引页链接与数量、父/前/后/相关生成数据），凡需改类页正文的缺陷一律登记到 `tools/_verify/open-defects.tsv`，交正文线处理。
> 硬约束遵守：本轮只写 `tools/_verify/open-defects.tsv` 与 `tools/_verify/nav-K-*`，未改 `content/` 下任何文件（对 `content/` 的全部命令均为只读）。

## 1. 登记结果总览

| 指标 | 值 | 命令来源 |
|---|---|---|
| 新增条目（最终落盘） | **18** | `awk -F'\t' 'NF==3 && $1 !~/^#/' tools/_verify/open-defects.tsv \| wc -l` → 22（含既有 4 条） |
| 文件内数据行总数 | 22 | 同上 |
| 去重 | 18 条两两不同；与既有 4 条无路径+缺陷重叠 | `awk -F'\t' 'NF==3 && $1 !~/^#/{print $1"\|"$2}' … \| sort \| uniq -d` → 空 |
| 种子覆盖 | nav-A 1 条（测量时点成立，复核时点已被修复 → 撤下，见 §2.1）+ nav-C 18 条（全部登记） | 见 §2 |

## 2. 抽取来源与命令

### 2.1 nav-A（种子 1 条 → 登记后已被修复，最终不落盘）

来源：`tools/_verify/nav-A-broken-links.tsv`（1 数据行）+ `tools/_verify/nav-A-auditlinks-baseline-diff-REPORT.md`。

```bash
cd /c/WorkSpace/Bannerlord/BannerlordCode.github.io
git log --oneline -1   # 55658f4d9d0450335f2b12e160bfb8c9b37fbc57（测量时点）
cat tools/_verify/nav-A-broken-links.tsv   # 1 数据行
sed -n '33p' content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md
# 测量时点读数：[SellItemsAction](./SellItemsAction) —— 断链成立（违反 L1b；全站审计 BROKEN_LINKS=1 即此条）
ls content/v1.4.5/zh/api/campaign-ext/SellItemsAction.md   # 目标存在（6767 bytes，报告 §2）
```

**复核时点（HEAD b46a3cfdc5）读数**：

```bash
sed -n '33p' content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md
# 当前读数：[SellItemsAction](../SellItemsAction) —— 已修复为正确形态
git diff content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md | grep SellItemsAction
# +`SellGoodsForTradeAction` 是「…」它与 [SellItemsAction](../SellItemsAction) 不同…（未提交的工作区修复）
```

处置：该缺陷在登记落盘前已被并发修复（工作区未提交改动），**从登记表撤下**（`grep -c 'SellGoodsForTradeAction' tools/_verify/open-defects.tsv` → 0），避免正文线重复修复。登记表只保留当前真实存在的缺陷。

### 2.2 nav-C（18 条 → 全部登记）

来源：`tools/_verify/nav-C-footer-plaintext.tsv`（107 数据行，其中 `是否符合=否` 18 条）+ `tools/_verify/nav-C-footer-plaintext.md`。

```bash
awk -F'\t' 'NR>1 && $6=="否"' tools/_verify/nav-C-footer-plaintext.tsv | wc -l   # 18
# 工作态逐条复核（node 精确匹配「反引号+./」子串，行号与 nav-C TSV 一致）：
node -e "…l.includes('\`./')…"   # 每文件恰好 6 处：zh 两文件 59×2/119/131×2/134；en 59×2/119/198×2/201
# 目标存在性核验：
for t in GiveItemAction SellItemsAction DefaultItems PartySizeLimitModel PartyWageModel CampaignEvents; do ls content/v1.3.15/zh/api/campaign-ext/$t.md; done   # 6/6 OK
# v1.4.5/zh 同上 6/6 OK
# v1.4.5/en：campaign-ext 桶仅 GiveItemAction/SellItemsAction/CampaignEvents 存在（3/6）；
#            DefaultItems/PartySizeLimitModel/PartyWageModel 在 campaign 桶（ls content/v1.4.5/en/api/campaign/$t.md 3/3 OK）
```

18 条全部是叶子页正文（「何时调用」段）的纯文本路径陈述 `` `./X/` ``，应为 `../X/`（§4.1.0 推导式：叶子页 route 比目录深一层，`./` 多一层 → 静默 404）。其中 v1.4.5/en 的 3 条（DefaultItems / PartySizeLimitModel / PartyWageModel）叠加目标桶错误——目标类实际在 campaign 桶，正确写法应为 `../../campaign/<类名>`，修前需确认意图。

## 3. 条目数分组（最终落盘 18 条）

### 3.1 按归属线

| 归属线 | 条目数 |
|---|---|
| v1.3.15/zh 正文线 | 6 |
| v1.4.5/zh 正文线 | 6 |
| v1.4.5/en 正文线 | 6 |
| **合计** | **18** |

命令来源：`awk -F'\t' 'NF==3 && $1 !~/^#/ {print $3}' tools/_verify/open-defects.tsv | sort | uniq -c`（新增部分）。

### 3.2 按版本树

| 版本树 | 条目数 |
|---|---|
| v1.3.15 | 6 |
| v1.4.5 | 12（zh 6 + en 6） |
| **合计** | **18** |

命令来源：同上按 `$1` 首段分组统计。

### 3.3 按缺陷形态

| 形态 | 条目数 |
|---|---|
| 叶子页纯文本路径陈述 `` `./X/` `` 应为 `../X/`（静默 404） | 18 |
| 其中叠加目标桶错误（en 3 条，修前需确认意图） | 3（含在 18 内） |

## 4. 去重与撤下说明

- 去重键：路径 + 缺陷一句话（含行号与目标类名）。
- 18 条新增两两不同；与文件内既有 4 条（AgentDecideKilledOrUnconsciousModel 引用缺失 .cs / DISPATCH-TEMPLATE 作废警示 / N-frozen / GainRenownAction 超派单清单）无路径+缺陷重叠（`uniq -d` 校验通过）。
- **撤下 1 条**：nav-A 的 `SellGoodsForTradeAction.md:33 ./SellItemsAction` 断链——测量时点（HEAD 55658f4d9d）成立并登记，复核时点（HEAD b46a3cfdc5）发现工作态已修复为 `../SellItemsAction`（未提交改动），故撤下。
- nav-C TSV 中 59 条「符合」与 30 条「非导航（排除）」不登记（非缺陷）。

## 5. 待补清单（尚未落盘的种子文件）

| 文件 | 缺什么 | 处置 |
|---|---|---|
| `tools/_verify/nav-D-index-counts.*` | D 线索引页数量违规明细未落盘。已落盘的 `nav-D-scan.json`（HEAD=55658f4d9d，539 页全为 `_index.md`）显示其违规全为索引页级（missingLinks 288 / missingInBlock 663 / noMarker 428 / markerDup 3 / claims 138）→ 按规则不登记；若 D 的数量违规中有必须改正文的条目，待其落盘后补登 | 待 D 线落盘后复核 |
| `tools/_verify/nav-F-case-mismatch.*` | 大小写错配扫描未落盘 | 待 F 线落盘后复核（若在类页正文则登记） |
| `tools/_verify/nav-G-wrong-layer.*` | 落错层扫描未落盘 | 待 G 线落盘后复核（若在类页正文则登记） |
| `tools/_verify/nav-I-scope-decisions.md` | 范围裁定（哪些算正文）未落盘 | 待 I 线落盘后复核 |
| `tools/_verify/nav-J-orphan-fixes.md` | J 的 open-defects entries 一节未落盘 | 待 J 线落盘后复核 |

团队聊天复核（`team_read`，limit 30）：截至复核时点仅有本 worker 派单消息，D/F/G/I/J 线无新消息。

## 6. 被排除的条目（索引页可修，不登记）

- `nav-D-scan.json` 全部 539 页均为 `_index.md`（`node -e` 统计 non-_index pages: 0），其 missingLinks / missingInBlock / noMarker / markerDup / claims 违规全部落在索引页——属本线（导航结构）可修范围，不登记。
- nav-C TSV 中 30 条「非导航（排除）」（源码引用 `.cs:行号` 24 条、引擎域值 `../../` 6 条）——非导航路径陈述，非缺陷，不登记。
- nav-C TSV 中 59 条「符合」——合规，不登记。
- nav-A 报告 §1 中 RESOLVE_OK_* 等计数器——非缺陷，不登记。

## 7. 文件

- `tools/_verify/open-defects.tsv`：3 列制表符分隔（完整相对路径 / 缺陷一句话 / 归属线），表头 3 行注释保留，数据行 22（既有 4 + 新增 18）。文件当前为未跟踪状态（`git status --short` → `??`，与既有 4 条同形态），未提交——提交时机由 lead 决定。
