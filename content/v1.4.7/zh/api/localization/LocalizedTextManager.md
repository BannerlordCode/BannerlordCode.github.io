---
title: "LocalizedTextManager"
description: "本地化数据层：管理语言注册表与当前语言的翻译字典，负责语言处理器创建、本地化 XML 加载，以及命令行式的切语言、重载与翻译校验。"
---
# LocalizedTextManager

**命名空间：** `TaleWorlds.Localization`
**模块：** `TaleWorlds.Localization`
**类型：** `public static class LocalizedTextManager`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.Localization/LocalizedTextManager.cs`（声明见第 14 行）

## 概述

`LocalizedTextManager` 是 localization 桶的静态数据层：管理语言注册表（`LanguageData`）、当前语言的翻译字典（`_gameTextDictionary`）、语言处理器的创建，以及本地化 XML 的加载入口。它不负责渲染（那是 `MBTextManager`），只负责「哪个语言有哪些文本」的数据供给。`MBTextManager` 的 `GetLocalizedText` 最终就是来这里的 `_gameTextDictionary` 查表；引擎启动时的 `LoadLocalizationXmls` 与运行时的 `AddLocalizationXml` 都落在它身上。相邻类型：`MBTextManager`（渲染与语言切换）、`TextObject`（查表结果的载体）、`LanguageSpecificTextProcessor`（按语言创建的处理器）。

## 心智模型

把 `LocalizedTextManager` 想成**翻译图书馆的管理员**：`LanguageData.All` 是语言卡片目录，`_gameTextDictionary` 是当前语言的借出书架——只装当前语言，切语言即换架（`LoadLanguage` 先清空再重建）。

它**不负责**：文本的渲染管线（那是 `MBTextManager` 的事）、单条文本的变量属性（那是 `TextObject` 的事）、配音管理（那是 `LocalizedVoiceManager` 的事）。它只负责**语言与翻译文本的数据供给**。

状态从哪来：`LoadLocalizationXmls` 先 `LanguageData.Clear()` 再全量加载各模块的 `language_data.xml`；`LoadLanguage` 按当前语言重建 `_gameTextDictionary`。谁改它：引擎启动时加载；mod 可 `AddLocalizationXml` 追加自己的语言 XML，或 `AddLanguageTest` 注册测试语言。何时失效：`LoadLocalizationXmls` 会清空并重建语言表——运行中调用会让已缓存的语言处理器与翻译字典全部失效；`GetTranslatedText` 查不到时返回 null，调用方必须判空。

## 怎么用

常规用法：

- 查翻译：`LocalizedTextManager.GetTranslatedText("English", "id")`——查不到返回 null（LocalizedTextManager.cs:17）。
- 列语言：`LocalizedTextManager.GetLanguageIds(false)`——false 只列正式语言，true 含开发中语言（LocalizedTextManager.cs:28）。
- 切语言：运行时走 `MBTextManager.ChangeLanguage`；命令行式切语言用 `ChangeLanguage(List<string>)`（LocalizedTextManager.cs:300）。
- 校验翻译：`CheckValidity(id, text, out errorLine)`——检查括号配对与处理异常（LocalizedTextManager.cs:372）。

真实坑：

1. **`GetTranslatedText` 查不到返回 null**（LocalizedTextManager.cs:17）——不抛异常、不回落 English，调用方必须自己判空。
2. **`GetLanguageTitle` 对未知 id 回落到 English 标题**（LocalizedTextManager.cs:43）——不会返回 null，但可能不是你想要的语言名。
3. **`LoadLocalizationXmls` 先 `LanguageData.Clear()`**（LocalizedTextManager.cs:90）——运行中全量重载会让 `CreateTextProcessorForLanguage` 缓存的处理器与 `MBTextManager` 的语言状态全部失效。
4. **`CheckValidity` 的 `errorLine` 无错时为 null**（LocalizedTextManager.cs:372）——判空再用，别直接拼进字符串。
5. **`GetLocalizationCodeOfISOLanguageCode` 对未定义 ISO 码 FailedAssert 后返回 `"English"`**（LocalizedTextManager.cs:170）——静默回落，不报错。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `public static class LocalizedTextManager` | 类型声明；纯静态数据层，无实例（LocalizedTextManager.cs:14） |
| `static string GetTranslatedText(string languageId, string id)` | 按语言与 id 查翻译文本；查不到返回 null（LocalizedTextManager.cs:17） |
| `static List<string> GetLanguageIds(bool developmentMode)` | 列出所有有效语言 id；`developmentMode` 为 true 时含开发中语言（LocalizedTextManager.cs:28） |
| `static string GetLanguageTitle(string id)` | 取语言显示名；未知 id 回落到 English 标题（LocalizedTextManager.cs:43） |
| `static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)` | 按语言创建处理器实例；语言无处理器时返回 `DefaultTextProcessor`（LocalizedTextManager.cs:54） |
| `static void AddLanguageTest(string id, string processor)` | 注册一个测试语言并加载测试数据（LocalizedTextManager.cs:71） |
| `static int GetLanguageIndex(string id)` | 取语言在列表中的索引；未知 id 回落到 English 索引（LocalizedTextManager.cs:79） |
| `static void LoadLocalizationXmls(string[] loadedModules)` | 全量加载各模块的 `language_data.xml`：先清空语言表再重建（LocalizedTextManager.cs:90） |
| `static void AddLocalizationXml(string newModule)` | 追加加载单个模块的语言 XML，不清空已有语言表（LocalizedTextManager.cs:122） |
| `static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)` | 按语言的短日期模式格式化日期（LocalizedTextManager.cs:150） |
| `static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)` | 按语言的短时间模式格式化时间（LocalizedTextManager.cs:157） |
| `static string GetSubtitleExtensionOfLanguage(string languageId)` | 取语言的字幕文件扩展名（LocalizedTextManager.cs:164） |
| `static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)` | 把 ISO 语言码映射为内部语言 id；未定义时 FailedAssert 并返回 `"English"`（LocalizedTextManager.cs:170） |
| `static string ChangeLanguage(List<string> strings)` | 命令行函数 `localization.change_language`：按语言名 / 扩展名匹配并切换；返回操作结果字符串（LocalizedTextManager.cs:300） |
| `static string ReloadTexts(List<string> strings)` | 命令行函数 `localization.reload_texts`：重载当前语言文本（LocalizedTextManager.cs:331） |
| `static string CheckValidity(List<string> strings)` | 命令行函数 `localization.check_for_errors`：遍历所有语言校验翻译，错误写入 `faulty_translation_lines.txt`（LocalizedTextManager.cs:339） |
| `static bool CheckValidity(string id, string text, out string errorLine)` | 校验单条翻译：检查花括号配对、`{?` 与 `{\?}` 数量、处理异常；无错时 `errorLine` 为 null（LocalizedTextManager.cs:372） |
| `const string LanguageDataFileName = "language_data"` | 语言数据文件名常量（LocalizedTextManager.cs:450） |
| `const string DefaultEnglishLanguageId = "English"` | 默认英语语言 id 常量（LocalizedTextManager.cs:453） |

## 真实示例

```csharp
// 列出所有正式语言并查一条翻译
foreach (string langId in LocalizedTextManager.GetLanguageIds(false))
{
    string title = LocalizedTextManager.GetLanguageTitle(langId);
    string translated = LocalizedTextManager.GetTranslatedText(langId, "my_mod_greeting");
}

// 校验一条翻译文本的括号配对
string errorLine;
bool hasError = LocalizedTextManager.CheckValidity("my_mod_greeting", translated, out errorLine);
```

## 参见

- [MBTextManager](../MBTextManager) — 渲染门面：`GetLocalizedText` 最终来这里查表，`ChangeLanguage` 触发这里的 `LoadLanguage`
- [TextObject](../TextObject) — 文本载体：查表结果包装成它再渲染
- [LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor) — 语言处理器：`CreateTextProcessorForLanguage` 的返回类型
- [LocalizationException](../LocalizationException) — 本地化异常：文本处理失败时的错误类型

## 导航
- ↑ [localization 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
