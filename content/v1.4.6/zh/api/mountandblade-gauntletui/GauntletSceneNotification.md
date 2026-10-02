---
title: "GauntletSceneNotification"
description: "GauntletSceneNotification：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 GlobalLayer；公开成员 7 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs。"
---
# GauntletSceneNotification

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs`

## 概述

GauntletSceneNotification 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs。它是一个 public 类，实现/继承 GlobalLayer，继承链为 GauntletSceneNotification → GlobalLayer。public/protected 成员共 7 个：5 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletSceneNotification 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.SceneNotification），继承链 GauntletSceneNotification → GlobalLayer。成员构成以方法为主（方法 5/7，属性 2/7），对外主要以操作入口暴露。继承链上的 GlobalLayer 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletSceneNotification Current` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `RegisterContextProvider` | `public void RegisterContextProvider(ISceneNotificationContextProvider provider)` | 方法 |
| `RemoveContextProvider` | `public bool RemoveContextProvider(ISceneNotificationContextProvider provider)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 NativeSceneNotificationContextProvider](../NativeSceneNotificationContextProvider)
