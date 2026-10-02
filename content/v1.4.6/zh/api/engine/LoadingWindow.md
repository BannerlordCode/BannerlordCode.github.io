---
title: "LoadingWindow"
description: "LoadingWindow：TaleWorlds.Engine 的 public 类；公开成员 7 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.Engine/LoadingWindow.cs。"
---
# LoadingWindow

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class LoadingWindow`
**File:** `TaleWorlds.Engine/LoadingWindow.cs`

## 概述

LoadingWindow 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/LoadingWindow.cs。它是一个 public 类，继承链为 LoadingWindow。public/protected 成员共 7 个：5 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LoadingWindow 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 LoadingWindow。成员构成以方法为主（方法 5/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/LoadingWindow.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsLoadingWindowActive` | `public static bool IsLoadingWindowActive` | 属性 |
| `LoadingWindowManager` | `public static ILoadingWindowManager LoadingWindowManager` | 属性 |
| `InitializeWith` | `public static void InitializeWith<T>() where T : class, ILoadingWindowManager, new()` | 方法 |
| `Destroy` | `public static void Destroy()` | 方法 |
| `DisableGlobalLoadingWindow` | `public static void DisableGlobalLoadingWindow()` | 方法 |
| `EnableGlobalLoadingWindow` | `public static void EnableGlobalLoadingWindow()` | 方法 |
| `SetCurrentModeIsMultiplayer` | `public static void SetCurrentModeIsMultiplayer(bool isMultiplayer)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
