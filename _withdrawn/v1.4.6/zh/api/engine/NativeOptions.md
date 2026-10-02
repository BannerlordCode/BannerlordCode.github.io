---
title: "NativeOptions"
description: "NativeOptions：TaleWorlds.Engine.Options 的 public 类；公开成员 43 个（方法 35、属性 4、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Options/NativeOptions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeOptions

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public class NativeOptions`
**File:** `TaleWorlds.Engine/Options/NativeOptions.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

NativeOptions 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Options/NativeOptions.cs。它是一个 public 类，继承链为 NativeOptions。public/protected 成员共 43 个：35 方法、4 属性、1 事件、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeOptions 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine.Options`，继承链 NativeOptions。成员构成以方法为主（方法 35/43，属性 4/43），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Options/NativeOptions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGFXPresetName` | `public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex)` | 方法 |
| `IsGFXOptionChangeable` | `public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)` | 方法 |
| `OnNativeOptionsApplied;` | `public static event Action OnNativeOptionsApplied;` | 事件 |
| `List` | `public static List<NativeOptionData>VideoOptions` | 属性 |
| `List` | `public static List<NativeOptionData>GraphicsOptions` | 属性 |
| `ReadRGLConfigFiles` | `public static void ReadRGLConfigFiles()` | 方法 |
| `GetConfig` | `public static float GetConfig(NativeOptions.NativeOptionsType type)` | 方法 |
| `GetDefaultConfig` | `public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)` | 方法 |
| `GetDefaultConfigForOverallSettings` | `public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)` | 方法 |
| `GetGameKeys` | `public static int GetGameKeys(int keyType, int i)` | 方法 |
| `GetSoundDeviceName` | `public static string GetSoundDeviceName(int i)` | 方法 |
| `GetMonitorDeviceName` | `public static string GetMonitorDeviceName(int i)` | 方法 |
| `GetVideoDeviceName` | `public static string GetVideoDeviceName(int i)` | 方法 |
| `GetSoundDeviceCount` | `public static int GetSoundDeviceCount()` | 方法 |
| `GetMonitorDeviceCount` | `public static int GetMonitorDeviceCount()` | 方法 |
| `GetVideoDeviceCount` | `public static int GetVideoDeviceCount()` | 方法 |
| `GetResolutionCount` | `public static int GetResolutionCount()` | 方法 |
| `RefreshOptionsData` | `public static void RefreshOptionsData()` | 方法 |
| `GetRefreshRateCount` | `public static int GetRefreshRateCount()` | 方法 |
| `GetRefreshRateAtIndex` | `public static int GetRefreshRateAtIndex(int index)` | 方法 |
| `SetCustomResolution` | `public static void SetCustomResolution(int width, int height)` | 方法 |
| `GetResolution` | `public static void GetResolution(ref int width, ref int height)` | 方法 |
| `GetDesktopResolution` | `public static void GetDesktopResolution(ref int width, ref int height)` | 方法 |
| `GetResolutionAtIndex` | `public static Vec2 GetResolutionAtIndex(int index)` | 方法 |
| `GetDLSSTechnique` | `public static int GetDLSSTechnique()` | 方法 |
| `Is120HzAvailable` | `public static bool Is120HzAvailable()` | 方法 |
| `GetDLSSOptionCount` | `public static int GetDLSSOptionCount()` | 方法 |
| `GetIsDLSSAvailable` | `public static bool GetIsDLSSAvailable()` | 方法 |
| `CheckGFXSupportStatus` | `public static bool CheckGFXSupportStatus(int enumType)` | 方法 |
| `SetConfig` | `public static void SetConfig(NativeOptions.NativeOptionsType type, float value)` | 方法 |
| `ApplyConfigChanges` | `public static void ApplyConfigChanges(bool resizeWindow)` | 方法 |
| `SetGameKeys` | `public static void SetGameKeys(int keyType, int index, int key)` | 方法 |
| `Apply` | `public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)` | 方法 |
| `SaveConfig` | `public static SaveResult SaveConfig()` | 方法 |
| `SetBrightness` | `public static void SetBrightness(float gamma)` | 方法 |
| `SetDefaultGameKeys` | `public static void SetDefaultGameKeys()` | 方法 |
| `SetDefaultGameConfig` | `public static void SetDefaultGameConfig()` | 方法 |
| `ConfigQuality` | `public enum ConfigQuality` | 属性 |
| `NativeOptionsType` | `public enum NativeOptionsType` | 属性 |
| `OnNativeOptionChangedDelegate` | `public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType);` | 方法 |
| `ConfigQuality` | `public enum ConfigQuality` | 嵌套类型 |
| `NativeOptionsType` | `public enum NativeOptionsType` | 嵌套类型 |
| `OnNativeOptionChangedDelegate` | `public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 IBooleanOptionData](../IBooleanOptionData/)
- [同命名空间 INumericOptionData](../INumericOptionData/)
- [同命名空间 IOptionData](../IOptionData/)
- [同命名空间 ISelectionOptionData](../ISelectionOptionData/)
