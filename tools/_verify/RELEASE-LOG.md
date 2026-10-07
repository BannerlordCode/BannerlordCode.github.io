# RELEASE LOG — BannerlordCode.github.io 发布/每日 push 线

> 追加式台账。每条记录：日期时间 / push 前后 origin SHA / 每个 commit 的文件数与信息首行 /
> 仍留工作区文件数与原因分类 / 门禁红绿 / 未决定项。
> 本文件由 release 线（lead-12）维护。**不记录任何未经实测的数字。**

---

## 持久化机制（跨会话耐久替代）

**结论：可以给 schtasks 一行命令，但它只能自动化「push 已提交的 commit」，不能自动化「commit」。**

理由（不是偏好，是契约约束）：

1. `AGENTS.md` / `CONTRACT.md` 禁止 `git add -A`（共享 index 曾卷入其他 Worker 改动），
   所以自动脚本无法安全地决定「哪些路径进这个 commit」。
2. `content/**` 必须逐页手写，且只提交**能逐页解释**的改动（HANDOFF §2 硬前提）。
   自动 commit 必然把正在写、写到一半的页面卷进去 —— 这正是本项目反复吃亏的形态。
3. 多条内容线并发写同一个工作区，任何自动 `add` 都是在跟活人抢 index。

因此耐久方案是**只做 push**，失败即 fail-closed 记录：

```bat
schtasks /Create /F /TN "BannerlordCode-DailyPush" /SC DAILY /ST 09:00 /TR "cmd /c cd /d C:\WorkSpace\Bannerlord\BannerlordCode.github.io && git fetch origin && git push origin main >> tools\_verify\daily-push.log 2>&1"
```

- 只 `push`，不 `add`、不 `commit`、不 `force`、不 `rebase`。
- 若远端已分叉，`git push` 会失败并把原因写进 `tools\_verify\daily-push.log` —— 这正是想要的行为：
  分叉必须由人来合并（见 2026-10-07 的实例），不能让脚本静默选一边。
- 查看/删除：
  ```bat
  schtasks /Query /TN "BannerlordCode-DailyPush" /V /FO LIST
  schtasks /Delete /TN "BannerlordCode-DailyPush" /F
  ```

**本会话的 cron loop（每天 09:00）只在会话存活时触发**，会话结束即失效；schtasks 是它的耐久替代。
`tools\_verify\daily-push.log` 需要手工创建目录（`tools\_verify` 已存在）。

---

## 第 1 轮 · 2026-10-07（merge 落地轮）

### 1. 起始状态（复测，非转述）

```
$ git rev-list --left-right --count origin/main...main
0	68
$ git status --short | wc -l
3509
$ git log -1 --format=%H origin/main
7187151b7080de4c96cf7a4202b3b5e70ce477c7
$ git log -1 --format=%H HEAD
92df55b69904a402bca09aa573d8df6ac88a089e
$ git log --oneline origin/main..main | wc -l
68
```

**关键更正（本轮的第一个实测发现）**：派单书写的「origin/main 落后本地 68 个 commit」**不成立**。
`git push origin main` 被拒（`! [rejected] main -> main (fetch first)`），fetch 后：

```
$ git fetch origin
   7187151b70..cc39aaf811  main       -> origin/main
$ git rev-list --left-right --count origin/main...main
4	68
```

⇒ 实际是**分叉**（远端 4 个用户 commit，本地 68 个），不是快进。
`merge-base = 7187151b7080de4c96cf7a4202b3b5e70ce477c7`（2026-08-22），
本地线从 8-22 起就没有包含用户的 2026-10-01 外壳重做。

### 2. 防并发快照（冻结白名单）

```
$ git status --short > tools/_verify/RELEASE-SNAPSHOT-<UTC>.txt
文件: tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt
行数: 3515  (= 6 行头部 + 3509 条 status 条目)
字节: 211813
```

规则：本轮只允许提交**出现在该快照里**的路径；晚于快照出现的文件一律不提交。
实测确实发生过 1 例：`tools/_nav-orphans.json` 在快照之后出现，**未提交**。

### 3. 远端 4 个 commit（全部是用户本人 2026-10-01）

```
4b10ed6673 重做文档站外壳，把版本和语言收成全局开关
fdd540f17e 让文档站重新能发布：先审计链接再构建，并修正 Campaign 死链
cb7b700718 修复缺失路由中断全站构建，并关闭全文索引以便远端编完
cc39aaf811 加快全站渲染，避免 GitHub 构建超过 6 小时上限
```

改动面（16 文件）：`.github/workflows/docs.yml`、`config.toml`、
`content/v1.4.5/zh/api/campaign/KingdomDecisionMapNotification.md`、
`specs/docs-shell/*`（3 个新文件）、`static/shell.css`、`static/shell.js`、
`templates/**`（10 个）。

### 4. 合并前的安全前置检查（全部实测通过）

```
in-progress merge?      no
core.autocrlf           false
16 个远端改动文件的 dirty 状态   0（无重叠，不会覆盖未提交工作）
远端新增路径的未跟踪碰撞        无（specs/ 不存在；static/shell.* 不存在）
```

冲突预演（`git merge-tree`，纯 plumbing，不碰工作区）：

```
$ git merge-tree --write-tree --name-only HEAD origin/main
CONFLICT (content): .github/workflows/docs.yml
CONFLICT (content): templates/base.html
CONFLICT (content): templates/macros/page-navigation.html
CONFLICT (content): templates/macros/sidebar.html
CONFLICT (content): templates/partials/topnav.html
CONFLICT (content): templates/section.html
```

6 文件 / 27 个冲突 hunk。两边重叠的 6 个文件同时被本地 68 条与用户外壳改过。
**这是两个导航实现的设计冲突，不是机械冲突** —— 已按 Boss 裁定处理（见下）。

### 5. 合并执行

```
$ git merge --no-ff -m "<见下>" origin/main
Automatic merge failed; fix conflicts and then commit the result.
（6 个 U 文件；自动合并成功：config.toml、content/v1.4.5/.../KingdomDecisionMapNotification.md、
  specs/docs-shell/*、static/shell.*、templates/macros/breadcrumb.html、templates/page.html、
  templates/partials/sidebar.html）
```

冲突解决方式（**逐文件取 THEIRS**，即用户版本，Boss 裁定第 2 条）：

```
$ for f in <6 files>; do git show cc39aaf81195b9fa61f2c9dcaa90bc49200c126a:"$f" > "$f"; git add -- "$f"; done
$ git diff --cached cc39aaf81195b9fa61f2c9dcaa90bc49200c126a -- <6 files>
（空）
$ git diff --name-only --diff-filter=U
（空）
```

- 使用 `git show <sha>:<path> > <path>` + `git add`，**没有用 `git checkout --theirs`**，
  以严格满足「禁止 checkout 工作区文件」的硬约束；且 6 个文件在合并前均已确认 clean（无未提交工作可被破坏）。
- 验证方式是 `git diff --cached <theirs> -- <6 files>` 为空 ⇒ 暂存内容与用户版本**逐字节相同**。
- 冲突标记扫描：`grep -l '^<<<<<<< \|^>>>>>>> '` 对所有暂存文件 → 0 命中。

### 6. 用户生产修复的保留核对（Boss 裁定第 4 条）

```
$ git show :config.toml | grep -n 'build_search_index\|include_content'
5:build_search_index = false
13:include_content = false
$ git diff --cached cc39aaf81195b9fa61f2c9dcaa90bc49200c126a -- config.toml
（空）
```

⇒ `cb7b700718`（关闭全文索引）语义**保留**。
`cc39aaf811`（渲染提速）落在 `docs.yml` + `config.toml`，两者均等于 THEIRS ⇒ 语义保留。

### 7. merge commit 与 push

```
$ git rev-list --parents -n1 HEAD
55658f4d9d0450335f2b12e160bfb8c9b37fbc57 92df55b69904a402bca09aa573d8df6ac88a089e cc39aaf81195b9fa61f2c9dcaa90bc49200c126a

merge commit = 55658f4d9d0450335f2b12e160bfb8c9b37fbc57
  parent1 = 92df55b69904a402bca09aa573d8df6ac88a089e   (本地 68 条)
  parent2 = cc39aaf81195b9fa61f2c9dcaa90bc49200c126a   (用户外壳 4 条)
merge commit 暂存文件数 = 16

$ git push origin main
   cc39aaf811..55658f4d9d  main -> main
$ git fetch origin && git rev-parse origin/main
55658f4d9d0450335f2b12e160bfb8c9b37fbc57
$ git rev-list --left-right --count origin/main...main
0	0
```

**push 前 origin/main = cc39aaf811；push 后 origin/main = 55658f4d9d。**
`git push --force` **未使用**；`git rebase` **未使用**；本地 68 条历史**未被重写**。

Boss 独立复跑确认（4 条全绿）：真 merge commit（双 parent）✅ / 远端同步 0 0 ✅ /
无冲突标记残留 ✅ / config.toml 全文索引仍关闭 ✅。

### 8. 门禁（照实报，未改内容、未改判据）

```
$ node tools/audit-links.mjs
FILES=39027
TOTAL_LINKS=148932
AUDIT_MODE=url
BROKEN_LINKS=1
RESOLVE_OK_URL=148745
RESOLVE_OK_FILE=110047
RESOLVE_OK_EITHER=148746
RESOLVE_OK_BOTH=110046
RESOLVE_URL_ONLY=38699
RESOLVE_FILE_ONLY=1
RESOLVE_NEITHER=0
FILES_WITH_BROKEN=1

## v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md  (1)
   -> ./SellItemsAction
exit_code = 1
```

原始输出落盘：`tools/_verify/RELEASE-GATE-auditlinks.txt`（HEAD=55658f4d9d，run 2026-10-07T04:54:44Z）。

**门禁状态：红（exit 1，1 条断链）。** 按契约**未修改内容**，仅照实登记。
（旁证：导航线在 04:37/04:42 的两次独立运行同样是 `BROKEN_LINKS=1`，
指向同一个 `SellGoodsForTradeAction.md -> ./SellItemsAction`，说明不是本轮引入。
但两边 `RESOLVE_OK_FILE` 数值不同：110044 vs 110047，口径/时点不同，不互替。）

### 9. 工作区（本轮结束时）

```
3509 条起始 → 3510 条（+1：tools/_nav-orphans.json 在快照后出现，导航线正在写）
```

原因分类见第 2 轮（内容分批 commit 完成后回填）。

### 10. 本轮未决定项

1. **`tools/_nav-orphans.json`**（快照后出现）→ 不提交，等下一轮快照。
2. **10 个 tracked-modified 的 `tools/` 文件**（`tools/_NAV-BASELINE.md`、`tools/nav-orphans.mjs`、
   `tools/nav-section-index.mjs`、`tools/_nav-auditlinks-raw.txt` 等）→ 导航线**此刻仍在写**
   （实测 04:46:48Z 仍有改动），**不提交**。
3. **3395 项 content 改动** → 分类产物已出（见第 2 轮），待机械完整性门禁通过后分批提交。
4. **`nul`** → 一个 Windows 保留名产物，待确认是真实文件还是重定向事故（见第 2 轮）。
5. **`CONTRACT.md` 处于未跟踪状态**（`??`）—— 项目主契约文件没有进版本库，这是一条独立发现，
   非本线范围，登记待裁。

---

## 第 2 轮 · 2026-10-07（工作区分批提交轮）

**状态：content 提交被外部约束暂停。本轮只提交发布线自己的产物。**

### 2.1 🔴 content 提交的暂停依据（跨线约束，非我自行决定）

lead-13 两次广播：

```
#9693  修复轮现在开始，会写 content/**/_index.md 的机械子页清单（BEGIN/END SECTION INDEX 块内）
       与父/前/后/相关导航数据；开始前我会先广播路径前缀给你。
       在我说「可以提交」之前，请把本线未广播的 content/** 改动视为「正在写」，先不要提交。
#9754  修复轮开始广播：即将写 content/**/_index.md。请在你分批 commit content 时
       先跳过 content/**/_index.md，直到我广播「可以提交」。其余 content/** 改动与本线无关，照常处理。
```

**执行**：`content/**/_index.md` 一律**不提交**（本轮 21 个）；其余 content 待机械门禁证据齐了再分批。
注意两条广播口径不完全一致（#9693 说「content/** 全部暂缓」，#9754 收窄为「只跳过 _index.md」）。
按**更严的那条**执行到证据齐备为止，并把口径差异登记在此，避免下一轮误判为「已授权」。

### 2.2 🔴 「3395 项是一个机械批次」这个前提被实测推翻

派单书与 Boss 裁定都假设 3395 项可以按「目录/提交批次」机械分组。worker-89 的全量实测否定了其中最大的一类：

```
BANNER 组 = 2194 项（占 3395 的 65%），判定标准 numstat == "2\t0"
  → 实测**不是**单一机械插入：存在多个变体，且有 **75 个例外文件**
  → 例外清单：tools/_verify/.cg-banner-exceptions.txt
     （例：content/v1.3.0/en/api/campaign/Town.md、content/v1.3.15/en/api/core/ItemObject.md）
NONBANNER 组 = 1201 项
```

⇒ 任何「统一横幅插入」的 commit message 都会是**不实描述**。已按此改写提交口径（见 2.4）。

### 2.3 内容静止性实测（提交前置条件，已满足）

```
快照内 3397 个 content 路径：
  最近 3 分钟内被改：0
  最近 15 分钟内被改：0
  最新 mtime：2026-10-06T23:37:46Z（即 ≥5 小时前）
```

content 侧静止。**但 `tools/` 侧不静止**：lead-13 在 05:01Z 仍在写
`tools/_verify/types-1.4.5.json`（3.1MB）、`types-1.4.6.json`、`types-1.5.3.json`（各 ~2.9MB）。
⇒ 本轮只提交**逐条列名的自有产物**，不做任何 `tools/` 目录级提交，也不做 `git add -A`。

### 2.4 已落盘并验收的 worker 产物

| 产物 | 内容 | 验收方式 |
|---|---|---|
| `tools/_verify/RELEASE-CONTENT-CLASSIFY-v130en.md` | v1.3.0/en 2389 项：+17641/−1240，8 桶；两类变更（2124 横幅 / 265 重写） | 已开文件核；含「未确定项」6 条 |
| `tools/_verify/RELEASE-CONTENT-CLASSIFY-rest.md` | 其余 1006 项：+58554/−9141，71 桶，A–G 七型 | 已开文件核；含「未确定项」清单 |
| `tools/_verify/NAV-REWORK-QUEUE.md` | 被用户外壳取代的本地 nav 项 | **已独立复核**，见 2.5 |
| `tools/_verify/RELEASE-CONTENT-COMMIT-GATE.md` | 全量机械完整性门禁 | 进行中（worker-89） |
| `tools/_verify/RELEASE-TOOLS-CLASSIFY.md` | tools/ 与根目录 114 项分类 | 进行中（worker-91；前两任 worker 未产出，已登记） |

失败登记（如实）：`RELEASE-CONFLICT-TEMPLATES.md` 的 worker（worker-71）**两次 settle 但从未写出文件**；
其分析被 worker-85 的 `NAV-REWORK-QUEUE.md` 覆盖并取代，故该文件**放弃**，不再作为交付物。

### 2.5 NAV-REWORK-QUEUE.md 的独立复核（不是转述）

Boss 裁定第 3 条要求「被取代的本地 nav 项逐条登记」。worker-85 交出 **17 条**（15 项 + 2 个行为）。
我另开命令独立复核了其中三条最关键的断言，全部成立：

```
$ git show 92df55b69904a402bca09aa573d8df6ac88a089e:templates/section.html | grep -n 'page_navigation'
3:{% import "macros/page-navigation.html" as page_navigation %}
24:{{ page_navigation::render(current_url=section.path, lang=lang) }}
$ git show cc39aaf81195b9fa61f2c9dcaa90bc49200c126a:templates/section.html | grep -n 'page_navigation'
（无输出）
⇒ section 页确实整块丢掉父级/相关导航（对应队列 #14 #15）✅

$ git cat-file -s cc39aaf81195b9fa61f2c9dcaa90bc49200c126a:templates/partials/topnav.html
391        （整份文件只剩一个 mobile-bar，桌面下拉导航全删）
⇒ 桌面顶栏 9 项（#1–#9）确实消失 ✅

$ git show 92df55b69904a402bca09aa573d8df6ac88a089e:templates/macros/page-navigation.html | grep -n 'siblings'
60:        <div class="page-navigation-siblings">
⇒ 兄弟页 prev/next 块确实存在于旧版（对应队列 #11 #12）✅
```

**重要语义（必须随队列一起传播）**：队列 #11/#12（prev/next 兄弟导航）是用户**为构建性能主动删掉的**——
新文件头写明兄弟扫描在大 API 节上是二次复杂度，会把构建推过 GitHub 6 小时上限。
所以「恢复兄弟导航」与 `cc39aaf811`（渲染提速）**直接冲突**，不能当成单纯的回退来做。
worker-85 给出的建议顺序是：先 #14+#15，再在存在非二次实现时才做 #11+#12。

### 2.6 本轮登记的两条独立发现（非本线范围，待裁）

1. **`CONTRACT.md`（121,373 字节，项目主契约）处于未跟踪状态**：
   ```
   $ git ls-files --error-unmatch CONTRACT.md
   error: pathspec 'CONTRACT.md' did not match any file(s) known to git
   $ git check-ignore -v CONTRACT.md
   （未忽略）
   ```
   ⇒ 主契约文件从未进入版本库。`AGENTS.md` 与 `tools/_HANDOFF.md` 都指向它作为冲突仲裁依据，
   但它不在 git 里 —— 这是可复现的、独立于本线的事实，登记待裁。
2. **`nul` 是一个真实的 6,003,958 字节文件**（Windows 保留名 + 重定向事故产物）：
   ```
   $ ls -la nul          -> -rw-r--r-- 6003958 Oct  4 21:59 nul
   $ head -c 120 nul     -> {"tool": "tools/_src-manifest.mjs", "note": "Mechanical evidence only: member/signature/file:line/access...
   ```
   ⇒ 它是 `tools/_src-manifest.mjs` 的输出被写进了字面文件 `nul`，不是设备文件。**不提交**。

### 2.7 第 2 轮提交记录

```
commit b46a3cfdc53926189f7294ed03f0371ccda53aff
  release(tools): land the release ledger, gate measurement, snapshots and the nav-rework queue
  文件数 = 9
  A tools/_verify/NAV-REWORK-QUEUE.md
  A tools/_verify/RELEASE-CONTENT-CLASSIFY-rest.md
  A tools/_verify/RELEASE-CONTENT-CLASSIFY-v130en.md
  A tools/_verify/RELEASE-CONTENT-NUMSTAT-20261007T045759Z.txt
  A tools/_verify/RELEASE-GATE-auditlinks.txt
  A tools/_verify/RELEASE-LOG.md
  A tools/_verify/RELEASE-SNAPSHOT-20261007T043351Z.txt
  A tools/_verify/RELEASE-SNAPSHOT-20261007T045759Z.txt
  A tools/_verify/RELEASE-SNAPSHOT-20261007T050210Z.txt
push: 55658f4d9d..b46a3cfdc5  main -> main
push 后 origin/main = b46a3cfdc53926189f7294ed03f0371ccda53aff = HEAD, divergence 0 0
```

### 2.8 归属更正（Boss #10054）

本节 2.3 曾把 `tools/_verify/types-{1.4.5,1.4.6,1.5.3}.json`（各 ~2.9MB，05:01Z）
归给 lead-13 的导航线。**归属错了**：那是 **lead-11（覆盖普查线）** 的 `coverage-census.mjs` 产物
（`types-<ver>.json` + `tiers-<ver>-<lang>.json`，worker-75/76~79/96）。
导航线的产物形态是 `nav-*.{md,tsv,json}` / `_navC-*` / `_navX-*`，且 lead-13 在 #9754 广播的写入前缀是 `content/**/_index.md`。
**对结论的影响**：无。本轮只提交显式列名路径、从不用 `git add -A`，所以归属误判没有改变任何提交决定；
但「谁在写 tools/」这个事实必须按真实归属记，否则下一轮会对错误路径设限。

---

## 第 3 轮 · 2026-10-07（全站构建 + 新门禁）

### 3.1 🔴 全站构建：**实测跑完了**（与 Boss 收到的「被杀」口径相反，附原始输出）

背景：05:02 Boss 授权拿构建槽，05:03 又以「>15 分钟被杀」为由解除冻结。**那个「被杀」的观测不是本线的构建。**
本线的构建是**直接在前台 bash 里跑完的**：

```
$ rm -rf public
$ S=$(date +%s); zola build > tools/_verify/RELEASE-BUILD-zola.log 2>&1; E=$?; N=$(date +%s)
ZOLA_EXIT=0
ELAPSED_SEC=2011
--- full zola output ---
Building site...
-> Creating 38486 pages (30 orphan) and 538 sections
Done in 2009.4s.
--- end ---
测量时点：2026-10-07T05:05:09Z 开始，2026-10-07T05:39:07Z 结束
HEAD（前后一致）= b46a3cfdc53926189f7294ed03f0371ccda53aff
```

原始日志：`tools/_verify/RELEASE-BUILD-zola.log`（70 字节，逐字如上）。
**`zola build` 在本环境 exit 0 跑完，耗时 2011 秒（约 33.5 分钟）。**

**为什么先前会看到「>15 分钟被杀」**：本线的后台 monitor（MonitorCreate）在这个环境里**跑不了**——
它的 shell 是 cmd 而不是 bash，`cd /c/WorkSpace/...` 直接失败。实测：

```
Monitor #1 [error] ... — 0 lines (12m)      ← 第一次 audit-links 尝试
Monitor #2 [error] ... — 0 lines (18s)      ← 第一次 zola build 尝试
```

两个 monitor 都是 **0 行输出即报错**，构建根本没起来。改成前台 bash 直跑后一次成功。
⇒ 以后本环境不要用 MonitorCreate 跑需要 bash 路径的命令；这是环境限制，不是构建问题。

### 3.2 Boss 口径（#10069）——已按此执行

```
构建跑不完 ⇒ 它不是门禁，也不能当让写作线停手的理由。
门禁用 node tools/audit-links.mjs（要求 BROKEN_LINKS=0）+ 两个 orphan 工具，秒级可测。
完整构建放到最后、所有写作线确认停手之后、长超时后台跑一次，由 Boss 下达暂停令，不要自行推断冻结。
nav 恢复的前后耗时证据改用有界读数：zola build 的 `-> Creating N pages (M orphan)` 那一行，
pre/post 各一次，标注「page-creation 阶段读数，非完整构建」。
```

**执行**：不再为构建冻结任何写作线；本轮把构建读数当**有界证据**用，不当门禁。
可引用的有界读数（pre-nav 基线）：`-> Creating 38486 pages (30 orphan) and 538 sections`。
（对照：导航线 04:39 在**merge 之前**的树上也得到同一行 `38486 pages (30 orphan)`。）

**给下一轮的警告**：因为写作线在本轮构建期间**恢复写入**（见 3.3），38486 这个页面数是
一个**移动靶上的读数**，不是「静止树的确定性事实」。引用时必须带这个限定。

### 3.3 构建窗口内发生的写入（含一个真实回归）

构建从 05:05:09Z 跑到 05:39:07Z。窗口内工作区从 3510 条涨到 3745 条。
新增的 content 条目（`git status` 实测）：

```
 M content/v1.3.0/en/api/mission/_index.md
 M content/v1.3.0/zh/api/mission/_index.md
 M content/v1.3.15/en/architecture/_index.md
 M content/v1.3.15/en/native-1.3.15-src/COMPLETE-FUNCTIONS.md
 M content/v1.3.15/zh/architecture/_index.md
 M content/v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS.md
 M content/v1.4.5/zh/api/save-system/_index.md
 M content/v1.4.5/zh/api/system/_index.md
 M content/v1.4.5/zh/architecture/_index.md
 M content/v1.4.7/en/api/engine/_index.md
?? content/v1.3.15/en/architecture/gamemodel-decorator.md
?? content/v1.3.15/zh/architecture/gamemodel-decorator.md
D  content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt     ← 注意第一列是 D = 已 staged
D  content/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt     ← 同上
```

⚠️ **两条必须记下的事实**：

1. **工作区里有 2 条被「staged」的删除**（`D ` 第一列），是某条写作线跑了 `git add`/`git rm` 的结果，
   不是本线做的（本线在 05:03 检查时 staged count 还是 0）。
   **本线因此改用 `git commit -- <显式路径>` 形式**，避免把这两条删除卷进任何提交。
2. **这两条删除把门禁推红了**：`COMPLETE-FUNCTIONS.md` 仍指向 `./ALL-FUNCTIONS-LIST.txt`，
   于是门禁从 `BROKEN_LINKS=1` 变成 `BROKEN_LINKS=2`（见 3.4）。这是**窗口内新引入的回归**，
   不是基线缺陷，也不是本线造成的。

### 3.4 门禁读数（构建后，同一 HEAD）

```
$ node tools/audit-links.mjs
exit=1
FILES=39027
TOTAL_LINKS=149005
AUDIT_MODE=url
BROKEN_LINKS=2
RESOLVE_OK_URL=148819
RESOLVE_OK_FILE=110101
RESOLVE_OK_EITHER=148819
RESOLVE_OK_BOTH=110101
RESOLVE_URL_ONLY=38718
RESOLVE_FILE_ONLY=0
RESOLVE_NEITHER=2
FILES_WITH_BROKEN=2

## v1.3.15/en/native-1.3.15-src/COMPLETE-FUNCTIONS.md  (1)
   -> ./ALL-FUNCTIONS-LIST.txt
## v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS.md  (1)
   -> ./ALL-FUNCTIONS-LIST.txt
```

**门禁状态：红，`BROKEN_LINKS=2`（比 merge 后的 1 条多了 1 条新回归）。**
按 Boss #9980 的前置条件「提交 content 之前必须先确认 `BROKEN_LINKS=0`」——
**该前置条件当前不满足，因此本线不提交任何 `content/**` 改动**（包括已通过作用域门禁的 `_index.md` 批）。

### 3.5 新增门禁：`_index.md` 作用域检查（Boss #10033 要求，可复跑）

工具：`tools/_verify/check-section-index-scope.mjs`（exit 0/1/2，fail-closed）。
判定方法（不是采样，是逐文件全量）：取 HEAD 版与工作区版，**两边都删掉
`<!-- BEGIN SECTION INDEX -->`…`<!-- END SECTION INDEX -->` 块，再逐字节比较**。
余量相同 ⇒ 所有差异都在块内 ⇒ IN-SCOPE；否则 OUT-OF-SCOPE。

```
$ node tools/_verify/check-section-index-scope.mjs
checked=31 out_of_scope=8   (exit=1)
```

| 判定 | 数量 | 文件 |
|---|---|---|
| IN-SCOPE | 23 | 见 `tools/_verify/RELEASE-GATE-index-scope.txt` 全文 |
| OUT-OF-SCOPE | 6 | `v1.4.5/en/api/campaign/_index.md`（第 1 行）· `v1.4.5/en/api/final/_index.md`（第 10 行）· `v1.4.5/en/api/mission/_index.md`（第 58 行）· `v1.4.5/zh/_index.md`（第 2 行）· `v1.4.6/en/architecture/_index.md`（第 2 行）· `v1.4.7/en/api/engine/_index.md`（第 3 行） |
| NEW | 2 | `v1.5.3/zh/api/localization/_index.md` · `v1.5.3/zh/api/storymode/_index.md`（不在 HEAD 里 = 新页 = 写正文，窄口外） |

**结论**：31 个里有 **8 个越出窄口**。按 Boss 裁定，这 8 个**一律不提交**，逐条列在本表；
只有 23 个 IN-SCOPE 的可以提交，且 commit message 必须写
「section index only, authorized narrow exception」+ 授权出处。
**但因为 3.4 的 `BROKEN_LINKS=2`，本线本轮连这 23 个也一并暂缓**，等门禁回绿。

### 3.6 Boss 对两条独立发现的裁定（#10033）

| 发现 | 裁定 | 本线动作 |
|---|---|---|
| `CONTRACT.md`（121,373 B，主契约）未跟踪、从未进版本库 | **授权作为独立 checkpoint 提交**，message 写明「project contract, previously untracked; content unchanged」，**不得改正文** | 见 3.7 提交记录 |
| `nul`（6,003,958 B JSON 重定向事故产物） | 确认为 STRAY：**不提交、不删除**，在台账登记一行 | 已登记于 2.6；未提交、未删除 |

### 3.7 第 3 轮提交记录

```
commit 3ca61ac8eb   (COMMIT A — 独立 checkpoint，Boss #10033 授权)
  docs: land the project contract (CONTRACT.md), previously untracked
  files = 1   A CONTRACT.md
  （逐字节原样提交，未改一字；按 Boss 要求 message 写明 previously untracked; content unchanged）

commit 7b8b9880d2   (COMMIT B — 台账 + 门禁证据)
  release(tools): round-3 ledger, the full-site build reading, and the _index.md scope gate
  实际内容 = 9 条：
    A tools/_verify/RELEASE-BUILD-zola.log
    A tools/_verify/RELEASE-CONTENT-COMMIT-GATE.md
    A tools/_verify/RELEASE-GATE-index-scope.txt
    A tools/_verify/RELEASE-SNAPSHOT-20261007T054222Z.txt
    A tools/_verify/check-section-index-scope.mjs
    M tools/_verify/RELEASE-GATE-auditlinks.txt
    M tools/_verify/RELEASE-LOG.md
    D content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt   ← 意外
    D content/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt   ← 意外

push: b46a3cfdc5..7b8b9880d2  main -> main
push 后 origin/main = 7b8b9880d2a56761497d828c9cc800159a362472 = HEAD, divergence 0 0
```

### 3.8 🔴 自报错误：COMMIT B 的信息与实际内容不符

**错误**：COMMIT B 的 message 写了「No content/** in this commit. No git add -A. Pathspec-limited commits only.」，
但它**实际包含了 2 个 content 删除**（见 3.7 的 D 行）。

**根因（操作错误，不是环境）**：本线自定的规则是「用 pathspec-limited commit 绕开写作线那 2 条 staged 删除」。
COMMIT A 确实用了 `git commit -- CONTRACT.md`；**COMMIT B 只写了 `git commit -q -F -`，漏了 `-- <paths>`**，
于是它提交了整个 index。规则执行漏了一步。

**影响（精确实测）**：

```
两个 119 字节文件从 HEAD 消失：
  content/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  content/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  原 blob = 47c2d90be567b954ccd58b8a1f4e424f919710d1（两份同 blob）
在 HEAD?   NO    在 HEAD~1?  YES   内容未丢，可完整取回
已推送：git merge-base --is-ancestor 7b8b9880d2 origin/main = YES
```

**性质说明（不修饰）**：这 2 条删除**本来是写作线的意图**（是它 staged 的，文件正在被 `COMPLETE-FUNCTIONS.md` 取代），
本线只是把它的**半成品步骤**提前发布了。所以不是「删了别人的东西」，而是「发布了别人的半成品删除」。
但门禁因此红在 `BROKEN_LINKS=2`，**且 commit message 与实际内容不一致**——后者是更严重的那一半。

**已做的**：自报给 Boss（#10940），并给出两条修复路径，其中需要写 `content/`，超出本线授权，等裁定：
- (A) 授权本线机械还原（非写作，仅按原 blob 恢复，不改一字）
- (B) 交写作线收尾：把 `COMPLETE-FUNCTIONS.md` 的链接改到新页，删除即为最终状态

**流程修正（已生效）**：后续所有提交一律 `git commit -- <显式路径>`，并在每次提交后用
`git show --name-status` 自检，把实际内容与 message 逐条对账，不依赖假设。

### 3.9 环境限制两条（Boss #10102 要求写入，避免下一个人再引用）

1. **本环境的 MonitorCreate 跑不了需要 bash 路径的命令**：它的 shell 是 cmd.exe，`cd /c/WorkSpace/...` 直接失败。
   实测两个 monitor 都是 **0 行输出即报错**：
   ```
   Monitor #1 [error] ... — 0 lines (12m)   ← audit-links 尝试
   Monitor #2 [error] ... — 0 lines (18s)   ← zola build 尝试
   ```
   ⇒ **monitor 版全站构建从未起来**。前台 bash 直跑一次成功（3.1）。
2. **导航线 04:39 那次完整构建早于 merge**（merge 在 04:43 改的 templates）。
   它给出 `38486 pages (30 orphan)`，与 merge 后本线的读数相同，但它**不是 merge 后的读数**。

### 3.10 剩余工作区（本轮结束）与原因分类

```
worktree entries = 3743    (本轮开始时 3509)
staged = 0
```

| 类别 | 数量（约） | 为何不提交 |
|---|---|---|
| `content/**` 逐页类改动（含已过作用域门禁的 23 个 `_index.md`） | ~3400 | 前置条件不满足：Boss #9980 要求提交 content 前 `BROKEN_LINKS=0`，当前 = 2 |
| `content/**` 越出窄口的 `_index.md`（3.5 的 6 个 OUT-OF-SCOPE + 2 个 NEW） | 8 | 窄口外（写正文/新页），一律不提交，逐条已列 |
| 写作线 / 普查线正在写的 `tools/**` 与 `tools/_verify/**` 产物 | ~180 | 在写，归属不同线（lead-11 的 `types-*.json`、lead-13 的 `nav-*`） |
| `tools/_verify/` 下本线自己的证据与台账 | 已提交 | — |
| `nul`（6,003,958 B） | 1 | STRAY，Boss 裁定不提交、不删除 |
| `_zola_*.log`、`_tmp_ab.mjs`、`_probe_af.mjs`、`.rev145tmp/` | ~6 | STRAY（构建日志 / 临时文件；`.rev145tmp/` 267MB 且被 gitignore） |

### 3.11 worker 产物清单与验收状态（含失败登记）

| 产物 | 行数 | 验收 |
|---|---|---|
| `RELEASE-CONTENT-CLASSIFY-v130en.md` | 132 | 已开文件核；含 6 条「未确定」 |
| `RELEASE-CONTENT-CLASSIFY-rest.md` | 172 | 已开文件核；含「未确定」 |
| `RELEASE-CONTENT-COMMIT-GATE.md` | 288 | 已开文件核；BANNER 2194（75 例外）/ NONBANNER 1201（21 结构例外） |
| `NAV-REWORK-QUEUE.md` | — | **已独立复核 3 条关键断言，全部成立** |
| `RELEASE-TOOLS-CLASSIFY.md` | 273 | 已开文件核；112 行中仅 29 行实测，**83 行标 NOT MEASURED** |
| `RELEASE-CONFLICT-TEMPLATES.md` | — | **不单独创建（Boss #10710 裁定）**：该计划名的内容已由 `NAV-REWORK-QUEUE.md` 交付（55 行，worker-85，Boss 已验收）——它就是「6 个冲突文件的差分 + 丢失导航行为逐项登记（文件/宏位置 + 读者后果）」。**不再派 worker 造第二个文件，避免重复。** 原 worker-71 两次 settle 未落盘，已放弃。 |

**worker 失败统计（如实）**：tools 分类任务换了 3 个 worker（worker-74 → 放弃；worker-91 成功但只测 29/112）。
失败形态是「无限采集、不落盘」，不是环境报错。

### 3.12 未决定项（交给下一轮）

1. **COMMIT B 的 2 条意外删除**：等 Boss 裁定走 (A) 机械还原还是 (B) 写作线收尾。
2. **`BROKEN_LINKS` 归零**：当前 2 条（`SellGoodsForTradeAction.md:33` 的 `./SellItemsAction` 基线 1 条 + 
   `ALL-FUNCTIONS-LIST.txt` 新回归 1 条）。归零前不提交任何 content。
3. **83 行 NOT MEASURED 的 tools 路径**：未分类，不能当已处理。
4. **本线从未提交过任何 content/**：至本轮结束，content 的 3395 项仍全在工作区。

### 3.14 🔴 归因更正（Boss #11033）——删除的授权出处

本节 3.8 曾写「这 2 条删除本来是**写作线的意图**……我只是把**别人的半成品**删除了」。
**这个归因是错的，而且方向相反**，必须更正（不改历史，改记录）：

```
那 2 条删除是【Boss 的裁定】——Path A（#10714），三条硬条件，
由【导航线的 worker I2】执行（git rm + 复测），是一条【已完成、已授权】的动作，
不是「写作线的半成品」，也不是「别人的东西」。
⇒ 内容是对的，删除是终态。若记成「半成品」，下一个人会以为发生过一次未授权删除。
```

**仍然成立的那一半**（这才是真正的缺陷）：`7b8b9880d2` 的 message 声称
「No content/** in this commit. No git add -A. Pathspec-limited commits only.」，
**与实际内容不符**（它含 2 条 `D`）。根因是本线漏写 `git commit -- <paths>` 的 pathspec。
本仓禁止 force-push，所以**以本条记录更正，不改写已推送的历史**。

Boss 裁定选 **(B)**：不还原、不改写历史、不 force-push。理由（引用 Boss 原话意思）：
还原 2 个 119B 垫片 = 把 `static/` 那份 166KB 真列表重新盖成死文件，
等于「为了簿记整齐去恢复一个已实测的线上缺陷」。

**独立实测确认了 static/ 那一半**：
```
$ ls -la static/v1.3.15/en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  -rw-r--r-- 1 ModerRAS 197609 166428 Jun 21 20:34 .../en/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
$ ls -la static/v1.3.15/zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
  -rw-r--r-- 1 ModerRAS 197609 166428 Jun 21 20:34 .../zh/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt
```
⇒ 真列表在 `static/`（166,428 B），Zola 原样发布 `static/`，所以该 URL 实际可达；
门禁只解析 `content/` 是它的**覆盖缺口**，不是内容缺陷。

**链接形态已由导航线修好**（本线独立实测，非转述）：
```
$ grep -n 'ALL-FUNCTIONS-LIST' content/v1.3.15/{en,zh}/native-1.3.15-src/COMPLETE-FUNCTIONS.md
  en/.../COMPLETE-FUNCTIONS.md:18:| Full list | [ALL-FUNCTIONS-LIST.txt](../ALL-FUNCTIONS-LIST.txt) |
  zh/.../COMPLETE-FUNCTIONS.md:22:| 完整列表 | [ALL-FUNCTIONS-LIST.txt](../ALL-FUNCTIONS-LIST.txt) |
```
（已从 `./` 改成 `../`。）剩下的 `static/` 覆盖缺口按 Boss #10920 走 **known-failures 登记**（登记、非屏蔽；
`tools/data/known-failures-links.json` 存在且已跟踪）。

### 3.15 🔴 门禁实测：`BROKEN_LINKS=51`，不是 2，也不是 0

Boss #11051 期待「这两步落地后 BROKEN_LINKS 应为 0」。**实测不是。**
本线在 HEAD=`2a2e94118d`、2026-10-07T05:50:45Z 实测：

```
$ node tools/audit-links.mjs
exit=1
FILES=39031
TOTAL_LINKS=149077
AUDIT_MODE=url
BROKEN_LINKS=51
RESOLVE_OK_URL=148840
RESOLVE_OK_FILE=110149
RESOLVE_OK_EITHER=148884
RESOLVE_OK_BOTH=110105
RESOLVE_URL_ONLY=38735
RESOLVE_FILE_ONLY=44
RESOLVE_NEITHER=7
FILES_WITH_BROKEN=7
```

全部 51 条（7 个文件），逐条如下（这是提交 content 前置条件未满足的**真实规模**）：

| 文件 | 条数 | 目标 |
|---|---|---|
| `v1.3.0/zh/api/campaign/DefaultAgeModel.md` | 3 | `../AlleyCampaignBehavior` · `../CommonTownsfolkCampaignBehavior` · `../ClanMemberRolesCampaignBehavior` |
| `v1.3.15/en/architecture/campaign-event-system.md` | 14 | `../api/campaign/Campaign/` · `../api/campaign-ext/{CampaignEventDispatcher,CampaignEventReceiver,CampaignBehaviorBase,MbEvent,IMbEvent,ReferenceMBEvent,CampaignGameStarter,CampaignEvents}/` · `../api/save-system/SaveManager/` · `./module-system` · `./save-system` · `./sdk-overview` · `./crash-boundaries` |
| `v1.3.15/en/architecture/mission-lifecycle.md` | 1 | `../../api/mission/MissionState/` |
| `v1.3.15/en/native-1.3.15-src/COMPLETE-FUNCTIONS.md` | 1 | `../ALL-FUNCTIONS-LIST.txt`（= 3.14 的 `static/` 覆盖缺口） |
| `v1.3.15/zh/architecture/campaign-event-system.md` | 14 | 同 en 那份 |
| `v1.3.15/zh/architecture/mission-lifecycle.md` | 1 | 同 en 那份 |
| `v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS.md` | 1 | 同 en 那份 |

**读数漂移警告**：本线在同一 HEAD 附近短时间内测到 **2 → 49 → 51** 三个值（`FILES` 39027 → 39029 → 39031）。
写作线在并发写入，所以这是一个**移动靶**。任何引用都必须带时点。
**趋势**：不是「快归零了」，而是「在变多」——新增的 `architecture/campaign-event-system.md` 一类新页带来 28 条，
形态集中在两种：尾斜杠（`../api/campaign/Campaign/`）与 `./` 同行页写法（`./module-system`）。

### 3.16 本线自报：作用域门禁的 CRLF 假阳性已修（修前/修后都保留）

**缺陷**：`check-section-index-scope.mjs` 直接比较 `git show HEAD:<path>`（blob，LF，
因 `.gitattributes` 对 `content/**` 规定 `eol=lf`）与 `readFileSync`（工作区字节，常为 CRLF）。
两者直接比 → **每一行都不同** → 门禁在**第 1 行**就报 OUT-OF-SCOPE，
即使该文件完全在块内。这是最坏的一类假阳性：它**指控导航线越界**。

**修法**（遵循项目规则「表示层归一化先行」）：比较前先 `\r\n → \n`，并把**原始比较结果也一并报告**，
让行尾差异可见而不是被隐藏。修前/修后对 31 个文件的**判定结论完全相同**（23 in-scope / 6 out / 2 new），
**只有报告的行号与理由变得可信**（例如 campaign/_index.md 的「第 1 行」实为**第 103 行**）。

### 3.17 6 个 out-of-block `_index.md` 的逐条归因（Boss #10928 要求）

判定口径：本会话开工 ≈ 2026-10-07T04:33Z；**mtime 早于该时刻 ⇒ 甲（本会话前的存量）**。
`??` 与 `M` 分开算。

| # | 路径 | 只落在 marker 块内？ | mtime | 属本会话前存量？ | 归因 |
|---|---|---|---|---|---|
| 1 | `content/v1.4.5/en/api/campaign/_index.md` | 否（归一后第 103 行） | 2026-10-03 22:18:38 +0800 | 是（在 snap1 里） | **甲** |
| 2 | `content/v1.4.5/en/api/final/_index.md` | 否（第 10 行） | 2026-10-05 00:25:02 +0800 | 是（在 snap1 里） | **甲** |
| 3 | `content/v1.4.5/en/api/mission/_index.md` | 否（第 58 行） | 2026-10-03 22:18:38 +0800 | 是（在 snap1 里） | **甲** |
| 4 | `content/v1.4.5/zh/_index.md` | 否（第 2 行） | 2026-10-03 20:42:16 +0800 | 是（在 snap1 里） | **甲** |
| 5 | `content/v1.4.6/en/architecture/_index.md` | 否（第 2 行） | 2026-10-05 00:25:02 +0800 | 是（在 snap1 里） | **甲** |
| 6 | `content/v1.4.7/en/api/engine/_index.md` | 否（第 3 行） | **2026-10-07 13:13:52 +0800 = 05:13:52Z** | **否（不在 snap1 里）** | **乙** |

**#6 是唯一一个乙**（本会话内写到了块外），其块外 diff 是 frontmatter `description:` + 正文计数句
（`0 pages in this tree` → `1 page in this tree`）。**本线未自行回滚**（Boss #10928：回滚是拿破坏换整齐）。
写入方归属：mtime 落在本会话构建窗口内，本线**无法确定是哪条线**，按 Boss 要求列清单待裁。

**另需澄清一处口径混淆**：Boss #10928 说「那 2 个 out-of-scope 的新页（`gamemodel-decorator.md` ×2）」。
实测这是**两对不同的东西**，不能合并：

```
?? content/v1.3.15/en/architecture/gamemodel-decorator.md   ← Boss 说的那一对（纯新增页）
?? content/v1.3.15/zh/architecture/gamemodel-decorator.md
?? content/v1.5.3/zh/api/localization/_index.md             ← 本线门禁报的 NEW 那一对（不在 HEAD 的 _index.md）
?? content/v1.5.3/zh/api/storymode/_index.md
```

前一对不属本门禁范围（不叫 `_index.md`）；后一对才是门禁的 2 个 NEW（新建整页 = 写正文，窄口外）。

### 3.18 known-failures 登记（Boss #10920/#11090 派单，已完成）

**提交：`aa49698fb6`**（单独一个 commit，遵该文件自己的 `$how_to_raise`：「commit that single file on its own」）。
手写登记，**不是 `--emit-baseline`**：只写目标真的存在于 `static/` 的那 2 条。

**登记理由的验证方式（不是信文档，是阳性对照）**：

```
先试了「看构建产物」： public/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt 不存在
  ⇒ 但进一步查： public/ 里连 shell.css 都没有，static/ 一个文件都没被拷进去
  ⇒ 当前 public/ 是一次【被杀掉的构建】的残留（zola 把 static 拷贝放在最后），
    所以它【两边都不能作证】。这个发现本身要记下来。
再跑阳性对照（最小 fixture，秒级）：
  static/probe.txt + static/sub/dir/nested.txt  →  zola build  →
    public/probe.txt 与 public/sub/dir/nested.txt 逐字节相同（zola 0.22.1）
  ⇒ 证实 zola 【确实】把 static/ 原样发布（含子目录）
  ⇒ 所以 static/v1.3.15/{en,zh}/native-1.3.15-src/ALL-FUNCTIONS-LIST.txt（166,428 B）
    在【完整构建】里确实可达；两把尺都只在 content/ 里解析目标，是尺的覆盖缺口。
```

**登记前 / 登记后（两套数，都是实测）**：

```
                          before            after
_check_links_exist.mjs    net new dead=35   net new dead=33
                          registered=0      registered=2
                          51 total dead     51 total dead (35 unique pairs)
                          35 unique pairs

audit-links.mjs           BROKEN_LINKS=51   BROKEN_LINKS=51   ← 【未变，设计使然】
```

**「只有这 2 条被新解析掉」的证明**：登记后仍是 `51 total dead (35 unique pairs)`，
只有 `registered` 从 0 变 2、`net new` 从 35 降 33 —— 即**只有这 2 对**改了状态，其余 33 对仍是 net-new。

### 3.19 🔴 两条必须更正 Boss 前提的事实

1. **`audit-links.mjs` 读【没有任何】baseline 通道，所以「登记后 BROKEN_LINKS=0」不可达**。
   ```
   $ grep -nE 'known|baseline|allow|failures' tools/audit-links.mjs
   （无任何匹配）
   ```
   baseline 属于**另一把尺** `tools/_check_links_exist.mjs`（`BASELINE_FILE = tools/data/known-failures-links.json`，
   `_check_links_exist.mjs:88`）。两把尺的谓词也不同：audit-links 数 `BROKEN_LINKS`；
   `_check_links_exist` 判「dead 不增长」（net_new = 当前集 MINUS 基线集，按 (page,href) 逐项比）。
   ⇒ 登记能让**后者**的 net_new 降 2，**永远不能**让前者的 BROKEN_LINKS 归零。
   要让 audit-links 归零，只有两条路：真修好那 47 条，或给 audit-links 新增 baseline 通道（= 改判据，Boss 已要求先报不自行改）。
2. **计数在【上升】，不是快归零**。本线在同一个登记 commit 前后数分钟内测到：
   ```
   _check_links_exist net new dead:  35  →  33（登记生效）  →  38（几分钟后，写作线继续写新页）
   total dead unique pairs:          35  →  35            →  40
   audit-links BROKEN_LINKS:         51  →  51            →  （同步上升）
   ```
   ⇒ 「47 条写作线新页断链」也是一个**移动靶**。任何「登记后应为 0」的验收都需带时点与 SHA。

### 3.20 CRLF 修复的边界（Boss #11226 要求带纪律）

Boss 担心「CRLF 修复会把真缺陷也一起修掉」。**不会，且可证明**：
本线的 CRLF 修复只动 `tools/_verify/check-section-index-scope.mjs`（`_index.md` 作用域门禁），
**与 `audit-links.mjs` 无关**——后者本线一字未改（`git log -- tools/audit-links.mjs` 无本线提交）。

```
修前/修后对 31 个 _index.md 的判定【完全相同】：23 IN-SCOPE / 6 OUT-OF-SCOPE / 2 NEW
变的只有报告的行号与理由：
  campaign/_index.md: 「第 1 行」→ 「第 103 行」（第 1 行是 CRLF 假阳性）
未改任何阈值/白名单（该文件里没有阈值可改）。
```

### 3.21 build done 广播（补记）

本循环要求「构建完成后广播 build done」。**广播已发，但之前只存在消息里、没进台账**，现在补上：

```
发送对象：lead-13（#10971）、并在给 boss-3 的状态回执里一并说明
发送时间：2026-10-07T05:46:40Z（构建结束于 05:39:07Z，即广播在结束 7 分钟后）
内容：exit 0 / 2011s / 38486 pages (30 orphan) / HEAD=b46a3cfdc5，原始日志路径，
      并带两条限定：(a) 构建期间写作线已在恢复写入 ⇒ 移动靶读数；
      (b) 门禁当时已红（BROKEN_LINKS=2），其中一条是新回归。
```

**必须如实记下的时序问题**：Boss 在 05:03 就解除了写入冻结（#9979/#10068），
lead-13 随后在 #10056/#10057 放行修复轮 —— 也就是**写作线在本线广播「build done」之前已经恢复写入**。
所以这次广播**不是**解除冻结的动作（冻结早已由 Boss 解除），它只是「构建已结束」的通知。
把它记成「冻结直到我广播」会是一个错误陈述，下一轮不要这样引用。

### 3.22 判据变更：`audit-links.mjs` 放宽解析目标空间（Boss #11426 授权）

**变更类型：甲类（尺坏了 ⇒ 修尺），不是乙类（把缺陷登记掉）。**

Boss #11426 原话要点：
```
✗ baseline 通道 / 白名单 / known-failures ⇒ 那是【把缺陷登记掉】= 掩盖
✓ 授权的是【放宽解析目标空间】：content/ 解析失败时，再在 static/<同相对路径> 查一次
  ⇒ 真正坏的链接仍然报 broken（负对照必须证明这一点）
```

**改了什么**（`git diff --stat tools/audit-links.mjs` = 59 insertions / 1 deletion，其中大部分是注释）：
```
+ const REPO_ROOT = resolve(join(root, '..'));
+ const STATIC_DIR = join(REPO_ROOT, 'static');
+ contentRel(t)       // t 相对 content/ 的相对路径
+ existsAsStatic(t)   // static/<同相对路径> 是否存在
  循环里：仅在 found === false 时才查 static/；命中则 okStatic++ 且不算 broken
+ RESOLVE_STATIC 计数器（新增，只增不改）
+ 一行 NOTE 解释 RESOLVE_NEITHER 是 content-only 口径
```
**未动**：任何阈值、白名单、known-failures 通道、`MODE` 语义、`exitCode` 规则。
（机械核对：`git diff -- tools/audit-links.mjs | grep -E '^[+-]' | grep -E 'threshold|allow|white|known|skip|ignore|MODE *=|exit'`
只命中我自己写的注释行。）

**Boss 五条条件的逐条落地**：

| # | 条件 | 落地证据 |
|---|---|---|
| 1 | 只放宽解析范围 | 见上；负对照见 #3 |
| 2 | 报两套数 + 逐条证明只有那 2 条变化 | 54 → 52（occurrences）；unique pair 34 → 32，**移走的正好是 2 条 `../ALL-FUNCTIONS-LIST.txt`，新增集为空** |
| 3 | 正/负对照 | 见下 |
| 4 | lead-13 独立复现 | 已请（待回） |
| 5 | 登记为判据变更 | 本节 |

**正/负对照（用真工具、真 fixture，`AUDIT_CONTENT_ROOT` 指向临时 content）**：
```
fixture: content/probe.md 含两条链接；static/static-probe-real.txt 存在，static-probe-missing.txt 不存在
$ AUDIT_CONTENT_ROOT=<probe>/content node tools/audit-links.mjs
FILES=1
BROKEN_LINKS=1        ← 只有 missing 那条
RESOLVE_STATIC=1      ← real 那条被 static/ 解析掉（正对照成立）
RESOLVE_NEITHER=2
## probe.md  (1)
   -> ../static-probe-missing.txt      ← 负对照成立：static 里不存在就【仍然报 broken】
```

**真实树上的 before / after（同一棵树、同一时刻，HEAD=`62926c297e`）**：

```
                        BEFORE(HEAD 版尺)   AFTER(放宽后)
FILES                   39033               39033
TOTAL_LINKS             149140              149140
BROKEN_LINKS            54                  52
RESOLVE_STATIC          (不存在)            2
RESOLVE_NEITHER         2                   2
FILES_WITH_BROKEN       4                   2
```

**“只有那 2 条变化”的机械证明**：
```
$ comm -23 <before broken-set> <after broken-set>     # 只出现在 before = 新解析掉
   -> ../ALL-FUNCTIONS-LIST.txt
   -> ../ALL-FUNCTIONS-LIST.txt
## v1.3.15/en/native-1.3.15-src/COMPLETE-FUNCTIONS.md  (1)
## v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS.md  (1)
$ comm -13 <before> <after>                            # 只出现在 after = 新断链
（空）
```
**推断闭合**：occurrences 降 2；unique pair 降 2 且新增集为空 ⇒ 被移走的 occurrence 就是那 2 对，
不存在「移走一条又新增一条使 unique 集不变」的替换。

### 3.23 ⚠️ 一个会误导人的输出细节（本线自查发现）

上面的 `## <file> (N)` 里的 **N 是【该文件内去重后的 href 数】**，不是 occurrence 数：
```js
const hs = [...new Set(byFrom[f])];
console.log('\n## ' + f + '  (' + hs.length + ')');
```
所以会出现「列表里数出来 32 条，但 `BROKEN_LINKS=52`」这种看起来矛盾的输出。
实测：after = 2 个文件 × 16 unique = 32 unique，但 occurrences = 52（同一文件内 href 有重复）。
**这不是打印截断**（本线先怀疑是 cap，读了源码才发现是 per-file dedup）。
引用这个列表时必须用 `BROKEN_LINKS` 做总量，用列表做归属，不能把两者相加比较。

### 3.24 与 Boss 报的数字不一致的原因

Boss #11446 报 `BROKEN_LINKS=65 / FILES_WITH_BROKEN=7`；本线在 HEAD=`62926c297e`、
2026-10-07T06:10:10Z 实测 before=54 / after=52、FILES_WITH_BROKEN=4。
差异**不是矛盾**：写作线在并发修链（Boss 也报了 112→65 的下降），这是移动靶。
⇒ 引用时**必须带 SHA 与时点**；Boss 要求的「65 → 63」应以**同一时刻的两把尺**重测。

### 3.25 证据入库 checkpoint（Boss #11545 / #11639）

**动机**（Boss 立规则的触发事件）：`nav-I-scope-decisions.md` 被孤儿角色 worker-110 覆盖后**不可回放**
（从未进 git、无副本）。规则：**凡下一轮会被引用的产物必须在产出后尽快提交，或改版即改名留档。**

**4 个主题批次，`content/**` 全程为 0**（每批提交后用 `git show --name-only | grep -c '^content/'` 自检，均为 0）：

| 批 | 主题 | SHA | 文件数 | message 首行 |
|---|---|---|---|---|
| A | 导航线 | `d24dc2db7d` | 54 | `evidence(nav): checkpoint the navigation line's evidence, reports and writer` |
| B | 普查线 | `5634731afe` | 54 | `evidence(census): checkpoint the coverage census, type/tier inventories and queues` |
| C | 架构线 | `7b0a77df0c` | 4 | `evidence(arch): checkpoint the architecture plan and its census/evidence tables` |
| D | 发布线（分类背书数据） | `b3aba09401` | 6 | `evidence(release): checkpoint the backing data for the content commit gate` |
| E | H0 执行器 | 见下 | 1 | `chore(tools): land the H0 policy executor so the writing lines' checks are reproducible` |

**E 批（Boss #11639 点名）**：`tools/lib/handwritten-policy.mjs`（91+/3−）单独提交。
另外两个点名文件的**实测状态**（不是转述）：
```
tools/nav-section-index.mjs   在 HEAD? YES   （已随 A 批 d24dc2db7d 入库，现已 clean）
tools/nav-orphans.mjs         在 HEAD? YES   （已随 2a2e94118d 入库，keyOf 命中 9 处）
```
⇒ 写作线「补链」与 H0 检查所需的三个工具**现在都可从干净检出复现**。

**未提交且按裁定保持 untracked**：`tools/gen-nav-graph.mjs`（裁定「不采纳」；它仍在工作区，本线**未动、未提交**）。
`data/nav-graph.json`（33MB）已由 lead-13 删除，本线未重新生成。

**故意排除（并说明理由，避免被读成遗漏）**：
```
.cg-banner-diff.txt (1.0MB) / .cg-banner-sigs.txt (375KB) —— 纯 scratch，可由 .cg-numstat.txt 重生
nul / _zola_*.log / _tmp_ab.mjs / _probe_af.mjs / .rev145tmp/ —— STRAY，按裁定不提交、不删除
其他线的旧脚本（_contract-*、_ledger-*、_docs-review-*、_evidence-* 等）—— 不在 Boss 点名的主题内，未动
worker 临时文件（.tg-*、.audit-*）—— 本线 scratch，已自行清理
```

### 3.26 ⚠️ 顺序提醒（Boss #11639，直接影响 content 批次）

```
nav-section-index.mjs --dry-run 目前提议的新增项是那个【重复页】./campaign-events
⇒ 在 lead-13 删掉重复页之前，不要让任何 --apply 跑过 content/v1.3.15/*/architecture/，
  否则会把重复页接进索引（把一个待删页变成已入链页）。删完再 apply。
```
本线**不会**自己跑 `--apply`（写 content/ 不在本线授权内）；此条登记为顺序约束。

### 3.27 content 分批提交（前置条件已满足，Boss #11718/#11860）

**前置条件本线独立实测（不是转述）**：
```
$ node tools/audit-links.mjs
FILES=39033  TOTAL_LINKS=149146  BROKEN_LINKS=0  FILES_WITH_BROKEN=0
RESOLVE_STATIC=2  RESOLVE_NEITHER=2          exit=0
$ node tools/nav-orphans.mjs --by-parent
total_pages=39033  orphans=0
```
⇒ 从 112 → 65 → 52 → **0**，每步都有改前/改后读数。前置条件成立。

**新快照（第 6 轮）**：`tools/_verify/RELEASE-SNAPSHOT-20261007T063053Z.txt`
（3679 行；content 条目 3416 = 3406 modified + 10 untracked）。

**11 批，每批提交前做「staged 数 == 期望数」硬检查，提交后做 `git show --name-only | grep -vc '^content/'` 自检（全部为 0）**：

| 批 | 主题 | 文件数 | SHA |
|---|---|---|---|
| 1 | 导航 `_index.md` SECTION INDEX（**仅 in-scope 的 23 个**） | 23 | `b61d676d34` |
| 2 | v1.3.15 新页（4 页 × en/zh） | 8 | `80cb113456` |
| 3 | 自动生成免责横幅（全树） | 2191 | `8a71e7345a` |
| 4 | v1.3.0/en 重写+用法节 | 265 | `c54fbd2dc5` |
| 5 | v1.3.0/zh | 113 | `f9976e58cb` |
| 6 | v1.3.15/en | 58 | `2d3bd0b8ba` |
| 7 | v1.3.15/zh | 7 | `00fb520ea3` |
| 8 | v1.4.5/en | 133 | `bb8790674e` |
| 9 | v1.4.5/zh | 390 | `cc2df97504` |
| 10 | v1.4.6/zh | 80 | `6f9872f3cf` |
| 11 | v1.4.7/zh | 2 | `dcf330dc1c` |
| 12 | v1.5.3/zh | 138 | `b56b0ad2b1` |

合计 **3408** 文件；snapshot 的 3416 content 条目 − 3408 = **8**（见下）。

**仍留工作区：8 个 content 文件，全部是 `_index.md` 且全部因作用域门禁未通过而不提交**：
```
OUT-OF-SCOPE (6):
  content/v1.4.5/en/api/campaign/_index.md      (块外第 103 行)
  content/v1.4.5/en/api/final/_index.md         (第 10 行)
  content/v1.4.5/en/api/mission/_index.md       (第 58 行)
  content/v1.4.5/zh/_index.md                   (第 2 行)
  content/v1.4.6/en/architecture/_index.md      (第 2 行)
  content/v1.4.7/en/api/engine/_index.md        (第 3 行)   ← 唯一一个【本会话内】写到块外的（乙）
NEW (2):
  content/v1.5.3/zh/api/localization/_index.md  (不在 HEAD = 新建整页 = 写正文，窄口外)
  content/v1.5.3/zh/api/storymode/_index.md
```
证据：`tools/_verify/RELEASE-GATE-index-scope.txt`（checked=31 / in-scope=23 / out=6 / new=2）。

**两条本线主动更正的归因**：
1. **`campaign-events.md` 与 `campaign-event-system.md` 不是重复页**（Boss #11860 撤回删除令）。
   本线先前在 3.15/3.22 的叙述里跟随了「重复页」的说法（因为那是当时收到的裁定）；
   **现更正为：两页主题不同（总线机械原理 vs 三类协作心智模型），两页均保留**，
   已随第 2 批正常入库。
2. 第 3 批的 message **没有**写「统一横幅插入」，而是写「2194 项里 2119 主导形态 + 75 例外 / 4 种变体」——
   因为 worker-89 的实测推翻了「单一机械插入」的前提（§2.2）。

### 3.13 本轮结论（按覆盖边界写，不用「全部完成」）
**覆盖了**：merge 落地并推送（merge commit `55658f4d9d`，双 parent）；用户两个生产修复语义保留并核对；
台账/快照/门禁读数/分类产物落盘并推送（`b46a3cfdc5`、`3ca61ac8eb`、`7b8b9880d2`）；
全站构建前台跑完一次（2011s / 38486 pages / 30 orphan，标注为非静止树读数）；
新 `_index.md` 作用域门禁做成可复跑工具（31 查、23 in-scope、8 越界）；`CONTRACT.md` 入版本库。

**未覆盖 / 未做到**：content/** 一项未提交（前置门禁未满足）；
COMMIT B 带进了 2 条意外删除且 message 不实（自报中）；tools 分类有 83/112 未实测；
`RELEASE-CONFLICT-TEMPLATES.md` 交付失败；`BROKEN_LINKS` 仍为红；orphan 工具本轮**未运行**（只跑了 audit-links 与 zola）。

---

## 第 4 轮 · 2026-10-07（lead-21 接手 · 积压 content 分批入库 + 推送轮）

> **线主变更**：本文件此前由 lead-12 维护，lead-12 已卡死（RELEASE-LOG 1h20m 未写、无提交、
> 多条指令无回应、0 worker）。Boss 清除不工作的 lead 并重建，**本线现由 lead-21 维护**。
> 用户对这条线的原话：「**push 这个你一直 push 着就行，就是一天一次就可以**」。

### 4.1 起始状态（本线独立实测，非转述）

```
$ git status --porcelain -- content/ | wc -l                        -> 125
$ git status --porcelain -- content/ | grep -c '_index.md'          -> 104
$ git status --porcelain -- content/ | grep -v '_index.md' | wc -l  -> 21  (17 M + 4 ??)
$ git diff --cached --name-status | wc -l                           -> 0   (staged 干净)
$ git rev-parse HEAD                                                 -> 0f922d3c2117d9fb39106ebeaa29a432899480e5
$ git rev-parse origin/main                                          -> cd41e0c46902ead44749253fc22bd4aabb210bf1
$ git rev-list --left-right --count origin/main...main               -> 0	12   (本地领先 12，0 分叉)
```

**派单书写的「content/ 未提交 = 61 项，其中 _index.md = 40 项」是旧读数**，实测为 **125 / 104**。
本地那 12 个未推送 commit 全部是 `lead-145zh`（判定线）的 `tools/docs` commit，不是本线的。

**作用域门禁（`tools/_verify/check-section-index-scope.mjs`，全量 104 个改动 `_index.md`）**：
```
checked=104 out_of_scope=8
  IN-SCOPE      = 96   （v1.3.0=29 / v1.3.15=35 / v1.4.5=28 / v1.5.3=3 / versions=1）
  OUT-OF-SCOPE  = 6
  NEW           = 2
```
原始输出：`tools/_verify/RELEASE-GATE-index-scope-20261007.txt`（本线落盘）。

### 4.2 七批提交（每批「staged 数 == 期望数」硬检查 + 提交后 `git show --name-status` 对账）

| 批 | 主题 | 文件数 | SHA |
|---|---|---|---|
| 1 | 4 个 untracked 新架构页（`save-object-graph` / `ui-three-layers` × en/zh） | 4 | `885275125f` |
| 2 | v1.4.5/zh `campaign-ext` 动作页（加 `File.cs:line` 声明点引用） | 11 | `0bb3a7e566` |
| 3 | v1.3.0/zh campaign 模型页 5 + v1.3.15 `campaign-event-system` en/zh | 7 | `9c4fe47e74` |
| 4 | v1.3.0 桶 `_index.md`（仅 in-scope 29 个） | 29 | `9edb2072ec` |
| 5 | v1.3.15 桶 `_index.md`（仅 in-scope 35 个） | 35 | `7033bc3002` |
| 6 | v1.4.5 桶 `_index.md`（仅 in-scope 28 个） | 28 | `7af92f8c34` |
| 7 | v1.5.3 + versions 桶 `_index.md`（仅 in-scope 4 个） | 4 | `689ec23226` |

**合计 118 文件。** 每批提交后 `git show --name-only | grep -vc '^content/'` 自检（非 content 泄漏）**全部为 0**。

**批 1 是 Boss #13409 的优先入库请求**（4 个 `??` 新页在被跟踪前处于「可被静默覆盖且不可回放」状态；
同一路径的 `ui-three-layers.md` 本会话已被另一 worker 用 12946 B 版本覆盖过一次、不可恢复）。
**新页产出后优先入库已写为本线固定动作。**

### 4.3 门禁读数（提交前 / 提交后，同一把尺）

```
批 1 后：  $ node tools/audit-links.mjs
          FILES=39037  TOTAL_LINKS=149522  BROKEN_LINKS=0  FILES_WITH_BROKEN=0
          RESOLVE_STATIC=2  RESOLVE_NEITHER=2   exit=0

批 7 后：  $ node tools/audit-links.mjs
          FILES=39037  TOTAL_LINKS=149522  BROKEN_LINKS=0  FILES_WITH_BROKEN=0
          RESOLVE_STATIC=2  RESOLVE_NEITHER=2   exit=0

批 1 后：  $ node tools/nav-orphans.mjs --by-parent
          CALIBER=self-link-counts-as-inbound   total_pages=39037  orphans=0  orphan_parents=0

批 7 后：  $ node tools/nav-orphans.mjs --by-parent
          CALIBER=self-link-counts-as-inbound   total_pages=39037  orphans=0  orphan_parents=0
```

**双门禁在提交前后都是绿**（`BROKEN_LINKS=0` 且 `orphans=0`），提交没有引入任何断链或孤儿。

### 4.4 push

```
$ git push origin main
   cd41e0c469..689ec23226  main -> main
$ git fetch origin && git rev-parse origin/main
   689ec23226937475910111a09a591b396aa5fa27
$ git rev-parse HEAD
   689ec23226937475910111a09a591b396aa5fa27
$ git rev-list --left-right --count origin/main...main
   0	0
```

**本次 push 共 19 个 commit**（12 条继承自 `lead-145zh` 的未推送 commit + 本线 7 批），
fast-forward，**未使用 `--force`、未使用 `rebase`**，本地历史未被重写。

### 4.5 仍留工作区：8 个 `_index.md`，全部【不提交】（逐条列出）

```
OUT-OF-SCOPE (6)  —— 差异越出 marker 块 = 写了正文，窄口外
  content/v1.4.5/en/api/campaign/_index.md
  content/v1.4.5/en/api/final/_index.md
  content/v1.4.5/en/api/mission/_index.md
  content/v1.4.5/zh/_index.md
  content/v1.4.6/en/architecture/_index.md
  content/v1.4.7/en/api/engine/_index.md          ← 唯一一个【本会话内】写到块外的（乙）
NEW (2)           —— 不在 HEAD = 新建整页 = 写正文，窄口外
  content/v1.5.3/zh/api/localization/_index.md
  content/v1.5.3/zh/api/storymode/_index.md
```

**本线未自行回滚任何一个**（Boss #10928：回滚是拿破坏换整齐）。

### 4.6 乙类文件的调查（派单书②，实测结论）

`content/v1.4.7/en/api/engine/_index.md`：

```
$ stat -c '%y %n' content/v1.4.7/en/api/engine/_index.md
  2026-10-07 14:40:51.821018700 +0800   (= 06:40:51Z，本会话内)
$ git cat-file -e HEAD:content/v1.4.7/en/api/engine/_index.md && echo IN HEAD: YES
  IN HEAD: YES      ⇒ 可回放：git show HEAD:<path> 可取回，不存在不可恢复风险
```

块外 diff 全文（3 处，全部是「计数 + 新增页链接」，不是任意正文）：
```
- description: "... 0 pages in this tree; the 2 pages are Chinese-tree-only."
+ description: "... 1 page in this tree; 2 more are Chinese-tree-only."
- ## Pages in this area (0 in English)
+ ## Pages in this area (1 in English)
+ | [MBDebug](./MBDebug) | the engine-side debug and cheats surface |
```

**归属**：mtime 落在本会话内，本线**无法从 mtime 单独确定是哪条线**写的（前一轮 lead-12 亦如此记录）。
形态（把新增的英文 `MBDebug` 页接进桶索引 + 更新计数句）与导航线的 section-index 工作一致，但这是
**形态一致**，不是归属证据。**本线只报实测，不做归属裁定。**

### 4.7 本轮未决定项

1. **6 个 OUT-OF-SCOPE + 2 个 NEW 的 `_index.md`**：待裁定——是「窄口放宽」还是「交写作线/导航线把块外正文改回块内」。
   其中 `v1.4.7/en/api/engine/_index.md` 的块外内容是**对的**（新页确实存在、计数确实该 +1），
   越界的是**形式**（写在块外），不是内容。
2. **`v1.5.3/zh/api/{localization,storymode}/_index.md` 是新建整页**：不在 HEAD ⇒ 只能由人写正文，窄口外。
3. **本环境的 `MonitorCreate` 不可用**（§3.9）：本线全程前台 bash 直跑，未用后台 monitor。
4. **lead-20（验证线）不在本线可见 team_list 中**：派单书⑤要求「读数问 lead-20」，实测 `team_list` 只返回本线自己，
   故本线改用**自己的实测读数并附命令**（满足「任何数字必须附量它的命令」），未阻塞在跨线读数上。

### 4.8 本轮结论（按覆盖边界写）

**覆盖了**：起始状态独立实测（含更正派单书的 61/40 → 125/104）；104 个 `_index.md` 全量过作用域门禁；
118 个 content 文件分 7 批提交（含 Boss #13409 优先批）；双门禁提交前后各测一次（全绿）；
19 个 commit 快进 push 到 origin/main；乙类文件调查（在 HEAD、可回放、diff 原文已录）。

**未覆盖 / 未做到**：8 个 `_index.md` 未提交（越界/新页，逐条已列，待裁定）；
`audit-links` 的 `RESOLVE_NEITHER=2` 仍未归因（它是 content-only 口径，需另一把尺确认是否为覆盖缺口）；
本线未做全站 `zola build`（按 §3.2 的口径，构建不是门禁，放到最后长超时跑）。

### 4.9 追加批次（Boss #13927 优先入库请求）+ 两处数字更正

**追加 2 批，均已 push**：

| 批 | 主题 | 文件 | SHA |
|---|---|---|---|
| 10 | `content/v1.3.15/{en,zh}/architecture/action-family.md`（2 个 untracked 新架构页） | 2 | `083ed46ac9` |
| 11 | `content/v1.4.5/zh/api/campaign-ext/{AcceptCallToWarOfferMapNotification,AccessMethod}.md` | 2 | `a04704c66e` |

两批均：`staged 数 == 期望数`、`git show --name-status` 对账、非 content 泄漏 = 0。
批 10 的两页已用 `git ls-files --error-unmatch` 验证从 `??` 变为 **TRACKED**。

**更正 1（Boss #13927 的「6 页合成一批」）**：那 6 页里 **4 页已在 batch 1（`885275125f`）提交**，
实测 `git ls-files` 均为 TRACKED；本次只需补 2 页 `action-family.md`。
⇒ **本会话新写的 6 个架构页现在全部已跟踪。**

**更正 2（lead-20 上报的「330 modified / 253 untracked」）**：本线全量实测：
```
$ git status --porcelain | grep -c '^??'                       -> 258
$ git status --porcelain | grep '^??' | grep -c '^content/'     -> 2
$ git status --porcelain -- content/ | wc -l                    -> 9  (7 M + 2 ??)
```
⇒ 258 个 untracked 里 **256 个在 `tools/**`**（别的线的证据/脚本/scratch），**只有 2 个在 `content/**`**
（那 2 个 NEW `_index.md`）。
**对「内容不可回放」这个担忧，只有 `content/` 下的 `??` 才相关** —— 把 `tools/` 的 scratch 算进 253
会把风险规模报大约两个数量级。

**门禁（追加批后）**：
```
$ node tools/audit-links.mjs
FILES=39039  TOTAL_LINKS=149587  BROKEN_LINKS=0  FILES_WITH_BROKEN=0  RESOLVE_STATIC=2   exit=0
```

**push**：`origin/main = a04704c66e301501050645cee2e86e0d8b786f92 = HEAD`，divergence `0 0`，fast-forward。

### 4.10 后续扫荡批次（写作线持续产出）

写作线在并发写，每轮扫荡都会出现 2–4 个新文件。本线按「新页优先」固定动作继续入库：

| 批 | 主题 | 文件 | SHA |
|---|---|---|---|
| 12 | `v1.3.0/zh/api/campaign/DefaultPartyMoraleModel.md` + `v1.4.5/zh/api/campaign-ext/AccompanyingCharacter.md` | 2 | `0399dcb73b` |
| 13 | `v1.3.15/{en,zh}/architecture/_index.md`（写作线新增页后的 in-scope 刷新） | 2 | `3cb67d6865` |
| — | 台账 §4.9 补遗 | 1 | `d355401676` |

**固定动作（已生效）**：每次唤醒先扫 `git status --porcelain -- content/ | grep '^??'`，
新页优先提交；对新增/改动的 `_index.md` 重跑作用域门禁，只提交 IN-SCOPE 的。

**批 13 的作用域门禁（重跑）**：
```
$ node tools/_verify/check-section-index-scope.mjs
checked=10 out_of_scope=8
  IN-SCOPE  = 2   （v1.3.15/{en,zh}/architecture/_index.md）
  OUT-OF-SCOPE = 6   （v1.4.5/en/api/{campaign,final,mission} · v1.4.5/zh · v1.4.6/en/architecture · v1.4.7/en/api/engine）
  NEW          = 2   （v1.5.3/zh/api/{localization,storymode}）
```

**push**：`origin/main = 3cb67d68654b5448c07ff82cbac3d27434ccadb4 = HEAD`，divergence `0 0`。
本线累计（第 4 轮）已推送 **13 个 content 批次 + 4 个台账/工具 commit**，content 合计 **123 文件**。

**稳定态**：工作区 content/ 反复回到 **8 项**（6 OUT-OF-SCOPE + 2 NEW），
即「可提交的全部已提交、不可提交的逐条留底」——这是本线能达到的收敛状态。

### 4.11 第 4 轮收尾：worker 化 + 并发碰撞 + 读数更正

**① 读数更正表**

| 读数 | 来源 | 旧值 | 本线实测值 | 说明 |
|---|---|---|---|---|
| content 未提交项 | 派单书 | 61（其中 _index.md 40） | 125（其中 _index.md 104） | 派单书基于更早时点；第一轮实测更正，并按 125/104 记账；那 125 项已全部提交推送（第一轮 13 批 / 123 文件） |
| 本地领先 origin/main | Boss #14301 | 12 | 6 | 旧值 12 是 lead-145zh 的 tools/docs commit，已在更早推送走掉；push 时实测领先 6 |

**② worker 化（用户指示：lead 不直接干活）**

- worker-194（分类）：产出 `tools/_verify/release-batches.md`，落盘 `2026-10-07 16:27:11 +0800`
- worker-195（执行）：批 1 = `9ab98aa8dd`（4 文件、非 content 泄漏 0）

**③ 并发碰撞事故（登记，不修饰）**

- 事件：worker-195 执行批 2 时 `git diff --cached --name-only | wc -l` = **5 ≠ 期望 3**，多出 `tools/_verify/lead-145zh-PROGRESS.md` 与 `tools/_verify/lead-145zh-judge.mjs`（lead-145zh 线并发暂存）
- 处置：worker-195 按铁律第 3 条**停手、不提交、回报** —— 守卫按设计工作
- 结果：lead-145zh 线随后把整个暂存区提交为 `da1dfa7461`（message = `fix(lead-145zh-judge): derive the source tree per page, and never fall back silently`），批 2 的 3 个 content 页随之入库
- 内容核验：内容正确（lead-21 独立核 `AccessDetails.md` frontmatter 的 title + description）
- 裁决：**方案 A**（接受 `da1dfa7461` 作为批 2 载体 + 登记碰撞）；拆分需改写已推送历史、本仓禁止 force ⇒ 方案 B 不可执行
- 教训：**「暂存数 == 期望数」这条硬检查有独立价值** —— 它在错误提交发生前，拦下了「把别人 staged 的文件卷进 content 提交」的动作

**④ push**

- push 前 origin/main = `62a2d25b0478a615b428aa54855e6377641eabe8`；push 后 = `5dee108247479cfc6be3ae6c15891990519ddd4b`；本次 6 个 commit（`git rev-list --count 62a2d25b04..5dee108247`）

### 4.12 第 4 轮续：worker 化 + tools/** 分诊入库 + 碰撞复现

**① worker 化（用户指示：lead 不直接干活）**

- worker-194（分类）：产出 `tools/_verify/release-batches.md`，落盘 2026-10-07 16:27:11 +0800
- worker-195（执行）：批 1–11 提交（见 §4.2/§4.10 与本节）
- worker-204（判定）：Boss #14709「手写 vs 脚本写」逐页判定，写入 `release-batches.md` 新节
- worker-206（分诊）：`tools/_verify/tools-untracked-triage.md`（17.6 KB）
- worker-210（入库）：`tools/**` ① 类分 5 批入库
- lead-21 只做：审定计划、验收证据、裁决阻塞、汇报

**② tools/** 三分诊（Boss #15033）**

- 测量时点 2026-10-07T09:09:58Z；`git ls-files --others --exclude-standard -z -- tools/`
- 总数 **1738**（Boss 转述的 256 与 lead-21 实测的 1734 都是更早时点；持续漂移）
- ① 会被下一轮引用 **260** / ② 一次性 scratch **1470**（主体 `perf-site/**` 1412）/ ③ 不该存在 **7**
- **lead-21 自己的测量错误（worker-206 抓到，成立）**：先前报「4 个 0 字节文件」为假。原因：`git ls-files --others | while read f; do [ -s "$f" ]` 在 git 对非 ASCII 路径加引号时把引号当文件名 ⇒ 2 个假阳性。正确做法：`-z` + `while IFS= read -r -d ''`。实测 0 字节文件 = **2**。

**③ ① 类入库（5 批，Boss 授权 tools/** 属发布线范围）**

| 批 | SHA | 文件数 |
|---|---|---|
| A `tools/` 根级 | `bde180b97a` | 68 |
| B `tools/_verify/` 根级 | `39023a04c7`（实际只 1，见下） | 153 期望 |
| C `_EVIDENCE-selfcheck-20261004/` | `8c5c434632` | 6 |
| D `data/` | `0d96b9788d` | 1 |
| E 证据子目录 | `5749e08624` | 29 |

- 抽样验证 ① 类已 tracked；剩余 untracked **63** 个全部是 ②/③ 类，**无 ① 类残留**

**④ ⚠️ 碰撞复现（第 3 次「两线抢同一批文件」）+ 根因**

- 事件：worker-210 报「批 B 暂存数 153 == 期望 153 ✓」，但其 commit `39023a04c7` 只含 1 个文件
- 根因（实测）：`daeea0de1b`（**lead-20** 的 commit）含 **156 个文件，其中 151 个是 `tools/_verify/` 根级** = worker-210 批 B 的暂存文件。即 **lead-20 跑了不带 pathspec 的 `git commit`，把整个暂存区一起提交**
- 与批 2（`da1dfa7461`，lead-145zh）**同一模式**：别的线不带 pathspec 提交 ⇒ 卷走并发线已 staged 的文件
- **无数据丢失**：151 个文件已随 `daeea0de1b` 进入历史，`git log -- <path>` 可查
- 本会话共 **3 次**：批 2 的 content、lead-22 的 `action-family`、本次批 B 的 151 个 tools 文件；其中 **2 次的根因是别的线跑了不带 pathspec 的 `git commit`**

**技术澄清（worker-210 最终回报，2026-10-07）**：`git commit -- <pathspec>` 是**部分提交**
（partial commit）——它只提交**相对 HEAD 有差异**的文件。批 B 的 153 个文件里，
152 个已被 `daeea0de1b`（lead-20）以**与 worktree 完全一致的内容**提交 ⇒ 相对 HEAD 无差异
⇒ **不进提交**；唯一有差异的是 `tools/_verify/lead-22-PROGRESS.md`（worktree 里有别人
09:33Z 未提交的 63 行台账 section）⇒ 以 `M` 进入 worker-210 的提交 `39023a04c7`。
**⇒ 因此「批 B 的 commit 只含 1 个文件」不是工具失效，是碰撞 + 部分提交语义的预期结果。**
净结果：批 B 的 153 个文件**全部已入库**（152 由 `daeea0de1b`，1 由 `39023a04c7`），
worker-210 无需再提交。

**① 类最终账**：261 个 = 257 已入库（worker-210 提交 105 + lead-20 抢提交 152）+ 4 个按裁决跳过
（`lead6-w63-outofscope/` 的 2 个 `.patch` + 2 个 `.staged`，整目录命中排除规则）。

**非 ASCII 路径的安全传递**：全部 5 个提交的 add 与 commit 都用
`--pathspec-from-file=<NUL 分隔清单> --pathspec-file-nul`（git 2.52.0 支持），
不用 `-A`/`.`，也规避了「git 对中文路径加引号 ⇒ while read 假阳性」的根因。

**⑤ 新增固定检查（Boss #15367）**

- `git add` 之前对每个待提交路径跑 `git log --oneline -3 -- <path>` 与 `git status --porcelain -- <path>`；若已被提交 ⇒ 从本批剔除并标「已由 `<SHA>` 提交」
- 理由：并发多线仓库里，提交前查 `git log -- <path>` 是**必需动作**，不是可选动作

**⑥ 每日 push 耐久机制 + 30m 扫荡 loop**

- schtasks `BannerlordCode-DailyPush`（每日 09:00，跑 `tools/_verify/daily-push.bat`，只 push、分叉即 fail-closed）
- Loop #1：cron `*/30 * * * *`，recurring，maxFires 16，expiresIn 12h，**只 commit 不 push**（prompt 第 5 条的 IN-SCOPE 判据已被 Boss #14709 更新为「手写 vs 脚本写」，实际执行按后者）

**⑦ 本节时点的状态**

- `origin/main = f6f094d69bc9b970c75f80b3ecd73568f503d4d8`，divergence `0 0`，content 剩余 **0**，tools untracked **63**（全部 ②/③）
- 门禁：`audit-links` BROKEN_LINKS=0 exit=0 · `nav-orphans` orphans=0 · `audit-changed-links` exit=0



### 4.13 判据更正：核对才是门槛，生成方式不是

**背景**：Boss 先裁 (b)「不提交那 29 个 schema 声明页」，理由是从【形状】(+2/−0) 推断
「脚本生成 ⇒ 没经过核对」。随后**撤回 (b)**，改为 (a)+(c)「核验一致后即可提交」。

**★ 撤回的理由比裁定本身重要（Boss 原话要点）**：
· **形状不告诉你有没有发生过核对。**
· 「脚本写 content/」的危险不在于【谁写的】，而在于【有没有独立核对】：
  - 生成档 stub（`description: "…的自动生成类参考。"` + 模板套话 + 错误示例）⇒ 危险是因为
    **内容没有与任何事实核对**（示例与源码不符）
  - 本批 schema 声明 ⇒ 由该页自身标题导出，**且程序化核验过与实际 H2 集合对应**
    ⇒ **值被独立核对了** ⇒ 不是「脚本写的内容」，是「被核对过的派生声明」
· **判据最终形态**：**「这一处内容是否经过了一次独立于其生成过程的核对？」**
  - 核对过 ⇒ 可提交（无论谁写的）
  - 没核对过 ⇒ 不可提交（无论谁写的）
· 硬前提 #1「禁止脚本写 content/**」是**手段层面的表述**，它漏掉了这个判据 ——
  所以它会把「被核对过的派生声明」也一起禁掉，那是**过度禁止**。

**⇒ 替代关系**：本条**替代** Boss #17612 的裁定 (b)。

**仍保留的改进项（非阻断）**：把「节列表」移到模板层（Zola `page.toc` 可为全站渲染节列表，
零脚本写 content/、一次覆盖含未来新页、天然不与正文脱节）—— 与 breadcrumb 同源
（「能在布局层无条件做到的，不要在每页正文里写」）。**这是改进项，不是本批的阻断项。**

**★ 声明的形态实测（lead-21，2026-10-07）**：v1.3.15 架构桶 36 页共 **8 种**声明形态：
```
15  > Section schema: this page uses N sections (in document order): …      ← 阿拉伯数字
14  > 节 schema：本页采用 N 节（按出现顺序）：…                              ← 阿拉伯数字
 3  > 节 schema：本页采用规范七节（…                                        ← 中文数字「七」
 1  > Section schema: this page uses the canonical seven sections (…)      ← 英文单词 seven
 1  > Section schema: this page mirrors the zh twin's canonical seven …    ← 英文单词 seven
 1  > Section schema: this page follows the canonical seven sections (…)   ← 英文单词 seven
 1  ## 节 schema 声明                                                       ← H2 标题，非引用块
 1  ## Section schema declaration                                          ← H2 标题
```
⇒ 本线先前的核验正则只命中前两种（15+14=29）⇒ 报出的「28/29」是**尺比语料窄**的产物。
⇒ **额外后果**：那 2 个 H2 形态的页（`mission-lifecycle.md` en/zh，h2=7）**把声明自身算进 H2 数**，
   而其声明自称「规范六节映射」⇒ **声明与实际 H2 数天然差 1**。
⇒ **通用判据**：**判据必须比它要判的语料【宽】；否则它报的是自己的窄，不是语料的错。**
   ⇒ 若把「声明节数 == `grep -c '^## '`」固化成批尾门禁，必须先接受 8 种形态 + 数字可为中文/英文单词，
     且 H2 形态的声明要从 H2 计数里排除；解析不出时报「不可判定」而非 FAIL。

**既有缺陷的处置**：`content/v1.3.15/en/architecture/save-object-graph.md` 的声明写
`Real Example`（单数）而实际 H2 是 `Real Examples`（复数）⇒ 已另开一批修（`7c72fe5575`），
并明确标注它是**既有缺陷、非本批引入**。
