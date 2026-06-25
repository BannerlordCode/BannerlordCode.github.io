---
title: "MBTextManager"
description: "MBTextManager 的自动生成类参考。"
---
# MBTextManager

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public static class MBTextManager`
**Base:** 无
**File:** `TaleWorlds.Localization/MBTextManager.cs`

## 概述

`MBTextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBTextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveTextLanguage` | `public static string ActiveTextLanguage { get; set; }` |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; set; }` |

## 主要方法

### LanguageExistsInCurrentConfiguration
`public static bool LanguageExistsInCurrentConfiguration(string language, bool developmentMode)`

**用途 / Purpose:** 调用 LanguageExistsInCurrentConfiguration 对应的操作。

```csharp
// 静态调用，不需要实例
MBTextManager.LanguageExistsInCurrentConfiguration("example", false);
```

### ChangeLanguage
`public static bool ChangeLanguage(string language)`

**用途 / Purpose:** 调用 ChangeLanguage 对应的操作。

```csharp
// 静态调用，不需要实例
MBTextManager.ChangeLanguage("example");
```

### GetActiveTextLanguageIndex
`public static int GetActiveTextLanguageIndex()`

**用途 / Purpose:** 读取并返回当前对象中 active text language index 的结果。

```csharp
// 静态调用，不需要实例
MBTextManager.GetActiveTextLanguageIndex();
```

### TryChangeVoiceLanguage
`public static bool TryChangeVoiceLanguage(string language)`

**用途 / Purpose:** 尝试获取 change voice language 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
MBTextManager.TryChangeVoiceLanguage("example");
```

### ClearAll
`public static void ClearAll()`

**用途 / Purpose:** 清空当前对象中的all。

```csharp
// 静态调用，不需要实例
MBTextManager.ClearAll();
```

### SetTextVariable
`public static void SetTextVariable(string variableName, string text, bool sendClients = false)`

**用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetTextVariable("example", "example", false);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, TextObject text, bool sendClients = false)`

**用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetTextVariable("example", text, false);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, int content)`

**用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetTextVariable("example", 0);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, float content, int decimalDigits = 2)`

**用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetTextVariable("example", 0, 0);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, object content)`

**用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetTextVariable("example", content);
```

### SetTextVariable
`public static void SetTextVariable(string variableName, int arrayIndex, object content)`

**用途 / Purpose:** 为 text variable 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetTextVariable("example", 0, content);
```

### SetFunction
`public static void SetFunction(string funcName, string functionBody)`

**用途 / Purpose:** 为 function 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBTextManager.SetFunction("example", "example");
```

### ResetFunctions
`public static void ResetFunctions()`

**用途 / Purpose:** 将 functions 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
MBTextManager.ResetFunctions();
```

### ThrowLocalizationError
`public static void ThrowLocalizationError(string message)`

**用途 / Purpose:** 调用 ThrowLocalizationError 对应的操作。

```csharp
// 静态调用，不需要实例
MBTextManager.ThrowLocalizationError("example");
```

### DiscardAnimationTagsAndCheckAnimationTagPositions
`public static string DiscardAnimationTagsAndCheckAnimationTagPositions(string text)`

**用途 / Purpose:** 调用 DiscardAnimationTagsAndCheckAnimationTagPositions 对应的操作。

```csharp
// 静态调用，不需要实例
MBTextManager.DiscardAnimationTagsAndCheckAnimationTagPositions("example");
```

### DiscardAnimationTags
`public static string DiscardAnimationTags(string text)`

**用途 / Purpose:** 调用 DiscardAnimationTags 对应的操作。

```csharp
// 静态调用，不需要实例
MBTextManager.DiscardAnimationTags("example");
```

## 使用示例

```csharp
var manager = MBTextManager.Current;
```

## 参见

- [本区域目录](../)