---
title: "ScreenFadeController"
description: "ScreenFadeController：TaleWorlds.MountAndBlade 的 public 类；公开成员 10 个（方法 4、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade/ScreenFadeController.cs。"
---
# ScreenFadeController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ScreenFadeController`
**File:** `TaleWorlds.MountAndBlade/ScreenFadeController.cs`

## 概述

ScreenFadeController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ScreenFadeController.cs。它是一个 public 类，继承链为 ScreenFadeController。public/protected 成员共 10 个：4 方法、5 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScreenFadeController 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ScreenFadeController。成员构成以属性为主（属性 5/10，方法 4/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ScreenFadeController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFadeActive` | `public static bool IsFadeActive` | 属性 |
| `IsFadingOut` | `public static bool IsFadingOut` | 属性 |
| `IsFadingIn` | `public static bool IsFadingIn` | 属性 |
| `IsFadedOut` | `public static bool IsFadedOut` | 属性 |
| `RegisterHandler` | `public static void RegisterHandler(IScreenFadeHandler handler)` | 方法 |
| `BeginFadeOutAndIn` | `public static void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)` | 方法 |
| `BeginFadeOut` | `public static void BeginFadeOut(float fadeOutDuration = 0.5f)` | 方法 |
| `BeginFadeIn` | `public static void BeginFadeIn(float fadeInDuration = 0.5f)` | 方法 |
| `ScreenFadeState` | `public enum ScreenFadeState` | 属性 |
| `ScreenFadeState` | `public enum ScreenFadeState` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
