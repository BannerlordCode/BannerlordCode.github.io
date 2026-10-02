---
title: "TextObject"
description: "游戏里所有可翻译文本的载体：既保存 `{=ID}英文原文` 这个查找键，也保存插值变量和整个 ToString() 渲染管线所需的全部状态。"
---

# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `[Serializable] public class TextObject`
**Base:** `System.Object`（无基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/TextObject.cs`

## 概述

`TextObject` 是 Bannerlord 本地化体系的中心数据结构，也是 mod 侧接触频率最高的类型。UI 标签、英雄名、物品名、提示信息、对话文本——凡是能在 `ModuleData/Languages/*.xml` 里找到 `id` 的东西，最终都装在一个 `TextObject` 里。它同时承担三件事：保存 `{=STR_ID}English fallback text` 这个**键 + 原文**对、保存 `SetTextVariable` 灌进来的插值参数、以及在 `ToString()` 时把这一切跑完整条语法管线渲染成最终字符串。它不是富文本编辑器对象，也不是本地化字典——字典在 [LocalizedTextManager](../LocalizedTextManager) 那边，`TextObject` 只是指向字典里某个 id 的一个句柄加一份自己的私有变量表。

## 心智模型

**运行时位置**：`TextObject.ToString()` 是整条渲染链的终点，调用链是 `ToString()` → `MBTextManager.ProcessTextToString(this, true)` → `GetLocalizedText(Value)` 查翻译表拿到目标语言的字符串 → `Tokenizer` 切成 `MBTextToken` → `MBTextParser.Parse` 产出 `MBTextModel` → [TextGrammarProcessor](../TextGrammarProcessor) 逐个表达式求值 → 当前语言处理器（`LanguageSpecificTextProcessor`）做语法级后处理。变量解析发生在中间，优先查 `Attributes`（实例私有），找不到才落到全局 `TextContext`。所以「同一个 TextObject 在两个不同界面里显示不同内容」是成立的，只要各自 `CopyTextObject()` 后设不同变量。

**谁创建它**：反序列化、`CampaignData` / `MBObjectManager` 里的实体定义、`[SaveableField]` 字段反序列化后的重建，以及你自己在代码里 `new TextObject(...)`。官方代码里 `new TextObject(` 出现 7800+ 次。

**典型调用顺序**：`new TextObject("{=id}fallback", null)` → `SetTextVariable("TAG", value)` → 交给 UI（`MBInformationManager.AddQuickInformation` 之类）→ UI 在布局阶段调 `ToString()`。不要在创建时立刻 `ToString()`——那一刻 `SetTextVariable` 可能还没跑完。

**常见误用与坑**

1. **`GetHashCode()` 返回的是自增序号 `_internalId`，不是内容哈希**。构造函数里 `_internalId = TextObject._internalIdCounter++`（静态计数器从 1 开始）。把 `TextObject` 放进 `HashSet<T>` 或 `Dictionary<TextObject, T>` 的 key，两个内容完全相同的新建对象是**两个不同的键**。要按内容去重要用 `HasSameValue(to)` 或 `Value` 字段本身比较。
2. **`Value` 是 public 字段，不是只读属性**，而且带 `[SaveableField(1)]`。它在运行期被 `AddIDToValue` 改写过。绕过 `TextObject` 直接改字符串，等于绕开了整个翻译表。
3. **`SetTextVariable` 是原地修改并返回 `this`**。如果这个 `TextObject` 是从 XML/存档里共享出来的（很多定义里的实例是单例），给它设变量会污染所有其他使用者。参数化之前先 `CopyTextObject()`。
4. **`Format(float)` 有全局副作用**：它内部调 `MBTextManager.SetTextVariable("A0", p1.ToString("F1"), false)`，往全局变量表里塞 `A0`，然后新建一个 `TextObject(this.Value, null)` 去 `ToString()`。它既丢掉了原有的 `Attributes`，又污染了全局状态，而且不可重入。1.5.3 里没有任何官方调用点，mod 也不该用。
5. **`ToString()` 与 `ToStringWithoutClear()` 的区别是「跑不跑语言处理器的清理」**。前者传 `shouldClear: true`，会在渲染完调 `_languageProcessor.ClearTemporaryData()`；后者不调，用于管线内部对变量文本做二次解析（见 `TextProcessingContext.GetVariableValue`）。你自己在渲染中途递归调 `ToString()` 是安全的，但自己去调 `ToStringWithoutClear()` 会让语言处理器的临时状态（俄语/波兰语的词组缓存、性别标记）泄漏到下一次渲染。
6. **`_internalId` 是 `[CachedData]`，读档时由 `[LoadInitializationCallback] OnLoad` 重新分配**。反序列化出来的对象和新建对象一样拿到新序号，所以哈希值跨读档不稳定——任何把 `TextObject` 存进长期 `Dictionary` 的代码都要在读档后重建。

## 主要成员

**字段与属性**

- `public string Value`（`[SaveableField(1)]`）：文本本体，形如 `"{=wAgfOHio}You have lost the ownership of the alley at {SETTLEMENT}."`。前面的 `{=id}` 是查找键，后面的花括号是插值槽位。**要判断一个文本来自哪个语言包就读它**（`GetID()`）。
- `public Dictionary<string, object> Attributes { get; private set; }`（`[SaveableProperty(2)]`）：这个 `TextObject` 的私有变量表。value 可以是 `TextObject` / `string` / `int` / `float` 之一——`TryGetOrCreateFromObject` 只认这四种，其他类型返回 `null`。构造时传 `null`（默认），第一次 `SetTextVariable` 时惰性创建。
- `public int Length`：`Value?.Length ?? 0`。只算本体长度，不含变量展开后的结果。
- `public bool IsLink`：`Value` 以 `"{=!}{.link}"` 开头。这是超链接文本的固定标记，渲染管线会据此把锚文本渲染成 `<a style="Link.">` 包裹的可点击形式。

**构造与工厂**

- `TextObject(string value, Dictionary<string, object> attributes = null)`：主构造。`value` 就是键 + 原文那一整串。
- `TextObject(int value, ...)` / `TextObject(float value, ...)`：数字的便捷重载，内部 `ToString()` 后转 string 构造。用于「纯数字也要走本地化管线」的场景。
- `static TextObject GetEmpty()`：返回 `Value == null`、`Attributes == null` 的空实例。`IsNullOrEmpty` 走的就是这个状态。**流程里返回空文本时返回它而不是 `null`**，避免调用方到处判空。
- `static TextObject ConvertToStringList` 的对偶：`static List<string> ConvertToStringList(List<TextObject> to)`：只取每个的 `Value`（**键+原文，不是翻译结果**）。用它做持久化时记住存的是原文不是译文。

**插值**

- `TextObject SetTextVariable(string tag, TextObject variable)` / `(string tag, string variable)` / `(string tag, int variable)` / `(string tag, float variable, int decimalDigits = 2)`：四个重载，全部惰性创建 `Attributes` 并 `return this` 便于链式。`float` 重载默认 `MathF.Round(x, 2)`。tag 名与语言包里的 `{TAG}` 大小写不敏感匹配（`_variables` 用了 `CaseInsensitiveComparer`）。
- `bool GetVariableValue(string tag, out TextObject variable)`：读一个变量。**返回 true 只表示「键存在」**——即使值解析成 `null` 也返回 true，所以取出后仍要判 `variable != null`。
- `void AddIDToValue(string id)`：当 `Value` 既不含 `id` 又不以 `{=` 开头时，在前面拼上 `{=id}`。用于给一段「裸文本」补上语言包 key。
- `string GetID()`：从 `Value` 里抠出 `{=...}` 中的 id。**注意它要求 `Value.Length > 2` 且前两字符是 `{=`**，否则返回空串。`ToString()` 在异常时打印的 `"Error at id: "` 用的就是它。

**渲染与比较**

- `override string ToString()`：跑完整管线并返回译文。异常被吞掉，转成 `"Error at id: <id>. Lang: <lang>"` 返回并 `Debug.Print`。**所以渲染失败在界面上表现为一行错误文本而不是崩溃**，调试时去 log 里找 `Error at id`。
- `string ToStringWithoutClear()`：同管线但保留语言处理器的临时数据。仅在管线内部使用。
- `bool Equals(TextObject other)`：内容相等 = `Value` 相同 **且** `Attributes` 逐项 `SequenceEqual`。两个不同对象只要变量表内容一致就相等。
- `bool HasSameValue(TextObject to)`：只比 `Value`。做「文案是否改过」这种判断时用这个，别用 `Equals`。
- `static bool operator ==` / `!=`：正确处理两侧为 `null`。
- `int GetValueHashCode()`：`Value.GetHashCode()`。这是**唯一一个内容相关的哈希**，想按内容做字典键时用它配 `HasSameValue`。
- `bool Contains(TextObject to)` / `bool Contains(string text)`：在 `Value`（**原文**，非译文）里做子串匹配。用于校验文案里是否还有 `{MISSING_TAG}`。

**其它**

- `void CacheTokens()`：提前把 token 化结果和当前语言记进缓存（`cachedTokens` / `cachedTextLanguageId` 都是 `[CachedData]`）。列表滚动或重复渲染同一长文本前调它能省一次 tokenize。`GetCachedTokens()`（internal）会在语言切换后自动失效重算。
- `int GetDepth(int maxDepth)`：递归遍历 `Attributes` 里的嵌套 `TextObject`，返回嵌套深度（带自引用保护 `t != textObject`）。给「把玩家输入再嵌回带变量的模板」这类场景做环检测。
- `Dictionary<string, object> Attributes` 的 shallow 复制在 `CopyTextObject()` 里：它新建一个 `Dictionary` 但**不深拷贝里面的 `TextObject` 值**。

## 使用示例

```csharp
// 官方 AlleyCampaignBehavior.OnAlleyOwnerChanged 的真实写法：
// 建对象 -> 灌变量 -> 交给 UI（不是当场 ToString）
TextObject message = new TextObject("{=wAgfOHio}You have lost the ownership of the alley at {SETTLEMENT}.", null);
message.SetTextVariable("SETTLEMENT", alley.Settlement.Name);   // 变量值本身可以是 TextObject
MBInformationManager.AddQuickInformation(message, 0, null, null, "");
// 渲染发生在 UI 布局阶段：InformationManager 内部会调 message.ToString()

// 参数化一个共享的模板之前先拷贝，否则会污染所有共用这个模板的地方
TextObject template = GameTexts.FindText("my_mod_clan_card");   // TaleWorlds.Core.GameTexts
TextObject forClanA = template.CopyTextObject();
forClanA.SetTextVariable("CLAN", clanA.Name);
forClanA.SetTextVariable("RENOWN", clanA.Renown, 0);   // 0 位小数，避免 1234.00

// 空文本返回 GetEmpty 而不是 null，调用方统一走 IsNullOrEmpty
if (TextObject.IsNullOrEmpty(optionalSuffix))
    return baseName;

// 按内容而不是按实例去重（GetHashCode 是自增序号，不能直接当字典键）
List<TextObject> seen = new List<TextObject>();
foreach (TextObject candidate in candidates)
    if (seen.Find(existing => existing.HasSameValue(candidate)) == null)
        seen.Add(candidate);
```

## 风险与边界

- **存档兼容性**：`Value` 是 `SaveableField(1)`、`Attributes` 是 `SaveableProperty(2)`。mod 如果把 `TextObject` 存进自己的存档字段，读出来的是 `{=id}原文` 这一串，翻译要靠当前语言重新查——**存档不存译文**。换语言读档时显示会跟着变。
- **`Attributes` 的序列化**：`SaveableLocalizationTypeDefiner` 只定义了 `Dictionary<string, TextObject>` 这一个容器（`ConstructContainerDefinition`）。`TextObject.Attributes` 声明类型是 `Dictionary<string, object>`，官方路径上装的实际是 `Dictionary<string, TextObject>` 的容器定义；往里塞自定义类型（比如 `MBReadOnlyList<string>`）不会自动获得存档支持，需要自己写 definer。
- **翻译缺失的降级行为**：`GetLocalizedText` 找不到目标语言条目时**返回 `{=id}` 之后的原文部分**（去掉了 `{%.comment}`）。也就是说你永远拿得到英文 fallback，不会看到空串——但也不会看到 `{=id}` 本身，除非 id 是 `*` 或 `!` 这种特殊值。
- **语言切换会使缓存失效**：`cachedTextLanguageId` 与 `GetActiveTextLanguageIndex()` 比对。切语言后所有缓存 token 自动重算，但 `CopyTextObject()` 拷过去的缓存是带着旧语言 id 的，切换后同样会自动失效。
- **线程**：`TextObject` 本身没有线程标注，但 `MBTextManager.GetLocalizedText` 用了 `[ThreadStatic]` 的两个 `StringBuilder`。跨线程 `ToString()` 本身不崩，然而语言处理器的静态状态（`RussianTextProcessor.WordGroups` 等）是普通 `static`，**在多线程下并发渲染同一条文本会互相踩**。Bannerlord 的文本渲染都在主线程，mod 不要把它搬到 worker 线程。
- **不要缓存 `ToString()` 的结果**。语言可在运行期切换（`MBTextManager.ChangeLanguage`），译文会变。

## 依赖关系

- [MBTextManager](../MBTextManager) — `ToString()` 真正调用它做渲染；`Format(float)` 通过它写全局变量
- [LocalizedTextManager](../LocalizedTextManager) — 翻译表的持有者，`{=id}` 查表最终落到它
- [TextGrammarProcessor](../TextGrammarProcessor) — 表达式求值阶段，产出最终字符串
- [TextProcessingContext](../TextProcessingContext) — 全局变量表；实例 `Attributes` 查不到时回落到这里
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner) — 让 `TextObject` 与 `Dictionary<string, TextObject>` 能进存档
- [SaveManager](../../save-system/SaveManager) — 存档时通过上面那个 definer 序列化所有 `TextObject` 字段
- [MBSubModuleBase](../../core/MBSubModuleBase) — mod 侧注册自定义文本与语言包的入口
