---
title: "MissionGauntletSingleplayerEscapeMenu"
description: "MissionGauntletSingleplayerEscapeMenu：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MissionGauntletEscapeMenuBase；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs。"
---
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`

## 概述

MissionGauntletSingleplayerEscapeMenu 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs。它是一个 public 类，实现/继承 MissionGauntletEscapeMenuBase，继承链为 MissionGauntletSingleplayerEscapeMenu → MissionGauntletEscapeMenuBase → MissionEscapeMenuView。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletSingleplayerEscapeMenu 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer），继承链 MissionGauntletSingleplayerEscapeMenu → MissionGauntletEscapeMenuBase → MissionEscapeMenuView。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。继承链上的 MissionEscapeMenuView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletSingleplayerEscapeMenu` | `public MissionGauntletSingleplayerEscapeMenu(bool isIronmanMode) : base(" ")` | 构造函数 |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnFocusChangeOnGameWindow` | `public override void OnFocusChangeOnGameWindow(bool focusGained)` | 方法 |
| `OnSceneRenderingStarted` | `public override void OnSceneRenderingStarted()` | 方法 |
| `List` | `protected override List<EscapeMenuItemVM>GetEscapeMenuItems()` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionGauntletEscapeMenuBase](../MissionGauntletEscapeMenuBase)
- [同命名空间 MissionGauntletAgentLockVisualizerView](../MissionGauntletAgentLockVisualizerView)
- [同命名空间 MissionGauntletBattleScore](../MissionGauntletBattleScore)
- [同命名空间 MissionGauntletFormationMarker](../MissionGauntletFormationMarker)
- [同命名空间 MissionGauntletKillNotificationSingleplayerUIHandler](../MissionGauntletKillNotificationSingleplayerUIHandler)
