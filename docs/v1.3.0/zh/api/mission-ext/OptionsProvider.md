<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `video option category` 的当前值。

### GetPerformanceOptionCategory
`public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)`

**用途 / Purpose:** 获取 `performance option category` 的当前值。

### GetPerformanceGraphicsOptions
`public static IEnumerable<IOptionData> GetPerformanceGraphicsOptions(bool isMultiplayer)`

**用途 / Purpose:** 获取 `performance graphics options` 的当前值。

### GetPerformanceResolutionScalingOptions
`public static IEnumerable<IOptionData> GetPerformanceResolutionScalingOptions(bool isMultiplayer)`

**用途 / Purpose:** 获取 `performance resolution scaling options` 的当前值。

### GetPerformanceGameplayOptions
`public static IEnumerable<IOptionData> GetPerformanceGameplayOptions(bool isMultiplayer)`

**用途 / Purpose:** 获取 `performance gameplay options` 的当前值。

### GetPerformanceAudioOptions
`public static IEnumerable<IOptionData> GetPerformanceAudioOptions()`

**用途 / Purpose:** 获取 `performance audio options` 的当前值。

### GetAudioOptionCategory
`public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)`

**用途 / Purpose:** 获取 `audio option category` 的当前值。

### GetGameplayOptionCategory
`public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)`

**用途 / Purpose:** 获取 `gameplay option category` 的当前值。

### GetGameKeyCategoriesList
`public static IEnumerable<string> GetGameKeyCategoriesList(bool isMultiplayer)`

**用途 / Purpose:** 获取 `game key categories list` 的当前值。

### GetControllerOptionCategory
`public static OptionCategory GetControllerOptionCategory()`

**用途 / Purpose:** 获取 `controller option category` 的当前值。

### GetDefaultNativeOptions
`public static Dictionary<NativeOptions.NativeOptionsType, float > GetDefaultNativeOptions()`

**用途 / Purpose:** 获取 `default native options` 的当前值。

### GetDefaultManagedOptions
`public static Dictionary<ManagedOptions.ManagedOptionsType, float > GetDefaultManagedOptions()`

**用途 / Purpose:** 获取 `default managed options` 的当前值。

## 使用示例

```csharp
OptionsProvider.GetVideoOptionCategory(false, onBrightnessClick, onExposureClick, onBenchmarkClick);
```

## 参见

- [完整类目录](../catalog)