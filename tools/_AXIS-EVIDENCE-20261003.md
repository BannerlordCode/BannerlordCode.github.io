# 门禁证据 — 三轴 fail-closed + 孤儿页退出码

> 测于 **并发写入期**（工作区多人同时写）。分子会跳，**分母比分子稳，引用时优先引分母**。
> 测时 HEAD = `e42e02e37dd523b0f07391f16bfce879d152c797`（任务书给的是 `56e9402…`，期间树已移动）。
> 统计对象：`content/**/*.md`（39023 页）+ 8 棵源码树 + `bannerlord-1.4.6` 语料。

---

## 0. 门禁状态表（一条命令复现）

```
node --max-old-space-size=4096 tools/_check_links_exist.mjs --gate --quiet
```

| 轴 | verdict | 分子 | 分母 | 分子是什么 | 退出码 |
|---|---|---|---|---|---|
| ① dead-links | FINDINGS | **186** | **140,207** | 解析不到任何页面的 href（分母=全部 href） | 1 |
| ② xml-id-annotation | FINDINGS | **151** | **151** | 应标注不可验证却未标注的字符串 id 断言（分母=```csharp 块内扫到的全部 id 断言） | 1 |
| ③ declare-site-support | FINDINGS | **28,514** | **493,345** | 本尺看不见声明的成员访问位（分母=全站成员访问位） | 1 |
| **聚合** | **FINDINGS** | — | — | 取最差值（2>1>0） | **1** |

运行耗时 **2m51s**（MEASURED）。全部数字 MEASURED。

---

## 1. `tools/lib/gate-exit.mjs` — 0/1/2 契约的唯一出处

```
node tools/lib/gate-exit.mjs --selftest      →  exit 0
  selftest: 12 passed, 0 failed · teeth confirmed
```
六条关键断言：`single OK→0` / `single FINDINGS→1` / `single NO_VERDICT→2` /
`OK+FINDINGS→1` / `FINDINGS+NO_VERDICT→2` / **`blind axis NOT folded into OK → 2`**。
外加：`printAxes([NO_VERDICT])===2`、`fraction(5,0)!=="0"`、**畸形轴抛异常而不是返回 OK**、空数组抛异常。

## 2. `tools/_check_links_exist.mjs` — 只读探针接入门禁

```
node tools/_check_links_exist.mjs --selftest             → exit 0   (9 passed, 0 failed —— 一项未改)
node tools/_check_links_exist.mjs --quiet                → exit 1   (186/140207, pages=39023, read_errors=0)
node tools/_check_links_exist.mjs --root no-such-dir     → exit 2   (UNREADABLE_ROOT)
node tools/_check_links_exist.mjs --root tools/_tmp_empty_probe → exit 2   (EMPTY_UNIVERSE，探针目录已删除)
```
- route-relative 解析、9 项 selftest、0/1/2 语义**一律未动**。
- 死链分母已打印：`dead : 186 / hrefs=140207 (0.13%)`。
- `--gate` 只做聚合，不新增任何链接判据。
- fail-closed 守卫区（EMPTY_UNIVERSE / UNREADABLE_ROOT / read_errors）属于 worker-11，我未改动。

## 3. `tools/lib/xml-id-verifiability.mjs` — 轴②（**已按裁定换根**）

**旧根**（作废）：「该版本 XML 语料在不在」。六棵树恒为否 → 恒红 → 红了等于没红。
**新根**：「页面断言了字符串 id 时，有没有显式标注它不可验证」。今天红只因为页面还没标；标完转绿，绿了是真绿。
`.xml = 0` 现在**只作为标注义务的理由被打印**，不再是判定输入。

```
node tools/lib/xml-id-verifiability.mjs --selftest    → exit 0
  selftest: 24 passed, 0 failed · teeth confirmed
node tools/lib/xml-id-verifiability.mjs --docs content → exit 1
```

**三条数分列（MEASURED）**
```
(1) 应标注而未标注  numerator : 151
(2) 断言总数        denominator: 151
    副计数：pages=39023, pages_with_assertions=95, marked_pages=0, read_errors=0
    语料实测：8 棵树 .xml 全部 = 0
      bannerlord-1.3.0  .xml=0 .cs=4596    native-1.2.9  .xml=0 .cs=0
      bannerlord-1.3.15 .xml=0 .cs=5208    native-1.4.5  .xml=0 .cs=0
      bannerlord-1.4.5  .xml=0 .cs=8583
      bannerlord-1.4.6  .xml=0 .cs=11385
      bannerlord-1.4.7  .xml=0 .cs=11387
      bannerlord-1.5.3  .xml=0 .cs=11487
```

**标注形态（作者写这两行之一即可）**
```
<!-- xml-id-unverifiable -->            <!-- 或带版本: <!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：v1.4.6 源码树未随附 XML 语料，本页字符串 id 无法在此版本下核对。
```
可见行形式要求**同一行**内同时出现「不可验证」和版本号 —— 两项断言覆盖了这个要求。

**阳性对照两个方向（硬要求，已满足）**
- 有断言 + 有标注 → `OK(0)`，numerator 0 / denominator 2
- 有断言 + 无标注 → `FINDINGS(1)`，numerator 2 / denominator 4
- 额牙齿（防过度报）：语料有 `.xml` 时义务解除 → 即使页面无标注也 `OK(0)`

**本尺扫的 API 形态清单（交接用）**
1. 构造：`new <类型>("id")`，类型 16 个 —— ItemObject / Settlement / CharacterObject /
   BasicCharacterObject / Campaign / Monster / CampaignEvent / Hero / Clan / Kingdom /
   Village / Formation / RelicObject / BannerEffect / ItemModifierGroup / CultureObject
2. 取值：`${接收者}.${方法}("id")` 与 `${接收者}.${方法}<T>("id")`，接收者 7 个 ——
   `MBObjectManager.Instance` / `MBObjectManager` / `Campaign.Current` /
   `Game.Current.GameModelsManager` / `GameModelsManager` / `Game.Current` / `MBSettings`
   方法 9 个 —— GetObject / GetCampaign / GetSettlement / GetItemModel / GetEntityModel /
   GetGameModel / GetCharacter / GetFormattedText / GetStringId
3. id 形态：`[a-z][a-z0-9_]{2,}`（≥3 字符，全小写起头）
4. **闭集是有意的**：`.Get("key")` 这类泛化写法会命中 Dictionary / HttpClient / Configuration
   的同形方法，那些 key 不是游戏 id。宁可要一个能辩护的下界，也不要一个无法辩护的计数。

## 4. `tools/lib/declare-site-support.mjs` — 轴③

```
node tools/lib/declare-site-support.mjs --selftest     → exit 0
  selftest: 27 passed, 0 failed · teeth confirmed
node --max-old-space-size=4096 tools/lib/declare-site-support.mjs --docs content --corpus ../bannerlord-1.4.6  → exit 1
```
**全站首次测量（MEASURED）**
```
corpus : 11385 .cs, 0 unreadable, 12487 types, 683 interfaces
buckets: TYPE_SELF 20876 | INTERFACE_MEMBER 2700 | GENERIC_METHOD 3968 | BCL_MEMBER 970
unsupported_no_declarer = 28514 / sites_seen = 493345   （genuine candidates 464831）
```
四类各 1 个已知样本**全部**判 UNSUPPORTED，且**无一条**落进「无声明者」桶；每条附**原文锚串**。
额牙齿：3 个普通成员（`campaign.Tick()` 等）必须留在 CANDIDATE，否则「全判 UNSUPPORTED」的
无信息分类器也能通过。

**`Agent.AgentVisualsData` 在 content/ 实测 0 命中。** 诚实读法：**这一类在 content/ 里没出现**，
不是「这一类不存在」。阳性对照改用 fixture 语料（真写了 `struct AgentVisualsData`）证明尺没瞎。

**盲区清单已写进文件头**（extension method / 基类继承闭包不做 / 生成代码 / 大小写 receiver 等）。

## 5. `tools/_v146_orphan_check.mjs` — 退出码前后对照

**改动前**（从 HEAD 拷出运行，未动工作区）：
```
$ git show HEAD:tools/_v146_orphan_check.mjs > /tmp/orphchk/tools/_v146_orphan_check.mjs
$ node /tmp/orphchk/tools/_v146_orphan_check.mjs
total_pages=39025  orphans=4313
BEFORE_EXIT=0        ← 有 4313 个孤儿页，检查器仍然 exit 0
```
**改动后**（工作区）：
```
$ node tools/_v146_orphan_check.mjs
total_pages=39025  orphans=4313
orphan_rate=0.1105  (4313/39025)
AFTER_EXIT=1         ← 现在真的会失败
v1.4.6_orphans=0
```
**orphans 前后同为 4313 / 39025 —— 计数逻辑一行未动**（入链处刻意没有 `tg !== from` 守卫、
自链被计为引用者），因此与 nav-orphans 仍可比。只加了 exit code 与 orphan_rate 打印。

---

## 6. 退出码 0 / 1 / 2 各自可复现

| 码 | 命令 | 实测 |
|---|---|---|
| **0** | `node tools/lib/gate-exit.mjs --selftest` | `selftest: 12 passed, 0 failed` → **0** |
| **0** | `node tools/lib/declare-site-support.mjs --selftest` | `27 passed, 0 failed` → **0** |
| **0** | `node tools/lib/xml-id-verifiability.mjs --selftest` | `24 passed, 0 failed` → **0** |
| **1** | `node tools/_check_links_exist.mjs --quiet` | `dead : 186 / hrefs=140207` → **1** |
| **1** | `node tools/_check_links_exist.mjs --gate --quiet` | `aggregate: exit 1 (FINDINGS)` → **1** |
| **2** | `node tools/_check_links_exist.mjs --root no-such-dir` | `UNREADABLE_ROOT` → **2** |
| **2** | `node tools/_check_links_exist.mjs --root <空目录>` | `EMPTY_UNIVERSE` → **2** |

## 7. 没有加任何让它变绿的开关

三个轴里不存在任何降级开关。`.xml = 0` 不再直接产生 FINDINGS，是**换了根判据**（改成标注合规性），
不是把红改成绿 —— 分子 151 是「还没标注的页面条数」，标一条少一条，这根轴会随标注推进转绿。
若 Boss 认为三根轴恒红需要处置，那是 CI 配置的处置，不是尺子的处置。