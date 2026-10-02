---
title: "MissionGauntletBoardGameView"
description: "MissionGauntletBoardGameView：SandBox.GauntletUI 的 public 类，继承 MissionView、IBoardGameHandler；公开成员 10 个（方法 7、属性 2、字段 0）。源文件 SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs。"
---
# MissionGauntletBoardGameView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletBoardGameView : MissionView, IBoardGameHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs`

## 概述

MissionGauntletBoardGameView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs。它是一个 public 类，实现/继承 MissionView、IBoardGameHandler，继承链为 MissionGauntletBoardGameView → MissionView。public/protected 成员共 10 个：7 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletBoardGameView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Missions），继承链 MissionGauntletBoardGameView → MissionView。成员构成以方法为主（方法 7/10，属性 2/10），对外主要以操作入口暴露。继承链上的 MissionView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `_missionBoardGameHandler` | `public MissionBoardGameLogic _missionBoardGameHandler` | 属性 |
| `Camera` | `public Camera Camera` | 属性 |
| `MissionGauntletBoardGameView` | `public MissionGauntletBoardGameView()` | 构造函数 |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | 方法 |
| `OnEscape` | `public override bool OnEscape()` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `OnPhotoModeActivated` | `public override void OnPhotoModeActivated()` | 方法 |
| `OnPhotoModeDeactivated` | `public override void OnPhotoModeDeactivated()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [同命名空间 MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [同命名空间 MissionGauntletBarterView](../MissionGauntletBarterView)
- [同命名空间 MissionGauntletCheatView](../MissionGauntletCheatView)
