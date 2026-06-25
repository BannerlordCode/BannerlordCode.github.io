---
title: "OptionsProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsProvider

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OptionsProvider`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options/OptionsProvider.cs`

## Overview

`OptionsProvider` lives in `TaleWorlds.MountAndBlade.Options` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetVideoOptionCategory
`public static OptionCategory GetVideoOptionCategory(bool isMainMenu, Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)`

**Purpose:** Gets the current value of `video option category`.

### GetPerformanceOptionCategory
`public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)`

**Purpose:** Gets the current value of `performance option category`.

### GetPerformanceGraphicsOptions
`public static IEnumerable<IOptionData> GetPerformanceGraphicsOptions(bool isMultiplayer)`

**Purpose:** Gets the current value of `performance graphics options`.

### GetPerformanceResolutionScalingOptions
`public static IEnumerable<IOptionData> GetPerformanceResolutionScalingOptions(bool isMultiplayer)`

**Purpose:** Gets the current value of `performance resolution scaling options`.

### GetPerformanceGameplayOptions
`public static IEnumerable<IOptionData> GetPerformanceGameplayOptions(bool isMultiplayer)`

**Purpose:** Gets the current value of `performance gameplay options`.

### GetPerformanceAudioOptions
`public static IEnumerable<IOptionData> GetPerformanceAudioOptions()`

**Purpose:** Gets the current value of `performance audio options`.

### GetAudioOptionCategory
`public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)`

**Purpose:** Gets the current value of `audio option category`.

### GetGameplayOptionCategory
`public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)`

**Purpose:** Gets the current value of `gameplay option category`.

### GetGameKeyCategoriesList
`public static IEnumerable<string> GetGameKeyCategoriesList(bool isMultiplayer)`

**Purpose:** Gets the current value of `game key categories list`.

### GetHiddenGameKeys
`public static IEnumerable<int> GetHiddenGameKeys(bool isNavalModuleActive)`

**Purpose:** Gets the current value of `hidden game keys`.

### GetControllerOptionCategory
`public static OptionCategory GetControllerOptionCategory()`

**Purpose:** Gets the current value of `controller option category`.

### GetDefaultNativeOptions
`public static Dictionary<NativeOptions.NativeOptionsType, float > GetDefaultNativeOptions()`

**Purpose:** Gets the current value of `default native options`.

### GetDefaultManagedOptions
`public static Dictionary<TaleWorlds.MountAndBlade.ManagedOptions.ManagedOptionsType, float > GetDefaultManagedOptions()`

**Purpose:** Gets the current value of `default managed options`.

## Usage Example

```csharp
OptionsProvider.GetVideoOptionCategory(false, onBrightnessClick, onExposureClick, onBenchmarkClick);
```

## See Also

- [Complete Class Catalog](../catalog)