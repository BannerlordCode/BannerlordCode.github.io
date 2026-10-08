---
title: "TextObject"
description: "本地化文本的载体对象：包装一条原始文本（通常是 {=id}原文 形式的键）与变量属性表，供 MBTextManager 分词渲染，并可被存档系统序列化。"
---
# TextObject

**命名空间：** `TaleWorlds.Localization`
**模块：** `TaleWorlds.Localization`
**类型：** `public class TextObject`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/TextObject.cs`（声明见第 12 行）

## 概述

`TextObject` 是 localization 桶的基本数据单元：一条可本地化的文本条目。它把「原始文本」和「变量属性表」装在一起——原始文本通常是 `{=id}目标文本` 形式的本地化键，属性表存放这条文本用到的变量（`{?tag}` 占位符的值）。它处在文本处理流水线的入口：`MBTextManager` 拿它做分词、语法处理与语言处理器渲染，`LocalizedTextManager` 的查表结果最终也包装成它返回；同时它带 `[SaveableProperty]` / `[SaveableField]` 特性，是存档系统直接序列化的对象。相邻类型：`MBTextManager`（渲染）、`LocalizedTextManager`（查表）、`TextProcessingContext`（变量上下文）、`VoiceObject`（配音）。

## 心智模型

把 `TextObject` 想成**一张带变量的本地化字符串卡片**：`Value` 是卡片上的原文（键或纯文本），`Attributes` 是卡片附带的变量表（tag → string / int / float / 嵌套 `TextObject`）。

它**不负责**：查翻译表（那是 `LocalizedTextManager` 的事）、分词与语法处理（那是 `MBTextManager` 与 `TextGrammarProcessor` 的事）、决定当前语言（那是 `MBTextManager.ActiveTextLanguage` 的事）。它只负责**承载数据**并暴露渲染入口。

状态从哪来：构造函数给定 `Value` 与 `Attributes`；之后 `SetTextVariable` 系列**就地修改**属性表（返回 `this` 只是为了链式写法）。谁改它：mod 代码在渲染前填充变量；`MBTextManager.SetTextVariable` 的全局变量存在 `TextProcessingContext` 里，不在 `TextObject` 上。何时失效：`cachedTokens` 缓存绑定当前语言索引（`cachedTextLanguageId`），切换语言后自动重新分词；`GetHashCode()` 基于实例创建时分配的 `_internalId`，**每个实例唯一**，不要拿它做值语义的哈希键。

## 怎么用

拿到实例的常规途径：

- `new TextObject("原文")` / `new TextObject(42)` / `new TextObject(3.14f)`——三个构造函数分别收 string / int / float（TextObject.cs:78、86、92）。
- `TextObject.GetEmpty()`——造一个空对象（Value 与 Attributes 都为 null），常用于「暂无文本」占位（TextObject.cs:187）。
- 从 `MBTextManager.SetTextVariable(name, TextObject)` 的重载拿到管理器包好的实例；或从存档反序列化得到。

真实坑：

1. **`SetTextVariable` 是就地修改。** 它直接改 `this.Attributes` 并返回 `this`（TextObject.cs:315）——把同一个 `TextObject` 存进两个地方再分别设变量，两边会互相污染。要隔离就先 `CopyTextObject()`（TextObject.cs:385）。
2. **`ToString()` 吞异常。** 文本处理失败时它不抛，而是返回 `"Error at id: ..."` 字符串并打 Debug 日志（TextObject.cs:205）——游戏里看到这种字面量就是渲染炸了，去翻日志。
3. **`GetHashCode()` 是实例 id 不是内容哈希。** 它返回 `_internalId`（TextObject.cs:263），每个实例都不同——别把 `TextObject` 当字典键或放进 `HashSet` 做去重，要用 `Equals` / `HasSameValue` 显式比较。
4. **`Format(float)` 有全局副作用。** 它先 `SetTextVariable("A0", ...)` 写全局上下文再渲染（TextObject.cs:237）——并发或嵌套调用会互相覆盖 `A0`。
5. **`IsNullOrEmpty` 静态方法对 null 安全，`IsEmpty` 实例方法不安全。** 对可能为 null 的引用一律走 `TextObject.IsNullOrEmpty(obj)`（TextObject.cs:199），直接调 `obj.IsEmpty()` 会 NRE。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `public class TextObject` | 类型声明；带 `[Serializable]`，存档系统可直接序列化（TextObject.cs:12） |
| `Dictionary<string, object> Attributes { get; private set; }` | 变量属性表：tag → 值（string / int / float / 嵌套 TextObject）。`private set`，只能经 `SetTextVariable` 写入；null 表示无变量（TextObject.cs:42） |
| `int Length` | `Value` 的字符数；`Value` 为 null 时返回 0（TextObject.cs:46） |
| `bool IsLink` | 快速判断 `Value` 是否以 `{=!}{.link}` 开头——即这条文本是不是一个超链接条目（TextObject.cs:61） |
| `TextObject(string value, Dictionary<string, object> attributes = null)` | 主构造：给定原文与可选属性表；`_internalId` 在此分配（TextObject.cs:78） |
| `TextObject(int value, Dictionary<string, object> attributes = null)` | int 构造：内部转成 string 后委托给主构造（TextObject.cs:86） |
| `TextObject(float value, Dictionary<string, object> attributes = null)` | float 构造：同上，`value.ToString()` 后委托主构造（TextObject.cs:92） |
| `int GetDepth(int maxDepth)` | 递归测量属性表里嵌套 `TextObject` 的最大深度，超过 `maxDepth` 截断——用于防环与复杂度控制（TextObject.cs:98） |
| `void CacheTokens()` | 按当前语言把 `Value` 的本地化文本分词并缓存到 `cachedTokens`；渲染前可手动预热（TextObject.cs:147） |
| `static TextObject GetEmpty()` | 返回 Value 与 Attributes 均为 null 的空对象（TextObject.cs:187） |
| `bool IsEmpty()` | `Value` 为空且属性表为空（或 null）时为 true；**对 null 引用调用会 NRE**（TextObject.cs:193） |
| `static bool IsNullOrEmpty(TextObject obj)` | null 安全的判空：obj 为 null 或 `IsEmpty()` 为 true 时返回 true（TextObject.cs:199） |
| `override string ToString()` | 渲染入口：走 `MBTextManager.ProcessTextToString(this, true)`，渲染后清语言处理器临时数据；异常时返回错误字符串而非抛出（TextObject.cs:205） |
| `string ToStringWithoutClear()` | 同上但**不清理**语言处理器临时数据——连续渲染多条文本时避免反复重建临时状态（TextObject.cs:221） |
| `string Format(float p1)` | 把 p1 写入全局变量 `A0`（一位小数）后渲染；有全局副作用（TextObject.cs:237） |
| `bool Contains(TextObject to)` | 判断 `this.Value` 是否包含 `to.Value` 子串；任一 Value 为 null 返回 false（TextObject.cs:244） |
| `bool Contains(string text)` | 判断 `this.Value` 是否包含给定子串（TextObject.cs:250） |
| `override bool Equals(object other)` | 值相等：other 是 `TextObject` 且 `Equals(TextObject)` 为 true（TextObject.cs:256） |
| `override int GetHashCode()` | 返回 `_internalId`——实例唯一，**不是内容哈希**（TextObject.cs:263） |
| `bool Equals(TextObject other)` | 值相等比较：`HasSameValue` 且属性表 `SequenceEqual`（TextObject.cs:269） |
| `bool HasSameValue(TextObject to)` | 只比 `Value` 字符串引用相等（`==`），不比属性表（TextObject.cs:275） |
| `static bool operator ==(TextObject lhs, TextObject rhs)` | 先比引用再比 `Equals`；两边 null 安全（TextObject.cs:281） |
| `static bool operator !=(TextObject lhs, TextObject rhs)` | `!(lhs == rhs)`（TextObject.cs:287） |
| `static List<string> ConvertToStringList(List<TextObject> to)` | 把 `TextObject` 列表投影成 `Value` 字符串列表（TextObject.cs:293） |
| `TextObject SetTextVariable(string tag, TextObject variable)` | 把变量以 `TextObject` 形式存入属性表；**就地修改**，返回 this（TextObject.cs:315） |
| `TextObject SetTextVariable(string tag, string variable)` | 以 string 存变量；就地修改（TextObject.cs:321） |
| `TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)` | 以 float 存变量，先按 `decimalDigits` 四舍五入（TextObject.cs:328） |
| `TextObject SetTextVariable(string tag, int variable)` | 以 int 存变量（TextObject.cs:335） |
| `void AddIDToValue(string id)` | 把 `{=id}` 前缀补到 `Value` 上（若还没有且不以 `{=` 开头）——给裸文本补本地化键（TextObject.cs:342） |
| `bool GetVariableValue(string tag, out TextObject variable)` | 从属性表取变量并包成 `TextObject`；查不到时 `variable` 为空串对象并返回 false（TextObject.cs:352） |
| `int GetValueHashCode()` | 返回 `Value.GetHashCode()`——基于内容的哈希，与 `GetHashCode()` 的实例 id 不同（TextObject.cs:379） |
| `TextObject CopyTextObject()` | 浅拷贝：复制属性表字典（值本身不深拷）并带上 token 缓存；用于隔离共享实例（TextObject.cs:385） |
| `string GetID()` | 从 `Value` 里解析 `{=id}` 的 id 部分；没有键时返回空串（TextObject.cs:405） |
| `string Value` | 原始文本字段（`[SaveableField(1)]`）：本地化键或纯文本；公开可写（TextObject.cs:436） |

## 真实示例

```csharp
// 造一条带本地化键与变量的文本，渲染进 UI
var greeting = new TextObject("{=my_mod_greeting}Hello {=player_name}, your clan has {=renown} renown.");
greeting.SetTextVariable("player_name", hero.Name);
greeting.SetTextVariable("renown", clan.Renown, 1);
string rendered = greeting.ToString();

// 判空与拷贝隔离
if (!TextObject.IsNullOrEmpty(greeting))
{
    var privateCopy = greeting.CopyTextObject();
    privateCopy.SetTextVariable("player_name", "Anonymous");
}
```

## 参见

- [MBTextManager](../MBTextManager) — 文本管理器：分词、语法处理、语言处理器渲染，`TextObject` 的渲染入口
- [LocalizedTextManager](../LocalizedTextManager) — 本地化文本管理器：语言与翻译表，`{=id}` 键的最终查表处
- [TextProcessingContext](../TextProcessingContext) — 全局文本变量上下文，`SetTextVariable` 的全局版本存这里
- [VoiceObject](../VoiceObject) — 配音对象，`MBTextManager.TryGetVoiceObject` 从 `TextObject` 解析出它

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
