---
title: "OptionsProvider"
description: "OptionsProvider 的自动生成类参考。"
---
# OptionsProvider

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OptionsProvider`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Options/OptionsProvider.cs`

## 概述

`OptionsProvider` 位于 `TaleWorlds.MountAndBlade.Options`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Options` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetVideoOptionCategory
`public static OptionCategory GetVideoOptionCategory(bool isMainMenu, Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 video option category 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetVideoOptionCategory(false, onBrightnessClick, onExposureClick, onBenchmarkClick);
```

### GetPerformanceOptionCategory
`public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 performance option category 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetPerformanceOptionCategory(false);
```

### GetPerformanceGraphicsOptions
`public static IEnumerable<IOptionData> GetPerformanceGraphicsOptions(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 performance graphics options 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetPerformanceGraphicsOptions(false);
```

### GetPerformanceResolutionScalingOptions
`public static IEnumerable<IOptionData> GetPerformanceResolutionScalingOptions(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 performance resolution scaling options 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetPerformanceResolutionScalingOptions(false);
```

### GetPerformanceGameplayOptions
`public static IEnumerable<IOptionData> GetPerformanceGameplayOptions(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 performance gameplay options 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetPerformanceGameplayOptions(false);
```

### GetPerformanceAudioOptions
`public static IEnumerable<IOptionData> GetPerformanceAudioOptions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 performance audio options 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetPerformanceAudioOptions();
```

### GetAudioOptionCategory
`public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 audio option category 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetAudioOptionCategory(false);
```

### GetGameplayOptionCategory
`public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gameplay option category 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetGameplayOptionCategory(false, false);
```

### GetGameKeyCategoriesList
`public static IEnumerable<string> GetGameKeyCategoriesList(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 game key categories list 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetGameKeyCategoriesList(false);
```

### GetControllerOptionCategory
`public static OptionCategory GetControllerOptionCategory()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 controller option category 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetControllerOptionCategory();
```

### GetDefaultNativeOptions
`public static Dictionary<NativeOptions.NativeOptionsType, float > GetDefaultNativeOptions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default native options 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetDefaultNativeOptions();
```

### GetDefaultManagedOptions
`public static Dictionary<ManagedOptions.ManagedOptionsType, float > GetDefaultManagedOptions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default managed options 的结果。

```csharp
// 静态调用，不需要实例
OptionsProvider.GetDefaultManagedOptions();
```

## 使用示例

```csharp
OptionsProvider.GetVideoOptionCategory(false, onBrightnessClick, onExposureClick, onBenchmarkClick);
```

## 参见

- [本区域目录](../)