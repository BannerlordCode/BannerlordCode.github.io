---
title: "NativeConfig"
description: "NativeConfig 的自动生成类参考。"
---
# NativeConfig

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class NativeConfig`
**Base:** 无
**File:** `TaleWorlds.Engine/NativeConfig.cs`

## 概述

`NativeConfig` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CheatMode` | `public static bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public static bool IsDevelopmentMode { get; }` |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; }` |
| `GetUIDebugMode` | `public static bool GetUIDebugMode { get; }` |
| `DisableSound` | `public static bool DisableSound { get; }` |
| `EnableEditMode` | `public static bool EnableEditMode { get; }` |
| `TableauCacheEnabled` | `public static bool TableauCacheEnabled { get; }` |
| `DoLocalizationCheckAtStartup` | `public static bool DoLocalizationCheckAtStartup { get; }` |
| `EnableClothSimulation` | `public static bool EnableClothSimulation { get; }` |
| `CharacterDetail` | `public static int CharacterDetail { get; }` |
| `InvertMouse` | `public static bool InvertMouse { get; }` |
| `LastOpenedScene` | `public static string LastOpenedScene { get; }` |
| `AutoSaveInMinutes` | `public static int AutoSaveInMinutes { get; }` |
| `GetUIDoNotUseGeneratedPrefabs` | `public static bool GetUIDoNotUseGeneratedPrefabs { get; }` |
| `DebugLoginUsername` | `public static string DebugLoginUsername { get; }` |
| `DebugLogicPassword` | `public static string DebugLogicPassword { get; }` |
| `DisableGuiMessages` | `public static bool DisableGuiMessages { get; }` |
| `AutoGFXQuality` | `public static NativeOptions.ConfigQuality AutoGFXQuality { get; }` |

## 主要方法

### OnConfigChanged
`public static void OnConfigChanged()`

**用途 / Purpose:** 在 config changed 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
NativeConfig.OnConfigChanged();
```

### SetAutoConfigWrtHardware
`public static void SetAutoConfigWrtHardware()`

**用途 / Purpose:** 为 auto config wrt hardware 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeConfig.SetAutoConfigWrtHardware();
```

## 使用示例

```csharp
NativeConfig.OnConfigChanged();
```

## 参见

- [本区域目录](../)