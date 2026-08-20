---
title: "LocalizedTextManager"
description: "LocalizedTextManager 是本地化文本的数据源：从模块 XML 装载语言包到内存，并提供译文查询、语言列表、语言处理器创建与日期/时间格式化等静态方法。"
---

# LocalizedTextManager

**命名空间：** TaleWorlds.Localization
**模块：** TaleWorlds.Localization
**类型：** `public static class LocalizedTextManager`
**基类：** 无
**源文件路径：** `TaleWorlds.Localization/LocalizedTextManager.cs`

## 概述

`LocalizedTextManager` 是 Bannerlord 本地化文本的**数据源**。它在游戏初始化时由 `Module` 调用 `LoadLocalizationXmls` / `AddLocalizationXml`，把各模块 `ModuleData/Languages` 下的 `language_data.xml` 装入内存字典（`_gameTextDictionary`）；运行期 `MBTextManager` 取译文、列语言、建语言处理器都向它要。`GetTranslatedText` 按 `(languageId, id)` 查译文，`GetLanguageIds` / `GetLanguageTitle` / `CreateTextProcessorForLanguage` 提供语言元信息与按语言的语法处理器。

## 心智模型

把它理解成**内存中的语言包仓库（只读查询 + 装载入口）**。

- **职责**：装载并缓存所有语言的译文与函数定义，对外提供译文查询、语言枚举、语言处理器创建、ISO 代码映射与日期/时间格式化。
- **生命周期**：静态类，全局唯一。引擎在启动阶段（`Module.LoadLocalizationXmls` → `LocalizedTextManager.LoadLocalizationXmls`）清空并重建数据；运行中加载新模块会调用 `AddLocalizationXml` 增量装入；切换语言时由 `MBTextManager.ChangeLanguage` 触发 `LoadLanguage` 重新填入 `_gameTextDictionary` 与文本函数。数据不随存档读写，每次启动重新装载。
- **所在层**：Localization 数据源层（提供译文与语言元信息），与渲染引擎 `MBTextManager` 分离。
- **何时使用**：查询某语言译文（`GetTranslatedText`）、枚举可用语言（`GetLanguageIds`）、按 ISO 代码取语言 id（`GetLocalizationCodeOfISOLanguageCode`）、或格式化本地化日期时间时直接调用。
- **何时不要用**：不要在运行时手动改 `_gameTextDictionary` 当热更新——应通过重新 `LoadLanguage` / `AddLocalizationXml`；不要在 UI 层硬编码译文字符串替代它提供的查询。
- **主要崩溃 / 存档风险**：`LoadXmlFile` 解析失败时 `Debug.FailedAssert` 并返回 `null`，对应语言包会被跳过；`GetLocalizationCodeOfISOLanguageCode` 找不到代码会断言并回退 `"English"`；`CheckValidity` 会真正尝试 `ProcessTextToString`，异常被吞掉并记错行——注意它不抛异常。

## 依赖图

- 渲染引擎：[MBTextManager](../MBTextManager)（取译文、切换语言时回调 `LoadLanguage`）。
- 语言元信息：[LanguageData](../LanguageData)（语言列表、处理器类型、ISO 代码）。
- 解析链：[MBTextParser](../MBTextParser) / [TextGrammarProcessor](../TextGrammarProcessor)（装载函数时经 `MBTextManager.SetFunction`）。
- 调用方：[TextObject](../TextObject) 的渲染最终落到本类的 `GetTranslatedText`。

## 关键成员

### LoadLocalizationXmls
`public static void LoadLocalizationXmls(string[] loadedModules)`
装载全部本地化数据。**副作用**：先 `LanguageData.Clear()` 清空旧语言定义，再遍历每个模块路径下的 `ModuleData/Languages`，查找并解析 `language_data.xml` 到 `LanguageData`。**调用时机**：游戏启动、模块初始化阶段由 `Module` 调用，是译文数据的入口。

### AddLocalizationXml
`public static void AddLocalizationXml(string newModule)`
增量装载单个模块的语言 XML（不含 `LanguageData.Clear()`）。**副作用**：把该模块 `ModuleData/Languages` 下的 `language_data.xml` 解析进 `LanguageData`。**调用时机**：运行中加载新模块（`Module` 在 `AddLocalizationXml(modulePath)` 中调用）。

### GetTranslatedText
`public static string GetTranslatedText(string languageId, string id)`
按 `(languageId, id)` 从 `_gameTextDictionary` 取译文；找不到返回 `null`。这是 `MBTextManager.GetLocalizedText` 在非英文语言下的实际查表调用。

### GetLanguageIds
`public static List<string> GetLanguageIds(bool developmentMode)`
枚举当前配置中有效的语言 id 列表；`developmentMode` 为 false 时排除仍在开发中的语言（`IsUnderDevelopment`）。`MBTextManager.ChangeLanguage` / `LanguageExistsInCurrentConfiguration` 都依赖它判断语言是否可用。

### GetLanguageTitle / GetSubtitleExtensionOfLanguage / GetLocalizationCodeOfISOLanguageCode
分别按 id 取语言显示标题、字幕文件扩展名、以及把 ISO 代码（如 `"tr"`）映射回内部语言 id（找不到则断言并回退 `"English"`）。

### CreateTextProcessorForLanguage
`public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`
按 `LanguageData.TextProcessor` 反射创建对应语言的语法处理器实例（如 `GermanTextProcessor`）；类型缺失或找不到时回退 `DefaultTextProcessor`。`MBTextManager.ChangeLanguage` 用它重建 `_languageProcessor`。

### GetLanguageIndex
`public static int GetLanguageIndex(string id)`
返回语言在 `LanguageData.All` 中的下标，找不到回退英文下标。`MBTextManager` 用它维护 `_activeTextLanguageIndex`。

### GetDateFormattedByLanguage / GetTimeFormattedByLanguage
按语言的 `SupportedIsoCodes[0]` 构造 `CultureInfo`，用该文化的短日期 / 短时间模式格式化 `DateTime`。

### CheckValidity（public 重载）
`public static bool CheckValidity(string id, string text, out string errorLine)`
校验单条译文：花括号是否配对、`{?...}` 与 `{\?}` 是否成对、以及能否真正 `ProcessTextToString` 不抛异常。错误时通过 `errorLine` 返回 `id | text`。同名 `List<string>` 重载是命令行工具，遍历所有语言把问题写入 `faulty_translation_lines.txt`。

## 最小真实示例

```csharp
// 启动后查询某语言的译文，并用 ISO 代码解析语言 id
string turkishGreeting = LocalizedTextManager.GetTranslatedText("Turkish", "greet");
List<string> langs = LocalizedTextManager.GetLanguageIds(developmentMode: false);
string langId = LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode("tr");
MBTextManager.ChangeLanguage(langId); // 切到该语言后，TextObject 将取对应译文
```

## 导航

↑ [父级：localization API](../)
↔ [MBTextManager](../MBTextManager) · [LanguageData](../LanguageData) · [TextObject](../TextObject)
