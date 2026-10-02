---
title: "NativeOptions"
description: "NativeOptions: a public class in TaleWorlds.Engine.Options; 43 exposed members (35 methods, 4 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Options/NativeOptions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeOptions

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public class NativeOptions`
**File:** `TaleWorlds.Engine/Options/NativeOptions.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

NativeOptions lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/NativeOptions.cs. It is a public class; the inheritance chain is NativeOptions. It exposes 43 public/protected members: 35 methods, 4 properties, 1 events, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeOptions lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine.Options`, inheritance chain NativeOptions. The surface is method-led (methods 35/43, properties 4/43), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/NativeOptions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetGFXPresetName` | `public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex)` | method |
| `IsGFXOptionChangeable` | `public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config)` | method |
| `OnNativeOptionsApplied;` | `public static event Action OnNativeOptionsApplied;` | event |
| `List` | `public static List<NativeOptionData>VideoOptions` | property |
| `List` | `public static List<NativeOptionData>GraphicsOptions` | property |
| `ReadRGLConfigFiles` | `public static void ReadRGLConfigFiles()` | method |
| `GetConfig` | `public static float GetConfig(NativeOptions.NativeOptionsType type)` | method |
| `GetDefaultConfig` | `public static float GetDefaultConfig(NativeOptions.NativeOptionsType type)` | method |
| `GetDefaultConfigForOverallSettings` | `public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type, int config)` | method |
| `GetGameKeys` | `public static int GetGameKeys(int keyType, int i)` | method |
| `GetSoundDeviceName` | `public static string GetSoundDeviceName(int i)` | method |
| `GetMonitorDeviceName` | `public static string GetMonitorDeviceName(int i)` | method |
| `GetVideoDeviceName` | `public static string GetVideoDeviceName(int i)` | method |
| `GetSoundDeviceCount` | `public static int GetSoundDeviceCount()` | method |
| `GetMonitorDeviceCount` | `public static int GetMonitorDeviceCount()` | method |
| `GetVideoDeviceCount` | `public static int GetVideoDeviceCount()` | method |
| `GetResolutionCount` | `public static int GetResolutionCount()` | method |
| `RefreshOptionsData` | `public static void RefreshOptionsData()` | method |
| `GetRefreshRateCount` | `public static int GetRefreshRateCount()` | method |
| `GetRefreshRateAtIndex` | `public static int GetRefreshRateAtIndex(int index)` | method |
| `SetCustomResolution` | `public static void SetCustomResolution(int width, int height)` | method |
| `GetResolution` | `public static void GetResolution(ref int width, ref int height)` | method |
| `GetDesktopResolution` | `public static void GetDesktopResolution(ref int width, ref int height)` | method |
| `GetResolutionAtIndex` | `public static Vec2 GetResolutionAtIndex(int index)` | method |
| `GetDLSSTechnique` | `public static int GetDLSSTechnique()` | method |
| `Is120HzAvailable` | `public static bool Is120HzAvailable()` | method |
| `GetDLSSOptionCount` | `public static int GetDLSSOptionCount()` | method |
| `GetIsDLSSAvailable` | `public static bool GetIsDLSSAvailable()` | method |
| `CheckGFXSupportStatus` | `public static bool CheckGFXSupportStatus(int enumType)` | method |
| `SetConfig` | `public static void SetConfig(NativeOptions.NativeOptionsType type, float value)` | method |
| `ApplyConfigChanges` | `public static void ApplyConfigChanges(bool resizeWindow)` | method |
| `SetGameKeys` | `public static void SetGameKeys(int keyType, int index, int key)` | method |
| `Apply` | `public static void Apply(int texture_budget, int sharpen_amount, int hdr, int dof_mode, int motion_blur, int ssr, int size, int texture_filtering, int trail_amount, int dynamic_resolution_target)` | method |
| `SaveConfig` | `public static SaveResult SaveConfig()` | method |
| `SetBrightness` | `public static void SetBrightness(float gamma)` | method |
| `SetDefaultGameKeys` | `public static void SetDefaultGameKeys()` | method |
| `SetDefaultGameConfig` | `public static void SetDefaultGameConfig()` | method |
| `ConfigQuality` | `public enum ConfigQuality` | property |
| `NativeOptionsType` | `public enum NativeOptionsType` | property |
| `OnNativeOptionChangedDelegate` | `public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType);` | method |
| `ConfigQuality` | `public enum ConfigQuality` | nested type |
| `NativeOptionsType` | `public enum NativeOptionsType` | nested type |
| `OnNativeOptionChangedDelegate` | `public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IBooleanOptionData](../IBooleanOptionData/)
- [same namespace INumericOptionData](../INumericOptionData/)
- [same namespace IOptionData](../IOptionData/)
- [same namespace ISelectionOptionData](../ISelectionOptionData/)
