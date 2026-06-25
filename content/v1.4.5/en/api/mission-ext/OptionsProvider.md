---
title: "OptionsProvider"
description: "Auto-generated class reference for OptionsProvider."
---
# OptionsProvider

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OptionsProvider`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options/OptionsProvider.cs`

## Overview

`OptionsProvider` lives in `TaleWorlds.MountAndBlade.Options` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetVideoOptionCategory
`public static OptionCategory GetVideoOptionCategory(bool isMainMenu, Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)`

**Purpose:** **Purpose:** Reads and returns the video option category value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetVideoOptionCategory(false, onBrightnessClick, onExposureClick, onBenchmarkClick);
```

### GetPerformanceOptionCategory
`public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the performance option category value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetPerformanceOptionCategory(false);
```

### GetPerformanceGraphicsOptions
`public static IEnumerable<IOptionData> GetPerformanceGraphicsOptions(bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the performance graphics options value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetPerformanceGraphicsOptions(false);
```

### GetPerformanceResolutionScalingOptions
`public static IEnumerable<IOptionData> GetPerformanceResolutionScalingOptions(bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the performance resolution scaling options value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetPerformanceResolutionScalingOptions(false);
```

### GetPerformanceGameplayOptions
`public static IEnumerable<IOptionData> GetPerformanceGameplayOptions(bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the performance gameplay options value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetPerformanceGameplayOptions(false);
```

### GetPerformanceAudioOptions
`public static IEnumerable<IOptionData> GetPerformanceAudioOptions()`

**Purpose:** **Purpose:** Reads and returns the performance audio options value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetPerformanceAudioOptions();
```

### GetAudioOptionCategory
`public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the audio option category value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetAudioOptionCategory(false);
```

### GetGameplayOptionCategory
`public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the gameplay option category value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetGameplayOptionCategory(false, false);
```

### GetGameKeyCategoriesList
`public static IEnumerable<string> GetGameKeyCategoriesList(bool isMultiplayer)`

**Purpose:** **Purpose:** Reads and returns the game key categories list value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetGameKeyCategoriesList(false);
```

### GetHiddenGameKeys
`public static IEnumerable<int> GetHiddenGameKeys(bool isNavalModuleActive)`

**Purpose:** **Purpose:** Reads and returns the hidden game keys value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetHiddenGameKeys(false);
```

### GetControllerOptionCategory
`public static OptionCategory GetControllerOptionCategory()`

**Purpose:** **Purpose:** Reads and returns the controller option category value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetControllerOptionCategory();
```

### GetDefaultNativeOptions
`public static Dictionary<NativeOptions.NativeOptionsType, float > GetDefaultNativeOptions()`

**Purpose:** **Purpose:** Reads and returns the default native options value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetDefaultNativeOptions();
```

### GetDefaultManagedOptions
`public static Dictionary<TaleWorlds.MountAndBlade.ManagedOptions.ManagedOptionsType, float > GetDefaultManagedOptions()`

**Purpose:** **Purpose:** Reads and returns the default managed options value held by the this instance.

```csharp
// Static call; no instance required
OptionsProvider.GetDefaultManagedOptions();
```

## Usage Example

```csharp
OptionsProvider.GetVideoOptionCategory(false, onBrightnessClick, onExposureClick, onBenchmarkClick);
```

## See Also

- [Area Index](../)