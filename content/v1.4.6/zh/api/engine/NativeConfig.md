---
title: "NativeConfig"
description: "NativeConfig：TaleWorlds.Engine 的 public 类；公开成员 20 个（方法 2、属性 18、字段 0）。源文件 TaleWorlds.Engine/NativeConfig.cs。"
---
# NativeConfig

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class NativeConfig`
**File:** `TaleWorlds.Engine/NativeConfig.cs`

## 概述

NativeConfig 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/NativeConfig.cs。它是一个 public 类，继承链为 NativeConfig。public/protected 成员共 20 个：2 方法、18 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeConfig 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 NativeConfig。成员构成以属性为主（属性 18/20，方法 2/20），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/NativeConfig.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheatMode` | `public static bool CheatMode` | 属性 |
| `IsDevelopmentMode` | `public static bool IsDevelopmentMode` | 属性 |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode` | 属性 |
| `GetUIDebugMode` | `public static bool GetUIDebugMode` | 属性 |
| `DisableSound` | `public static bool DisableSound` | 属性 |
| `EnableEditMode` | `public static bool EnableEditMode` | 属性 |
| `OnConfigChanged` | `public static void OnConfigChanged()` | 方法 |
| `TableauCacheEnabled` | `public static bool TableauCacheEnabled` | 属性 |
| `DoLocalizationCheckAtStartup` | `public static bool DoLocalizationCheckAtStartup` | 属性 |
| `EnableClothSimulation` | `public static bool EnableClothSimulation` | 属性 |
| `CharacterDetail` | `public static int CharacterDetail` | 属性 |
| `InvertMouse` | `public static bool InvertMouse` | 属性 |
| `LastOpenedScene` | `public static string LastOpenedScene` | 属性 |
| `AutoSaveInMinutes` | `public static int AutoSaveInMinutes` | 属性 |
| `GetUIDoNotUseGeneratedPrefabs` | `public static bool GetUIDoNotUseGeneratedPrefabs` | 属性 |
| `DebugLoginUsername` | `public static string DebugLoginUsername` | 属性 |
| `DebugLogicPassword` | `public static string DebugLogicPassword` | 属性 |
| `DisableGuiMessages` | `public static bool DisableGuiMessages` | 属性 |
| `AutoGFXQuality` | `public static NativeOptions.ConfigQuality AutoGFXQuality` | 属性 |
| `SetAutoConfigWrtHardware` | `public static void SetAutoConfigWrtHardware()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
