---
title: "LocalizedTextManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocalizedTextManager`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocalizedTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class LocalizedTextManager`
**Base:** 无
**File:** `TaleWorlds.Localization/LocalizedTextManager.cs`

## 概述

`LocalizedTextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LocalizedTextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTranslatedText
`public static string GetTranslatedText(string languageId, string id)`

**用途 / Purpose:** 获取 `translated text` 的当前值。

### GetLanguageIds
`public static List<string> GetLanguageIds(bool developmentMode)`

**用途 / Purpose:** 获取 `language ids` 的当前值。

### GetLanguageTitle
`public static string GetLanguageTitle(string id)`

**用途 / Purpose:** 获取 `language title` 的当前值。

### CreateTextProcessorForLanguage
`public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)`

**用途 / Purpose:** 创建一个 `text processor for language` 实例或对象。

### AddLanguageTest
`public static void AddLanguageTest(string id, string processor)`

**用途 / Purpose:** 向当前集合/状态中添加 `language test`。

### GetLanguageIndex
`public static int GetLanguageIndex(string id)`

**用途 / Purpose:** 获取 `language index` 的当前值。

### LoadLocalizationXmls
`public static void LoadLocalizationXmls(string loadedModules)`

**用途 / Purpose:** 加载 `localization xmls` 数据。

### AddLocalizationXml
`public static void AddLocalizationXml(string newModule)`

**用途 / Purpose:** 向当前集合/状态中添加 `localization xml`。

### GetDateFormattedByLanguage
`public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)`

**用途 / Purpose:** 获取 `date formatted by language` 的当前值。

### GetTimeFormattedByLanguage
`public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)`

**用途 / Purpose:** 获取 `time formatted by language` 的当前值。

### GetSubtitleExtensionOfLanguage
`public static string GetSubtitleExtensionOfLanguage(string languageId)`

**用途 / Purpose:** 获取 `subtitle extension of language` 的当前值。

### GetLocalizationCodeOfISOLanguageCode
`public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)`

**用途 / Purpose:** 获取 `localization code of i s o language code` 的当前值。

### ChangeLanguage
`public static string ChangeLanguage(List<string> strings)`

**用途 / Purpose:** 处理 `change language` 相关逻辑。

### ReloadTexts
`public static string ReloadTexts(List<string> strings)`

**用途 / Purpose:** 处理 `reload texts` 相关逻辑。

### CheckValidity
`public static string CheckValidity(List<string> strings)`

**用途 / Purpose:** 处理 `check validity` 相关逻辑。

### CheckValidity
`public static bool CheckValidity(string id, string text, out string errorLine)`

**用途 / Purpose:** 处理 `check validity` 相关逻辑。

## 使用示例

```csharp
var manager = LocalizedTextManager.Current;
```

## 参见

- [完整类目录](../catalog)