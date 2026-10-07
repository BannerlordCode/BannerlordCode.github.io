# 文档独立审查报告 — 2026-10-04 第 5 轮（本轮为**实现轮**）

执行者：lead-9（破例持有两个 tools/ 脚本）
**红线遵守：`content/` 下 `.md` 一个字节都没碰。改的只有两个 `tools/` 脚本。**

---

## 0. 只动了这两个文件（附证据）

```
$ git diff --numstat -- tools/lib/content-write-freeze.mjs tools/nav-section-index.mjs
118	3	tools/lib/content-write-freeze.mjs
233	34	tools/nav-section-index.mjs
```

归属核对：

```
$ git diff -- tools/lib/content-write-freeze.mjs | grep "^-" | grep -v "^---"
-  // (3) marker block must exist in both sides.
-  const headOld = originalText.slice(0, bOld), tailOld = originalText.slice(lineEnd(originalText, eOld));
-  const headNew = newText.slice(0, bNew), tailNew = newText.slice(lineEnd(newText, eNew));
```
⇒ 被删的 3 行全是我的（一条注释 + 两行待修的头部比较）。**该文件此前无任何 diff，118/3 全部是本次产出。**

```
$ git diff -- tools/nav-section-index.mjs | grep "^-" | grep -iE "p\.dup|underContent|sandboxRoot|dupDir"
  (空)
```
⇒ 34 行删除**没有一行是我的**（那是第 1 轮就已存在的改动）。
本轮我新增 **12 行与任务直接相关**（`p.dup` 跳过 1 行、沙箱化 3 行、重复 marker CLI fixture 8 行）。

`content/` 下 `.md` 未被本轮触碰 —— `git diff --name-only -- content/` 的 454 项全部是四条写作线的改动。

---

## ① `content-write-freeze.mjs` —— 修了**两个**洞，不是一个

### 1.1 洞 A：重复 marker 静默撑大可写区（boss 指派）

按要求改成「响的失败」：先数 BEGIN/END 次数，次数 ≠ 1 直接 `deny`，**不再**取第一个。

```js
const uniq = [];
for (const [side, text] of [['originalText', originalText], ['newText', newText]]) {
  for (const which of ['begin', 'end']) {
    const needle = marker[which], want = 1, got = countOf(text, needle);
    if (got !== want) uniq.push(`${side}: ${which} marker occurs ${got}x, expected ${want}x`);
  }
}
if (uniq.length) throw deny('marker is not unique -- refusing to guess the block boundary', uniq.join('; '));
```
**两侧都查**（写入前 + 写入后），且报错里写明「几个 BEGIN、几个 END、期望什么实际什么」。

### 1.2 洞 B（新发现，比洞 A 更严重）——头部保护几乎不存在

**这一条不在你的指派里，但我必须报：同一个函数里另有一个洞，形状相反。**

```js
const headOld = originalText.slice(0, bOld), ...   // bOld 是【行号】，被当成【字符偏移】
```

`lineOf()` 的返回值是 1-based **行号**（它自己的注释就是这么写的），但 `slice(0, bOld)` 把它当**字符偏移**。
⇒ 头部比较实际上只比对了**前 `bOld` 个字符**，而不是 BEGIN 之前的全部内容。

实测（真实 `assertStructuralScope` 的等价复现）：
```
head compared as: slice(0,9)    <- 行号当字符偏移
correct head would be: slice(0,64)  <- 真正的字符偏移

  REJECTED before-BEGIN  delete an existing head line
  ACCEPTED              rewrite head text IN PLACE (line count unchanged)   ← 洞
  REJECTED before-BEGIN  inject an extra head line
  REJECTED after-END     edit after END (control)
  ACCEPTED              edit inside block (must be ACCEPTED)
```

**⇒ 任何「就地改写」BEGIN 之前手写散文的写入，护栏完全看不见。**

### 1.3 为什么这个洞此前没被发现 —— 旧自检是「因为错误的原因而通过」

旧自检这一条：
```js
newText: BODY.replace('intro\n', 'intro\nINJECTED\n')   // 注入一行
check('out-of-block edit before BEGIN -> violation', ...);
```
它**注入了一行**，于是 BEGIN 的行号从 5 变成 6，两个切片长度不同（`"## He"` vs `"## Hea"`），所以不相等 —— **通过**。

实测确认：
```
bOld 5  bNew 6
slice(0,bOld) old= "## He"
slice(0,bNew) new= "## Hea"
equal? false        ← 通过是靠长度不同，不是靠比对了头部内容
```

⇒ **一个自检通过 ≠ 判据正确。** 这正是 boss #3559 那条纪律（「工具输出看起来合理我就会照报」）在我自己的仓库里的实例：
我读了这个自检 13/13 全绿，就相信了「头部受保护」。

### 1.4 修法

```js
function lineStart(text, lineNo) {           // lineEnd() 的对称物
  const lines = text.split('\n');
  let n = 0;
  for (let i = 0; i < lineNo - 1; i++) n += lines[i].length + 1;
  return n;
}
const headOld = originalText.slice(0, lineStart(originalText, bOld)), ...
```

### 1.5 自检：13 条 → 21 条

新增 8 条，其中**最要紧的两条是旧自检形态上测不到的**：
```
ok  in-place rewrite of head prose (line count unchanged) -> violation   ← 旧形态漏
ok  deletion of an existing head line -> violation
ok  in-block edit on the same realistic page -> still accepted            ← 反向对照
ok  duplicate BEGIN marker -> violation
ok  duplicate-marker violation names the counts it saw
ok  duplicate-marker violation carries a non-zero exit code
ok  duplicate marker refused even for a no-op write
ok  empty block: writable region is exactly the marker span
```
最后一条按你的要求做「空块边界精确性」：断言 `beginLine===5 && endLine===7`，而不是只断言「通过」。

```
$ node tools/lib/content-write-freeze.mjs --selftest
  selftest: 21 passed, 0 failed
  teeth confirmed.        EXIT=0
```

---

## ② `nav-section-index.mjs` —— 加跳过，零删除

```js
if (p.dup) { SKIPPED.push(`${p.bkt.dir}\tDUPLICATE_MARKER（BEGIN=… END=…）—— 拒绝写入；删除多余 marker 行需单独授权`); continue; }
```
一字节都不删，**不需要那条授权**。

三个坏文件现在的实际行为：
```
$ node tools/nav-section-index.mjs --dry-run content/v1.3.15/en/api/campaign-ext …
BUCKET=content/v1.3.15/en/api/campaign-ext  BEGIN=2 END=1  **DUPLICATE_MARKER**
BUCKET=content/v1.3.15/zh/api/campaign-ext  BEGIN=2 END=1  **DUPLICATE_MARKER**
BUCKET=content/v1.4.5/zh/api/campaign-ext   BEGIN=2 END=1  **DUPLICATE_MARKER**
DELETED_OR_REWRITTEN_LINES=0     GUARD_STATUS=PRESENT
```

---

## ③ 自检污染 product 树 —— 已修

**旧版**：`content/_nav_crlf_fixture_tmp`（仓库内），崩溃即留脏目录。
**新版**：`<TEMP>/navcrlf-xxxx/sandbox/content/_nav_crlf_fixture_tmp`，`cwd` 指向沙箱。

护栏的 `underContent()` 只是 `/ (^|[\\/])content[\\/] /` 正则，**沙箱路径里含 `content/` 段照样满足** ⇒ 测试强度不变，仍测的是真 `content/` 下的写入路径。

```
$ ls content/_nav_crlf_fixture_tmp          → No such file or directory
$ git status --short content/ | grep '^??'  → 只有两条第 1 轮就存在的
      content/v1.5.3/zh/api/localization/_index.md
      content/v1.5.3/zh/api/storymode/_index.md      （写作线的，非我）
```

顺带按你要求查了另外两个工具：
```
$ grep -n "writeFileSync|mkdirSync|mkdtemp" tools/_cite-audit.mjs         → 无（纯只读）
$ grep -n "writeFileSync|mkdirSync|mkdtemp" tools/_check_links_exist.mjs  → 仅 :293/:294
```
`_check_links_exist.mjs` 的 `writeFileSync` 只服务于 `--emit-baseline`，写的是用户指定路径，
**不会写进 `content/`** ⇒ 无需改动。

---

## ④ 新增：重复 marker 的**真实 CLI** fixture（零字节写入）

纯函数测试测不到「到底会不会落盘」，而这正是这条规则的全部意义：

```
PASS  重复 marker：CLI 拒绝写入且零字节变化          changed=false exit=0
PASS  重复 marker：报为 SKIPPED 而非 FAILED
PASS  重复 marker：Alpha 没有被写进块里
```

```
$ node tools/nav-section-index.mjs --self-test
SELFTEST_FAILURES=0        EXIT=0
```

> ⚠️ **我在这里犯了一次错，已当场记下**：这条断言我第一版写成
> `!/FAILED/.test(stdout)`，结果 FAIL。
> 原因是汇总行本身就写着 `OK=0 FAILED=0 SKIPPED=1` —— **用「输出里有没有这个词」当判据，
> 等于被输出格式绑死**。改成 `/FAILED=0/`（判计数）后通过。
> 这与 `tools/_DEAD-MEMBER-LIST.md` 里已记录的判据同源：**断言要断值，不要断词。**

---

## 汇总

| 项 | 结果 |
|---|---|
| 洞 A 重复 marker 静默撑大可写区 | ✅ 已修为 fail closed，报错含计数 |
| **洞 B 头部只比对前 N 个字符（新发现）** | ✅ 已修为真实字符偏移 |
| 自检 13 → 21 条 | ✅ 21 passed / 0 failed |
| `nav-section-index` 重复 marker 跳过 | ✅ 零删除，SKIPPED |
| 自检污染 product 树 | ✅ 已迁到 `%TEMP%` 沙箱 |
| 重复 marker 零写入 CLI fixture | ✅ 3 条新断言 |
| 只动 2 个 tools/ 脚本 | ✅ `content/` 零触碰 |
| 回归：普通桶 dry-run | ✅ `DELETED_OR_REWRITTEN_LINES=0` |

## 一个需要你知情的事实
**洞 B 意味着：在本轮之前，`content-write-freeze.mjs` 保护的只有 END 之后那一侧是可靠的，
BEGIN 之前那一侧只有「改变行数」时才拦得住。** 这不是本轮造成的，是既有状态。
我已修好，但如果历史上有人依赖过「就地改写头部不会被拦」这个行为，现在会开始被拦 ——
那本来就是护栏该做的，但如果要查历史写入记录，洞 B 的存在意味着**不能假定历史写入全部合法**。

## NOT VERIFIED
- 洞 B 修复只在本轮自检的 fixture 上验证；**未对 39,025 个真实页面跑回归**（那需要真实写入，越界）。
- 未跑 `tools/audit-links.mjs` / `_check_deep` / U+FFFD（与本任务无关，且改动仍在进行）。
- 那 6 个空壳段、`IMBDelegate` 2 条死链 + 3 处行号漂移、`ActionIndexCache` 重写、657 条里 489 条未核 ——
  **均未因本轮延后，仍挂着。**