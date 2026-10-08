---
title: "MBTextManager"
description: "文本渲染的静态门面：持有全局文本变量上下文与当前语言状态，驱动分词、语法处理与语言处理器渲染管线，并解析对话动画标签与配音对象。"
---
# MBTextManager

**命名空间：** `TaleWorlds.Localization`
**模块：** `TaleWorlds.Localization`
**类型：** `public static class MBTextManager`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/MBTextManager.cs`（声明见第 13 行）

## 概述

`MBTextManager` 是 localization 桶的静态门面：全局文本变量上下文、当前文本语言状态、文本渲染管线（分词 → 解析 → 语法处理 → 语言处理器）的驱动者，以及对话动画标签与配音对象的解析入口。它不持有翻译表本身（那是 `LocalizedTextManager` 的 `_gameTextDictionary`），但通过内部 `GetLocalizedText` 间接查表。所有 `TextObject.ToString()` 最终都汇到这里；mod 在渲染前用 `SetTextVariable` 系列把变量填进它的 `TextContext`。相邻类型：`TextObject`（被渲染的载体）、`LocalizedTextManager`（语言与翻译表）、`TextProcessingContext`（变量与函数上下文）、`LocalizedVoiceManager`（配音）。

## 心智模型

把 `MBTextManager` 想成**文本渲染的总机接线员**：它持有全局 `TextProcessingContext`（变量表 + 函数表）、当前语言处理器 `_languageProcessor`、分词器 `Tokenizer`，以及当前语言状态 `_activeTextLanguageId` / `_activeTextLanguageIndex` / `_activeVoiceLanguageId`。

它**不负责**：翻译文本的存储与加载（那是 `LocalizedTextManager` 的事）、单条文本的变量属性（那是 `TextObject.Attributes` 的事）、配音音频的管理（那是 `LocalizedVoiceManager` 的事）。它只负责**驱动渲染管线**与**维护全局上下文**。

状态从哪来：`ChangeLanguage` 切换语言状态并触发 `LocalizedTextManager.LoadLanguage` 重建翻译字典；mod 代码在渲染前 `SetTextVariable` 填全局变量。谁改它：mod 与引擎都改——`SetTextVariable` / `SetFunction` / `ClearAll` 都是公开写入口。何时失效：`ChangeLanguage` 后 `TextObject` 的 token 缓存按语言索引自动失效；`ClearAll()` 后所有全局变量与函数消失；`LocalizationDebugMode` 开启后所有渲染结果带 `(id)` 前缀。

## 怎么用

常规用法：

- 设全局变量：`MBTextManager.SetTextVariable("name", value)`——五个重载分别收 string / TextObject / int / float / object（MBTextManager.cs:159、169、179、186、193）。
- 渲染：`textObject.ToString()`——渲染完自动清语言处理器临时数据（清理动作在 `TextObject.ToString` 一侧，见 TextObject.cs:205）。
- 切语言：`MBTextManager.ChangeLanguage("English")`——成功返回 true（MBTextManager.cs:37）。
- 调试：`MBTextManager.LocalizationDebugMode = true`——渲染结果带 id 前缀（MBTextManager.cs:28）。

真实坑：

1. **`sendClients` 参数是摆设。** 两个带 `sendClients` 的 `SetTextVariable` 重载在实现里完全没读它（MBTextManager.cs:159、169）——联机同步不靠这个参数，别指望它。
2. **`ChangeLanguage` 对未知语言走 `Debug.FailedAssert` 并返回 false**（MBTextManager.cs:37）——发布版 FailedAssert 可能只打日志不中断，返回值必须检查。
3. **`LocalizationDebugMode` 污染所有渲染输出。** 开启后 `ProcessTextToString` 给每条文本加 `(id) ` 前缀（MBTextManager.cs:28 附近的渲染路径）——发布前务必关掉，否则 UI 上全是调试前缀。
4. **`ClearAll()` 清空整个全局上下文**（MBTextManager.cs:153）——在批量渲染循环里调它会清掉别处设的变量，渲染结果突然变空。
5. **`SetTextVariable(name, arrayIndex, content)` 不是数组语义。** 它把变量名拼成 `name + ":" + arrayIndex`（MBTextManager.cs:204）——要按索引取值得自己拼字符串。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `public static class MBTextManager` | 类型声明；纯静态门面，无实例（MBTextManager.cs:13） |
| `static string ActiveTextLanguage` | 当前文本语言 id（如 `"English"`）；只读，切换走 `ChangeLanguage`（MBTextManager.cs:17） |
| `static bool LocalizationDebugMode { get; set; }` | 调试开关：开启后渲染结果带 `(id)` 前缀。发布前必须关掉（MBTextManager.cs:28） |
| `static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)` | 判断某语言是否在当前配置中（含开发模式语言）（MBTextManager.cs:31） |
| `static bool ChangeLanguage(string language)` | 切换当前文本语言：重建语言处理器、更新语言索引、触发 `LoadLanguage` 重建翻译字典；未知语言 FailedAssert 并返回 false（MBTextManager.cs:37） |
| `static int GetActiveTextLanguageIndex()` | 当前语言在语言列表中的索引；`TextObject` 的 token 缓存靠它判断失效（MBTextManager.cs:52） |
| `static bool TryChangeVoiceLanguage(string language)` | 切换配音语言；未知语言静默返回 false（MBTextManager.cs:58） |
| `static void ClearAll()` | 清空全局 `TextProcessingContext` 的全部变量与函数——影响所有后续渲染（MBTextManager.cs:153） |
| `static void SetTextVariable(string variableName, string text, bool sendClients = false)` | 以 string 设全局变量；text 为 null 时静默忽略；`sendClients` 参数未被使用（MBTextManager.cs:159） |
| `static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)` | 以 TextObject 设全局变量；text 为 null 时静默忽略（MBTextManager.cs:169） |
| `static void SetTextVariable(string variableName, int content)` | 以 int 设全局变量（MBTextManager.cs:179） |
| `static void SetTextVariable(string variableName, float content, int decimalDigits = 2)` | 以 float 设全局变量，先按 `decimalDigits` 四舍五入（MBTextManager.cs:186） |
| `static void SetTextVariable(string variableName, object content)` | 以任意对象设全局变量，内部走 `ToString()`；content 为 null 时静默忽略（MBTextManager.cs:193） |
| `static void SetTextVariable(string variableName, int arrayIndex, object content)` | 把变量名拼成 `name:index` 再存——不是数组语义（MBTextManager.cs:204） |
| `static void SetFunction(string funcName, string functionBody)` | 注册文本函数：把函数体分词解析后存入上下文，供 `{?funcName}` 调用（MBTextManager.cs:215） |
| `static void ResetFunctions()` | 清空上下文里所有已注册函数（MBTextManager.cs:222） |
| `static void ThrowLocalizationError(string message)` | 抛本地化错误：内部走 `Debug.FailedAssert`，用于文本处理中的致命错误（MBTextManager.cs:228） |
| `static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)` | 丢弃 `[...]` 动画标签并检查标签位置是否合法（MBTextManager.cs:306） |
| `static string DiscardAnimationTags(string text)` | 去掉文本里所有 `[...]` 动画标签，返回纯文本（MBTextManager.cs:312） |
| `static string[] GetConversationAnimations(TextObject to)` | 从文本里解析对话动画标签，返回 4 元素数组（ib / if / rb / rf 四类）（MBTextManager.cs:347） |
| `static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)` | 从 TextObject 解析配音对象：先查本地化 id，再递归查变量；空文本返回 false（MBTextManager.cs:406） |
| `const string LinkAttribute = "LINK"` | 链接属性名常量，标记 TextObject 属性表里的超链接条目（MBTextManager.cs:476） |

## 真实示例

```csharp
// 设置全局文本变量并渲染
MBTextManager.SetTextVariable("player_name", hero.Name);
MBTextManager.SetTextVariable("renown", clan.Renown, 1);
var text = new TextObject("{=my_mod_greeting}Hello {=player_name}!");
string rendered = text.ToString();

// 切换语言并重渲染
if (MBTextManager.ChangeLanguage("Turkish"))
{
    string turkish = text.ToString();
}
```

## 参见

- [TextObject](../TextObject) — 文本载体：被渲染的对象，`ToString()` 最终汇到这里
- [LocalizedTextManager](../LocalizedTextManager) — 翻译表与语言注册表，`{=id}` 键的数据源
- [LocalizedVoiceManager](../LocalizedVoiceManager) — 配音语言管理，`TryChangeVoiceLanguage` 的落点
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 语言处理器：渲染管线的最后一环
- [TextProcessingContext](../TextProcessingContext) — 全局变量与函数上下文，`SetTextVariable` 的实际存储

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
