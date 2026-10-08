# brief · nav-batch（67 页补 `## 导航` 节 · 事实类前置已就绪）

## 任务
67 页缺 `## 导航` 节（判据 `J2 missing=[导航]`）⇒ 补上。**这是格式类修复，但产出里含链接** ⇒ 必须按 boss 的护栏执行。

## ★ 三条硬护栏（boss #23361，缺一即判废）

### 护栏 1：链接解析基准（**不可推导，必须照此写**）
叶子页的 route **就是它自己的目录** `…/api/<桶>/<页名>/`：
| 目标 | 写法 |
| --- | --- |
| **同桶**兄弟页 | `../X` |
| **父索引** | `../_index` |
| 跨桶 | `../../<桶>/<X>` |
**跨桶写一个 `../` 会解析到不存在的路径**（已发生过）。叶子目标**不带尾斜杠**。

### 护栏 2：逐页允许目标白名单（**已实测，见 TSV**）
```
tools/_verify/nav-targets-1.4.6-zh.tsv
列: page | bucket | allowed_siblings(逗号分隔) | parent_index
```
- **每页的导航目标只能取自该页那一行的 `allowed_siblings`**（这些已逐条实测在盘，共 2452 条）+ `../_index`（67/67 实测存在）。
- **白名单外的目标一律不得写** —— 那会把「格式缺陷」换成「断链」。
- **`allowed_siblings` 为 `(无)` 的页**（仅 2 页：`engine/GauntletLayer`、`localization/TextObject`）⇒ **只写父索引一行**，不要编「同桶」行。

### 护栏 3：不得假定同桶有模板
实测：`core-extra` 0/47 · `core` 0/2 · `gui` 0/5 **此前零页面带 `## 导航`** ⇒ 不能「参照同桶既有格式」。**按本 brief 的逐字块写**。

## 逐字块（照此写，只替换目标名）

**有同桶兄弟时**（从 `allowed_siblings` 里挑 **2–3 个与该页最相关的**）：
```
## 导航

- 同桶：[`../X`](../X) · [`../Y`](../Y) · [`../Z`](../Z)
- 父索引：[`../_index`](../_index)
```
**无同桶兄弟时**（`allowed_siblings` = `(无)`）：
```
## 导航

- 父索引：[`../_index`](../_index)
```

**位置**：放在**页面最末尾**（若已有 `## 参见`，则在其之后）。

**★ 「目标已测量」与「导航有用」是两个独立要求，都要满足**：
不要机械取白名单前 2 个 —— 请**读一眼该页**，从允许集合里挑**语义相关**的兄弟页。例：`Campaign.md` 应指向 `CampaignBehaviorBase`/`CampaignEvents`，而不是字母序第一个。

## 禁止
- **不要改页面的其它任何内容**（不动散文、不动引用、不动 `## 参见`）。
- 不动任何 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。
- **不要新增任何链接到白名单外**。

## 验收（**三条同时**，缺一不算完成）
```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
# ① 本批每页 judge PASS 且 J2 missing=[]
node tools/_verify/lead-145zh-judge.mjs <你负责的每一页>
# ② 全站断链不得上升（必须仍为 0）
node tools/audit-links.mjs | grep BROKEN_LINKS
# ③ 你写入的每条导航目标都来自该页的 allowed_siblings（或 ../_index）
```

## 硬约束（磁盘可判定）
> **本批结束时若 ① 有任一页 `J2 missing=[导航]`，或 ② `BROKEN_LINKS > 0`，则本轮视为未完成 —— 直接回报「未完成 + 哪几页 + 病灶路径」。**
