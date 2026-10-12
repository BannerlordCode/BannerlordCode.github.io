# nav-T2：分片（prev/next 数据）—— **裁定：不采纳**（Boss #17550 收口）

**日期**：2026-10-07 · **归属**：导航树完整性线（lead-13）· **执行**：worker T2（worker-207，已关闭）

---

## 1. 结论（一句话）

**分片产物不采纳；`data/nav/` 不入库；prev/next 线关闭。**

---

## 2. 为什么（Boss #17550 裁定 + 本线实测）

### 2.1 当前提交版**无回归** ⇒ 分片不是必需的

用**当前 `templates/`**（与 HEAD 逐字节一致，非 R2 实现的副本）跑：

| 项 | 值 |
|---|---|
| 子集 | `content/v1.4.5`（zh+en 全树）= **16,513 页** |
| `zola build` | **808,394 ms ≈ 808 s ≈ 13.5 分钟**，**rc=0** |
| 速率 | **≈ 49 ms/页** |
| release 线基线完整构建 | 2011 s / 38,486 页 = **52 ms/页** |
| **对照结论** | **49 vs 52 ms/页 ⇒ 同速 ⇒ 无回归** |

⇒ **当前版的 `page.ancestors` + `get_section`（用户注释所说的「渲染期二次扫描」）没有造成相对基线的拖慢** ⇒ **分片不是必需的**。

> ⚠️ **限制（如实标注）**：tiny-data 对照**未跑完**（命令在 1200 s 超时；808 s 只是第一次 run）⇒ 只报这一条 rc=0 的 808 s。**该限制不影响结论**：结论是「**与 release 线已发布基线同速**」（49 vs 52 ms/页），不依赖 tiny-data 对照。

### 2.2 两个「阻断级缺陷」都属于【已撤回的实现】

| 缺陷 | 归属 | 对当前版是否成立 |
|---|---|---|
| 每页 `load_data("data/page-navigation.json")`（18.8 MB）⇒ 探针 ≈89 ms/页、本线 300 页实测 ≈500 ms/页 | **R2 提议的实现**（`templates/macros/page-navigation.html:10`，无条件） | **否** —— 当前版读 `navigation.json`（**152 KB**）、在 `if` 内、调用点只有 `page.html:31`；`data/page-navigation.json` **未被任何模板引用** |
| 缺失 route ⇒ `nav_data.routes[route_key]` **Tera 直接报错**（`not found in context`；`is defined` 兜底到不了） | **同上（R2 实现）** | **否** —— 当前版 line 12 已有 `is defined` 守卫，**实测有效**（缺 route 页 rc=0、Failed to render=0） |

**两条阻断缺陷随 R2 的实现一起被撤回**（`git checkout -- templates/`；实现已存证 `tools/_verify/nav-R2-impl-withdrawn.diff`，7457 B）。

### 2.3 prev/next 是**功能缺口**，且已判为**不做**

- 当前版渲染的是「**父级 + 相关入口**」，**不渲染 prev/next**（宏头注释即写 `Parent and related links only`；产物 `grep 'rel="prev"|rel="next"'` → **0 命中**）。
- Boss 裁定（#17550 ②）：**不做该功能**。依据：lead-20 实测「**下行 100.0% 已在位**（38,467/38,470 叶子可从自己的桶索引到达）」，**上行是唯一缺口（783 页）** ⇒ **布局层 breadcrumb 无条件补上行**；而用户两句抱怨（「回不来」+「不是树状结构」）都是**层级/可达**问题 ⇒ breadcrumb 直接对治；prev/next 是**线性** affordance 且是用户外壳**有意移除**的功能（为构建时间）。

---

## 3. 产物处置（Boss #17550 ①）

| 产物 | 处置 |
|---|---|
| `data/nav/`（**5187 片 / 26 MB**，最大片 88.5 KB / 曾报 91,521 B） | **不入库** ⇒ 已加入 `.gitignore`（`data/nav/`）；保留在磁盘（可随时再生），但 **git 视野外** |
| `tools/gen-nav-shards.mjs`（7003 B） | **可以入库** —— 可复跑的资产、体积小；将来若真做 prev/next，它是现成的起点 |
| `tools/_verify/nav-T2-shards.md`（本文件） | 本文件即 T2 的收口交付 |

**生成器行为（已实测）**：从 `data/page-navigation.json` + `data/navigation.json` 派生 `data/nav/<version>-<lang>-<bucket>-<2字母后缀>.json`；5187 片、单片 ≤ 200 KB、153 个空片（用于覆盖 283 个缺失 leaf 的 route 推导）。

> **注**：Boss 曾裁定「降粒度到 ~100–300 片」；T2 未完成该步即关闭（无进展）。因**分片整体不采纳**，该步**不必再做**。

---

## 4. 方法记录（可复用的判据）

1. **当一个缺陷的载体被「撤回」后，所有针对该载体的测量都同时失效。**
   判据：基于某个实现下结论前，先确认它**当前在盘上** —— `git status -- <载体>` + 读该文件本身。
   （本会话三方围绕**已撤回实现**讨论了多轮「两个阻断级缺陷」，而 `templates/` 一直是干净的。）
2. **「这个改动是必要的」本身是一个需要测量的断言。**
   本会话第 4 次由实测推翻一条「必修」：一条 **present route 正对照**（命中并渲染出 `rel="next"`）就否掉了「查表键归一化」这条要求 —— 而且它**若照做反而有风险**（多余的归一化层会掩盖真实的大小写不一致）。
3. **一个观测只有在不同假设下预测不同时才是证据** ⇒ 夹具必须**同时含正对照与负对照**。
4. **一次测量若 rc≠0 或页数=0，它不是「快」也不是「慢」，而是「没跑」。**
5. **在错误阶段取数的判据不是「不够灵敏」，而是「看不见」** —— `-> Creating N pages (M orphan)` 在渲染**之前**结束，结构上看不见 per-page 开销与渲染期崩溃。
6. **子集必须自足**（含其依赖的 `static/`/`data/`），**且必须包含被测现象**；两条缺一，读数不可信。

---

## 5. 复现命令

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io

# 当前版规模测量（本报告 §2.1 的 808s 来源）
#   站：%TEMP%/nav-scale（config/templates/static/data + content/v1.4.5 全树）
#   t0=$(date +%s%N); zola build; t1=$(date +%s%N); echo $(( (t1-t0)/1000000 )) ms

# 当前版守卫有效性（缺 route 页）
#   站：%TEMP%/nav-cur（含 v1.4.6/zh/api/core-extra/ArmorComponent.md = 数据里没有 route 的 leaf）
#   zola build 2>&1 | tail -4; zola build 2>&1 | grep -c "Failed to render"   # → rc=0 / 0

# 生成器（不采纳，仅留档）
node tools/gen-nav-shards.mjs --help 2>/dev/null || head -20 tools/gen-nav-shards.mjs
```
