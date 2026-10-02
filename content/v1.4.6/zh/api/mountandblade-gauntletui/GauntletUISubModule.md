---
title: "GauntletUISubModule"
description: "GauntletUISubModule：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MBSubModuleBase；公开成员 10 个（方法 9、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs。"
---
# GauntletUISubModule

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletUISubModule : MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs`

## 概述

GauntletUISubModule 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs。它是一个 public 类，实现/继承 MBSubModuleBase，继承链为 GauntletUISubModule → MBSubModuleBase。public/protected 成员共 10 个：9 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletUISubModule 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 GauntletUISubModule → MBSubModuleBase。成员构成以方法为主（方法 9/10，属性 1/10），对外主要以操作入口暴露。继承链上的 MBSubModuleBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static GauntletUISubModule Instance` | 属性 |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | 方法 |
| `OnNewModuleLoad` | `protected override void OnNewModuleLoad()` | 方法 |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | 方法 |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected override void OnBeforeInitialModuleScreenSetAsRoot()` | 方法 |
| `OnMultiplayerGameStart` | `public override void OnMultiplayerGameStart(Game game, object starterObject)` | 方法 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 方法 |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | 方法 |
| `ClearChatLog` | `public static string ClearChatLog(List<string>strings)` | 方法 |
| `SetCanFocusWhileInMission` | `public static string SetCanFocusWhileInMission(List<string>strings)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView)
