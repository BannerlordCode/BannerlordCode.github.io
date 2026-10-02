---
title: "EngineController"
description: "EngineController：TaleWorlds.Engine 的 public 类；公开成员 7 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.Engine/EngineController.cs。"
---
# EngineController

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class EngineController`
**File:** `TaleWorlds.Engine/EngineController.cs`

## 概述

EngineController 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/EngineController.cs。它是一个 public 类，继承链为 EngineController。public/protected 成员共 7 个：3 方法、4 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EngineController 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 EngineController。成员构成以方法为主（方法 3/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/EngineController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConfigChange;` | `public static event Action ConfigChange;` | 事件 |
| `Action` | `public static event Action<bool>OnConstrainedStateChanged;` | 事件 |
| `OnDLCInstalledCallback;` | `public static event Action OnDLCInstalledCallback;` | 事件 |
| `OnDLCLoadedCallback;` | `public static event Action OnDLCLoadedCallback;` | 事件 |
| `GetVersionStr` | `public static string GetVersionStr()` | 方法 |
| `GetApplicationPlatformName` | `public static string GetApplicationPlatformName()` | 方法 |
| `GetModulesVersionStr` | `public static string GetModulesVersionStr()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
