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

### 2.7 本轮提交

见下方「提交记录」。

