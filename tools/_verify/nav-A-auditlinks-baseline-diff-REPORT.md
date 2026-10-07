# nav-A 报告：audit-links 全站审计 + 冻结基线差因定位

## 0. 测量时点与前提（先读）

| 项 | 值 |
|---|---|
| 测量时点 | **merge 前**，HEAD `92df55b69904a402bca09aa573d8df6ac88a089e`（boss-3/lead-13 补充前提） |
| 分叉状态 | 本地领先 origin/main `cc39aaf811` **68** 个 commit、落后 **4** 个（`git rev-list --left-right --count origin/main...HEAD` = `4 68`，已实测核对） |
| 审计跑动时间戳 | 2026-10-07T04:37:23Z 与 2026-10-07T04:42:15Z（两次读数完全一致） |
| 工作区状态 | 3510 个脏文件（并发线正在写）；涉事两文件 mtime 均为 2026-10-05 07:35/07:36，跨两次审计无变化 |
| 平台口径 | Windows（大小写不敏感文件系统），与部署目标（Linux/CI）数字会不同，见 §4 |

---

## 1. audit-links 全站审计读数（AUDIT_MODE=url，仓库自带 CI 门禁）

命令：`node tools/audit-links.mjs`（原始输出存 `nav-A-auditlinks-raw-output.txt` / `-2nd.txt`）

| 计数器 | 值 |
|---|---|
| FILES | 39027 |
| TOTAL_LINKS | 148932 |
| AUDIT_MODE | url |
| **BROKEN_LINKS** | **1**（exit code=1，CI 门禁当前为红） |
| FILES_WITH_BROKEN | 1 |
| RESOLVE_OK_URL | 148745 |
| RESOLVE_OK_FILE | 110044 |
| RESOLVE_OK_EITHER | 148746 |
| RESOLVE_OK_BOTH | 110043 |
| RESOLVE_URL_ONLY | 38702 |
| RESOLVE_FILE_ONLY | 1 |
| **RESOLVE_NEITHER** | **0** |

**RESOLVE_NEITHER 语义**：一条 href 在 URL 口径（按 Zola clean-URL route 解析）与文件口径（按 .md 文件目录解析）**都**解析不到任何页面文件。当前 = 0，即不存在「两种口径都落空」的链接。

**交叉验算（读数自洽）**：
- 非自链链接总数 = 148746（nav-verify 侧 `TOTAL_LINKS_INTERNAL=148746`、`SELF_LINKS=186`；audit-links 的 TOTAL_LINKS=148932 把 186 条自链也算进分母）。
- `RESOLVE_OK_URL(148745) + RESOLVE_FILE_ONLY(1) + RESOLVE_NEITHER(0) = 148746` ✓
- `BROKEN_LINKS(url 口径) = RESOLVE_NEITHER + RESOLVE_FILE_ONLY = 0 + 1 = 1` ✓

---

## 2. 唯一断链的归因

| 项 | 值 |
|---|---|
| 来源文件 | `content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md` |
| 行号 | **33** |
| href | `[SellItemsAction](./SellItemsAction)` |
| URL 口径解析 | route `v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction/` + `./SellItemsAction` → `v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction/SellItemsAction` → 找 `…/SellGoodsForTradeAction/SellItemsAction.md` 与 `…/SellGoodsForTradeAction/SellItemsAction/_index.md`，**均不存在** → 真 404 |
| 文件口径解析 | `v1.4.5/zh/api/campaign-ext/` + `./SellItemsAction` → `content/v1.4.5/zh/api/campaign-ext/SellItemsAction.md`，**存在**（6767 bytes）→ 故 RESOLVE_FILE_ONLY=1 就是这一条 |
| 违反规则 | **L1b**（`_NAV-ARCHITECTURE.md` §4.1.1：叶子页 → 同桶兄弟必须写 `../Foo`；§4.1.0 推导式：叶子页 route 比目录深一层，`./` 会多一层） |
| 正确写法 | `../SellItemsAction`（同文件另两条链接 `../`、`../../campaign/` 均合规） |
| 症状归属 | §4.3「多一层」bug 家族中**多出来的那一层恰好不存在**的形态 —— 属「真 404」，断链口径能报（与「静默落错层」形态不同，那种本报看不见） |
| 引入归因 | **未提交改动**：`git show HEAD:…SellGoodsForTradeAction.md` 无此链接；`git diff` 显示该行为新增（`+` 行）。即由当前工作区并发批次引入，非 HEAD 存量 |

---

## 3. 与冻结基线逐条 diff

diff key = `from \t href \t route`。工具读数（`node tools/nav-verify.mjs --ci-compat --baseline …`）与本线独立集合 diff（自写只读脚本）**两处算法结果一致**：

| 基线 | 数据行 | 去重键（BASELINE_ROWS） | NEW_BROKEN | RESOLVED |
|---|---|---|---|---|
| `tools/_nav-baseline-broken-links.tsv`（任务指定） | 197 | 173 | **1** | 173 |
| `tools/_nav-baseline-frozen-186.tsv`（§3.1 第二轮正式锚） | 186 | 162 | **1** | 162 |

**子集判定：否。** 当前 broken 集合（1 条）**不是**任一基线的子集。唯一 NEW_BROKEN 条目：

```
v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md  |  ./SellItemsAction  |  v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction/SellItemsAction
```

**RESOLVED 说明**：197 基线的 173 个去重键当前全部已解（186 基线的 162 个亦然）——这是基线冻结以来其他线修复的成果，不是本线动作；按 `_NAV-BASELINE.md` §0/§3.3，总数漂移由并发写解释，验收看逐条 diff。

**基线文件效力提醒**：`_NAV-BASELINE.md` §3.3 已宣告 197 文件**作废**（第二轮锚是 frozen-186）。本线按任务指定对 197 做了 diff，同时对 frozen-186 补做，两者 NEW_BROKEN 同为 1、条目相同。

---

## 4. 工具口径边界（如实记录，非本次发现）

1. **Windows 大小写不敏感兜底掩盖 5 处**：`existsSync` 不区分大小写，3 对大小写错配链接（`../MBEvent`、`../../engine/Options`、`../../Campaign`×3，共 5 次出现）在本机被判「链通」。在 Linux/GitHub Pages 上它们会 404。故 **BROKEN_LINKS=1 是 Windows 口径的下限**，部署真相 ≥ 6（1 + 5）。详见 `_NAV-BASELINE.md` §4.10。
2. **静默错层不可见**：audit-links 只抓 url 口径真 404；「`./Foo` 恰好落到另一个真实页」的错页形态（§4.1.0/§4.3）两道门禁都看不见。
3. **自链计入分母**：audit-links 的 TOTAL_LINKS 含 186 条自链（`#`、`./`、空），解析计数前跳过；引用分母时须声明口径。

---

## 5. 结论与建议（本线全程只读，未改任何文件）

1. 全站断链 **1 条**（Windows 口径），CI 门禁 audit-links 当前 exit 1。
2. 该条为叶子页 `./SellItemsAction` 违反 L1b，一行修复：改 `../SellItemsAction`。
3. **归属提醒**：该链接属**未提交改动**（并发线正在写此文件，全仓 3510 脏文件），修复应交给该批次所有者；本线未动手。
4. 相对两份冻结基线 **NEW_BROKEN=1**（非子集），RESOLVED 173/173、162/162。
5. merge 落地后需按 boss 安排重测（本次读数为 merge 前）。
