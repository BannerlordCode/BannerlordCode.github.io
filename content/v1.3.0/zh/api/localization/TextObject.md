---
title: "TextObject"
description: "Bannerlord 里每一块显示文本所使用的值类型：一条内联的 {=id}English 回退字符串、一个用于内联变量的链式 SetTextVariable、用于快速重复渲染的 token 缓存，以及一个会跑完整条本地化管线、并把失败吞成错误字符串的 ToString。"
---
# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** 无
**Source:** `TaleWorlds.Localization/TextObject.cs`

## 概述

`TextObject` 是 Bannerlord 里每一条本地化字符串的存储形式。它是一个对 public `string Value` 字段的薄封装，该字段保存*内联的源码形式*——通常是 `{=Ab3xKq1L}Clan {MY_CLAN} holds {MY_FIEF_COUNT} fiefs.`——外加一个可选的 `Dictionary<string, object> Attributes` 袋，用于存放内联变量值。构造时什么都不会解析。解析发生在 `ToString()` 里，它把整个东西交给 `MBTextManager.ProcessTextToString(this, true)`：按 `{=id}` 前缀查当前语言、tokenize、parse、替换变量、应用语言处理器，然后按需清除它的临时数据。`TextObject` 还会缓存自己的 token 列表（`cachedTokens` 加 `cachedTextLanguageId`），让同一个实例反复渲染时跳过重新分词。

## 心智模型

把它理解成**"一条带变量袋的延迟格式化字符串"**——比起普通字符串，它更接近 `string.Format` 交叉 `Lazy<ResourceString>`。你构建一个，交给 UI 或引擎，引擎在需要像素时才调 `ToString()`。

**真实的解析顺序，摘自 `MBTextManager.ProcessTextToString`：**

1. 参数为 `null` → 返回 `null`。`TextObject.IsNullOrEmpty(this)` → 返回 `""`。
2. `GetLocalizedText(Value)` —— 若 `Value` 以 `{=` 开头，在第一个 `}` 处切分成 id 与目标文本。当前语言为 `"English"` 时直接使用目标文本（并由 `RemoveComments` 剥掉 `{%.+?}`）；任何其他语言都去问 `LocalizedTextManager.GetTranslatedText(...)`，查不到才回退到目标文本。id 恰好为 `*` 或 `!` 时跳过查表。
3. `Process(localizedText, this)` —— 若缓存对当前语言有效则用 `GetCachedTokens()`，否则 `Tokenizer.Tokenize(...)`；然后 `TextGrammarProcessor.Process(MBTextParser.Parse(list), TextContext, parent)`。
4. `_languageProcessor.Process(text)` 应用当前语言的变形；因为 `ToString()` 传的是 `shouldClear: true`，之后会跑 `ClearTemporaryData()`。
5. 若 `MBTextManager.LocalizationDebugMode` 打开，添加 `"(<id>) "` 前缀。

**三个坑：**

- **`ToString()` 永不抛异常。** 它把整条管线包在 `try`/`catch` 里，任何异常都会返回字面字符串 `"Error at id: " + GetID() + ". Lang: " + MBTextManager.ActiveTextLanguage`，并用 `Debug.Print` 打印消息。一个拼错的变量名或格式错误的语法函数因此表现为 UI 里的那个字符串。看到它，原因在 `Value`，不在 `ToString()`。
- **`IsEmpty()` 比 `Value == ""` 更严格。** 它返回 `string.IsNullOrEmpty(Value) && (Attributes == null || Attributes.Count == 0)`。一个由空字符串构建但带着属性的 `TextObject` **不是**空的，而 `MBTextManager.ProcessTextToString` 会把它完整跑一遍管线。
- **`Equals` / `GetHashCode` / `==` 比较的是 `Value`，不是渲染后的文本。** `HasSameValue(TextObject to)` 字面上就是 `this.Value == to.Value`，`==` / `!=` 运算符也是同样的语义。id 相同但 `Attributes` 不同的两个实例相等；id 不同但渲染输出相同的两个实例不相等。不要用 `==` 来判断两个 UI 标签看起来是否一样。

## 何时该用 / 何时不该用

**该用 `TextObject` 的场景：**
- 任何要交给渲染 API 的值：`InformationManager.ShowInquiry`、Gauntlet 文本属性、`InitialStateOption.Name`、对话句子文本、通知文本。
- 你需要随字符串一起传递的内联变量——`SetTextVariable(tag, value)` 返回 `this`，可以链式调用，值也附着在实例上。
- 你需要把 id 留到以后用（提示查找、本地化审计），用 `GetID()`。

**不该用 `TextObject` 的场景：**
- 你需要一个你不拥有的字符串也能看到的全局变量。那是 `MBTextManager.SetTextVariable(name, value)`，写进共享的 `TextProcessingContext`。实例属性只有*该对象内部*的表达式能读到。
- 你想拼接文本。`TextObject` 没有 `+`；请构建一条字符串再包起来，或者用引擎提供的 `MBTextManager.LinkAttribute` / `{!s}` 链接标记。
- 你在存非文本数据。`Attributes` 字典的值类型是 `object` 且无类型约束；没人校验它，也没人序列化它，除非你显式把它走一遍 `MetaData` 同步。

## 依赖关系

- [MBTextManager](../MBTextManager/) — `ToString()` 会调进 `MBTextManager.ProcessTextToString`；本类是整条文本管线的输入。
- [LocalizedTextManager](../LocalizedTextManager/) — 把 `{=id}` 前缀解析到当前语言的字典上。
- [TextGrammarProcessor](../TextGrammarProcessor/) — 对从 `Value` 解析出的表达式树求值。
- [TextIdExpression](../TextIdExpression/) — 承载 `{=id}` 查找的解析节点。
- [SaveableLocalizationTypeDefiner](../SaveableLocalizationTypeDefiner/) — 当 `TextObject` 嵌入被序列化对象时的存档侧对应物。
- [MBSubModuleBase](../../core/MBSubModuleBase/) — 为游戏自身界面构建本地化字符串的典型位置。

## 主要成员

### 构造

#### `public TextObject(string value, Dictionary<string, object> attributes = null)`
主构造函数。`value` 应当是内联的 `{=id}English text` 形式。**约定：**这里既不解析也不校验；翻译表里不存在的 id 会静默渲染出英语回退文本。

#### `public TextObject(int value, Dictionary<string, object> attributes = null)` / `public TextObject(float value, ...)`
两者都通过 `value.ToString()` 链到字符串构造函数。它们产出的 `TextObject` **没有** `{=id}` 前缀，因此不可本地化——它们是给要当作变量值插入的数字用的，不是用来显示的字符串。

### 渲染

#### `public override string ToString()`
上文描述的解析路径，异常被吞成 `"Error at id: ..."` 字符串。字符串内插、`string.Concat`、`Console.WriteLine` 以及所有接受 `TextObject` 的引擎 API 都会隐式调到它。

#### `public string ToStringWithoutClear()`
通过内部的 `MBTextManager.ProcessWithoutLanguageProcessor(to)` 渲染——同样的管线但**去掉** `_languageProcessor.Process(text)`。当字符串之后还要被调用方重新处理时用它（例如测量之前，或者语言处理器会被重复施加变形时）。在本该用普通 `ToString()` 的地方用它，会得到没有语言语法调整的文本。

#### `public string GetID()`
从 `Value` 的下标 2 开始走到第一个 `}` 并返回捕获到的 id；当 `Value` 为 null、长度不足三、或不以 `{=` 开头时返回 `""`。返回的是空字符串而不是 null。

#### `public TextObject CopyTextObject()`
深拷贝 `Attributes` 字典（值是浅拷贝）并返回新实例。**约定：**当你准备对某个共享或静态的 `TextObject` 调 `SetTextVariable` 时必须先拷贝；改动原对象会把你的值泄漏给所有持有它的其他地方。

### 内联变量

#### `public TextObject SetTextVariable(string tag, TextObject variable)` 及其 `string` / `int` / `float` / `TextObject` 重载
四个重载全部汇入私有的 `SetTextVariableFromObject(tag, variable)`，后者写入 `Attributes`；四个都**返回 `this`**——它们是链式的，不是 void。`float` 重载带 `decimalDigits = 2`。这是实例作用域：只有*该对象内部*的表达式能读到那个标签。

#### `public bool GetVariableValue(string tag, out TextObject variable)`
读回一个内联变量。标签不存在时返回 `false`，并把 `variable` 留在默认值。

#### `public void AddIDToValue(string id)`
在 `Value` 前加上 `"{=" + id + "}"`，但仅当 `Value` 非 null、不已包含该 id、且不以 `"{="` 开头时。构造上就是幂等的，而对已带前缀的值它静默无操作。

### 空值、比较与转换

#### `public bool IsEmpty()` / `public static TextObject GetEmpty()` / `public static bool IsNullOrEmpty(TextObject obj)`
`IsEmpty()` 是 `Value` 为空**且**没有 attributes。`GetEmpty()` 返回一个共享的空实例——表达"无文本"时复用它而不是 `null`，因为 `MBTextManager` 对 null `TextObject` 返回 `null`、对空的返回 `""`，而 UI 各层处理 `""` 更稳妥。

#### `public override bool Equals(object other)` / `public bool Equals(TextObject other)` / `public static bool operator ==` / `!=` / `public override int GetHashCode()`
基于值的相等性。两个 `Value` 相同的 `TextObject` 相等，与 `Attributes` 无关。因为它同时定义了 `GetHashCode`，把 `TextObject` 当作 `Dictionary` 键使用时会与任何源码字符串相同的其他实例碰撞。

#### `public bool HasSameValue(TextObject to)`
就是 `this.Value == to.Value`，且对 `to` 没有 null 保护——传 `null` 会抛异常。

#### `public int GetValueHashCode()`
只对 `Value` 求的哈希，单独暴露出来，好让调用方按原始字符串做键，而不是套用相等性语义。

#### `public static List<string> ConvertToStringList(List<TextObject> to)`
把每个元素经 `ToString()` 渲染后返回字符串列表。没有逆操作——不丢失 id 和变量的话，无法从这些字符串重建 `List<TextObject>`。

#### `public string Format(float p1)`
针对 `{value}` 风格占位符的单浮点数格式化便捷方法。

#### `public bool Contains(TextObject to)` / `public bool Contains(string text)`
对渲染结果（字符串重载则是对原始字符串）做子串检查。

### 缓存

#### `public void CacheTokens()`
现在就强制分词，让第一次 `ToString()` 不必付这个代价。`internal List<MBTextToken> GetCachedTokens()` 返回缓存，`cachedTextLanguageId` 记录它是为哪种语言构建的，从而在语言切换时让缓存失效。

#### `public Dictionary<string, object> Attributes { get; private set; }` / `public int Length` / `public bool IsLink`
`Attributes` 的 setter 是私有的——请使用 `SetTextVariable` / `CopyTextObject`。`Length` 是 `Value.Length`。`IsLink` 反映 `MBTextManager.LinkAttribute` 标记。

## 使用示例

### 示例 1 —— 构建并渲染带内联变量的本地化字符串

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyTextFactory
    {
        public static TextObject FiefCountLabel(string clanName, int count)
        {
            // 内联英语回退 + 一个唯一 id；变量随实例一起走。
            return new TextObject("{=Qa71bXzP}{MY_CLAN} holds {MY_FIEF_COUNT} fiefs.", null)
                .SetTextVariable("MY_CLAN", clanName)
                .SetTextVariable("MY_FIEF_COUNT", count);
        }

        public static string Render(string clanName, int count)
        {
            // ToString() 跑完整条管线；变量写错会得到
            // "Error at id: Qa71bXzP. Lang: <lang>" 而不是抛异常。
            return FiefCountLabel(clanName, count).ToString();
        }
    }
}
```

### 示例 2 —— 查看 id，并在改动前先拷贝

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyTextTools
    {
        private static readonly TextObject Shared = new TextObject("{=L4mZ9pQa}Shared label", null);

        public static string IdOf(TextObject to)
        {
            return to.GetID();
        }

        public static TextObject Specialized(string extra)
        {
            // 先拷贝：改动共享实例会把 "extra" 泄漏到所有使用处。
            TextObject copy = Shared.CopyTextObject();
            copy.SetTextVariable("MY_EXTRA", extra);
            return copy;
        }

        public static void PreTokenize(TextObject to)
        {
            to.CacheTokens();
        }
    }
}
```

### 示例 3 —— 调试缺失的翻译

```csharp
using TaleWorlds.Localization;

namespace MyMod
{
    public static class MyLocalizationAudit
    {
        public static string[] Audit(IEnumerable<string> ids)
        {
            // 给每条渲染结果加上 id 前缀，让缺口在游戏里可见。
            MBTextManager.LocalizationDebugMode = true;
            var results = new List<string>();
            foreach (string id in ids)
            {
                TextObject probe = new TextObject("{=" + id + "}MISSING", null);
                results.Add(probe.ToString());
            }
            return results.ToArray();
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** `TextObject` 通过游戏的存档系统借助 `MetaData` 可序列化——它实现了对象收集协议（`AutoGeneratedInstanceCollectObjects`、`OnLoad(MetaData)`）。这意味着存放在**可保存**对象上（`MBObjectManager` 类型、`Hero`、战役对象）的 `TextObject` 能往返。但存放在 `CampaignBehaviorBase` 普通字段上的 `TextObject` **不会**，除非你自己把它走一遍 `IDataStore`——而且必须存原始的 `Value` 字符串，因为属性字典和 token 缓存都不是已保存载荷的一部分。
- **跨域依赖。** `TextObject.cs` 自身只需要 `System` 和 `TaleWorlds.Library`（`Debug.Print`、`MBStringBuilder`、`CommandLineFunctionality`），完全不碰 `TaleWorlds.CampaignSystem`，这正是它从每个 `MBSubModuleBase` 钩子里调用都安全的原因。`TaleWorlds.CampaignSystem.Extensions.TextObjectExtensions` 在其上叠加了战役风格的辅助方法；引用那个扩展类才是把战役程序集拖进来的动作。
- **加载顺序。** `{=id}` 查找走的是 `LocalizedTextManager._gameTextDictionary`，它在某个语言被加载之前是空的——而且如那页所述，对英语**永远**不会被填充。因此在 `Module.Initialize` 跑完 `LoadLocalizationXmls` 之前的静态构造函数里调 `TextObject.ToString()` 仍会返回英语回退文本，所以顺序在这里很少出问题；真正出问题的是**非英语**玩家——他们的字典填充得更晚，于是任何过早解析并被缓存的内容都会显示成回退文本。
- **ID 稳定性。** id 是跨所有模块共享的翻译表键。两个模块都声明 `{=Ab3xKq1L}` 就会在 `LocalizedTextManager._gameTextDictionary` 里冲突，其中一个静默获胜。如果你要 fork 一条原版字符串来修改它，**必须同时改 id**，否则你就是在和游戏、和所有其他 mod 共享同一个键——而 `LocalizedTextManager.CheckValidity` 不会为此警告你。
- **token 缓存失效。** `CacheTokens()` 会存下 `cachedTextLanguageId`，缓存只在语言没变时才安全。在缓存之后调用 `MBTextManager.ChangeLanguage` 会被管线内的 id 检查处理掉；围绕**重载**（`LocalizedTextManager.ReloadTexts`）缓存则不会，所以重载之后请重新渲染，而不是信任一个缓存实例。
- **共享实例被改动。** `SetTextVariable` 修改实例上的 `Attributes`。被当作模板使用的 `static readonly TextObject` 会从每个调用方那里累积变量。修法是 `CopyTextObject()`；更省的是干脆 `new TextObject(...)`。
- **`HasSameValue(null)`** 会抛异常；`IsNullOrEmpty(null)` 是安全的并返回 `true`。任何解引用之前都用 `TextObject.IsNullOrEmpty(to)`——它就是引擎自己到处在用的那个容忍 null 的形式。
- **数字构造函数不可本地化。** `new TextObject(42)` 产出的是没有 `{=id}` 前缀的 `"42"`。它在每一种语言里读起来都一样，包括那些数字系统或数字格式规则不同的语言。请把数字通过 `MBTextManager.SetTextVariable(name, float, decimalDigits)` 放进一条真正本地化的字符串里，而不是直接用数字构造函数。

## 跨版本提示

- **v1.3.0：** `TextObject` 是 `public class TextObject`，且 `public string Value;` 是一个**字段**，不是属性。公开接口为：`Attributes` 属性、`Length`、`IsLink`、三个构造函数、`GetEmpty`、`IsEmpty`、`IsNullOrEmpty`、`ToString`、`ToStringWithoutClear`、`Format(float)`、两个 `Contains` 重载、`Equals`/`GetHashCode`/`operator ==`/`operator !=` 这一组、`Equals(TextObject)`、`HasSameValue`、`ConvertToStringList`、四个 `SetTextVariable` 重载、`AddIDToValue`、`GetVariableValue`、`GetValueHashCode`、`CopyTextObject`、`GetID`，以及 `CacheTokens`。`GetCachedTokens`、`TryGetAttributesValue` 和四个 `AutoGenerated*` 成员是 `internal`。
- **不属于这个类的：** 没有 `TextObject.Format(string)`，没有从 `string` 的隐式转换，也没有 `+` 运算符。`new TextObject("x", null)` 是唯一的构造路径，`ToString()` 是唯一的渲染路径。
- **v1.3.15 / v1.4.5：** 形状与 `{=id}fallback` 约定未变。后续补丁扩展的是发布的 `LanguageData` 集合和各语言处理器，但 `ToString()` 那种"吞异常并返回错误字符串"的行为，以及实例变量与全局变量的分工（`TextObject.SetTextVariable` 对 `MBTextManager.SetTextVariable`）完全一致，因此为 v1.3.0 写的代码继续可用。

## 参见

- ↑ 上级目录：[Localization API 索引](../)
- ↔ 同级：[MBTextManager](../MBTextManager/) —— 本对象渲染所经过的运行时
- ↔ 同级：[LocalizedTextManager](../LocalizedTextManager/) —— `{=id}` 前缀所解析的表
- ↪ 管线阶段：[TextGrammarProcessor](../TextGrammarProcessor/) · [TextIdExpression](../TextIdExpression/)
- ↖ 典型调用方：[MBSubModuleBase](../../core/MBSubModuleBase/)