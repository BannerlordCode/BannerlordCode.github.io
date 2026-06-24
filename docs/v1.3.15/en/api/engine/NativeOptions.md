<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeOptions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptions

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeOptions`
**Area:** engine

## Overview

`NativeOptions` lives in `TaleWorlds.Engine.Options`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Gets the current value of `g f x preset name`.

### IsGFXOptionChangeable
`public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)`

**Purpose:** Handles logic related to `is g f x option changeable`.

### ReadRGLConfigFiles
`public static void ReadRGLConfigFiles()`

**Purpose:** Handles logic related to `read r g l config files`.

### GetConfig
`public static float GetConfig(NativeOptions.NativeOptionsType type)`

**Purpose:** Gets the current value of `config`.

### GetDefaultConfig
`public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)`

**Purpose:** Gets the current value of `default config`.

### GetDefaultConfigForOverallSettings
`public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)`

**Purpose:** Gets the current value of `default config for overall settings`.

### GetGameKeys
`public static int GetGameKeys(int keyType, int i)`

**Purpose:** Gets the current value of `game keys`.

### GetSoundDeviceName
`public static string GetSoundDeviceName(int i)`

**Purpose:** Gets the current value of `sound device name`.

### GetMonitorDeviceName
`public static string GetMonitorDeviceName(int i)`

**Purpose:** Gets the current value of `monitor device name`.

### GetVideoDeviceName
`public static string GetVideoDeviceName(int i)`

**Purpose:** Gets the current value of `video device name`.

### GetSoundDeviceCount
`public static int GetSoundDeviceCount()`

**Purpose:** Gets the current value of `sound device count`.

### GetMonitorDeviceCount
`public static int GetMonitorDeviceCount()`

**Purpose:** Gets the current value of `monitor device count`.

### GetVideoDeviceCount
`public static int GetVideoDeviceCount()`

**Purpose:** Gets the current value of `video device count`.

### GetResolutionCount
`public static int GetResolutionCount()`

**Purpose:** Gets the current value of `resolution count`.

### RefreshOptionsData
`public static void RefreshOptionsData()`

**Purpose:** Refreshes the display or cache of `options data`.

### GetRefreshRateCount
`public static int GetRefreshRateCount()`

**Purpose:** Gets the current value of `refresh rate count`.

### GetRefreshRateAtIndex
`public static int GetRefreshRateAtIndex(int index)`

**Purpose:** Gets the current value of `refresh rate at index`.

### SetCustomResolution
`public static void SetCustomResolution(int width, int height)`

**Purpose:** Sets the value or state of `custom resolution`.

### GetResolution
`public static void GetResolution(ref int width, ref int height)`

**Purpose:** Gets the current value of `resolution`.

### GetDesktopResolution
`public static void GetDesktopResolution(ref int width, ref int height)`

**Purpose:** Gets the current value of `desktop resolution`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
NativeOptions.GetGFXPresetName(presetIndex);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
