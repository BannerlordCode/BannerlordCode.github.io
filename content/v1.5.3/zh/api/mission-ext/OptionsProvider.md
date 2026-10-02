---
title: "OptionsProvider"
description: "OptionsProvider 的自动生成类参考。"
---
# OptionsProvider

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OptionsProvider `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/Options/OptionsProvider.cs

## 概述

`OptionsProvider` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Options/OptionsProvider.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetVideoOptionCategory
`public static OptionCategory GetVideoOptionCategory(bool isMainMenu,Action onBrightnessClick,Action onExposureClick,Action onBenchmarkClick) `

### GetPerformanceOptionCategory
`public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer) `

### GetPerformanceGraphicsOptions
`public static IEnumerable<IOptionData> GetPerformanceGraphicsOptions(bool isMultiplayer) `

### GetPerformanceResolutionScalingOptions
`public static IEnumerable<IOptionData> GetPerformanceResolutionScalingOptions(bool isMultiplayer) `

### GetPerformanceGameplayOptions
`public static IEnumerable<IOptionData> GetPerformanceGameplayOptions(bool isMultiplayer) `

### GetPerformanceAudioOptions
`public static IEnumerable<IOptionData> GetPerformanceAudioOptions() `

### GetAudioOptionCategory
`public static OptionCategory GetAudioOptionCategory(bool isMultiplayer) `

### GetGameplayOptionCategory
`public static OptionCategory GetGameplayOptionCategory(bool isMainMenu,bool isMultiplayer) `

### GetGameKeyCategoriesList
`public static IEnumerable<string> GetGameKeyCategoriesList(bool isMultiplayer) `

### GetHiddenGameKeys
`public static IEnumerable<int> GetHiddenGameKeys(bool isNavalModuleActive) `

### GetControllerOptionCategory
`public static OptionCategory GetControllerOptionCategory() `

### GetDefaultNativeOptions
`public static Dictionary<NativeOptions.NativeOptionsType,float[]> GetDefaultNativeOptions() `

### GetDefaultManagedOptions
`public static Dictionary<ManagedOptions.ManagedOptionsType,float[]> GetDefaultManagedOptions() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
