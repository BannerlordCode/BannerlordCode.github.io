<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsProvider

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OptionsProvider` is a class in the `TaleWorlds.MountAndBlade.Options` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)