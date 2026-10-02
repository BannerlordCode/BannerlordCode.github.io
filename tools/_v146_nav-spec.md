# v1.4.6 树状导航补丁规格

配套文件：`tools/_v146_nav-spec.json`（机读版，含逐条 patch、route 清单与边清单）、`tools/_v146_nav-check.mjs`（校验脚本）。
作者：worker-10。**共享文件（`config.toml` / `templates/**` / `data/**` / `content/_index.md` / `content/versions/**`）我没有改，只在这里给出补丁。**

---

## 0. 先搞清楚：导航到底由谁生成

这是解「跳过去回不来 / 404」的根。把生成链路搞错，补丁就会打错地方。

| 界面元素 | 生成者 | v1.4.6 需要改吗 |
| --- | --- | --- |
| 版本下拉（顶栏） | `templates/partials/topnav.html` 遍历 `nav.meta.versions`，逐个检查 `nav.routes['/<v>/<lang>/']` 是否存在；跳转目标来自 `data/relkey_map.json` | **模板不改**；改 `meta.versions` + `relkey_map.json` |
| 侧边栏 | `templates/partials/sidebar.html` → `templates/macros/sidebar.html`。只渲染满足两个条件的 route：`node.parent == /<v>/<lang>/` **且** `node.group` 命中 `nav.groups` 里的某个 group；子项来自 `node.children` 与 `section-tree.byRoute[...].subsections` | **模板不改**；改 `navigation.json` 的 `group`/`label` |
| 面包屑 | `templates/macros/breadcrumb.html` 用 Zola `page.ancestors` + `get_section()` | **模板不改**；前提是每一层祖先都有真实 `_index.md` |
| 父级 / 上一页 / 下一页 | `templates/macros/page-navigation.html` 直接读 Zola `parent_section.pages` | **模板不改**；页面存在即自动成立 |
| 侧边栏结构数据 | `data/section-tree.json` 由 `tools/generate-section-tree.mjs` **从 content 生成** | 重新生成，**不要手改** |
| 侧边栏 route 数据 | `data/navigation.json` 由 `tools/_regen_nav.mjs` 从 section-tree 生成，`label` / `group` 从旧条目继承 | 重新生成 + 补 `group` |
| 跨版本同页映射 | `data/relkey_map.json` 由 `tools/generate-relkey-map.mjs` 生成，其 `VERSIONS` **硬编码** | 改一行常量 + 重新生成 |

关键结论：**新增一个版本不需要动任何模板**。所有版本差异都在 `data/*.json` 和 `content/` 里。这是这份规格最重要的一句话。

---

## 1. 补丁清单（按应用顺序）

### P0 · `content/v1.4.6/_index.md`（必须先存在）

**已由 worker-10 建好**（语言选择器 + 站点导航），但它是整棵树的承重墙：

`templates/macros/breadcrumb.html` 对 `/v1.4.6/zh/architecture/sdk-overview/` 会遍历 `page.ancestors` = `v1.4.6` → `v1.4.6/zh` → `v1.4.6/zh/architecture`，并对每个祖先调 `get_section(path=...)`。**没有 `content/v1.4.6/_index.md`，第一个祖先就拿不到 section，面包屑里的版本链接 404**——也就是说 v1.4.6 的**每一页**面包屑都会坏。同理 `nav.routes['/v1.4.6/']` 也不会存在。

> 其它版本都有这个文件：`content/v1.3.0/_index.md`、`content/v1.3.15/_index.md`、`content/v1.4.5/_index.md`。

### P1 · `data/navigation.json` → `meta.versions`

```diff
- "versions": ["v1.3.15", "v1.3.0", "v1.4.5"]
+ "versions": ["v1.3.15", "v1.3.0", "v1.4.5", "v1.4.6"]
```

为什么：版本下拉与侧边栏 `root_key` 计算都卡在 `nav.meta.versions`。少了 v1.4.6，该版本所有 URL 都会掉进侧边栏的 `Site Navigation` 兜底分支，下拉里也永远看不到 v1.4.6。
稳定性：`tools/_regen_nav.mjs` 会原样复制 `existing.meta`，所以这条改动不会被重新生成冲掉。

### P2 · `data/section-tree.json` → 重新生成

```bash
node tools/generate-section-tree.mjs
```

不要手改这个文件。生成后应新增这些 route（checker 会验）：`/v1.4.6/`、`/v1.4.6/zh/`、`/v1.4.6/en/`、`/v1.4.6/{zh,en}/api/`、`/v1.4.6/{zh,en}/architecture/`。
在重新生成之前，`node tools/audit-navigation.mjs` 会以 `missing section route /v1.4.6/...` 失败。

### P3 · `data/navigation.json` → 重新生成后补 `group` / `label`

```bash
node tools/_regen_nav.mjs
```

**这一步有一个必须知道的坑**：`_regen_nav.mjs` 里是 `group: ex?.group ?? null`。v1.4.6 是新 route，`ex` 不存在 ⇒ `group = null`。而 `templates/macros/sidebar.html` 只渲染 `node.group` 命中 group 的 route，**所以重新生成完，v1.4.6 在侧边栏里一个字都不会出现**（症状非常容易误判成「模板坏了」）。

补 group / label（完全对齐 v1.4.5 现状）：

```js
const setGroup = (route, group, label) => {
  const node = nav.routes[route];
  if (!node) return console.warn('missing route', route);
  node.group = group;
  if (label) node.label = label;
};

setGroup('/v1.4.6/', 'start', { zh: 'Bannerlord v1.4.6', en: 'Bannerlord v1.4.6' });
setGroup('/v1.4.6/zh/', 'start', { zh: 'Bannerlord v1.4.6', en: 'Bannerlord v1.4.6' });
setGroup('/v1.4.6/en/', 'start', { zh: 'Bannerlord v1.4.6', en: 'Bannerlord v1.4.6' });
for (const lang of ['zh', 'en']) {
  setGroup(`/v1.4.6/${lang}/api/`, 'api', { zh: 'API 参考', en: 'API Reference' });
  setGroup(`/v1.4.6/${lang}/architecture/`, 'architecture', { zh: '架构总览', en: 'Architecture' });
  // 只有在确实要建这些分区时才补，否则不要凭空加 route
  setGroup(`/v1.4.6/${lang}/guide/`, 'guide', { zh: '入门指南', en: 'Getting Started Guide' });
  setGroup(`/v1.4.6/${lang}/native/`, 'native', { zh: '原生接口', en: 'Native Reference' });
  setGroup(`/v1.4.6/${lang}/xml-reference/`, 'xml', { zh: 'XML 参考', en: 'XML Reference' });
}
```

对照实测（现有 `navigation.json`）：`/v1.4.5/`、`/v1.4.5/zh/`、`/v1.4.5/en/` 的 group 都是 `start`；`/v1.4.5/zh/api/` 是 `api`；`/v1.4.5/zh/architecture/` 是 `architecture`。

> 为什么只给这几条设 group：侧边栏顶层只枚举 `parent == root_key` 的 route，也就是「版本根 + 语言根 + 四个一级分区」。模块分区（`/v1.4.6/zh/api/core/` 等）是通过 `/v1.4.6/zh/api/` 的 `children` 渲染的，它们自己的 `group` 为 `null` 无害——v1.4.5 的 119 条 route 也都是 `null`。

### P4 · `tools/generate-relkey-map.mjs` → 加一行 root

```diff
- const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5'];
+ const VERSIONS = ['v1.3.15', 'v1.3.0', 'v1.4.5', 'v1.4.6'];
```

```bash
node tools/generate-relkey-map.mjs
```

为什么：`data/relkey_map.json` 决定版本下拉跳「同一页」还是跳「版本首页」。少了 v1.4.6，你在任意类页切版本都会被甩回 v1.4.6 落地页——这就是用户说的「跳过去回不来」的典型成因。

### P5 · `content/_index.md` → 版本表加一行

在 `| **v1.4.5** | … |` 那行之后插入：

```markdown
| **v1.4.6** | 最新源码快照（平铺模块布局）/ Newest source snapshot (flat module layout) | [查看文档 / View Docs](./v1.4.6/) |
```

然后：

```bash
node tools/generate-section-indexes.mjs
```

`<!-- BEGIN SECTION INDEX -->` 区块是机器生成的，`./v1.4.6/` 会自动进站点栏目列表；手写版本表那一段要我们自己加。

### P6–P11 · 不需要改的文件（写清楚为什么不改，避免有人重复劳动）

| 文件 | 结论 |
| --- | --- |
| `templates/macros/sidebar.html` | **不改**。宏从 `nav.meta.versions` 推导 `root_key`，从 `nav.groups` 渲染分组；P1+P3 之后 v1.4.6 与 v1.4.5 行为完全一致。若这里需要改，说明数据层被写死了，那才是要修的 bug。 |
| `templates/partials/sidebar.html` | **不改**。纯 dispatcher（import 宏 + 传 `current_url`/`lang`），没有任何版本相关逻辑。 |
| `templates/partials/topnav.html` | **不改**。所有下拉都遍历 `nav.meta.versions` 并以 `nav.routes[route_key] is defined` 为准。唯一硬编码版本的是 v1.3.15 的 native-source 条目，那是有意为之。 |
| `templates/macros/breadcrumb.html` | **不改**。走 Zola ancestors，页面存在即正确；P0 保证祖先链不断。 |
| `templates/macros/page-navigation.html` | **不改**。父级与 prev/next 全部由 `parent_section.pages` 在渲染期算出，天然双向。**不要往页面正文里手写 prev/next**，会和它打架。 |
| `config.toml` | **不改**。没有版本列表、没有按版本菜单、没有重定向表；`[slugify] paths = "off"` 已经保住 `api/<module-slug>/` 目录名；`taxonomies` 为空。新增版本不需要任何配置项。 |

### P12 ·（可选）`tools/class-version-diff.mjs` 支持 1.4.6

```diff
  const ROOTS = {
    '1.3.0':  'bannerlord-1.3.0',
    '1.3.15': 'bannerlord-1.3.15',
    '1.4.5':  'bannerlord-1.4.5',
+   '1.4.6':  'bannerlord-1.4.6',
  };
```

（另外两处硬编码的 `['1.3.0','1.3.15','1.4.5']` 输出循环也要加，否则表格里不会出现 1.4.6 列。）
不做这一条，`content/v1.4.6/*/architecture/version-delta.md` 里「签名级差异未核实」这句就只能一直挂着。

---

## 2. 链接深度规则（这是「404 / 跳过去回不来」的第二个坑）

路由自带尾斜杠，所以**页面的 URL 目录就是它自己的目录**：

| 页面类型 | URL | 指向同分区兄弟 | 指向父分区 | 指向子分区 |
| --- | --- | --- | --- | --- |
| `_index.md` | `/v1.4.6/zh/architecture/` | `./module-map` | `../`（= `/v1.4.6/zh/`） | — |
| 叶子页 | `/v1.4.6/zh/architecture/module-map/` | `../version-delta` | `../`（分区）<br>`../../`（语言根） | `../../api/core/` |

**硬规则：不要用超过自身路由深度的 `../`。** `tools/audit-links.mjs` 的 `fileToRoute()` 返回的 route **没有前导斜杠**（`dir + '/'`），所以多一层 `../` 会跳出 content 根并被判为 BROKEN——哪怕浏览器能正常解析。实测踩到过：`content/v1.4.6/zh/_index.md`（深度 2）写 `../../../versions/` 被 audit 判死，改成 `../../versions/` 才通过。

各页面该用的深度：

| 页面 | 到 `/versions/` | 到 `/v1.4.5/...` | 到另一语言 |
| --- | --- | --- | --- |
| `v1.4.6/_index.md`（深度 1） | `../versions/` | `../v1.4.5/` | `../en/` |
| `{lang}/_index.md`（深度 2） | `../../versions/` | `../../v1.4.5/zh/` | `../en/` |
| `{lang}/architecture/_index.md`（深度 3） | `../../../versions/` | `../../../v1.4.5/zh/architecture/` | `../../en/architecture/` |
| `{lang}/architecture/<page>.md`（深度 4） | `../../../../versions/` | `../../../../v1.4.5/zh/architecture/` | `../../../en/architecture/<page>/` |

---

## 3. 双向可达清单（checker 逐条验）

`tools/_v146_nav-spec.json` 的 `required_edges` 里逐条列了 29 条边，全部通过：父→子、子→父（同分区 `../`）、同级兄弟互链、语言互链、跨版本互链。

页面正文里不写 prev/next——`templates/macros/page-navigation.html` 会在渲染时自动给出父级与前后页（Zola 分区排序），手写只会造成双份且不同步。

---

## 4. 验收

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io

node tools/generate-section-tree.mjs --check     # section-tree 与 content 一致
node tools/audit-navigation.mjs                  # 路由树 / 双向边审计
node tools/_v146_nav-check.mjs                   # 本规格的 route + edge + 本批页面链接
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs
```

`node tools/_v146_nav-check.mjs` 判定标准：

- `ROUTES_MISSING=0`
- `EDGES_MISSING=0`
- `OWNED_LINKS_BROKEN=0`
- `OWNED_LINKS_PENDING` 允许 > 0（指向并行 worker 的 `api/**`），但必须在交接清单里列出；等 api 批次落地后应为 0

**交付时的实测数字**（`content/v1.4.6` 已包含并行 worker 的 api 批次）：

```
node tools/_v146_nav-check.mjs
  ROUTES_MISSING=0  EDGES_MISSING=0
  OWNED_LINKS_OK=201  OWNED_LINKS_PENDING=0  OWNED_LINKS_BROKEN=0

AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs
  FILES=9465  TOTAL_LINKS=76180
  BROKEN_LINKS=0  RESOLVE_NEITHER=0  FILES_WITH_BROKEN=0
```

期间出现过树级 BROKEN_LINKS 38166，全部落在并行 worker 的 `api/**` 批次里；worker-10 的 11 个页面全程为 0（用 `_v146_nav-check.mjs` 逐页验证，不受并行写入影响）。
另：`content/v1.4.6/_index.md` 被另一位 agent 改写过，其中一条 `../v1.3.15/architecture/version-delta/` 是断链，已修为 `../v1.3.15/zh/architecture/version-delta/`。

---

## 5. 回滚

P1/P3 是往 `navigation.json` 加条目，P2 是重新生成 `section-tree.json`。回滚 = 删掉 `/v1.4.6/` 相关条目、把 `meta.versions` 改回三项，再跑一次 P2+P3 的生成命令即可。P0/P5 是新增文件，删除即回滚。`content/v1.4.6/**` 与其它版本目录无交集，不会牵连 v1.3.15 / v1.4.5 的任何内容。