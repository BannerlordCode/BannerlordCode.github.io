---
title: "OptionsProvider"
description: "OptionsProvider：TaleWorlds.MountAndBlade.Options 的 public 类；公开成员 13 个（方法 13、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Options/OptionsProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OptionsProvider

**Namespace:** `TaleWorlds.MountAndBlade.Options`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class OptionsProvider`
**File:** `TaleWorlds.MountAndBlade/Options/OptionsProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

OptionsProvider 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Options/OptionsProvider.cs。它是一个 public 类，继承链为 OptionsProvider。public/protected 成员共 13 个：13 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OptionsProvider 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Options`，继承链 OptionsProvider。成员构成以方法为主（方法 13/13，属性 0/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Options/OptionsProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetVideoOptionCategory` | `public static OptionCategory GetVideoOptionCategory(bool isMainMenu, Action onBrightnessClick, Action onExposureClick, Action onBenchmarkClick)` | 方法 |
| `GetPerformanceOptionCategory` | `public static OptionCategory GetPerformanceOptionCategory(bool isMultiplayer)` | 方法 |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceGraphicsOptions(bool isMultiplayer)` | 方法 |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceResolutionScalingOptions(bool isMultiplayer)` | 方法 |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceGameplayOptions(bool isMultiplayer)` | 方法 |
| `IEnumerable` | `public static IEnumerable<IOptionData>GetPerformanceAudioOptions()` | 方法 |
| `GetAudioOptionCategory` | `public static OptionCategory GetAudioOptionCategory(bool isMultiplayer)` | 方法 |
| `GetGameplayOptionCategory` | `public static OptionCategory GetGameplayOptionCategory(bool isMainMenu, bool isMultiplayer)` | 方法 |
| `IEnumerable` | `public static IEnumerable<string>GetGameKeyCategoriesList(bool isMultiplayer)` | 方法 |
| `IEnumerable` | `public static IEnumerable<int>GetHiddenGameKeys(bool isNavalModuleActive)` | 方法 |
| `GetControllerOptionCategory` | `public static OptionCategory GetControllerOptionCategory()` | 方法 |
| `float[]>GetDefaultNativeOptions` | `public static Dictionary<NativeOptions.NativeOptionsType, float[]>GetDefaultNativeOptions()` | 方法 |
| `float[]>GetDefaultManagedOptions` | `public static Dictionary<ManagedOptions.ManagedOptionsType, float[]>GetDefaultManagedOptions()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionOptionData](../ActionOptionData/)
- [同命名空间 OptionCategory](../OptionCategory/)
- [同命名空间 OptionGroup](../OptionGroup/)
