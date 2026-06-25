---
title: "MBTextManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBTextManager`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/MBTextManager.cs`

## 概述

`MBTextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBTextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; set; }` |

## 主要方法

### LanguageExistsInCurrentConfiguration
`public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`

**用途 / Purpose:** 处理 `language exists in current configuration` 相关逻辑。

### ChangeLanguage
`public static bool ChangeLanguage(string language)`

**用途 / Purpose:** 处理 `change language` 相关逻辑。

### GetActiveTextLanguageIndex
`public static int GetActiveTextLanguageIndex()`

**用途 / Purpose:** 获取 `active text language index` 的当前值。

### TryChangeVoiceLanguage
`public static bool TryChangeVoiceLanguage(string language)`

**用途 / Purpose:** 尝试获取 `change voice language`，通常以 out 参数返回结果。

### ClearAll
`public static void ClearAll()`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### SetTextVariable
`public static void SetTextVariable(string variableName, string text, bool sendClients = false)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public static void SetTextVariable(string variableName, int content)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public static void SetTextVariable(string variableName, float content, int decimalDigits = 2)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public static void SetTextVariable(string variableName, object content)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetTextVariable
`public static void SetTextVariable(string variableName, int arrayIndex, object content)`

**用途 / Purpose:** 设置 `text variable` 的值或状态。

### SetFunction
`public static void SetFunction(string funcName, string functionBody)`

**用途 / Purpose:** 设置 `function` 的值或状态。

### ResetFunctions
`public static void ResetFunctions()`

**用途 / Purpose:** 将 `functions` 重置为初始状态。

### ThrowLocalizationError
`public static void ThrowLocalizationError(string message)`

**用途 / Purpose:** 处理 `throw localization error` 相关逻辑。

### DiscardAnimationTagsAndCheckAnimationTagPositions
`public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`

**用途 / Purpose:** 处理 `discard animation tags and check animation tag positions` 相关逻辑。

### DiscardAnimationTags
`public static string DiscardAnimationTags(string text)`

**用途 / Purpose:** 处理 `discard animation tags` 相关逻辑。

### GetConversationAnimations
`public static string GetConversationAnimations(TextObject to)`

**用途 / Purpose:** 获取 `conversation animations` 的当前值。

### TryGetVoiceObject
`public static bool TryGetVoiceObject(TextObject to, out VoiceObject vo, out string vocalizationId)`

**用途 / Purpose:** 尝试获取 `get voice object`，通常以 out 参数返回结果。

## 使用示例

```csharp
var manager = MBTextManager.Current;
```

## 参见

- [完整类目录](../catalog)