---
title: "MissionGauntletEavesdroppingCameraView"
description: "MissionGauntletEavesdroppingCameraView：SandBox.GauntletUI 的 public 类，继承 EavesdroppingMissionCameraView；公开成员 4 个（方法 3、属性 0、字段 0）。源文件 SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs。"
---
# MissionGauntletEavesdroppingCameraView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletEavesdroppingCameraView : EavesdroppingMissionCameraView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs`

## 概述

MissionGauntletEavesdroppingCameraView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs。它是一个 public 类，实现/继承 EavesdroppingMissionCameraView，继承链为 MissionGauntletEavesdroppingCameraView → EavesdroppingMissionCameraView。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletEavesdroppingCameraView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.Missions），继承链 MissionGauntletEavesdroppingCameraView → EavesdroppingMissionCameraView。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。继承链上的 EavesdroppingMissionCameraView 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGauntletEavesdroppingCameraView` | `public MissionGauntletEavesdroppingCameraView()` | 构造函数 |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `SetPlayerMovementEnabled` | `protected override void SetPlayerMovementEnabled(bool isPlayerMovementEnabled)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView)
- [同命名空间 MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView)
- [同命名空间 MissionGauntletBarterView](../MissionGauntletBarterView)
- [同命名空间 MissionGauntletBoardGameView](../MissionGauntletBoardGameView)
