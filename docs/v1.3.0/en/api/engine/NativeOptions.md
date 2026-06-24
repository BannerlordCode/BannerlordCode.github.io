<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeOptions`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

### GetResolutionAtIndex
`public static Vec2 GetResolutionAtIndex(int index)`

**Purpose:** Gets the current value of `resolution at index`.

### GetDLSSTechnique
`public static int GetDLSSTechnique()`

**Purpose:** Gets the current value of `d l s s technique`.

### Is120HzAvailable
`public static bool Is120HzAvailable()`

**Purpose:** Handles logic related to `is120 hz available`.

### GetDLSSOptionCount
`public static int GetDLSSOptionCount()`

**Purpose:** Gets the current value of `d l s s option count`.

### GetIsDLSSAvailable
`public static bool GetIsDLSSAvailable()`

**Purpose:** Gets the current value of `is d l s s available`.

### CheckGFXSupportStatus
`public static bool CheckGFXSupportStatus(int enumType)`

**Purpose:** Handles logic related to `check g f x support status`.

### SetConfig
`public static void SetConfig(NativeOptions.NativeOptionsType type, float value)`

**Purpose:** Sets the value or state of `config`.

### ApplyConfigChanges
`public static void ApplyConfigChanges(bool resizeWindow)`

**Purpose:** Applies `config changes` to the current object.

### SetGameKeys
`public static void SetGameKeys(int keyType, int index, int key)`

**Purpose:** Sets the value or state of `game keys`.

### Apply
`public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)`

**Purpose:** Applies `apply` to the current object.

### SaveConfig
`public static SaveResult SaveConfig()`

**Purpose:** Saves `config` data.

### SetBrightness
`public static void SetBrightness(float gamma)`

**Purpose:** Sets the value or state of `brightness`.

### SetDefaultGameKeys
`public static void SetDefaultGameKeys()`

**Purpose:** Sets the value or state of `default game keys`.

### SetDefaultGameConfig
`public static void SetDefaultGameConfig()`

**Purpose:** Sets the value or state of `default game config`.

### OnNativeOptionChangedDelegate
`public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)`

**Purpose:** Called when the `native option changed delegate` event is raised.

## Usage Example

```csharp
NativeOptions.GetGFXPresetName(presetIndex);
```

## See Also

- [Complete Class Catalog](../catalog)