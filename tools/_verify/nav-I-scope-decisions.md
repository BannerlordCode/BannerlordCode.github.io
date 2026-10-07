# nav-I · 2 条 `.txt` orphan 的范围裁定

**测量时点：merge 后，HEAD b46a3cfdc5**（`git log -1` = `b46a3cfdc53926189f7294ed03f0371ccda53aff 2026-10-07 13:02:19 +0800`）
**测量时间：2026-10-07 13:25–13:35 (UTC+8)。只读调查；唯一写入是本文件与同目录证据日志。**

## 0. 当前 orphan 实测（对任务书「3 条」的修正）

```
$ node tools/nav-orphans.mjs --json tools/_verify/_navI-orphans-now.json
total_pages=39029  orphans=4  orphan_parents=4  by_tree={"v1.3.15":4}
```

实测 **4 条**（非任务书所述 3 条——任务书数字测量于更早时刻，期间其他线并发修掉 1 条又新增/暴露差异；以本次实测为准）：

1. `v1.3.15/en/architecture/gamemodel-decorator/`（非本线范围）
2. `v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt/` ← **本线**
3. `v1.3.15/zh/architecture/gamemodel-decorator/`（非本线范围）
4. `v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt/` ← **本线**

`content/` 下 `.txt` 全树仅此 2 个（`find content -name "*.txt" | wc -l` = 2；`.md` = 39029，并发写入中，两次测量 39027→39029）。

## 1. Zola 0.22 对 `content/` 下 `.txt` 的实际行为

**结论：Zola 0.22.1 会把 `content/` 下的 `.txt` 原样拷贝进 `public/`（不渲染、不当页面、无页面 route），且与 `static/` 同名文件冲突时 `content/` 版本胜出（shadowing）。**

证据：

- **构建产物实证**（测量时点，public/ 为 2026-10-07 13:08 发布构建，晚于 HEAD 13:02）：
  ```
  $ wc -c public/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  119  public/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  119  public/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  $ diff public/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt \
          content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  （无差异）IDENTICAL: public copy == content stub
  ```
  而 `static/` 同名文件为 166,428 字节（11,095 行 FUN_ 列表，BOM 开头）。⇒ 线上该 URL 实际服务的是 **119 字节 stub**，`static/` 完整列表被 shadow 掉、在其自然 URL 上**不可达**。
- **Zola 自身不把 `.txt` 当页面**（有界构建，跑到 `-> Creating` 行即被 timeout 杀掉，未跑完整构建）：
  ```
  $ timeout 400 zola build > tools/_verify/_navI-zola-build.log 2>&1
  Building site...
  -> Creating 38488 pages (30 orphan) and 538 sections
  ```
  Zola 页面数 38,488 ≠ 磁盘 `.md` 数 39,029（差 539 = `_index.md` 数，Zola 该计数口径不含 section 索引页；发布构建日志 `tools/_verify/RELEASE-BUILD-zola.log` 同口径：38,486 pages / 538 sections）。无论口径细节，**`.txt` 不在 Zola 的页面图里**——没有模板渲染、没有 frontmatter、没有 Zola 内部 route。orphan 工具里的 "route" 是工具自身的文件路径约定（`routeOf` 仅剥 `.md`，`.txt` 得到 `..../ALL-FUNCTIONS-LIST.txt/`）。
- 冲突机制：`content/` 与 `static/` 的同名 `.txt` 映射到同一输出路径，构建产物显示 `content/` 版本覆盖了 `static/` 版本。

**副作用留痕**：该有界构建在渲染期被 timeout 杀死，`public/` 处于部分重建状态（2 个 `.txt` 产物已消失）。`public/` 在 `.gitignore` 第 1 行，非仓库内容；下次完整构建（CI 或本地）会完整重建，不影响仓库状态与线上（CI 每次全新构建）。

## 2. `static/` 完整列表 vs `content/` stub 的关系与来源

**结论：`static/` 版本是权威完整列表（11,095 个 FUN_ 地址）；`content/` stub 是 2026-06-25 Zola 迁移时留下的 119 字节「兼容性」指针，且当前在构建中 shadow 掉权威版本——这是迁移引入的缺陷。**

git 历史（`git log --oneline --follow`）：

| commit | 动作 |
|---|---|
| `704d2f05c4` feat: add native-1.3.15 documentation… | 完整列表（11,095 行）建于 **`docs/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt`**（VitePress 时代） |
| `a9f102a73a` docs: complete native 1.3.15 reference | 补全 en/zh 完整列表（仍在 `docs/`） |
| `ffb461dbb5` feat(zola): migrate v1.3.15 docs and static native sources | **Zola 迁移**：完整列表移到 `static/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt`（166,428 B）；同时在 `content/` 同名路径新建 119 B stub |

stub 原文（en/zh 逐字相同）：
```
ALL-FUNCTIONS-LIST moved here for build compatibility.

See `COMPLETE-FUNCTIONS.md` for the maintained function index.
```
`git show ffb461dbb5` 证实两文件同 commit 创建。维护中的函数索引是 `COMPLETE-FUNCTIONS.md`（`.md` 页，已被两个 `_index.md` 的 Scope 表链接）。

## 3. 契约有没有授权的退役/移动路径

逐条查证结果：

| 契约来源 | 相关内容 | 对本案的授权 |
|---|---|---|
| `AGENTS.md` CONVENTIONS | 「Markdown files under `content/<version>/<lang>/` become routes」 | 路由约定只认 `.md`；**未给 `content/` 下 `.txt` 任何地位**。stub 不是文档散文，删除不触碰 HARD PREMISE（手写文档）——撤回的不是文档，完整列表仍在 `static/`，维护索引仍是 `COMPLETE-FUNCTIONS.md` |
| `AGENTS.md` HARD PREMISE / H0 | 禁止脚本生成 `content/` 文档页；撤回生成内容 | 与删除一个手写指针 stub 无冲突（stub 非生成物、非散文） |
| `tools/RETIRED_BODY_GENERATORS.md` | 破坏性删除的登记模式：`cleanup-orphan-api.mjs` = **「Destructive and fail-closed — deletes API pages only with explicit local `BANNERLORD_CONTENT_CLEANUP=1` opt-in」** | 项目对「删除」的姿态 = 失败关闭 + 显式 opt-in。本案删除对象不是 API 页，但该姿态是**需人工裁定**的依据 |
| `tools/_NAV-ARCHITECTURE.md` §7 | 窄口例外仅限 `_index.md` marker 块内的机械子页清单 | **不覆盖 `.txt`**；无任何授权移动/退役 `.txt` 的条款 |
| A1 验收（§5） | 「每个非根页至少有一条从根可达的入链（orphan = 0）」，判定工具 `nav-orphans.mjs` | 工具口径把 `.md`+`.txt` 都计入页面宇宙（`nav-orphans.mjs:131`；`nav-verify.mjs:57` 同口径；工具头注释明示「`.txt` 口径与 audit-links 不同是**刻意**的，不得改判据） |
| A2 验收（§5） | `_index.md` 应列出全部子页 | `nav-section-index.mjs:101-105` `childrenOf()` **只数 `.md`** ⇒ 两个 `_index.md` 不列 `.txt` **不违反 A2** |
| 链接侧 | `grep -rn "ALL-FUNCTIONS-LIST" content/v1.3.15/{en,zh}/native-1.3.15-src/ --include="*.md"` → 0 命中；`templates/`、`tools/*.mjs`、`tools/lib/` 亦无引用（排除审计工具自身） | 删除 stub **不会造成任何断链** |

**契约结论：没有一条契约「授权」退役这两个 `.txt`；也没有一条契约「保护」它们。** 它们是迁移遗留的未裁定物。删除路径（移到 `static/` 已天然成立、从 `content/` 移除）在契约上无禁止，但受「破坏性删除需人工 sign-off」的项目姿态约束。

## 4. 最小且契约合规的动作（结论）

### 推荐：方案 A —— 从 `content/` 删除 2 个 stub（`git rm`，en+zh 各一）

- **orphan 归零**：2 条 `.txt` route 离开工具页面宇宙，实测 4 → 2（剩余 2 条 `gamemodel-decorator` 非本线）。
- **顺带修复 shadowing 缺陷**：该 URL 改服务 `static/` 的 166,428 B 完整列表（11,095 个 FUN_ 地址），权威内容重新可达；stub 的指针功能由 `COMPLETE-FUNCTIONS.md` 承担（已被 `_index.md` 链接）。
- **契约合规**：不违反 H0（无文档散文被撤回）、不违反 A2、不造成断链、不改判据/阈值。
- **代价**：破坏性操作，逆转 `ffb461dbb5` 的刻意决定（「for build compatibility」）；URL 服务内容变化（stub → 完整列表，仍 200 不 404）。

### 需人工裁定的判据（若 Boss 不签批删除）

1. 是否存在任何**仓库外**消费者（书签、外部文档、脚本）依赖该 URL 上**恰好是 119 字节 stub**？仓库内证据：0 引用（§3 链接侧 grep）。
2. 「build compatibility」的原意是否已被满足？Zola 0.22 实测无需 stub 即可构建（§1 有界构建在 stub 存在下跑通；stub 对 Zola 构建无作用，其唯一观测效果是 shadow 掉 `static/` 权威版本）。

**若判据 1/2 任一为「是」→ 转方案 B。**

### 兜底：方案 B —— 在两个 `_index.md` 的 Scope 表加一行手写链接（不删除）

- 例如在「Full function address list」行旁加：`[原始地址列表 (raw .txt)](./ALL-FUNCTIONS-LIST.txt)`。
- orphan 同样归零（4 → 2）；纯新增手写链接，属正常作者路径，无需 sign-off。
- **代价**：shadowing 缺陷保留（线上仍服务 stub，`static/` 完整列表仍不可达）；新增的链接指向一个 3 行指针，价值低。

### 明确排除的方案

- **改名 `.txt` → `.md`**：制造一个无 frontmatter 的 3 行「页面」，H0 属性暧昧（不是散文但是「页」），且仍需补链才能脱离 orphan——比 A/B 都复杂，不最小。
- **不动**：违反 A1（orphan = 0）。

## 5. 证据文件清单（本目录）

- `tools/_verify/_navI-orphans-now.json` —— 本次 orphan 实测快照（4 条）
- `tools/_verify/_navI-run.log` —— orphan 工具运行日志
- `tools/_verify/_navI-zola-build.log` —— 有界 zola build 输出（`-> Creating 38488 pages (30 orphan) and 538 sections`）
- 关键命令均可重跑：`node tools/nav-orphans.mjs`、`diff public/... content/...`（注意 public/ 已被部分重建，diff 需待下次完整构建后复测）、`git show ffb461dbb5 -- <两路径>`

---

## 最终执行结果（Path A + 索引补链，Boss #10714/#10807 定稿；lead 追加）

> 本节由 lead 在 worker-110 的分析基础上追加（原文件被另一孤儿角色覆盖过，保留其分析）。

### 1. Path A 已执行

- `git rm content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt`
- `git rm content/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt`
- `git status --short` → 两文件均为 `D`（**git 跟踪**，可 `git checkout` 回放）。

### 2. orphan 三段归零

| 阶段 | orphans | 成因 |
|---|---|---|
| 删前 | 4 | 2 个 `.txt` + 2 页新架构页（`gamemodel-decorator`，写作线产出） |
| Path A 删 2 个 `.txt` | 2 | `total_pages` 39029→39027（−2） |
| 索引页补链 2 页新架构页 | **0** | `[GameModel Decorator](./gamemodel-decorator)` |

```bash
node tools/nav-orphans.mjs --by-parent
# → total_pages=39027  orphans=0  orphan_parents=0  by_tree={}
```

### 3. ⚠ 路由修复证据：**本轮不可判定**（Boss #11382 更正）

Boss #10622 条件 2 原要求「证明 `public/<该路由>` 服务的是 `static/` 那份 166KB」。**该项本轮不可从 public/ 取得**：

```bash
$ stat -c '%y %n' public            # → 2026-10-07 13:41:45（那次【被杀的构建】留下的不完整产物）
$ ls public/shell.css public/shell.js    # → No such file or directory（未拷任何 static 文件）
$ ls public/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt  # → No such file or directory
```

⇒ `public/` 是**死构建的产物**，不能证明「路由已修复」，也不能证明「路由未修复」。

**替代证据**：
- `static/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt` 存在且 = **166428 B**（`wc -c`）。
- content/ 下已无同名文件（不再 shadow）。
- 「Zola 是否把 `static/` 原样发布」由 release 线的 fixture 正对照测定（进行中）。

**结论（两句都写）**：路由修复**本轮不可判定，待 fixture 结论**。不写成「已验证」，也不写成「未修复」。

### 4. Path D：只登记不修（Boss #10700）

三个工具把 `content/` 下 `.txt` 当页面枚举（**页面枚举口径错误**，与这 2 个文件无关也成立）：
- `tools/nav-verify.mjs:57`、`tools/_v146_orphan_check.mjs:109`、`tools/audit-links.mjs:34`
- **旁证**：删掉 2 个 `.txt` 后 `total_pages` 39029→39027（−2），恰好等于删除数 ⇒ 直接证明它们此前把 `.txt` 当页在数。
- **本轮不修判据**。

### 5. 自链修复 + 形态修复

- `content/v1.3.15/{en,zh}/native-1.3.15-src/COMPLETE-FUNCTIONS.md`：「Full list」行原为自链 `[COMPLETE-FUNCTIONS.md](./)` → 先修为 `[ALL-FUNCTIONS-LIST.txt](./ALL-FUNCTIONS-LIST.txt)`（形态错）→ 再修为 **`../ALL-FUNCTIONS-LIST.txt`**（en:18 / zh:22，Boss 独立确认）。
- 该链接在 `audit-links.mjs` 下仍报 broken（目标只在 `static/`，工具只在 `content/` 找）⇒ 属**尺的覆盖缺口**，由 release 线 known-failures 登记。
