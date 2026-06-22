<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OptionsProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsProvider

**命名空间:** TaleWorlds.MountAndBlade.Options
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OptionsProvider` 是 `TaleWorlds.MountAndBlade.Options` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetVideoOptionCategory

```csharp
public static OptionCategory GetVideoOptionCategory(bool isMainMenu, Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)
```

### GetPerformanceOptionCategory

```csharp
public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)
```

### GetPerformanceGraphicsOptions

```csharp
public static IEnumerable<IOptionData> GetPerformanceGraphicsOptions(bool isMultiplayer)
```

### GetPerformanceResolutionScalingOptions

```csharp
public static IEnumerable<IOptionData> GetPerformanceResolutionScalingOptions(bool isMultiplayer)
```

### GetPerformanceGameplayOptions

```csharp
public static IEnumerable<IOptionData> GetPerformanceGameplayOptions(bool isMultiplayer)
```

### GetPerformanceAudioOptions

```csharp
public static IEnumerable<IOptionData> GetPerformanceAudioOptions()
```

### GetAudioOptionCategory

```csharp
public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)
```

### GetGameplayOptionCategory

```csharp
public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)
```

### GetGameKeyCategoriesList

```csharp
public static IEnumerable<string> GetGameKeyCategoriesList(bool isMultiplayer)
```

### GetHiddenGameKeys

```csharp
public static IEnumerable<int> GetHiddenGameKeys(bool isNavalModuleActive)
```

### GetControllerOptionCategory

```csharp
public static OptionCategory GetControllerOptionCategory()
```

### GetDefaultNativeOptions

```csharp
public static Dictionary<NativeOptions.NativeOptionsType, float > GetDefaultNativeOptions()
```

### GetDefaultManagedOptions

```csharp
public static Dictionary<ManagedOptions.ManagedOptionsType, float > GetDefaultManagedOptions()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)