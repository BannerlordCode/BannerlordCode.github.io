---
title: "MBTextManager"
description: "MBTextManager：TaleWorlds.Localization 的 public 类；公开成员 21 个（方法 18、属性 2、字段 1）。canonical 桶 localization。源文件 TaleWorlds.Localization/MBTextManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBTextManager

**Namespace:** `TaleWorlds.Localization`
**Module:** `TaleWorlds.Localization`
**Type:** `public static class MBTextManager`
**File:** `TaleWorlds.Localization/MBTextManager.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## 概述

MBTextManager 位于 TaleWorlds.Localization 模块，源文件 TaleWorlds.Localization/MBTextManager.cs。它是一个 public 类，继承链为 MBTextManager。public/protected 成员共 21 个：18 方法、2 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBTextManager 落在 canonical 桶 `localization`（命中规则 `rule:TaleWorlds.Localization`），命名空间 `TaleWorlds.Localization`，继承链 MBTextManager。成员构成以方法为主（方法 18/21，属性 2/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Localization/MBTextManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActiveTextLanguage` | `public static string ActiveTextLanguage` | 属性 |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode` | 属性 |
| `LanguageExistsInCurrentConfiguration` | `public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)` | 方法 |
| `ChangeLanguage` | `public static bool ChangeLanguage(string language)` | 方法 |
| `GetActiveTextLanguageIndex` | `public static int GetActiveTextLanguageIndex()` | 方法 |
| `TryChangeVoiceLanguage` | `public static bool TryChangeVoiceLanguage(string language)` | 方法 |
| `ClearAll` | `public static void ClearAll()` | 方法 |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, string text, bool sendClients = false)` | 方法 |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)` | 方法 |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, int content)` | 方法 |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, float content, int decimalDigits = 2)` | 方法 |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, object content)` | 方法 |
| `SetTextVariable` | `public static void SetTextVariable(string variableName, int arrayIndex, object content)` | 方法 |
| `SetFunction` | `public static void SetFunction(string funcName, string functionBody)` | 方法 |
| `ResetFunctions` | `public static void ResetFunctions()` | 方法 |
| `ThrowLocalizationError` | `public static void ThrowLocalizationError(string message)` | 方法 |
| `DiscardAnimationTagsAndCheckAnimationTagPositions` | `public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)` | 方法 |
| `DiscardAnimationTags` | `public static string DiscardAnimationTags(string text)` | 方法 |
| `string[]GetConversationAnimations` | `public static string[]GetConversationAnimations(TextObject to)` | 方法 |
| `TryGetVoiceObject` | `public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)` | 方法 |
| `LinkAttribute` | `public const string LinkAttribute` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DateRange](../DateRange/)
- [同命名空间 LocalizationException](../LocalizationException/)
- [同命名空间 LocalizedTextManager](../LocalizedTextManager/)
- [同命名空间 LocalizedVoiceManager](../LocalizedVoiceManager/)
