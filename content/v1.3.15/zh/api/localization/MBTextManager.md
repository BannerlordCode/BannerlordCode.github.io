---
title: "MBTextManager"
description: "MBTextManager 是 TextObject.ToString() 背后的本地化解析引擎：按当前激活语言取译文、替换 {TAG} 变量、执行 XML 定义的函数与语法选择，并管理 ActiveTextLanguage 与语言切换。"
---

# MBTextManager

**命名空间：** TaleWorlds.Localization
**模块：** TaleWorlds.Localization
**类型：** `public static class MBTextManager`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization/MBTextManager.cs`

## 概述

`MBTextManager` 是 Bannerlord 本地化管线的总调度器（静态门面）。它本身不保存译文——译文存在 `LocalizedTextManager` 的内存字典里——而是在 `TextObject.ToString()` 被调用时，按当前 `ActiveTextLanguage` 把 `{=id}` 翻译成译文、把 `{TAG}` 占位符替换成变量、执行本地化 XML 里定义的函数与条件/选择语法，最后交给对应语言的 `LanguageSpecificTextProcessor` 处理性、数、格与复数。

## 心智模型

把它理解成**渲染时的唯一入口**：当一段 `TextObject` 需要变成玩家屏幕上的字符串时，所有"查译文 + 填变量 + 跑语法"的工作都发生在这里，而不是在代码写字符串的地方。

- **职责**：对给定 `TextObject` 按当前语言完成"取译文 → 分词 → 解析表达式 → 求值变量/函数 → 按语言后处理"的完整管线。
- **生命周期**：静态类，全局唯一。引擎在游戏初始化时通过 `LocalizedTextManager.LoadLocalizationXmls` 装载语言数据；运行时由 `ChangeLanguage` 重建 `_languageProcessor`、更新 `_activeTextLanguageId` 与 `_activeTextLanguageIndex`，并触发 `LocalizedTextManager.LoadLanguage` 重新装入译文与函数。没有实例，mod 也无需持有它。
- **所在层**：Localization 引擎层（解析 / 渲染），不是数据源——数据源是 `LocalizedTextManager` 与 `LanguageData`。
- **何时使用**：需要切换显示语言、注册自定义文本函数、或临时剥离动画标签（`[...]`）时直接调用它；日常显示文本应直接走 `TextObject.ToString()`，让引擎自行调用本类。
- **何时不要用**：不要用字符串拼接替代本地化（会丢失翻译与语法处理）；不要在游戏初始化、语言数据尚未装载前就依赖译文——此时 `GetLocalizedText` 会回退到内联的英文默认文本。
- **主要崩溃 / 存档风险**：`ChangeLanguage` 传入当前配置里不存在的语言会触发 `Debug.FailedAssert` 并返回 `false`；`SetTextVariable` 必须在 `ToString()` 解析**之前**调用，解析完成后再设置变量对本次渲染无效。

## 依赖图

- 数据来源：[LocalizedTextManager](../LocalizedTextManager)（译文与语言元数据）与 [LanguageData](../LanguageData)（语言列表）。
- 解析链：[Tokenizer](../Tokenizer) 切词 → [MBTextParser](../MBTextParser) 生成表达式树 → [TextGrammarProcessor](../TextGrammarProcessor) 求值。
- 调用方：[TextObject](../TextObject) 的 `ToString()` 内部调用 `ProcessTextToString`。
- 相关边界：[崩溃边界](../../../architecture/crash-boundaries/)（初始化前解析本地化文本是常见 NullReference/错误文本来源）。

## 关键成员

### ActiveTextLanguage
`public static string ActiveTextLanguage { get; }`
当前激活文本语言的 id（如 `"English"`、`"Spanish"`）。只读，由 `ChangeLanguage` 写入。渲染与 `GetTranslatedText` 都基于它。

### ChangeLanguage
`public static bool ChangeLanguage(string language)`
切换显示语言。**副作用**：用 `LocalizedTextManager.CreateTextProcessorForLanguage` 重建 `_languageProcessor`、更新 `_activeTextLanguageId` 与 `_activeTextLanguageIndex`，并调用 `LocalizedTextManager.LoadLanguage` 重新装载该语言的译文与文本函数。**调用时机**：玩家在设置里改语言时。若 `language` 不在 `GetLanguageIds(true)` 中，触发断言并返回 `false`。

### SetTextVariable
`public static void SetTextVariable(string variableName, string/TextObject/int/float/object text, ...)`
在 `TextObject.ToString()` 解析前，把变量名绑定到字符串、数值或另一个 `TextObject`，供模板里的 `{TAG}` 占位符替换。多个重载分别接受 `string`、`TextObject`、`int`、`float`（按 `decimalDigits` 四舍五入，默认 2 位）、`object`（取 `ToString()`）以及数组形式 `SetTextVariable(name, index, content)`（实际绑定到 `name:index`）。**副作用**：写入全局 `TextContext` 的变量表；若 `ToString()` 已经执行，本次设置对当前文本不生效。**调用时机**：构造好 `TextObject` 之后、渲染之前。

### SetFunction
`public static void SetFunction(string funcName, string functionBody)`
用 `MBTextParser.Parse` 解析 `functionBody` 表达式，并把命名函数注册进 `TextContext`，使本地化文本可以通过函数名调用（如 `{=!}{func(my_arg)}`）。**副作用**：影响后续所有文本解析，直到 `ResetFunctions` 或切换语言。`LocalizedTextManager.LoadLanguage` 会在装载语言时自动注册 XML 里声明的函数。

### ResetFunctions
`public static void ResetFunctions()`
清空 `TextContext` 中已注册的文本函数，恢复默认状态。`ChangeLanguage` → `LoadLanguage` 会自动调用它，避免旧语言的函数泄漏到新语言。

### LanguageExistsInCurrentConfiguration
`public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`
判断 `language` 是否出现在 `LocalizedTextManager.GetLanguageIds(developmentMode)` 返回的配置内。开发期（`developmentMode: true`）才会包含仍在开发中的语言。

### ProcessTextToString（internal）
`internal static string ProcessTextToString(TextObject to, bool shouldClear)`
真正的渲染核心，被 `TextObject.ToString()` 调用。流程：`GetLocalizedText(to.Value)` 按 id 取译文（缺失则回退内联英文）→ `Process`（分词、语法处理）→ 当前语言 `LanguageSpecificTextProcessor.Process` 做性数格处理；`shouldClear` 为 true 时解析后清理处理器的临时数据。

### DiscardAnimationTags / DiscardAnimationTagsAndCheckAnimationTagPositions
`public static string DiscardAnimationTags(string text)` 等
去除文本中的 `[...]` 动画/配音标签，返回纯显示文本。对话系统用它剥离表演标记。

## 最小真实示例

```csharp
// 切换显示语言，并解析一段带变量的本地化文本
MBTextManager.ChangeLanguage("English");
TextObject greeting = new TextObject("{=greet}Hello, {NAME}");
MBTextManager.SetTextVariable("NAME", "Calradia");
string rendered = greeting.ToString(); // 经 MBTextManager 管线解析为当前语言
```

## 导航

↑ [父级：localization API](../)
↔ [LocalizedTextManager](../LocalizedTextManager) · [TextObject](../TextObject) · [MBTextParser](../MBTextParser)
