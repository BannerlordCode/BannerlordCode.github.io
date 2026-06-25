---
title: "NativeOptions"
description: "Auto-generated class reference for NativeOptions."
---
# NativeOptions

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeOptions`
**Base:** none
**File:** `TaleWorlds.Engine/Options/NativeOptions.cs`

## Overview

`NativeOptions` lives in `TaleWorlds.Engine.Options` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VideoOptions` | `public static List<NativeOptionData> VideoOptions { get; }` |
| `GraphicsOptions` | `public static List<NativeOptionData> GraphicsOptions { get; }` |

## Key Methods

### GetGFXPresetName
`public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex)`

**Purpose:** Reads and returns the g f x preset name value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetGFXPresetName(presetIndex);
```

### IsGFXOptionChangeable
`public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)`

**Purpose:** Determines whether the this instance is in the g f x option changeable state or condition.

```csharp
// Static call; no instance required
NativeOptions.IsGFXOptionChangeable(config);
```

### ReadRGLConfigFiles
`public static void ReadRGLConfigFiles()`

**Purpose:** Reads the data or state of r g l config files.

```csharp
// Static call; no instance required
NativeOptions.ReadRGLConfigFiles();
```

### GetConfig
`public static float GetConfig(NativeOptions.NativeOptionsType type)`

**Purpose:** Reads and returns the config value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetConfig(type);
```

### GetDefaultConfig
`public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)`

**Purpose:** Reads and returns the default config value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetDefaultConfig(type);
```

### GetDefaultConfigForOverallSettings
`public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)`

**Purpose:** Reads and returns the default config for overall settings value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetDefaultConfigForOverallSettings(type, 0);
```

### GetGameKeys
`public static int GetGameKeys(int keyType, int i)`

**Purpose:** Reads and returns the game keys value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetGameKeys(0, 0);
```

### GetSoundDeviceName
`public static string GetSoundDeviceName(int i)`

**Purpose:** Reads and returns the sound device name value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetSoundDeviceName(0);
```

### GetMonitorDeviceName
`public static string GetMonitorDeviceName(int i)`

**Purpose:** Reads and returns the monitor device name value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetMonitorDeviceName(0);
```

### GetVideoDeviceName
`public static string GetVideoDeviceName(int i)`

**Purpose:** Reads and returns the video device name value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetVideoDeviceName(0);
```

### GetSoundDeviceCount
`public static int GetSoundDeviceCount()`

**Purpose:** Reads and returns the sound device count value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetSoundDeviceCount();
```

### GetMonitorDeviceCount
`public static int GetMonitorDeviceCount()`

**Purpose:** Reads and returns the monitor device count value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetMonitorDeviceCount();
```

### GetVideoDeviceCount
`public static int GetVideoDeviceCount()`

**Purpose:** Reads and returns the video device count value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetVideoDeviceCount();
```

### GetResolutionCount
`public static int GetResolutionCount()`

**Purpose:** Reads and returns the resolution count value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetResolutionCount();
```

### RefreshOptionsData
`public static void RefreshOptionsData()`

**Purpose:** Keeps the display or cache of options data in sync with the underlying state.

```csharp
// Static call; no instance required
NativeOptions.RefreshOptionsData();
```

### GetRefreshRateCount
`public static int GetRefreshRateCount()`

**Purpose:** Reads and returns the refresh rate count value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetRefreshRateCount();
```

### GetRefreshRateAtIndex
`public static int GetRefreshRateAtIndex(int index)`

**Purpose:** Reads and returns the refresh rate at index value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetRefreshRateAtIndex(0);
```

### SetCustomResolution
`public static void SetCustomResolution(int width, int height)`

**Purpose:** Assigns a new value to custom resolution and updates the object's internal state.

```csharp
// Static call; no instance required
NativeOptions.SetCustomResolution(0, 0);
```

### GetResolution
`public static void GetResolution(ref int width, ref int height)`

**Purpose:** Reads and returns the resolution value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetResolution(width, height);
```

### GetDesktopResolution
`public static void GetDesktopResolution(ref int width, ref int height)`

**Purpose:** Reads and returns the desktop resolution value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetDesktopResolution(width, height);
```

### GetResolutionAtIndex
`public static Vec2 GetResolutionAtIndex(int index)`

**Purpose:** Reads and returns the resolution at index value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetResolutionAtIndex(0);
```

### GetDLSSTechnique
`public static int GetDLSSTechnique()`

**Purpose:** Reads and returns the d l s s technique value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetDLSSTechnique();
```

### Is120HzAvailable
`public static bool Is120HzAvailable()`

**Purpose:** Determines whether the this instance is in the 120 hz available state or condition.

```csharp
// Static call; no instance required
NativeOptions.Is120HzAvailable();
```

### GetDLSSOptionCount
`public static int GetDLSSOptionCount()`

**Purpose:** Reads and returns the d l s s option count value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetDLSSOptionCount();
```

### GetIsDLSSAvailable
`public static bool GetIsDLSSAvailable()`

**Purpose:** Reads and returns the is d l s s available value held by the this instance.

```csharp
// Static call; no instance required
NativeOptions.GetIsDLSSAvailable();
```

### CheckGFXSupportStatus
`public static bool CheckGFXSupportStatus(int enumType)`

**Purpose:** Verifies whether g f x support status holds true for the this instance.

```csharp
// Static call; no instance required
NativeOptions.CheckGFXSupportStatus(0);
```

### SetConfig
`public static void SetConfig(NativeOptions.NativeOptionsType type, float value)`

**Purpose:** Assigns a new value to config and updates the object's internal state.

```csharp
// Static call; no instance required
NativeOptions.SetConfig(type, 0);
```

### ApplyConfigChanges
`public static void ApplyConfigChanges(bool resizeWindow)`

**Purpose:** Applies the effect of config changes to the this instance.

```csharp
// Static call; no instance required
NativeOptions.ApplyConfigChanges(false);
```

### SetGameKeys
`public static void SetGameKeys(int keyType, int index, int key)`

**Purpose:** Assigns a new value to game keys and updates the object's internal state.

```csharp
// Static call; no instance required
NativeOptions.SetGameKeys(0, 0, 0);
```

### Apply
`public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)`

**Purpose:** Applies the this instance's effect to its target.

```csharp
// Static call; no instance required
NativeOptions.Apply(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

### SaveConfig
`public static SaveResult SaveConfig()`

**Purpose:** Writes config to persistent storage or a stream.

```csharp
// Static call; no instance required
NativeOptions.SaveConfig();
```

### SetBrightness
`public static void SetBrightness(float gamma)`

**Purpose:** Assigns a new value to brightness and updates the object's internal state.

```csharp
// Static call; no instance required
NativeOptions.SetBrightness(0);
```

### SetDefaultGameKeys
`public static void SetDefaultGameKeys()`

**Purpose:** Assigns a new value to default game keys and updates the object's internal state.

```csharp
// Static call; no instance required
NativeOptions.SetDefaultGameKeys();
```

### SetDefaultGameConfig
`public static void SetDefaultGameConfig()`

**Purpose:** Assigns a new value to default game config and updates the object's internal state.

```csharp
// Static call; no instance required
NativeOptions.SetDefaultGameConfig();
```

### OnNativeOptionChangedDelegate
`public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)`

**Purpose:** Invoked when the native option changed delegate event is raised.

```csharp
// Obtain an instance of NativeOptions from the subsystem API first
NativeOptions nativeOptions = ...;
nativeOptions.OnNativeOptionChangedDelegate(changedNativeOptionsType);
```

## Usage Example

```csharp
NativeOptions.GetGFXPresetName(presetIndex);
```

## See Also

- [Area Index](../)