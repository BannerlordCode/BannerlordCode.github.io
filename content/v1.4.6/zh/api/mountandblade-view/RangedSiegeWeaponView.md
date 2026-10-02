---
title: "RangedSiegeWeaponView"
description: "RangedSiegeWeaponView：TaleWorlds.MountAndBlade.View 的 public 类，继承 UsableMissionObjectComponent；公开成员 14 个（方法 9、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs。"
---
# RangedSiegeWeaponView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs`

## 概述

RangedSiegeWeaponView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs。它是一个 public 类，实现/继承 UsableMissionObjectComponent，继承链为 RangedSiegeWeaponView → UsableMissionObjectComponent。public/protected 成员共 14 个：9 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RangedSiegeWeaponView 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon），继承链 RangedSiegeWeaponView → UsableMissionObjectComponent。成员构成以方法为主（方法 9/14，属性 5/14），对外主要以操作入口暴露。继承链上的 UsableMissionObjectComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RangedSiegeWeapon` | `public RangedSiegeWeapon RangedSiegeWeapon` | 属性 |
| `MissionScreen` | `public MissionScreen MissionScreen` | 属性 |
| `Camera` | `public Camera Camera` | 属性 |
| `CameraHolder` | `public GameEntity CameraHolder` | 属性 |
| `PilotAgent` | `public Agent PilotAgent` | 属性 |
| `Initialize` | `public void Initialize(RangedSiegeWeapon rangedSiegeWeapon, MissionScreen missionScreen)` | 方法 |
| `OnAdded` | `protected override void OnAdded(Scene scene)` | 方法 |
| `OnMissionReset` | `protected override void OnMissionReset()` | 方法 |
| `IsOnTickRequired` | `public override bool IsOnTickRequired()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `HandleUserInput` | `protected virtual void HandleUserInput(float dt)` | 方法 |
| `StartUsingWeaponCamera` | `protected virtual void StartUsingWeaponCamera()` | 方法 |
| `HandleUserCameraRotation` | `protected virtual void HandleUserCameraRotation(float dt)` | 方法 |
| `OnMissionObjectDisabled` | `protected override void OnMissionObjectDisabled()` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BallistaView](../BallistaView)
- [同命名空间 BricoleView](../BricoleView)
- [同命名空间 MangonelView](../MangonelView)
- [同命名空间 RangedSiegeWeaponViewController](../RangedSiegeWeaponViewController)
