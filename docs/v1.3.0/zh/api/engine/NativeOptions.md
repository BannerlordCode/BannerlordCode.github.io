<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeOptions`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `g f x preset name` 的当前值。

### IsGFXOptionChangeable
`public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)`

**用途 / Purpose:** 处理 `is g f x option changeable` 相关逻辑。

### ReadRGLConfigFiles
`public static void ReadRGLConfigFiles()`

**用途 / Purpose:** 处理 `read r g l config files` 相关逻辑。

### GetConfig
`public static float GetConfig(NativeOptions.NativeOptionsType type)`

**用途 / Purpose:** 获取 `config` 的当前值。

### GetDefaultConfig
`public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)`

**用途 / Purpose:** 获取 `default config` 的当前值。

### GetDefaultConfigForOverallSettings
`public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)`

**用途 / Purpose:** 获取 `default config for overall settings` 的当前值。

### GetGameKeys
`public static int GetGameKeys(int keyType, int i)`

**用途 / Purpose:** 获取 `game keys` 的当前值。

### GetSoundDeviceName
`public static string GetSoundDeviceName(int i)`

**用途 / Purpose:** 获取 `sound device name` 的当前值。

### GetMonitorDeviceName
`public static string GetMonitorDeviceName(int i)`

**用途 / Purpose:** 获取 `monitor device name` 的当前值。

### GetVideoDeviceName
`public static string GetVideoDeviceName(int i)`

**用途 / Purpose:** 获取 `video device name` 的当前值。

### GetSoundDeviceCount
`public static int GetSoundDeviceCount()`

**用途 / Purpose:** 获取 `sound device count` 的当前值。

### GetMonitorDeviceCount
`public static int GetMonitorDeviceCount()`

**用途 / Purpose:** 获取 `monitor device count` 的当前值。

### GetVideoDeviceCount
`public static int GetVideoDeviceCount()`

**用途 / Purpose:** 获取 `video device count` 的当前值。

### GetResolutionCount
`public static int GetResolutionCount()`

**用途 / Purpose:** 获取 `resolution count` 的当前值。

### RefreshOptionsData
`public static void RefreshOptionsData()`

**用途 / Purpose:** 刷新 `options data` 的显示或缓存。

### GetRefreshRateCount
`public static int GetRefreshRateCount()`

**用途 / Purpose:** 获取 `refresh rate count` 的当前值。

### GetRefreshRateAtIndex
`public static int GetRefreshRateAtIndex(int index)`

**用途 / Purpose:** 获取 `refresh rate at index` 的当前值。

### SetCustomResolution
`public static void SetCustomResolution(int width, int height)`

**用途 / Purpose:** 设置 `custom resolution` 的值或状态。

### GetResolution
`public static void GetResolution(ref int width, ref int height)`

**用途 / Purpose:** 获取 `resolution` 的当前值。

### GetDesktopResolution
`public static void GetDesktopResolution(ref int width, ref int height)`

**用途 / Purpose:** 获取 `desktop resolution` 的当前值。

### GetResolutionAtIndex
`public static Vec2 GetResolutionAtIndex(int index)`

**用途 / Purpose:** 获取 `resolution at index` 的当前值。

### GetDLSSTechnique
`public static int GetDLSSTechnique()`

**用途 / Purpose:** 获取 `d l s s technique` 的当前值。

### Is120HzAvailable
`public static bool Is120HzAvailable()`

**用途 / Purpose:** 处理 `is120 hz available` 相关逻辑。

### GetDLSSOptionCount
`public static int GetDLSSOptionCount()`

**用途 / Purpose:** 获取 `d l s s option count` 的当前值。

### GetIsDLSSAvailable
`public static bool GetIsDLSSAvailable()`

**用途 / Purpose:** 获取 `is d l s s available` 的当前值。

### CheckGFXSupportStatus
`public static bool CheckGFXSupportStatus(int enumType)`

**用途 / Purpose:** 处理 `check g f x support status` 相关逻辑。

### SetConfig
`public static void SetConfig(NativeOptions.NativeOptionsType type, float value)`

**用途 / Purpose:** 设置 `config` 的值或状态。

### ApplyConfigChanges
`public static void ApplyConfigChanges(bool resizeWindow)`

**用途 / Purpose:** 将 `config changes` 应用到当前对象。

### SetGameKeys
`public static void SetGameKeys(int keyType, int index, int key)`

**用途 / Purpose:** 设置 `game keys` 的值或状态。

### Apply
`public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)`

**用途 / Purpose:** 将 `apply` 应用到当前对象。

### SaveConfig
`public static SaveResult SaveConfig()`

**用途 / Purpose:** 保存 `config` 数据。

### SetBrightness
`public static void SetBrightness(float gamma)`

**用途 / Purpose:** 设置 `brightness` 的值或状态。

### SetDefaultGameKeys
`public static void SetDefaultGameKeys()`

**用途 / Purpose:** 设置 `default game keys` 的值或状态。

### SetDefaultGameConfig
`public static void SetDefaultGameConfig()`

**用途 / Purpose:** 设置 `default game config` 的值或状态。

### OnNativeOptionChangedDelegate
`public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)`

**用途 / Purpose:** 当 `native option changed delegate` 事件触发时调用此方法。

## 使用示例

```csharp
NativeOptions.GetGFXPresetName(presetIndex);
```

## 参见

- [完整类目录](../catalog)