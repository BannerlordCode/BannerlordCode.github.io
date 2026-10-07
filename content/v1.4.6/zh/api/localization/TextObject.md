---
title: "TextObject"
description: "带参数的本地化字符串容器：Value 是 {=key}key} 原文，Attributes 存替换变量，ToString() 走 MBTextManager 解析。"
---
# TextObject

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public class TextObject`
**Base:** `System.Object`
**Source:** `TaleWorlds.Localization/TextObject.cs`

## 概述

它是 Bannerlord 本地化系统的最小单元，也是 mod 界面和物品/角色数据里出现频率最高的类型。结构极简：**`Value` 是一个 `public` 字段**（`[SaveableField(1)]`），里面装的是**未解析的原文**，典型形态是 `{=SomeKey}后面的默认文本`；**`Attributes` 是一个 `Dictionary<string, object>`**（`[SaveableProperty(2)]`），装的是 `{key?}` 位置的替换值，可以是 `string`、`int`、`float` 或嵌套的 `TextObject`。真正把两者合成可显示字符串的是 `ToString()`，它转调 `MBTextManager.ProcessTextToString(this, true)`。

因此「显示什么」和「存什么」是分开的：存档里只存 `Value` 原文加 `Attributes`，**不存解析结果**。语言切换、翻译文件更新后重新 `ToString()` 就能拿到新语言——这也是 1.4.6 里要维护 `cachedTokens` / `cachedTextLanguageId` 并在语言 id 变化时丢弃缓存的原因。

它标了 `[Serializable]`，且参与序列化，所以可以直接挂在 `MBObjectBase` 派生类上随存档走。

## 心智模型

三种构造姿势，语义完全不同：

- `new TextObject("Hello")` —— 字面文本，**不经过本地化**，`{=...}` 前缀不存在。
- `new TextObject("{=MyKey}Hello")` —— 本地化文本。`ToString()` 时 `MBTextManager.GetLocalizedText` 会去语言文件里找 `MyKey`；找不到就用 `}` 后面那段原文兜底。
- `TextObject.GetEmpty()` —— 走**私有无参构造**，`Value = null`、`Attributes = null`。这是「一个空但非 null 的 TextObject」，专门用来避免调用方到处判 null。

**变量替换**用 `SetTextVariable(tag, value)` 系列，全部返回 `this` 以便链式调用，把 `tag → value` 写进 `Attributes`。注意 float 重载默认 `decimalDigits: 2` 且会 `MathF.Round`。

**`CopyTextObject()` 是最该被记住的方法**：它复制 `Attributes` 字典（浅拷贝每个值）、复用 `Value`，并把 `cachedTokens` 一起带过去。静态的 `TextObject`（比如物品名）被 `SetTextVariable` 一改就是**永久污染全局文案**——所有引用同一个 `TextObject` 实例的地方都会显示你的变量。正确姿势是 `CopyTextObject()` 之后再 `SetTextVariable`。

**相等性有两套**：`Equals` 同时比 `Value` 和 `Attributes`（逐项 `SequenceEqual`），而 `GetHashCode()` 只返回 `_internalId`——**这个内部 id 每个实例唯一且不参与相等判断**。后果是：两个 `Value`/`Attributes` 完全相同的 `TextObject` 相等，但哈希不同，在 `Dictionary`/`HashSet` 里行为诡异。跨存档比较请用 `HasSameValue`。

**加载时机**：`[LoadInitializationCallback] private void OnLoad(MetaData)` 会在读档后重新分配 `_internalId`，因为这个 id 是 `[CachedData]` 不进存档的。漏跑这个回调（自己绕开 `LoadResult.InitializeObjects()`）会让读档回来的所有 `TextObject` 共用 id 0。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Value` | `[SaveableField(1)] public string Value;` | **公开字段**，未解析的原文。存档槽位 1。因为是字段不是属性，外部可以直接改——改完记得重新 `ToString()`。 |
| `Attributes` | `[SaveableProperty(2)] public Dictionary<string, object> Attributes { get; private set; }` | 变量字典，存档槽位 2。`private set`，只能通过 `SetTextVariable` 写入。`null` 表示没有变量。 |
| `Length` | `public int Length { get; }` | `Value` 的字符数；`Value` 为 null 时返回 **0**。注意它不反映本地化后的实际长度。 |
| `IsLink` | `public bool IsLink { get; }` | `Value` 是否以 `{=!}{.link}` 开头——即「这是一个超链接文本」。解析前判断。 |
| `.ctor` | `public TextObject(string value, Dictionary<string, object> attributes = null)` | 主构造。`_internalId` 取自进程级自增计数器 `TextObject._internalIdCounter`（从 1 开始）。 |
| `.ctor` | `public TextObject(int value, Dictionary<string, object> attributes = null)` | 委托给 string 构造（`value.ToString()`）。给数字文案用。 |
| `.ctor` | `public TextObject(float value, Dictionary<string, object> attributes = null)` | 委托给 string 构造。 |
| `GetEmpty` | `public static TextObject GetEmpty()` | 返回 `Value`/`Attributes` 全 null 的空实例。判空请用配套的 `IsNullOrEmpty`，不要自己 `== null`。 |
| `IsEmpty` | `public bool IsEmpty()` | `Value` 为 null 或空串，**且** `Attributes` 为 null 或为空。两个条件同时成立才算空。 |
| `IsNullOrEmpty` | `public static bool IsNullOrEmpty(TextObject obj)` | 静态判空：`obj == null || obj.IsEmpty()`。**UI 代码里首选这个**。 |
| `ToString` | `public override string ToString()` | 解析成可显示文本，走 `MBTextManager.ProcessTextToString(this, true)`（`true` = 清理标记）。失败时返回 `"Error at id: " + GetID() + ". Lang: " + MBTextManager.ActiveTextLanguage` 并 `Debug.Print` 异常——**不抛**。 |
| `ToStringWithoutClear` | `public string ToStringWithoutClear()` | 同上但 `clearTags: false`，保留原始标记。排查翻译标记问题时用。 |
| `Format` | `public string Format(float p1)` | 把 `{A0}` 位置替换成 `p1.ToString("F1")`，走的是 `MBTextManager.SetTextVariable` 全局变量通道而非 `Attributes`。返回一个新 `TextObject` 的字符串。 |
| `Contains` | `public bool Contains(TextObject to)` | 判断 `Value` 是否包含 `to.Value`。`Value` 为 null 时返回 false。**是原文比较，不是解析后比较。** |
| `Contains` | `public bool Contains(string text)` | 同上，字符串版。 |
| `GetID` | `public string GetID()` | 从 `{=` 后面一路读到 `}`，返回 key。`Value` 为 null 或不以 `{=` 开头时返回**空串**。 |
| `AddIDToValue` | `public void AddIDToValue(string id)` | 若 `Value` 非 null、不含 `id`、且不以 `{=` 开头，就前置成 `{=id}Value`。已带 key 的文本不动。 |
| `SetTextVariable` | `public TextObject SetTextVariable(string tag, TextObject variable)` | 写入一个嵌套 `TextObject` 变量（**它本身不做 trim 或空值检查**）。返回 this。 |
| `SetTextVariable` | `public TextObject SetTextVariable(string tag, string variable)` | 写入字符串变量。 |
| `SetTextVariable` | `public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)` | 写入 float 变量，**会 `MathF.Round(variable, decimalDigits)`**，默认保留两位。 |
| `SetTextVariable` | `public TextObject SetTextVariable(string tag, int variable)` | 写入 int 变量。 |
| `GetVariableValue` | `public bool GetVariableValue(string tag, out TextObject variable)` | 取变量。**返回值语义很反直觉**：属性字典缺 `tag` 时返回 false；查到之后即使值是空串也返回 true。`out variable` 永不为 null（缺 key 时给的是 `new TextObject("", null)`）。 |
| `GetDepth` | `public int GetDepth(int maxDepth)` | 递归计算嵌套 `TextObject` 变量的最深层数，超过 `maxDepth` 就截断返回 `maxDepth`。**`maxDepth` 是安全阀，防止自引用导致的无限递归**（`t != textObject` 只挡直接自引用）。 |
| `GetValueHashCode` | `public int GetValueHashCode()` | `Value.GetHashCode()`。**`Value` 为 null 会 NRE**。要放进字典键请先用 `HasSameValue` 判过。 |
| `HasSameValue` | `public bool HasSameValue(TextObject to)` | 只比 `Value` 字符串（`==`）。跨存档、跨语言比较文本用这个。 |
| `Equals` | `public override bool Equals(object other)` | 走下面的 `Equals(TextObject)`，因此**同时比较 Value 和 Attributes**。 |
| `Equals` | `public bool Equals(TextObject other)` | `HasSameValue(other)` 且 `Attributes` 为 `SequenceEqual`（按键值对逐项比）。 |
| `GetHashCode` | `public override int GetHashCode()` | **只返回 `_internalId`，与 Value/Attributes 无关**。相等对象哈希不同——不要把 `TextObject` 直接当 `Dictionary` 键做值语义查找。 |
| `CopyTextObject` | `public TextObject CopyTextObject()` | 复制一份：`Attributes` 非空时新建字典逐项拷贝（值是浅拷贝），`Value` 复用，并继承 `cachedTokens` / `cachedTextLanguageId`。**改静态文案前的标准动作。** |
| `CacheTokens` | `public void CacheTokens()` | 立刻做一次本地化 + 分词并缓存到 `cachedTokens`。`Value` 为 null 时整个方法空转。UI 大量重复渲染同一条文案时用来避免重复分词。 |
| `ConvertToStringList` | `public static List<string> ConvertToStringList(List<TextObject> to)` | 把 `List<TextObject>` 逐项取 `Value` 拼成 `List<string>`。**不解本地化、不判空**——`to` 里有 null 元素就 NRE。 |
| `operator ==` | `public static bool operator ==(TextObject lhs, TextObject rhs)` | `lhs == rhs`（引用相等）或两者非 null 且 `Equals`。**两个都为 null 时返回 true**。 |
| `operator !=` | `public static bool operator !=(TextObject lhs, TextObject rhs)` | `!(lhs == rhs)`。 |

## 怎么用

### 怎么拿到它

`TextObject` 是 `TaleWorlds.Localization/TextObject.cs:12` 的 `public class TextObject`——**引用类型，不继承 `MBObjectBase`，也不进 `MBObjectManager`**。它是一个「带变量标记的字符串」：内部存 `Value`（原始文本）、`Attributes`（变量字典）、`_internalId`（自增 id）。

三个构造器：`public TextObject(string value, Dictionary<string, object> attributes = null)`（`:78`）、`int` 重载（`:86`）、`float` 重载（`:92`），后两个都转成字符串再调第一个（`:87`、`:93` 的 `: this(value.ToString(), attributes)`）。**每个实例都做 `this._internalId = TextObject._internalIdCounter++;`（`:81`）——构造即分配 id，没有池化。**

空文本**必须走工厂**：`public static TextObject GetEmpty()`（`:187`）与判空三件套 `IsEmpty()`（`:193`）、`IsNullOrEmpty(TextObject obj)`（`:199`）。不要写 `new TextObject(null)`。

变量替换是**链式**的，三个重载都返回 `TextObject`：`SetTextVariable(string tag, TextObject variable)`（`:315`）、`(string, string)`（`:321`）、`(string, float, int decimalDigits = 2)`（`:328`）、`(string, int)`（`:335`）。

比较用 `operator ==` / `!=`（`:281`、`:287`）或 `Equals(TextObject other)`（`:269`），另有 `HasSameValue(TextObject to)`（`:275`）和 `Contains`（`:244`、`:250`）。

### 典型用法

```csharp
using TaleWorlds.Localization;

// 基本构造
var greeting = new TextObject("你好，{NAME}！");                    // TextObject.cs:78
var withVar = greeting.SetTextVariable("NAME", "雷德");             // :321，返回新对象（链式）
Debug.Print(withVar.ToString(), 0);

var counted = new TextObject("你有 {N} 枚金币")
                    .SetTextVariable("N", 42);                       // :335
var priced = new TextObject("价格 {P}")
                    .SetTextVariable("P", 12.5f, decimalDigits: 2);  // :328

// 判空：三个都要用上
if (TextObject.IsNullOrEmpty(name)) { }            // :199，同时处理 null 与空
if (greeting.IsEmpty()) { }                        // :193
TextObject none = TextObject.GetEmpty();           // :187

// 比较
if (a == b) { }          // :281
bool sameText = a.HasSameValue(b);   // :275

// 列表
List<string> strings = TextObject.ConvertToStringList(textObjects);   // :293
```

### 最容易踩的坑

**把 `SetTextVariable` 当成「就地修改」，然后发现原对象没变。** 三个重载（`:315`、`:321`、`:328`、`:335`）都**返回 `TextObject`**，签名就是为此设计的。忽略返回值的后果是：原 `greeting` 仍然没有变量，界面渲染出来是 `你好，{NAME}！` 原样显示——**不报错，只是变量没被替换**。而且每次 `SetTextVariable` 都会 `new` 一个新实例并分配新的 `_internalId`（`:81`），所以在每帧里链式调用会持续产生垃圾对象。

第二个坑是 `==` 的语义。`operator ==`（`:281`）与 `Equals(TextObject other)`（`:269`）是两条独立实现，和 `HasSameValue`（`:275`）也不是同一件事——**判断「两段文本是否等价」要用 `HasSameValue` 或 `Contains`，而 `==` 适合判断「是不是同一个（变量后仍然相等的）对象」**。混用会导致按 `==` 分组时把带变量的文本错分。

第三，`Attributes`（`:42`）的 setter 是 private，`Dictionary<string, object> attributes = null` 默认就是 null。而 `GetDepth(int maxDepth)`（`:98`）→ `GetDepthInternal`（`:104`）第一步就是 `if (t.Attributes == null || !t.Attributes.Any<...>()) return depth;`——**它对 null 做了防护，但 `CacheTokens()`（`:147`）这类更深的方法未必**。自己用 `new TextObject("x", null)` 造的无变量文本在部分路径上和 `GetEmpty()` 不等价。

最后，`ToStringWithoutClear()`（`:221`）与 `ToString()` 不是一回事：前者调 `MBTextManager.ProcessTextToString(this, false)`（第二个参数 `false` 表示不清缓存），后者走的是 `true` 的路径。当你在每帧或高频路径上打日志时，用错版本会显著影响性能。值得留意的是它有 `try/catch`（`:224`、`:231`）：异常时返回的是 `"Error at id: " + this.GetID() + ". Lang: " + MBTextManager.ActiveTextLanguage`（`:232`）而不是抛出——**所以一个变量名拼错的 `TextObject` 不会崩，只会在界面上显示成这行诊断字符串**。看到这行文本就说明你的 `{VARNAME}` 在语言文件里不存在。

还有一个用起来很像 `SetTextVariable` 但更危险的：`public string Format(float p1)`（`:237`）——它先 `MBTextManager.SetTextVariable("A0", p1.ToString("F1"), false);`（`:239`）再 `return new TextObject(this.Value, null).ToString();`（`:240`）。**它用的是固定的 tag 名 `"A0"`，写的是一个全局变量槽，返回的也是字符串而不是 `TextObject`**。多个地方同时 `Format` 会互相覆盖 `A0`；而且它每次都 new 一个不带 attributes 的 `TextObject`（传 `null`，`:240`），所以文本里原有的 `{OTHER}` 变量在这个副本里没有对应字典项。

## 真实示例

定义一条带变量的本地化文案，并在使用处安全地填充：

```csharp
public static class MyStrings
{
    public static readonly TextObject TradeProfit = new TextObject("{=MyTradeProfit}Profit: {GOLD}");

    // 每次使用都复制，避免污染全局静态文案
    public static TextObject ProfitFor(Hero merchant, int gold)
    {
        return TradeProfit.CopyTextObject().SetTextVariable("GOLD", gold);
    }
}

string caption = MyStrings.ProfitFor(hero, 1200).ToString();
```

判空与安全显示（UI 里最常见的两种姿势）：

```csharp
TextObject name = hero.Name;

if (TextObject.IsNullOrEmpty(name))
{
    name = TextObject.GetEmpty();
}

Debug.Print(name.ToString());
Debug.Print(name.GetID());
```

用嵌套 `TextObject` 做变量，并用 `GetDepth` 防止嵌套过深：

```csharp
TextObject nested = new TextObject("{=Outer}Outer: {INNER}")
    .SetTextVariable("INNER", new TextObject("{=InnerValue}inner text"));

int depth = nested.GetDepth(4);
if (depth >= 4)
{
    Debug.Print("nesting too deep, truncate", 0);
}
```

## 风险与边界

- **静态 `TextObject` 会被 `SetTextVariable` 永久污染。** 它是引用类型，变量写进实例的 `Attributes`。所有引用同一实例的地方都会跟着变。**永远先 `CopyTextObject()`**。
- **`GetHashCode` 与 `Equals` 不一致。** 哈希只来自 `_internalId`，相等判定却看 `Value` + `Attributes`。把它当 `Dictionary`/`HashSet` 的键会得到「Equals 说相等但 HashSet 说不相等」的行为。
- **`ToString()` 吞异常。** 解析失败时返回 `"Error at id: ..."` 字符串而不是抛。UI 上会看到这行字而不是崩溃——排查时看 `sails.log`。
- **`GetValueHashCode()` 在 `Value` 为 null 时 NRE。** `GetEmpty()` 出来的实例不能调它。
- **`GetVariableValue` 的 bool 语义反直觉。** 缺 key → false；key 存在但值是空串 → true。判空请用 `IsNullOrEmpty(outVar)`。
- **存档兼容靠 `Value` 原文与 `Attributes` 的 tag。** 改了 tag 名，旧档里的变量就丢了；改了 `{=key}` 的 key，旧档找不到翻译只显示 `}` 后面那段兜底原文。tag 是存档 ABI。
- **读档后 `_internalId` 靠回调重建。** `[LoadInitializationCallback] OnLoad` 由 `LoadResult.InitializeObjects()` 驱动。绕开它读档会让多个 `TextObject` 共用 id 0。
- **`Length` 不等于显示长度。** 它是 `Value` 的长度，翻译后可能完全不同。做截断判断要用 `ToString().Length`。
- **`Format(float)` 走全局变量通道。** `MBTextManager.SetTextVariable("A0", ...)` 是全局副作用，嵌套调用会互相覆盖。用 `SetTextVariable` 替代。
- **`Contains` 比的是原文。** `{=Key}abc` 不包含 `abc` 吗？它包含——因为 `Value` 就是这整串。但包含的是 key 之前的部分组合，别拿来做「用户可见文本包含」判断。
- **`[CachedData]` 缓存随语言切换失效。** `cachedTextLanguageId` 变化时 `GetCachedTokens` 会重算，但 `CopyTextObject` 会**把旧语言的 token 一起带过去**，如果复制时恰好跨语言，就会拿到过期 token。

## 跨版本提示

用源码逐行比对 `bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Localization/TextObject.cs`，**唯一差异是 1.4.6 新增了 `public int GetDepth(int maxDepth)`**（1.3.15 没有这个方法）。其余 public 表面完全一致：三个公开构造、`GetEmpty`、`IsEmpty`、`IsNullOrEmpty`、`ToString` / `ToStringWithoutClear` / `Format`、两个 `Contains`、`GetID`、`AddIDToValue`、四个 `SetTextVariable` 重载、`GetVariableValue`、`GetValueHashCode`、`HasSameValue`、`Equals` ×2、`GetHashCode`、`CopyTextObject`、`CacheTokens`、`operator ==` / `operator !=`、`ConvertToStringList`、`Value` 字段、`Attributes` / `Length` / `IsLink` 属性全都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`（433 行）与 `bannerlord-1.4.6/TaleWorlds.Localization/TextObject.cs`（454 行）逐成员比对 public/protected 表面。**与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**（各 33 个成员）。**本段上文说 `GetDepth` 是「1.4.6 新增」在时间上要提前**：1.4.5 **已经带有 `GetDepth(int maxDepth)`**，所以它是 **1.3.15 → 1.4.5 之间**落地的，1.4.5 与 1.4.6 一样。1.4.5 是 433 行、1.4.6 是 454 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 落盘：[SaveManager](../../save-system/SaveManager) 通过 [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute)（槽位 1）与 [SaveablePropertyAttribute](../../save-system/SaveablePropertyAttribute)（槽位 2）保存本对象
- 宿主：[Game](../../core-extra/Game) 的物品、角色对象大量持有 `TextObject`
- 显示通道：[InformationManager](../../core-extra/InformationManager) 的 `DisplayMessage` / `ShowInquiry` 接收解析后的字符串

- 上一级：[v1.4.6 内容根](../../../)
- 桶首页：[localization API 分区](../)
