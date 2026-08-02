---
title: "TextObject"
description: "Bannerlord 里承载“一段可本地化文本”的统一容器：英雄名、道具名、任务描述、系统消息、UI 文案底层都是它。它持有本地化 id 与命名文本变量，真正的翻译与变量替换发生在 ToString() 调用时。"
---
# TextObject

**Namespace:** TaleWorlds.Localization  
**Module:** TaleWorlds.Localization  
**Type:** `public class TextObject`  
**Base:** `System.Object`  
**File:** `TaleWorlds.Localization/TextObject.cs`

## 概述

`TextObject` 是整个游戏里“一段文字”的统一载体：英雄名字、道具名称、任务描述、系统消息、UI 文本，底层都是 `TextObject`。它内部只持有两样东西——一个 `string Value` 字段（原始文本）和一个 `Dictionary<string, object> Attributes`（变量替换表）。真正“翻译”和“拼变量”的动作并不在 `TextObject` 里，而是在调用 `ToString()` 时由 `MBTextManager` 完成的：`MBTextManager.GetLocalizedText` 先把 `Value` 里的 `{=id}` 解析成当前语言对应的文本，`MBTextManager.Process` 再把文本里的 `{变量名}` 用 `Attributes` 中的值替换掉。因此它更像一张“待解析的文本模板”，而不是一个已经拼好的字符串——你看到的最终结果，要等 `ToString()` 那一刻才产生。几乎所有需要向玩家展示文字的 mod（通知、菜单、对话、Tooltip）都会直接或间接用到它。

## 心智模型

把 `TextObject` 想象成**“带占位符的本地化字符串模板”**，而不是 `string`：

- 它的 `Value` 通常长这样：`"{=abc1234}Hello {NAME}"`。`{=abc1234}` 是本地化 id，`Hello` 是英文回退文本，`{NAME}` 是运行时变量。
- 它**不负责存储语言数据**。语言包由 `LocalizedTextManager`（来自官方/模组 XML）和 `GameTextManager`（来自 `GameText` XML 表）承载；`TextObject` 只是“引用 + 填充”它们。
- 大多数情况下你**不需要自己 `new`**：读英雄名字用 `Hero.MainHero.Name`，读道具名用 `ItemObject.Name`，读模块自定义字符串用 `GameTexts.FindText("你的id")`。只有要临时拼一句带变量的提示时，才手写内联 `{=...}` 文本。
- **不要图省事直接存裸 string**。如果将来要翻译、要按语言复数变化、要注入链接，`TextObject` 能直接复用整套本地化管线；裸 `string` 则完全绕过了它。
- 解析发生在调用 `ToString()` 时，且对**当前激活语言**生效（`MBTextManager.ActiveTextLanguage`）。在游戏/语言数据尚未加载的阶段调用 `GameTexts.FindText` 会拿到错误文本，而不是崩溃。
- `TextObject` **不是不可变对象**：`SetTextVariable` 就地修改并返回 `this`。把同一个实例当模板反复填充会互相覆盖，共享/缓存前务必 `CopyTextObject()`。

## 如何获取

```csharp
// 1) 按模块本地化库 id 查询（最安全、最常用）——字符串定义在 ModuleData 的 GameText XML 里
TextObject greeting = GameTexts.FindText("str_my_message");
TextObject lordVariant = GameTexts.FindText("str_my_message", "lord"); // 取某个变体

// 2) 从现成对象上取（英雄/家族/道具名本身就是 TextObject）
TextObject heroName = Hero.MainHero.Name;
TextObject itemName = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1").Name;

// 3) 构造一个空文本占位
TextObject empty = TextObject.GetEmpty();
```

构造函数 `TextObject(string value, Dictionary<string,object> attributes = null)`（另有 `int` / `float` 重载）确实存在，可内联 `new TextObject("{=yourid}English fallback {TAG}")` 直接造一个模板；**关键**：字符串必须以 `{=` 开头才会进本地化库，否则被当作裸文本原样保存。日常 mod 代码里优先用上面的 `GameTexts.FindText` / 现成对象，避免到处散落内联 id。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Value` | `string`（公开字段，`[SaveableField(1)]`） | 原始文本。以 `{=id}` 开头表示本地化条目，否则为裸文本。`Value` 为 `null` 表示该对象为空。 |
| `Attributes` | `Dictionary<string, object>`（`[SaveableProperty(2)]`，只读 getter） | 文本变量表，键是像 `NAME`/`FACTION` 这样的占位符 tag，值是 `string`、`int`、`float` 或另一个 `TextObject`。由 `SetTextVariable` 写入。 |
| `Length` | `int` | `Value` 的字符长度；`Value` 为 `null` 时返回 0。 |
| `IsLink` | `bool` | 当且仅当 `Value` 以 `"{=!}{.link}"` 开头时为 `true`，表示该文本是一个可点击链接（如物品 tooltip 里的引用）。 |

## 主要方法

### 创建与空值判定

#### `public static TextObject GetEmpty()`
**用途 / Purpose:** 生成一个 `Value` 为 `null` 的空文本对象，用于在查询或条件渲染前充当“暂无文本”的安全占位，避免 `null` 引用。

```csharp
TextObject t = TextObject.GetEmpty();
bool isBlank = TextObject.IsNullOrEmpty(t); // true
```

#### `public bool IsEmpty()` / `public static bool IsNullOrEmpty(TextObject obj)`
**用途 / Purpose:** 判断对象是否真的没有内容——`IsEmpty` 在 `Value` 为空串且 `Attributes` 为空时为真；`IsNullOrEmpty` 额外把 `obj` 自身为 `null` 也算作空。常用于对话/任务里决定某段文本是否值得显示。

```csharp
if (!TextObject.IsNullOrEmpty(questLogText))
{
    InformationManager.DisplayMessage(new InformationMessage(questLogText.ToString()));
}
```

### 解析为最终字符串（核心）

#### `public override string ToString()`
**用途 / Purpose:** 把模板在当前激活语言下解析成最终显示字符串：先按 `{=id}` 取翻译，再用 `Attributes` 里的变量替换 `{TAG}`；解析失败会返回 `"Error at id: <id>. Lang: <语言>"` 并打印日志，而不是让调用方崩溃。对象为空时返回 `""`。

```csharp
TextObject t = GameTexts.FindText("str_you_met"); // 模块 GameText: "{=xyz}You met {HERO}"
t.SetTextVariable("HERO", Hero.MainHero.Name);
InformationManager.DisplayMessage(new InformationMessage(t.ToString()));
```

#### `public string ToStringWithoutClear()`
**用途 / Purpose:** 与 `ToString` 同样解析，但传给语言处理器时 `shouldClear: false`，适用于同一次解析流程里需要连续多次 `Process` 的内部管线；日常 UI 显示用 `ToString` 即可。

```csharp
TextObject log = GameTexts.FindText("str_battle_result"); // "{=b}{HERO} won the field"
log.SetTextVariable("HERO", Hero.MainHero.Name);
string rendered = log.ToStringWithoutClear(); // 不清理全局处理器，便于后续同帧再次 Process
```

#### `public void CacheTokens()`
**用途 / Purpose:** 提前把当前语言的本地化文本 token 化并缓存到 `cachedTokens`（记录 `cachedTextLanguageId`），在频繁刷新的 `ViewModel`/HUD 里预热，避免每次 `ToString()` 都重新 `Tokenizer.Tokenize`；切换语言后缓存因 `cachedTextLanguageId` 不匹配自动失效。

```csharp
TextObject label = GameTexts.FindText("str_scoreboard_title");
label.CacheTokens(); // 进入每帧刷新的 HUD 循环前预热
```

#### `public string Format(float p1)`
**用途 / Purpose:** 一次性把单个浮点排版：`p1` 保留 1 位小数写入**全局**变量 `A0`，再返回用当前 `Value` 新建 TextObject 的 `ToString()`；注意它操作的是 `MBTextManager` 全局上下文，不是本对象 `Attributes`。

### 文本变量

#### `SetTextVariable(string tag, TextObject variable)` / `(string tag, string variable)` / `(string tag, float variable, int decimalDigits = 2)` / `(string tag, int variable)`
**用途 / Purpose:** 把文本里的 `{TAG}` 占位符绑定到一个具体值并写入 `Attributes`；`float` 重载会先按 `decimalDigits`（默认 2）位四舍五入再存入。`Name` 这种 `TextObject` 也能当值传入，解析时递归展开。它会**就地修改并返回自身**，不是返回新副本。

```csharp
TextObject title = GameTexts.FindText("str_kingdom_wealth"); // "{=k}Warchest of {KINGDOM}: {GOLD}{GOLD_ICON}"
title.SetTextVariable("KINGDOM", Hero.MainHero.MapFaction.Name)
     .SetTextVariable("GOLD", Hero.MainHero.Gold)
     .SetTextVariable("GOLD_ICON", "{=!}<img src=\"General\\Icons\\Coin@2x\" extend=\"8\">");
```

> 真实参考：`TaleWorlds.CampaignSystem` 的 `AllianceCampaignBehavior` 正是用 `textObject.SetTextVariable("KINGDOM_NAME", offeringKingdom.Name)` 这类写法填充外交文书的。

#### `public bool GetVariableValue(string tag, out TextObject variable)`
**用途 / Purpose:** 按 `tag` 从 `Attributes` 读出已设变量；找不到返回 `false` 并把 `variable` 置为空 `TextObject("")`，当值是带子变量的 `TextObject` 时会递归下钻，适合在替换前检查某个变量是否已设置。

```csharp
TextObject msg = GameTexts.FindText("str_greet"); // 已 SetTextVariable("HERO", ...)
if (msg.GetVariableValue("HERO", out TextObject heroVar) && heroVar != null)
{
    InformationManager.DisplayMessage(new InformationMessage(heroVar.ToString()));
}
```

#### `public void AddIDToValue(string id)`
**用途 / Purpose:** 仅当 `Value` 是裸文本（不以 `{=` 开头）且尚未含该 `id` 时，把 `Value` 改成 `"{=id}" + 原文本`，使 `GetID()` 能回溯到库里的来源 id（`GameTextManager.TryGetText` 内部会调用它把库里的 id 烙回结果）。

### 复制与比较

#### `public TextObject CopyTextObject()`
**用途 / Purpose:** 返回一份浅拷贝（`Value` 共享引用，`Attributes` 字典被重新 `new`），在共享/缓存的模板上填充变量前必须先 `CopyTextObject()`，否则会污染原模板。

```csharp
TextObject template = GameTexts.FindText("str_war_progress"); // "{=wp}War of {FACTION1} vs {FACTION2}"
string titleA = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionA.Name)
                        .SetTextVariable("FACTION2", factionB.Name)
                        .ToString();
string titleB = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionC.Name)
                        .SetTextVariable("FACTION2", factionD.Name)
                        .ToString();
```

#### `public string GetID()`
**用途 / Purpose:** 从 `Value` 中解析出 `{=id}` 里的 id 字符串（如 `"{abc}Hi"` 返回 `"abc"`，无 `{=` 前缀则返回 `""`），用于调试某段文本到底来自哪个本地化条目。

#### `public bool HasSameValue(TextObject to)` / `public override bool Equals(object other)` / `public bool Equals(TextObject other)` / `public override int GetHashCode()`
**用途 / Purpose:** `HasSameValue` 只比 `Value` 字符串；`Equals(TextObject)` 在 `Value` 相同且 `Attributes` 序列相等时为真；`GetHashCode` 基于每次构造分配的 `_internalId`（`CopyTextObject` 会换新 id），因此内容相同的两个对象哈希也不同——**不要**把 `TextObject` 当作字典键依赖内容判等。

#### `public static List<string> ConvertToStringList(List<TextObject> to)`
**用途 / Purpose:** 把一批 `TextObject` 直接映射成它们的 `Value` 字符串列表（不做本地化解析），适合批量日志或序列化导出。

#### `public bool Contains(TextObject to)` / `public bool Contains(string text)`
**用途 / Purpose:** 判断 `Value` 是否包含另一段 `Value` 或某个子串，`Value` 为 `null` 时返回 `false`，适合对文本做简单匹配/过滤。

## 典型用法

### 示例 1：发送一条带英雄名的本地化系统消息

```csharp
// 文本定义在模块 GameText XML：id=str_greet，text="{=xyz}Greetings, {HERO}!"
TextObject message = GameTexts.FindText("str_greet");
message.SetTextVariable("HERO", Hero.MainHero.Name); // Name 本身是 TextObject，会递归展开
InformationManager.DisplayMessage(new InformationMessage(message.ToString()));
```

### 示例 2：复用模板给不同势力生成战争标题（必须用副本）

```csharp
TextObject template = GameTexts.FindText("str_war_progress"); // "{=wp}War of {FACTION1} vs {FACTION2}"
string titleA = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionA.Name)
                        .SetTextVariable("FACTION2", factionB.Name)
                        .ToString();
string titleB = template.CopyTextObject()
                        .SetTextVariable("FACTION1", factionC.Name)
                        .SetTextVariable("FACTION2", factionD.Name)
                        .ToString();
```

### 示例 3：读取道具名并直接显示

```csharp
// 道具名就是 TextObject，可直接拿去显示或二次替换
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1");
TextObject name = sword.Name;                 // 例如 "{=abc}Aserai Sword"
InformationManager.DisplayMessage(new InformationMessage(name.ToString()));
```

## 风险 / 崩溃边界

- **裸 id 不会查库（最常见的坑）**：若字符串不以 `{=` 开头，`ToString()` 会原样输出整段文本，根本不查本地化库。要按 id 取文本必须用 `GameTexts.FindText("str_my_id")`，不要直接把 id 当成 `Value` 塞进去。
- **`FindText` 查不到返回错误文本而非空**：`GameTexts.FindText("不存在的id")` 返回 `Value = "{=!}ERROR: Text with id 不存在的id doesn't exist!"`，渲染出来是一句英文报错，不是空串。调试自定义 id 拼写时看这句最直接。
- **翻译缺失会回退英文，不会变空**：`{=abc}Hello` 这种内联条目，在非英文环境下若找不到该 id 的译文，`GetLocalizedText` 会回退到 `}` 后面的内联英文（此处即 `"Hello"`）。所以内联串永远至少能显示英文，不会凭空消失。
- **`SetTextVariable` 就地修改并返回自身**：它不是不可变对象。把同一个 `TextObject` 当模板反复 `SetTextVariable` 会互相覆盖变量；缓存/共享对象前务必 `CopyTextObject()`。变量值若传的是另一个共享 `TextObject`（如 `Hero.Name`），对其属性的改动也会反映到引用处。
- **在本地化数据加载前解析会拿到错误文本**：`GameTexts.FindText` 依赖已初始化的 `GameTextManager`（游戏开始后才有）。在 `Game` 未启动或 `GameTextManager` 为 `null` 时调用会抛 `NullReferenceException`；内联 `{=...}` 串则不依赖库，随时可 `ToString()`。
- **占位符拼写错误是静默的**：文本里写 `{NAME}` 但代码 `SetTextVariable("NAM", ...)`（少个 E），解析后 `{NAME}` 会原样残留，不会报错——逐字核对 tag 与占位符。
- **不要做字典键**：`GetHashCode` 基于实例 id，内容相同的两个对象哈希不同，`Equals` 也比 `Attributes`；把它放进 `HashSet<TextObject>` 或作 `Dictionary` 键会得到反直觉的结果。
- **Token 缓存与语言绑定**：`cachedTokens` 只在 `cachedTextLanguageId` 等于当前语言索引时有效，切换语言后首次 `ToString()` 会自动重新 token 化；手动 `CacheTokens()` 后若再切语言，需要重新预热。

## 跨版本

- v1.3.15 与 v1.4.5 的 `TextObject` 公共 API **基本一致**，上面所有 `SetTextVariable`、`ToString`、`CopyTextObject`、`GetID`、`IsNullOrEmpty` 等行为在两个版本间没有语义差异。
- v1.4.5 增量：新增 `GetDepth(int maxDepth)` / 私有 `GetDepthInternal`，用于计算 `Attributes` 中嵌套 `TextObject` 的递归深度（防止循环引用过深）；`Format(float)` 去掉了对 `MBTextManager.SetTextVariable` 的内部 `false` 参数（行为不变）；`TryGetOrCreateFromObject` 不再显式传入 `null` 的 `attributes`（结果相同）。
- 两个版本都**没有**把“按 id 查库”并入 `TextObject` 构造函数——获取库文本始终走 `GameTexts.FindText` / `Game.Current.GameTextManager.FindText`。

## 参见

- [本地化 bucket 索引](../) — 本区域（localization）的全部类型入口
- [MBTextManager](../MBTextManager) — `ToString()` 背后真正做翻译与变量替换的处理器
- [LocalizedTextManager](../LocalizedTextManager) — 承载官方/模组 XML 语言包的文本来源
- [Hero](../../campaign/Hero/) — `Name` / `FirstName` 即为 `TextObject`，最常见的文本来源
- [ItemObject](../../core/ItemObject/) — 道具的 `Name` 也是 `TextObject`
- [InformationManager](../../core-extra/InformationManager/) — 用 `InformationMessage(textObject.ToString())` 把文本显示到消息栏
- [Game](../../core-extra/Game/) — `Game.Current.GameTextManager` 是承载本地化库（`GameText`）的宿主
