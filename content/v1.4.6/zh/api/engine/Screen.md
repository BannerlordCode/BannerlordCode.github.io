---
title: "Screen"
description: "Screen：TaleWorlds.Engine 的 public 类；公开成员 7 个（方法 1、属性 6、字段 0）。源文件 TaleWorlds.Engine/Screen.cs。"
---
# Screen

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class Screen`
**File:** `TaleWorlds.Engine/Screen.cs`

## 概述

Screen 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Screen.cs。它是一个 public 类，继承链为 Screen。public/protected 成员共 7 个：1 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Screen 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Screen。成员构成以属性为主（属性 6/7，方法 1/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Screen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RealScreenResolutionWidth` | `public static float RealScreenResolutionWidth` | 属性 |
| `RealScreenResolutionHeight` | `public static float RealScreenResolutionHeight` | 属性 |
| `RealScreenResolution` | `public static Vec2 RealScreenResolution` | 属性 |
| `AspectRatio` | `public static float AspectRatio` | 属性 |
| `DesktopResolution` | `public static Vec2 DesktopResolution` | 属性 |
| `ScreenScale` | `public static Vec2 ScreenScale` | 属性 |
| `GetMouseVisible` | `public static bool GetMouseVisible()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
