---
title: "NativeOptions"
description: "NativeOptions 的自动生成类参考。"
---
# NativeOptions

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeOptions `
**Base:** System.Object
**Source:** TaleWorlds.Engine/Options/NativeOptions.cs

## 概述

`NativeOptions` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Options/NativeOptions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetGFXPresetName
`public static string GetGFXPresetName(NativeOptions.ConfigQuality presetIndex) `

### IsGFXOptionChangeable
`public static bool IsGFXOptionChangeable(NativeOptions.ConfigQuality config) `

### ReadRGLConfigFiles
`public static void ReadRGLConfigFiles() `

### GetConfig
`public static float GetConfig(NativeOptions.NativeOptionsType type) `

### GetDefaultConfig
`public static float GetDefaultConfig(NativeOptions.NativeOptionsType type) `

### GetDefaultConfigForOverallSettings
`public static float GetDefaultConfigForOverallSettings(NativeOptions.NativeOptionsType type,int config) `

### GetGameKeys
`public static int GetGameKeys(int keyType,int i) `

### GetSoundDeviceName
`public static string GetSoundDeviceName(int i) `

### GetMonitorDeviceName
`public static string GetMonitorDeviceName(int i) `

### GetVideoDeviceName
`public static string GetVideoDeviceName(int i) `

### GetSoundDeviceCount
`public static int GetSoundDeviceCount() `

### GetMonitorDeviceCount
`public static int GetMonitorDeviceCount() `

### GetVideoDeviceCount
`public static int GetVideoDeviceCount() `

### GetResolutionCount
`public static int GetResolutionCount() `

### RefreshOptionsData
`public static void RefreshOptionsData() `

### GetRefreshRateCount
`public static int GetRefreshRateCount() `

### GetRefreshRateAtIndex
`public static int GetRefreshRateAtIndex(int index) `

### SetCustomResolution
`public static void SetCustomResolution(int width,int height) `

### GetResolution
`public static void GetResolution(ref int width,ref int height) `

### GetDesktopResolution
`public static void GetDesktopResolution(ref int width,ref int height) `

### GetResolutionAtIndex
`public static Vec2 GetResolutionAtIndex(int index) `

### GetDLSSTechnique
`public static int GetDLSSTechnique() `

### Is120HzAvailable
`public static bool Is120HzAvailable() `

### GetDLSSOptionCount
`public static int GetDLSSOptionCount() `

### GetIsDLSSAvailable
`public static bool GetIsDLSSAvailable() `

### CheckGFXSupportStatus
`public static bool CheckGFXSupportStatus(int enumType) `

### SetConfig
`public static void SetConfig(NativeOptions.NativeOptionsType type,float value) `

### ApplyConfigChanges
`public static void ApplyConfigChanges(bool resizeWindow) `

### SetGameKeys
`public static void SetGameKeys(int keyType,int index,int key) `

### Apply
`public static void Apply(int texture_budget,int sharpen_amount,int hdr,int dof_mode,int motion_blur,int ssr,int size,int texture_filtering,int trail_amount,int dynamic_resolution_target) `

### SaveConfig
`public static SaveResult SaveConfig() `

### SetBrightness
`public static void SetBrightness(float gamma) `

### SetDefaultGameKeys
`public static void SetDefaultGameKeys() `

### SetDefaultGameConfig
`public static void SetDefaultGameConfig() `

### OnNativeOptionChangedDelegate
`public delegate void OnNativeOptionChangedDelegate(NativeOptions.NativeOptionsType changedNativeOptionsType)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
