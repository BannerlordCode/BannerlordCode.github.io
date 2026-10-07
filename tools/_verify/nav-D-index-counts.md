# nav-D 索引计数核查报告（D2 线）

**测量时点**：merge 后，HEAD `b46a3cfdc5`（= `55658f4d9d` 的直接子提交，即 merge commit 后的 release commit）。
**工作区状态**：3405 个未提交修改（其他 worker 在制品），磁盘实测按工作区现状；v1.4.5/v1.4.7 文件数与 HEAD 提交状态一致（未受影响）。
**检测范围**：含 `<!-- BEGIN SECTION INDEX -->` marker 的 `_index.md`，共 **111** 个。
**只读**：未修改 `content/` 任何文件。

---

## 1. 命令与输出摘要

### 1.1 类 1 / 类 2 检测器

```bash
node tools/_verify/nav-D-check.mjs
```

输出摘要：
```
索引页总数（含 marker）: 111
类1（有链接无数量）: 103
类2（少列）: 32
```

检测器逻辑（`tools/_verify/nav-D-check.mjs`，只读）：
- 对每个含 marker 的 `_index.md`，提取 `BEGIN`→`END` 块，数块内指向同目录子页的链接数（`listed`）。
- 磁盘实测子页数 = 该目录 `.md` 叶子数 + 子目录 `_index.md` 数（`diskTotal`）。
- **类 2**：`listed < diskTotal`。
- **类 1**：`listed > 0` 且整页无数量措辞（正则 `\d[\d,\s]*\s*(?:个|页|pages|classes|篇|types|类页|类)\b`）。

### 1.2 阳性对照（类 3 规模声称）

```bash
# v1.4.7 入口页声称
grep -n "42 篇正文" content/v1.4.7/_index.md
# → description: "当前全树 42 篇正文与 40 个目录索引"
find content/v1.4.7 -name "*.md" -not -name "_index.md" | wc -l
# → 57

# v1.4.7 en 侧声称
grep -n "8 API class pages" content/v1.4.7/en/_index.md
# → "The English tree currently holds: 8 API class pages"
find content/v1.4.7/en/api -name "*.md" -not -name "_index.md" | wc -l
# → 23

# v1.4.7 zh 侧声称
grep -n "23 篇类页" content/v1.4.7/zh/api/_index.md
# → "中文树当前 23 篇类页"
find content/v1.4.7/zh -name "*.md" -not -name "_index.md" | wc -l
# → 28
```

---

## 2. 三类计数

| 类别 | 确认条数 | 待人工条数 | 说明 |
|---|---|---|---|
| **类 1**（有链接无数量） | **103** | 0 | 含 marker 的 111 个索引页中 103 个无数量措辞 |
| **类 2**（少列） | **32** | 0 | 列出数 < 磁盘实测子页数 |
| **类 3**（规模声称陈旧） | **3** | 0 | 阳性对照复现的 v1.4.7 三条 |

### 2.1 类 1 按树分布

| 版本 | 条数 |
|---|---|
| v1.3.0 | 29 |
| v1.3.15 | 37 |
| v1.4.5 | 31 |
| v1.5.3 | 5 |
| versions | 1 |
| **v1.4.7** | **0**（无 marker，不在检测范围） |

### 2.2 类 2 按树分布

| 版本 | 条数 |
|---|---|
| v1.3.0 | 18（en 9 + zh 9） |
| v1.3.15 | 9（en 5 + zh 4） |
| v1.4.5 | 3（en 2 + zh 1） |
| versions | 1 |
| 站点根 | 1 |

---

## 3. 典型样例（完整相对路径 + 当前值 / 磁盘实测 / 差异）

### 3.1 类 1 样例（有链接无数量）

| 索引页 | 列出链接数 | 磁盘子页数 | 差异 |
|---|---|---|---|
| `content/v1.3.0/en/api/campaign/_index.md` | 1355 | 1388 | 少列 33（子目录） |
| `content/v1.3.15/en/api/campaign-ext/_index.md` | 2851 | 2851 | 0（但无数量措辞） |
| `content/v1.4.5/zh/api/campaign-ext/_index.md` | 3688 | 3688 | 0（但无数量措辞） |

抽查确认：`content/v1.3.0/en/api/campaign/_index.md` 全文无「N 个/页」措辞（`grep -c` = 0）。

### 3.2 类 2 样例（少列）

| 索引页 | 列出 | 磁盘 | 差异 | 成因 |
|---|---|---|---|---|
| `content/_index.md` | 0 | 7 | -7 | 根索引 marker 块内无链接，磁盘有 7 个子目录 `_index.md` |
| `content/versions/_index.md` | 18 | 27 | -9 | 少列 9 个版本目录 |
| `content/v1.4.5/en/_index.md` | 3 | 5 | -2 | 少列 2 个子目录 |
| `content/v1.4.5/zh/api/core/_index.md` | 2 | 5 | -3 | 少列 3 个叶子 |
| `content/v1.3.0/en/api/campaign/_index.md` | 1355 | 1388 | -33 | marker 块只列叶子，少列 33 个子目录 `_index.md` |
| `content/v1.3.15/en/architecture/_index.md` | 6 | 10 | -4 | 少列 4 个叶子 |

### 3.3 类 3 样例（规模声称陈旧）

| 页面 | 声称 | 磁盘实测 | 差异 |
|---|---|---|---|
| `content/v1.4.7/_index.md` | 42 篇正文 | 57（56 类页 + 1 GAPS.md） | -15 |
| `content/v1.4.7/en/_index.md` | 8 API class pages | 23（en/api 类页） | -15 |
| `content/v1.4.7/zh/api/_index.md` | 23 篇类页 | 28（zh 类页） | -5 |

**额外发现（存在性矛盾，非规模声称）**：`content/v1.4.7/en/_index.md` 声称「There is no `save-system` directory on the English side at all」，但磁盘 `content/v1.4.7/en/api/save-system/` 有 3 个类页（`SaveManager.md`、`SaveContext.md`、`LoadContext.md`）。

---

## 4. 阳性对照结果

### 4.1 复现成功（检测器会开火）

| 前序发现 | 复现结果 | 状态 |
|---|---|---|
| v1.4.7 正文 42→磁盘 57 | ✅ 入口页声称 42，磁盘 57 | 复现 |
| v1.4.7 英文类页 8→23 | ✅ en/_index.md 声称 8，磁盘 en/api 23 | 复现 |
| v1.4.7 zh 类页 23→28 | ✅ zh/api/_index.md 声称 23，磁盘 zh 28 | 复现 |

### 4.2 无法复现（前序发现已过时或测错）

| 前序发现 | 核实结果 | 状态 |
|---|---|---|
| v1.4.5 声称 9384→磁盘 9336 | 入口页声称「zh 树 9 384 个类页」（千分位空格），磁盘实测 zh 类页 = **9384**，一致 | ❌ 不复现 |
| v1.4.5 声称 7129→磁盘 7121 | 入口页声称「en 树 7 129 个」，磁盘实测 en 类页 = **7129**，一致 | ❌ 不复现 |
| v1.4.5 声称 21→20 | 入口页声称「zh 侧 20 个桶」，磁盘实测 zh/api 子目录 = **20**，一致 | ❌ 不复现 |
| v1.4.5 桶页声称「0 页」但实际非 0 | `git grep "0 页" HEAD -- content/v1.4.5/` 返回空 | ❌ 不复现 |

**结论**：v1.4.5 入口页的规模声称（9384/7129/20 桶）与当前磁盘实测**一致，不陈旧**。前序发现的 9336/7121/21/「0 页」在当前 HEAD 的 `content/` 里找不到对应声称，可能来自 merge 前的中间状态或测量误差。9336/7121 仅存在于 `tools/_legacy-nav-spec.md`（旧口径：9364 = 9384 - 20 个 `_index.md`）。

---

## 5. 已知假阳性来源

1. **全角括号**：`（zh 侧 20 个桶）` 中的全角括号可能影响链接解析（本检测器用 `[[^\]]*\]\(([^)\s]+)\)` 匹配半角括号链接，全角括号不匹配，无影响）。
2. **千分位空格**：「9 384」「7 129」用空格而非逗号分节，正则 `\d[\d,\s]*` 可匹配，但纯数字搜索（`grep 9384`）会漏掉。
3. **版本号子串**：「v1.3.15」里的「15」可能被误判为数量（如「15 个」）。
4. **数字子串匹配**：搜「0 个」会匹配「20 个」「200 个」「10 个」等（实测触发）。
5. **复合句中/英作用域**：en/zh 数字混用时，检测器按整页匹配，可能把 en 的数字误判为 zh 的（本检测器按目录隔离，无此问题）。
6. **类 1 漏判**：页面有数量措辞但不是给子页的（如「17 个桶」），检测器判为「已给数量」，可能漏判真正的类 1。
7. **类 2 子目录口径**：v1.3.0 桶页 marker 块只列叶子不列子目录，检测器判为少列（33 个子目录），这是真实少列，但需人工确认是否有意为之。

---

## 6. 边界与限制

- **v1.4.7 无 marker**：v1.4.7 的索引页没有 `<!-- BEGIN SECTION INDEX -->` marker，不在类 1/类 2 检测范围内。前序发现「v1.4.7 有 6 个索引页列了内容但不给页数」无法用本检测器验证（需单独扫描无 marker 的索引页）。
- **类 3 只做了阳性对照**：未做全树规模数字扫描，只确认了 v1.4.7 的 3 条陈旧声称。全树扫描待后续。
- **工作区未提交修改**：3405 个 M 文件是其他 worker 的在制品，磁盘实测可能随时间变化。v1.4.5/v1.4.7 的文件数与 HEAD 一致，未受影响。
- **检测器脚本**：`tools/_verify/nav-D-check.mjs`（只读，可重复运行）。

---

## 7. 产出文件

- `tools/_verify/nav-D-index-counts.md`（本报告）
- `tools/_verify/nav-D-index-counts.tsv`（139 行 = 1 表头 + 103 类 1 + 32 类 2 + 3 类 3）
- `tools/_verify/nav-D-check.mjs`（检测器脚本，只读）
