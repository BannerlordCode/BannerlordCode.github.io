---
title: "NativeOptions"
description: "NativeOptions 的自动生成类参考。"
---
# NativeOptions

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeOptions`
**Base:** 无
**File:** `TaleWorlds.Engine/Options/NativeOptions.cs`

## 概述

`NativeOptions` 位于 `TaleWorlds.Engine.Options`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine.Options` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VideoOptions` | `public static List<NativeOptionData> VideoOptions { get; }` |
| `GraphicsOptions` | `public static List<NativeOptionData> GraphicsOptions { get; }` |

## 主要方法

### GetGFXPresetName
`public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 g f x preset name 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetGFXPresetName(presetIndex);
```

### IsGFXOptionChangeable
`public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 g f x option changeable 状态或条件。

```csharp
// 静态调用，不需要实例
NativeOptions.IsGFXOptionChangeable(config);
```

### ReadRGLConfigFiles
`public static void ReadRGLConfigFiles()`

**用途 / Purpose:** **用途 / Purpose:** 读取r g l config files的数据或状态。

```csharp
// 静态调用，不需要实例
NativeOptions.ReadRGLConfigFiles();
```

### GetConfig
`public static float GetConfig(NativeOptions.NativeOptionsType type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 config 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetConfig(type);
```

### GetDefaultConfig
`public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default config 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetDefaultConfig(type);
```

### GetDefaultConfigForOverallSettings
`public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default config for overall settings 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetDefaultConfigForOverallSettings(type, 0);
```

### GetGameKeys
`public static int GetGameKeys(int keyType, int i)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 game keys 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetGameKeys(0, 0);
```

### GetSoundDeviceName
`public static string GetSoundDeviceName(int i)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sound device name 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetSoundDeviceName(0);
```

### GetMonitorDeviceName
`public static string GetMonitorDeviceName(int i)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 monitor device name 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetMonitorDeviceName(0);
```

### GetVideoDeviceName
`public static string GetVideoDeviceName(int i)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 video device name 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetVideoDeviceName(0);
```

### GetSoundDeviceCount
`public static int GetSoundDeviceCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sound device count 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetSoundDeviceCount();
```

### GetMonitorDeviceCount
`public static int GetMonitorDeviceCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 monitor device count 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetMonitorDeviceCount();
```

### GetVideoDeviceCount
`public static int GetVideoDeviceCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 video device count 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetVideoDeviceCount();
```

### GetResolutionCount
`public static int GetResolutionCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 resolution count 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetResolutionCount();
```

### RefreshOptionsData
`public static void RefreshOptionsData()`

**用途 / Purpose:** **用途 / Purpose:** 使 options data 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
NativeOptions.RefreshOptionsData();
```

### GetRefreshRateCount
`public static int GetRefreshRateCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 refresh rate count 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetRefreshRateCount();
```

### GetRefreshRateAtIndex
`public static int GetRefreshRateAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 refresh rate at index 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetRefreshRateAtIndex(0);
```

### SetCustomResolution
`public static void SetCustomResolution(int width, int height)`

**用途 / Purpose:** **用途 / Purpose:** 为 custom resolution 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeOptions.SetCustomResolution(0, 0);
```

### GetResolution
`public static void GetResolution(ref int width, ref int height)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 resolution 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetResolution(width, height);
```

### GetDesktopResolution
`public static void GetDesktopResolution(ref int width, ref int height)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 desktop resolution 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetDesktopResolution(width, height);
```

### GetResolutionAtIndex
`public static Vec2 GetResolutionAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 resolution at index 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetResolutionAtIndex(0);
```

### GetDLSSTechnique
`public static int GetDLSSTechnique()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 d l s s technique 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetDLSSTechnique();
```

### Is120HzAvailable
`public static bool Is120HzAvailable()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 120 hz available 状态或条件。

```csharp
// 静态调用，不需要实例
NativeOptions.Is120HzAvailable();
```

### GetDLSSOptionCount
`public static int GetDLSSOptionCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 d l s s option count 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetDLSSOptionCount();
```

### GetIsDLSSAvailable
`public static bool GetIsDLSSAvailable()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is d l s s available 的结果。

```csharp
// 静态调用，不需要实例
NativeOptions.GetIsDLSSAvailable();
```

### CheckGFXSupportStatus
`public static bool CheckGFXSupportStatus(int enumType)`

**用途 / Purpose:** **用途 / Purpose:** 检查g f x support status在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
NativeOptions.CheckGFXSupportStatus(0);
```

### SetConfig
`public static void SetConfig(NativeOptions.NativeOptionsType type, float value)`

**用途 / Purpose:** **用途 / Purpose:** 为 config 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeOptions.SetConfig(type, 0);
```

### ApplyConfigChanges
`public static void ApplyConfigChanges(bool resizeWindow)`

**用途 / Purpose:** **用途 / Purpose:** 将 config changes 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
NativeOptions.ApplyConfigChanges(false);
```

### SetGameKeys
`public static void SetGameKeys(int keyType, int index, int key)`

**用途 / Purpose:** **用途 / Purpose:** 为 game keys 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeOptions.SetGameKeys(0, 0, 0);
```

### Apply
`public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象的效果应用到目标。

```csharp
// 静态调用，不需要实例
NativeOptions.Apply(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
```

### SaveConfig
`public static SaveResult SaveConfig()`

**用途 / Purpose:** **用途 / Purpose:** 将 config 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
NativeOptions.SaveConfig();
```

### SetBrightness
`public static void SetBrightness(float gamma)`

**用途 / Purpose:** **用途 / Purpose:** 为 brightness 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeOptions.SetBrightness(0);
```

### SetDefaultGameKeys
`public static void SetDefaultGameKeys()`

**用途 / Purpose:** **用途 / Purpose:** 为 default game keys 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeOptions.SetDefaultGameKeys();
```

### SetDefaultGameConfig
`public static void SetDefaultGameConfig()`

**用途 / Purpose:** **用途 / Purpose:** 为 default game config 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NativeOptions.SetDefaultGameConfig();
```

### OnNativeOptionChangedDelegate
`public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)`

**用途 / Purpose:** **用途 / Purpose:** 在 native option changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NativeOptions 实例
NativeOptions nativeOptions = ...;
nativeOptions.OnNativeOptionChangedDelegate(changedNativeOptionsType);
```

## 使用示例

```csharp
NativeOptions.GetGFXPresetName(presetIndex);
```

## 参见

- [本区域目录](../)