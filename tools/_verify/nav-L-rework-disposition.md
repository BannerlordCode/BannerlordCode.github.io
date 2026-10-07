# NAV-L Rework Disposition — 15 项导航行为逐项处置

**测量时点：merge 后，HEAD b46a3cfdc5**（release 线 worker-71 交付 NAV-REWORK-QUEUE.md 后）
**Worker：L（导航树完整性线）**
**日期：2026-10-07**

---

## 0. 证据基线

| 证据 | 路径 / commit |
|------|---------------|
| 15 项清单 | `tools/_verify/NAV-REWORK-QUEUE.md`（worker-71 交付） |
| 旧 topnav（含全部 dropdown） | `git show 92df55b699:templates/partials/topnav.html` |
| 旧 page-navigation（含 prev/next 扫描） | `git show 92df55b699:templates/macros/page-navigation.html` |
| 旧 section.html（调用 page_navigation） | `git show 92df55b699:templates/section.html` |
| 旧 sidebar（含 collapsed + emitted_routes） | `git show 92df55b699:templates/macros/sidebar.html` |
| 现状 topnav（仅 mobile-bar） | `templates/partials/topnav.html`（10 行） |
| 现状 page-navigation（仅 parent+related） | `templates/macros/page-navigation.html` |
| 现状 section.html（无 page_navigation 调用） | `templates/section.html` |
| 现状 sidebar（无 collapsed / 无 emitted_routes） | `templates/macros/sidebar.html` |
| 预生成数据：navigation.json | `data/navigation.json`（464 routes，含 collapsed/group/parent/children） |
| 预生成数据：relkey_map.json | `data/relkey_map.json`（9647 relkey → {version:{lang:route}}） |
| 预生成数据：page-navigation.json | `data/page-navigation.json`（38177 leaves，含 parent/previous/next） |
| 预生成数据：section-tree.json | `data/section-tree.json`（结构 section 树） |
| 生成器 | `tools/generate-page-navigation.mjs` |

---

## 1. 逐项处置表（15 项 + 2 行为）

| # | 行为名 | 处置 | 理由 | 代价 | 对应抱怨 | 优先三项 |
|---|--------|------|------|------|----------|----------|
| 1 | 首页 Home menu link | **accept loss** | mobile-brand 已链首页；sidebar-head brand 也链首页。恢复需重建 desktop top bar，与 shell 重做（移动优先）冲突。 | 0（不恢复） | — | 否 |
| 2 | 指南 Guide dropdown | **replace** | sidebar 树已有 Guide 分组（navigation.json groups.guide）。跨版本一键跳转可用 sidebar 快速链接块替代（预生成数据驱动）。 | 低：sidebar 加 quick-links 块，模板 + 数据 | 「不是树状」→ 树已覆盖，但跨版本直达缺失 | 否 |
| 3 | API dropdown | **replace** | 同 #2，sidebar 已有 API 分组。 | 低 | 同上 | 否 |
| 4 | 架构 Architecture dropdown | **replace** | 同 #2。 | 低 | 同上 | 否 |
| 5 | 原生 Native dropdown | **replace** | 同 #2。 | 低 | 同上 | 否 |
| 6 | {version} Native Source 子链接 | **accept loss** | 已在 sidebar 树中（navigation.json 中 native-1.3.15-src 是 version root 的 child）。可发现性略降但可达。 | 0 | — | 否 |
| 7 | XML Reference dropdown | **replace** | 同 #2。 | 低 | 同上 | 否 |
| 8 | 版本 Version dropdown（relkey_map 跟随） | **restore** | sidebar-foot switch_href 仅到版本根，不跟随 relkey_map。relkey_map.json 已有 9647 条 relkey→route 映射。最小方案：扩展 switch_href 接受 current_relkey 参数，查 relkey_map 得同页跨版本 route。 | 低：模板改动 + 已有数据 | 「跳过去回不来」→ 同页跨版本可达 | **是** |
| 9 | 语言 Language dropdown（per-page translations） | **restore** | 同 #8，relkey_map.json 已有 per-relkey per-lang route。最小方案：switch_href 语言切换时查 relkey_map[current_relkey][version][lang]。 | 低：模板改动 + 已有数据 | 「跳过去回不来」→ 同页跨语言可达 | **是** |
| 10 | Brand logo image | **accept loss** | sidebar-head 已渲染 logo（`config.extra.logo`）。top bar 不再需要。 | 0 | — | 否 |
| 11 | ← previous sibling (rel=prev) | **restore** | page-navigation.json 已为 38177 leaf 生成 previous。最小方案：模板从 page-navigation.json 查表，不再扫描 parent_section.pages。 | 低：模板改动 + 已有数据 | 「跳过去回不来」→ 线性前后可达 | **是** |
| 12 | next sibling → (rel=next) | **restore** | 同 #11，page-navigation.json 已有 next。 | 低 | 同上 | **是** |
| 13 | First/Last item disabled placeholders | **restore** | 随 #11/#12 恢复自动回来（previous/next 为 null 时渲染 disabled span）。 | 0（附带） | — | 否 |
| 14 | 父级 Parent（section 页） | **restore** | section.html 不再调用 page_navigation::render。page-navigation.json 有 leaf 的 parent；section 的 parent 在 navigation.json 的 parent 字段。最小方案：section.html 恢复调用，宏内 section 分支查 navigation.json parent。 | 低-中：模板 + 数据（section parent 已在 navigation.json） | 「跳过去回不来」→ section 页有父级出口 | **是** |
| 15 | 相关入口 Related（section 页） | **restore** | 同 #14，navigation.json 的 children 字段已提供 related routes。 | 低（同 #14） | 同上 | 否 |
| 16 | Group default-open（collapsed flag） | **restore** | 一行模板修复：`{% if group_active or not group.collapsed %}open{% endif %}`。navigation.json 已有 collapsed 字段。 | 极低：模板 1 行 | 「不是树状」→ 默认展开恢复 | 否 |
| 17 | Each URL emitted once（emitted_routes） | **restore** | 旧 sidebar 有全局 emitted_routes 去重。新 link0/link1/link2 仅 parent 内去重。最小方案：加回 emitted_routes 全局列表。 | 低：模板 + 少量渲染开销 | 「跳着跳着 404」→ 重复条目消除 | 否 |

**汇总：restore = 9（#8,9,11,12,13,14,15,16,17）/ replace = 5（#2,3,4,5,7）/ accept loss = 3（#1,6,10）**

---

## 2. 优先恢复三项的最小方案

### 2.1 prev/next 兄弟页（#11, #12, #13）

**现状**：`page-navigation.json` 已有全部 38177 leaf 的 `previous` / `next`（含 route + title）。
**方案**：
1. `templates/macros/page-navigation.html` 的 `render` 宏改为查表：
   ```
   {%- set nav_data = load_data(path="data/page-navigation.json") -%}
   {%- set current = nav_data.routes[current_url] -%}
   ```
2. 从 `current.previous` / `current.next` 取 route+title 渲染 `<a rel="prev">` / `<a rel="next">`。
3. 若 `previous`/`next` 为 null，渲染 disabled placeholder（已是第一项/最后一项）。
4. 删除 `parent_section.pages` 扫描循环。

**构建代价**：0 扫描，仅 1 次 `load_data`（已有）。渲染期从 O(siblings) 降为 O(1) 查表。

### 2.2 父级索引（#14, #15）

**现状**：`section.html` 无 `page_navigation::render` 调用。`navigation.json` 每 route 有 `parent` 字段。
**方案**：
1. `templates/section.html` 恢复 `{{ page_navigation::render(current_url=section.path, lang=crumb_lang) }}`。
2. `page-navigation.html` 宏增加 section 分支：
   ```
   {%- elif section is defined -%}
     {%- set nav_data = load_data(path="data/navigation.json") -%}
     {%- set parent_route = nav_data.routes[section.path].parent -%}
   ```
3. 从 `nav_data.routes[parent_route].children` 取 related routes。

**构建代价**：0 扫描，仅 1 次 `load_data`（已有）。

### 2.3 跨版本/语言切换可达性（#8, #9）

**现状**：`switch_href` 宏仅到版本根，不跟随 relkey_map。`relkey_map.json` 已有 9647 条映射。
**方案**：
1. 扩展 `switch_href` 宏签名，接受 `current_relkey` 参数：
   ```
   {%- macro switch_href(nav, version, lang_code, current_relkey) -%}
   {%- set alt_map = load_data(path="data/relkey_map.json") -%}
   {%- if current_relkey and alt_map[current_relkey] is defined -%}
     {%- set target = alt_map[current_relkey][version][lang_code] -%}
   ```
2. 在 sidebar-foot 的 version/language switcher 调用处传入当前页 relkey。
3. relkey 计算：`current_url` 去掉 `/{version}/{lang}/` 前缀。

**构建代价**：0 扫描，仅 1 次 `load_data`（已有）。

---

## 3. 预生成数据字段清单（供 worker M）

### 3.1 `data/page-navigation.json`（已有，需扩展）

当前 schema：
```json
{
  "schema_version": "1.0.0",
  "leafCount": 38177,
  "routes": {
    "/v1.3.0/en/api/campaign-ext/AccessObject/": {
      "title": "AccessObject",
      "parent": { "route": "...", "title": "..." },
      "previous": { "route": "...", "title": "..." } | null,
      "next": { "route": "...", "title": "..." } | null
    }
  }
}
```

**需新增字段**（section 页支持）：
| 字段 | 类型 | 说明 |
|------|------|------|
| `route` | string | 页面 route（已有，作为 key） |
| `parentRoute` | string | 直接父 section route |
| `parentTitle` | string | 父 section 标题 |
| `prevRoute` | string \| null | 前一个兄弟 route |
| `prevTitle` | string \| null | 前一个兄弟标题 |
| `nextRoute` | string \| null | 后一个兄弟 route |
| `nextTitle` | string \| null | 后一个兄弟标题 |
| `relatedRoutes` | string[] | 相关入口 route 列表（来自 navigation.json children） |
| `crossVersionRoutes` | object | `{version: route}` 来自 relkey_map |
| `crossLanguageRoutes` | object | `{lang: route}` 来自 relkey_map |
| `upChain` | string[] | 从根到父的 route 链 |
| `group` | string | 所属 sidebar 分组 |
| `collapsed` | boolean | 分组是否默认折叠 |

### 3.2 `data/navigation.json`（已有，无需改）

已有字段：`label`, `group`, `collapsed`, `order`, `parent`, `children`, `meta.versions`, `meta.languages`。

### 3.3 `data/relkey_map.json`（已有，无需改）

已有字段：`{relkey: {version: {lang: route}}}`。

### 3.4 生成器改动（`tools/generate-page-navigation.mjs`）

- 当前只处理 leaf pages（非 `_index.md`）。
- 需扩展：为 section routes（`_index.md`）也生成条目，填充 `parentRoute`（从 navigation.json parent）、`relatedRoutes`（从 navigation.json children）、`crossVersionRoutes` / `crossLanguageRoutes`（从 relkey_map 反查）。
- `upChain` 可从 navigation.json 的 parent 链递归构建。

---

## 4. 命令与证据

```bash
# 查看旧 topnav（含全部 dropdown）
git show 92df55b69904a402bca09aa573d8df6ac88a089e:templates/partials/topnav.html

# 查看旧 page-navigation（含 prev/next 扫描）
git show 92df55b69904a402bca09aa573d8df6ac88a089e:templates/macros/page-navigation.html

# 查看旧 section.html（调用 page_navigation）
git show 92df55b69904a402bca09aa573d8df6ac88a089e:templates/section.html

# 查看旧 sidebar（含 collapsed + emitted_routes）
git show 92df55b69904a402bca09aa573d8df6ac88a089e:templates/macros/sidebar.html

# 验证 page-navigation.json 覆盖
node -e "const pn=require('./data/page-navigation.json'); console.log('leaves:', pn.leafCount)"

# 验证 relkey_map.json 覆盖
node -e "const rel=require('./data/relkey_map.json'); console.log('relkeys:', Object.keys(rel).length)"

# 验证 navigation.json 结构
node -e "const nav=require('./data/navigation.json'); console.log('routes:', Object.keys(nav.routes).length, 'groups:', Object.keys(nav.groups))"
```

---

## 5. 风险与约束

- **不引入渲染期扫描**：所有 restore 方案均走 `load_data` 查表，不在模板中遍历 `section.pages` / `section.subsections`。
- **不重建 desktop top bar**：#2-#7 的 dropdown 用 sidebar quick-links 块替代，不恢复旧 topnav。
- **构建预算**：restore 三项的模板改动均为 O(1) 查表，不增加构建时间。
- **数据新鲜度**：page-navigation.json 和 relkey_map.json 需在 content 更新后重新生成（已有 `--check` 模式）。
