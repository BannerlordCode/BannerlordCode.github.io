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

### 3.13 本轮结论（按覆盖边界写，不用「全部完成」）
**覆盖了**：merge 落地并推送（merge commit `55658f4d9d`，双 parent）；用户两个生产修复语义保留并核对；
台账/快照/门禁读数/分类产物落盘并推送（`b46a3cfdc5`、`3ca61ac8eb`、`7b8b9880d2`）；
全站构建前台跑完一次（2011s / 38486 pages / 30 orphan，标注为非静止树读数）；
新 `_index.md` 作用域门禁做成可复跑工具（31 查、23 in-scope、8 越界）；`CONTRACT.md` 入版本库。

**未覆盖 / 未做到**：content/** 一项未提交（前置门禁未满足）；
COMMIT B 带进了 2 条意外删除且 message 不实（自报中）；tools 分类有 83/112 未实测；
`RELEASE-CONFLICT-TEMPLATES.md` 交付失败；`BROKEN_LINKS` 仍为红；orphan 工具本轮**未运行**（只跑了 audit-links 与 zola）。


