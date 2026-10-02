---
title: "LocalizedTextManager"
description: "LocalizedTextManager：TaleWorlds.Localization 的 public 类；公开成员 18 个（方法 16、属性 0、字段 2）。canonical 桶 localization。源文件 TaleWorlds.Localization/LocalizedTextManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LocalizedTextManager

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public static class LocalizedTextManager`
**File:** `TaleWorlds.Localization/LocalizedTextManager.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## 概述

LocalizedTextManager 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/LocalizedTextManager.cs。它是一个 public 类，继承链为 LocalizedTextManager。public/protected 成员共 18 个：16 方法、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LocalizedTextManager 落在 canonical 桶 `localization`（命中规则 `rule:TaleWorlds.Localization`），命名空间 `TaleWorlds.Localization`，继承链 LocalizedTextManager。成员构成以方法为主（方法 16/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/LocalizedTextManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTranslatedText` | `public static string GetTranslatedText(string languageId, string id)` | 方法 |
| `List` | `public static List<string>GetLanguageIds(bool developmentMode)` | 方法 |
| `GetLanguageTitle` | `public static string GetLanguageTitle(string id)` | 方法 |
| `CreateTextProcessorForLanguage` | `public static LanguageSpecificTextProcessor CreateTextProcessorForLanguage(string id)` | 方法 |
| `AddLanguageTest` | `public static void AddLanguageTest(string id, string processor)` | 方法 |
| `GetLanguageIndex` | `public static int GetLanguageIndex(string id)` | 方法 |
| `LoadLocalizationXmls` | `public static void LoadLocalizationXmls(string[]loadedModules)` | 方法 |
| `AddLocalizationXml` | `public static void AddLocalizationXml(string newModule)` | 方法 |
| `GetDateFormattedByLanguage` | `public static string GetDateFormattedByLanguage(string languageCode, DateTime dateTime)` | 方法 |
| `GetTimeFormattedByLanguage` | `public static string GetTimeFormattedByLanguage(string languageCode, DateTime dateTime)` | 方法 |
| `GetSubtitleExtensionOfLanguage` | `public static string GetSubtitleExtensionOfLanguage(string languageId)` | 方法 |
| `GetLocalizationCodeOfISOLanguageCode` | `public static string GetLocalizationCodeOfISOLanguageCode(string isoLanguageCode)` | 方法 |
| `ChangeLanguage` | `public static string ChangeLanguage(List<string>strings)` | 方法 |
| `ReloadTexts` | `public static string ReloadTexts(List<string>strings)` | 方法 |
| `CheckValidity` | `public static string CheckValidity(List<string>strings)` | 方法 |
| `CheckValidity` | `public static bool CheckValidity(string id, string text, out string errorLine)` | 方法 |
| `LanguageDataFileName` | `public const string LanguageDataFileName` | 字段 |
| `DefaultEnglishLanguageId` | `public const string DefaultEnglishLanguageId` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DateRange](../DateRange/)
- [同命名空间 LocalizationException](../LocalizationException/)
- [同命名空间 LocalizedVoiceManager](../LocalizedVoiceManager/)
- [同命名空间 MBTextManager](../MBTextManager/)
