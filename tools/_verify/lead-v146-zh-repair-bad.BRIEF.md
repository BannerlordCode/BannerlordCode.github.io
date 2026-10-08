# brief · repair-bad（v1.4.6/zh 存量缺陷修复：13 页引用超出文件行数）

## 任务性质

这 13 页里有 **45 条引用指向不存在的行**（`bad>0`）。这是**最严重的一类缺陷**：引用指向不存在的行 = **实质上的伪造引用**。
**它们与 judge-fix 无关 —— 一直是错的**（`bad` 的判定逻辑从未变过）。

**这不是「新写页面」任务，是「修复既有页面的错误引用」任务。** 不要重写页面，只修错。

## 精确缺陷清单（判分器原始输出，逐条可复跑）

```
campaign-ext/MBObjectBase.md     7 条  MBObjectBase.cs:1218 / :1257 / :288 / :319   (max=181)
core-extra/ArmorComponent.md     3 条  ArmorComponent.cs:363 / :369 / :359          (max=344)
core-extra/BannerComponent.md    1 条  BannerComponent.cs:379                       (max=63)
core-extra/EventManager.md      16 条  EventManager.cs:59 / :79 / :84 / :133 …      (max=58)
core-extra/IGameStarter.md       2 条  IGameStarter.cs:1915 / :1916                 (max=19)
core-extra/ParameterContainer.md 2 条  ParameterContainer.cs:226                    (max=225)
core-extra/SkillObject.md        2 条  SkillObject.cs:191 / :200                    (max=63)
core-extra/WeaponComponent.md    4 条  ItemComponent.cs:45 / :46 (max=42) · WeaponComponent.cs:90 / :160 (max=86)
core/Module.md                   1 条  GameStateManager.cs:521                      (max=491)
gui/ScreenBase.md                1 条  ScreenBase.cs:541                            (max=540)
gui/ScreenComponent.md           2 条  ScreenComponent.cs:14 / :19                  (max=9)
gui/ScreenLayer.md               1 条  ScreenLayer.cs:521                            (max=310)
mission-ext/MBGameManager.md     3 条  SkeletonScale.cs:126 / :128 / :132           (max=116)
```

（`max` = 该源文件的实际行数。完整清单用这条命令复跑：）
```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.4.6/zh/api/campaign-ext/MBObjectBase.md content/v1.4.6/zh/api/core-extra/ArmorComponent.md content/v1.4.6/zh/api/core-extra/BannerComponent.md content/v1.4.6/zh/api/core-extra/EventManager.md content/v1.4.6/zh/api/core-extra/IGameStarter.md content/v1.4.6/zh/api/core-extra/ParameterContainer.md content/v1.4.6/zh/api/core-extra/SkillObject.md content/v1.4.6/zh/api/core-extra/WeaponComponent.md content/v1.4.6/zh/api/core/Module.md content/v1.4.6/zh/api/gui/ScreenBase.md content/v1.4.6/zh/api/gui/ScreenComponent.md content/v1.4.6/zh/api/gui/ScreenLayer.md content/v1.4.6/zh/api/mission-ext/MBGameManager.md
```

## 两类形态（先看形态再决定修法）

**形态 A —— 只超一点点（off-by-few）**：`ParameterContainer :226`(max=225) · `ScreenBase :541`(max=540) · `EventManager :59`(max=58) · `ArmorComponent :359/:363/:369`(max=344)
⇒ 很可能引的是「文件末尾之后一行」或该文件**比写页时短了**。**修法：读源码，找到该断言真正对应的那一行。**

**形态 B —— 超得离谱（可能引错文件）**：`MBObjectBase :1218/:1257`(max=181) · `IGameStarter :1915/:1916`(max=19) · `SkillObject :191/200`(max=63) · `ScreenLayer :521`(max=310)
⇒ 这种行号**不可能**属于该文件。**很可能整条引用的行号来自另一个文件**（写页时串了）。
⇒ **修法：读页面那处的断言，去源码里找到真正支撑它的位置，改对；若找不到支撑，删掉该断言**（不要留一个无支撑的句子）。

## 硬规则

1. **不要凭猜改行号**。每改一条，必须 `awk 'NR=<新行号>' <源文件>` **打印出真实代码**，并把原始输出贴回回报。
2. **不要为了消 `bad` 而删句子**：先努力找对行号；**确实找不到支撑**的断言才删，并在回报里逐条说明「删了哪句、为什么找不到支撑」。
3. **不要重写页面**。只动错的那几条引用（及其必要的措辞）。**其余内容保持原样。**
4. **若某条引用指向的是另一个文件**（形态 B 的常见成因），要么改正为正确的 `文件.cs:N`，要么删掉。**不要保留指向不存在位置的行号。**
5. 不要动任何 `_index.md`；不要 `git add`/`commit`；不改 `tools/**`。

## 附加项（次要，但请一并做掉 —— 能让这 13 页从「红」变「全绿」）

这 13 页同时**缺少 `## 导航` 节**（判据 `J2 missing=[导航]`）。
请在每页末尾（`## 参见` 之后）**按该桶已有页面的既有格式**补一个 `## 导航` 节。
格式参照同桶任一已入库页（例如 `content/v1.4.6/zh/api/core-extra/Game.md`）：
```
## 导航

- 同桶：[`../X`](../X) · [`../Y`](../Y)
- 父索引：[`../_index`](../_index)
```
链接**只用**该桶 `_index.md` 里已列出的页名（那些都已存在）。叶子目标不带尾斜杠。

## 验收（必须全绿才回报）

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs <上面 13 个路径>
```
目标：**13 页全部 `PASS`**，即每页 `bad=0` 且 `J2 missing=[]`。

## 回报格式

1. 13 页各自的最终 `J3 ... bad=0 ambiguous=0` 与 `J2 missing=[]` 读数；
2. **逐条修复记录**：`原引用 → 新引用（或「已删」）→ awk 原始输出`；
3. 形态 B 的每一条，说明你判断它是「引错文件」还是「引错行」的依据；
4. 若某条断言因找不到支撑而删除，逐条说明。
