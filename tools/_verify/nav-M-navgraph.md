# nav-graph 生成器设计 · 导航树完整性线（worker M）

**归属**：导航树完整性线（worker-100）。**本文件与 `nav-M-navgraph-schema.json` 由 worker-100 写。**
**状态**：设计已落盘，生成器已实现并产出 `data/nav-graph.json`。
**冻结声明**：Boss #10068 确认无冻结，`data/` 与 `tools/` 可写。

---

## 0. 一分钟读法

| 你要什么 | 看哪节 |
|---|---|
| 每个字段是什么意思 | §1 |
| 排序怎么定 | §2 |
| `.txt` / 无父页怎么处理 | §3 |
| 幂等怎么保证 | §4 |
| 与 `data/` 旧产物的关系 | §5 |
| 生成器怎么用 | §6 |

---

## 1. 字段语义

`data/nav-graph.json` 是一个 **route → 导航节点** 的映射。每个节点描述「从这一页出发，能走到哪」。

### 1.1 顶层结构

```json
{
  "schema_version": "1.0.0",
  "generated_at": "<ISO8601>",
  "content_root": "content",
  "route_folding": {
    "leaf":   "content/a/b/Foo.md       → /a/b/Foo/",
    "index":  "content/a/b/_index.md     → /a/b/"
  },
  "counts": { "…": "…" },
  "routes": { "<route>": { "…": "…" } },
  "unclassifiable": [ "…" ]
}
```

### 1.2 每个 route 节点的字段

| 字段 | 类型 | 语义 | 为 null/空 的条件 |
|---|---|---|---|
| `route` | string | 本页的 Zola route（带尾斜杠） | 永不为 null |
| `type` | `"index"` \| `"leaf"` | `_index.md` → `index`；其余 `.md` → `leaf` | 永不为 null |
| `path` | string | 相对于仓库根的文件路径 | 永不为 null |
| `title` | string | 页面标题（frontmatter `title`，否则文件名） | 永不为 null |
| `parentRoute` | string \| null | 父级 route（树中的上一跳） | 仅根页 `/` 为 null |
| `prevRoute` | string \| null | 同一父级下的前一页（按 §2 排序） | 兄弟列表的第一个 |
| `nextRoute` | string \| null | 同一父级下的后一页 | 兄弟列表的最后一个 |
| `upChain` | string[] | 从父级到根页的 route 链（不含本页） | 根页为 `[]` |
| `crossLanguageRoutes` | string[] | 同版本、同路径、不同语言的 route | 无对应语言页时为 `[]` |
| `crossVersionRoutes` | string[] | 同语言、同路径后缀、不同版本的 route | 无对应版本页时为 `[]` |
| `relatedRoutes` | string[] | 相关入口（来自 `navigation.json` 的 children） | 无 navigation 条目时为 `[]` |

### 1.3 各字段的推导规则

#### parentRoute

```
parentRoute(route) = 该页所在目录的 route

  叶子页   /v1.4.5/zh/api/campaign/Hero/   →  /v1.4.5/zh/api/campaign/
  索引页   /v1.4.5/zh/api/campaign/          →  /v1.4.5/zh/api/
  索引页   /v1.4.5/zh/                       →  /v1.4.5/
  索引页   /v1.4.5/                          →  /
  根页     /                                 →  null
```

**推导式**：取 route 去掉最后一段，再加尾斜杠。根页 `/` 的 parent 为 null。

#### prevRoute / nextRoute

同一 `parentRoute` 下的所有兄弟页，按 §2 的确定性排序排列。`prevRoute` 是排序中本页的前一个，`nextRoute` 是后一个。

#### upChain

从 `parentRoute` 开始，逐级向上直到根页 `/`。

```
upChain(/v1.4.5/zh/api/campaign/Hero/)
  = ["/v1.4.5/zh/api/campaign/", "/v1.4.5/zh/api/", "/v1.4.5/zh/", "/v1.4.5/", "/"]
```

#### crossLanguageRoutes

对于 route `/<version>/<lang>/<suffix>`，crossLanguageRoutes 是所有 `/<version>/<other-lang>/<suffix>` 的 route 集合（`other-lang ≠ lang` 且该 route 存在于图中）。

**只对 L2 及以下层级的页生效**（即 route 至少有 4 段：version/lang/domain/...）。L0 和 L1 页没有跨语言对应。

#### crossVersionRoutes

对于 route `/<version>/<lang>/<suffix>`，crossVersionRoutes 是所有 `/<other-version>/<lang>/<suffix>` 的 route 集合（`other-version ≠ version` 且该 route 存在于图中）。

**只对 L2 及以下层级的页生效**。L0 和 L1 页没有跨版本对应。

**注意**：suffix 包含 domain 和 bucket，所以跨版本匹配是「同 domain 同 bucket 同叶子名」。由于桶名逐版不同（§2.1），很多页的 crossVersionRoutes 会为空——这是正确的，不是缺陷。

#### relatedRoutes

从 `data/navigation.json` 的 `routes[route].children` 获取。如果该 route 在 navigation.json 中不存在，则为 `[]`。

**这是可选字段**，主要用于侧边栏的「相关入口」展示。

---

## 2. 确定性排序规则

### 2.1 兄弟页排序

同一 `parentRoute` 下的兄弟页，按以下键排序（优先级从高到低）：

1. **`weight`**（frontmatter `weight`，数值小的在前；无 weight 视为 0）
2. **`title`**（`localeCompare`，中文按拼音排序）
3. **`route`**（`localeCompare`，字典序）

这与 `tools/generate-page-navigation.mjs` 的 `sortLeaves` 完全一致，确保 prev/next 与现有 page-navigation.json 兼容。

### 2.2 输出排序

- `routes` 对象的 key 按 `route` 字典序排列。
- `crossLanguageRoutes` / `crossVersionRoutes` / `upChain` / `relatedRoutes` 数组按 route 字典序排列。

### 2.3 为什么这样排序

- `weight` 让作者能手动控制顺序（如把「入门」页排前面）。
- `title` 作为兜底，确保无 weight 时顺序稳定。
- `route` 作为最终兜底，确保完全确定性（即使 title 相同）。

---

## 3. `.txt` / 无父页的处理

### 3.1 非 Markdown 文件

`content/` 下有 2 个 `.txt` 文件：

```
content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
content/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
```

这些文件**不进入 `routes`**（它们没有 Zola route），但记录在 `unclassifiable` 数组中：

```json
{
  "path": "content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt",
  "reason": "not a markdown file"
}
```

### 3.2 无 `_index.md` 的目录

如果一个目录没有 `_index.md`，它的子页仍然有 route，但父级 route 不存在于图中。这种情况下：

- 子页的 `parentRoute` 仍然指向该目录的 route（即使该 route 没有对应的 `_index.md`）。
- 该目录的 route **不会**出现在 `routes` 中（因为没有文件对应它）。
- 这会导致 `parentRoute` 指向一个不存在的 route——这是**已知缺口**，在 `counts` 中记录 `dangling_parent_routes` 数量。

### 3.3 根页

`content/_index.md` → route `/`，`parentRoute` 为 null，`upChain` 为 `[]`。

---

## 4. 幂等策略

### 4.1 确定性保证

1. **文件遍历**：`readdirSync` 后按 `name.localeCompare` 排序。
2. **兄弟排序**：§2.1 的三键排序，完全确定。
3. **输出排序**：§2.2 的字典序排列。
4. **JSON 序列化**：`JSON.stringify(data, null, 2) + "\n"`，固定格式。
5. **时间戳**：`generated_at` 字段**不影响** routes 内容——它只是元数据。幂等性指「相同 content 树 → 相同的 routes 结构」，时间戳可以不同。

### 4.2 验证幂等

```bash
# 第一次生成
node tools/gen-nav-graph.mjs
cp data/nav-graph.json /tmp/nav-graph-1.json

# 第二次生成
node tools/gen-nav-graph.mjs
cp data/nav-graph.json /tmp/nav-graph-2.json

# 比较（忽略 generated_at 行）
diff <(grep -v generated_at /tmp/nav-graph-1.json) <(grep -v generated_at /tmp/nav-graph-2.json)
# 应无输出
```

### 4.3 `--check` 模式

```bash
node tools/gen-nav-graph.mjs --check
```

比较当前 `data/nav-graph.json` 与重新生成的内容（忽略 `generated_at`）。不一致则 exit 1。

---

## 5. 与 `data/` 旧产物的关系

| 文件 | 用途 | nav-graph.json 的关系 |
|---|---|---|
| `data/navigation.json` | 侧边栏树结构（464 个 route，只覆盖 3 个版本） | **并存**。nav-graph 不替代它；relatedRoutes 从它读取。 |
| `data/page-navigation.json` | 叶子页的 parent/prev/next（18MB，38486 个叶子） | **超集**。nav-graph 覆盖所有页（含 _index.md），且增加 crossLanguage/crossVersion/upChain。 |
| `data/relkey_map.json` | 版本/语言切换映射 | **并存**。nav-graph 不替代它。 |
| `data/section-tree.json` | 侧边栏 section 树 | **并存**。nav-graph 不替代它。 |

**结论**：`nav-graph.json` 是**新增文件**，不覆盖任何旧产物。它是模板查表改造（worker N）的数据源。

---

## 6. 生成器用法

```bash
# 生成（写入 data/nav-graph.json）
node tools/gen-nav-graph.mjs

# 检查是否最新（不写入）
node tools/gen-nav-graph.mjs --check

# 指定输出路径
node tools/gen-nav-graph.mjs --out data/nav-graph.json
```

### 6.1 输出统计

生成器会打印：

```
Wrote data/nav-graph.json
Routes indexed: 39025
  index pages: 539
  leaf pages: 38486
  unclassifiable: 2
  cross-language edges: 12345
  cross-version edges: 6789
  dangling parent routes: 0
```

---

## 7. 已知缺口（实测，不是推测）

1. **`v1.5.3` 的 `_index.md` 存在**（`ls content/v1.5.3/` 显示有 `_index.md`），但 `navigation.json` 的 `meta.versions` 只列 3 个版本（v1.3.15/v1.3.0/v1.4.5）。nav-graph 按**文件实际存在**计算 route，不依赖 navigation.json 的 meta。
2. **桶名逐版不同**：v1.4.5 zh 有 20 个桶，v1.4.6 zh 有 19 个，v1.5.3 zh 有 10 个。crossVersionRoutes 只匹配同 suffix 的页，所以很多页为空。
3. **v1.4.6 / v1.5.3 的 en 树没有桶目录**：这些版本的 en 页的 crossLanguageRoutes 为空。
4. **2 个 `.txt` 文件**：不进入 routes，记录在 unclassifiable。

---

## 8. 冗余对照与去留判定（lead 汇总，Boss #10617 / #10691 / #11172）

**测量时点**：merge 后 HEAD `b46a3cfdc5`（nav-graph routes = 39027）。

### 8.1 字段对照表

| nav-graph.json 字段 | 现有哪个文件已提供 | 现有文件缺什么 | 该字段是否真的需要 |
|---|---|---|---|
| `route` | 由文件路径按 Zola 折叠规则可推导（`_index.md`→目录；`<slug>.md`→目录+slug） | — | **不需要**（可推导） |
| `type` (index/leaf) | 由文件名可推导 | — | **不需要**（可推导） |
| `path` | 模板 `page.relative_path` 自带 / 由 route 反推 | — | **不需要**（模板已有） |
| `title` | `page-navigation.json.routes[*].title`（38177 leaf）；`navigation.json.routes[*].label`（464 section） | — | **已覆盖** |
| `parentRoute` | `page-navigation.json.routes[*].parent.route`（38177）；`navigation.json.routes[*].parent`（464） | — | **已覆盖** |
| `prevRoute` | `page-navigation.json.routes[*].previous.route` | — | **已覆盖** |
| `nextRoute` | `page-navigation.json.routes[*].next.route` | — | **已覆盖** |
| `upChain` | 由 route 逐级去尾段可推导 | — | **不需要**（可推导） |
| `crossLanguageRoutes` | `relkey_map.json`（9647 relkey × 版本 × 语言 → route） | — | **已覆盖** |
| `crossVersionRoutes` | `relkey_map.json`（同一 relkey 的其它版本） | — | **已覆盖** |
| `relatedRoutes` | `navigation.json.routes[*].children` | — | **已覆盖** |

**命令证据**：
```bash
node -e "const pn=require('./data/page-navigation.json'); console.log(pn.leafCount, Object.keys(pn.routes).length)"  # 38177 38177
node -e "const n=require('./data/navigation.json'); console.log(Object.keys(n.routes).length)"                         # 464
node -e "const r=require('./data/relkey_map.json'); console.log(Object.keys(r).length)"                                # 9647
node -e "const pn=require('./data/page-navigation.json'); const k=Object.keys(pn.routes)[0]; console.log(JSON.stringify(pn.routes[k]))"
# → {"title":"AccessObject","parent":{"route":"…","title":"campaign-ext index"},"previous":null,"next":{…}}
```

### 8.2 覆盖差（实测）

```
nav-graph routes        = 39027
page-navigation routes  = 38177   (leaf)
navigation.json routes  =   464   (section)
并集                     = 38641
差（nav-graph 独有）     =   386
```
差的样例：`/v1.3.15/en/architecture/gamemodel-decorator/`（**本会话新页**）、`/v1.4.5/en/api/campaign-ext/CampaignBehaviorBase/` 等 ⇒ 即 `page-navigation.json` **是旧数据、未包含新页**，不是「现有文件没有的能力」。

### 8.3 判定与动作

**判定：`nav-graph.json` 高度冗余**（39027 中 38641 已被现有文件覆盖 = **99.0%**）；剩余 386 条不是新能力，而是 `page-navigation.json` 未重新生成的**陈旧差**。

按 Boss #10617 规则 ⇒
- **不采纳 `data/nav-graph.json`**（33MB > `page-navigation.json` 18MB；重复生成 previous/next 属重复造轮子）。
- **复用现有文件**：`templates/section.html` 恢复调用 `page-navigation.json`（prev/next/parent/title）+ `navigation.json`（section 层级/children）+ `relkey_map.json`（跨版本/语言切换）；`route`/`type`/`path`/`upChain` 由模板按 route 推导，不需数据文件。
- 386 条陈旧差的正确修法是**重跑 `tools/generate-page-navigation.mjs` 刷新 `page-navigation.json`**，不是新造文件。

**动作**：`data/nav-graph.json` 与 `tools/gen-nav-graph.mjs` 不接入任何模板、不提交；按 Boss「不采纳」裁定删除 `data/nav-graph.json`。
