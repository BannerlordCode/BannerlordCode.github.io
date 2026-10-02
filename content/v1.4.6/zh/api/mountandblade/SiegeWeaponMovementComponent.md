---
title: "SiegeWeaponMovementComponent"
description: "SiegeWeaponMovementComponent：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMissionObjectComponent；公开成员 34 个（方法 19、属性 11、字段 4）。源文件 TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs。"
---
# SiegeWeaponMovementComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeWeaponMovementComponent : UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs`

## 概述

SiegeWeaponMovementComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs。它是一个 public 类，实现/继承 UsableMissionObjectComponent，继承链为 SiegeWeaponMovementComponent → UsableMissionObjectComponent。public/protected 成员共 34 个：19 方法、11 属性、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeWeaponMovementComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 SiegeWeaponMovementComponent → UsableMissionObjectComponent。成员构成以方法为主（方法 19/34，属性 11/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasApproachedTarget` | `public bool HasApproachedTarget` | 属性 |
| `Velocity` | `public Vec3 Velocity` | 属性 |
| `OnAdded` | `protected internal override void OnAdded(Scene scene)` | 方法 |
| `HighlightPath` | `public void HighlightPath()` | 方法 |
| `SetupGhostEntity` | `public void SetupGhostEntity()` | 方法 |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget` | 属性 |
| `CurrentSpeed` | `public float CurrentSpeed` | 属性 |
| `MovementSoundCodeID` | `public int MovementSoundCodeID` | 属性 |
| `MinSpeed` | `public float MinSpeed` | 属性 |
| `MaxSpeed` | `public float MaxSpeed` | 属性 |
| `PathEntityName` | `public string PathEntityName` | 属性 |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier` | 属性 |
| `WheelDiameter` | `public float WheelDiameter` | 属性 |
| `MainObject` | `public SynchedMissionObject MainObject` | 属性 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `SetGhostVisibility` | `public void SetGhostVisibility(bool isVisible)` | 方法 |
| `OnEditorInit` | `public void OnEditorInit()` | 方法 |
| `SetDistanceTraveledAsClient` | `public void SetDistanceTraveledAsClient(float distance)` | 方法 |
| `IsOnTickRequired` | `public override bool IsOnTickRequired()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `TickParallelManually` | `public void TickParallelManually(float dt)` | 方法 |
| `GetInitialFrame` | `public MatrixFrame GetInitialFrame()` | 方法 |
| `GetTargetFrame` | `public MatrixFrame GetTargetFrame()` | 方法 |
| `SetDestinationNavMeshIdState` | `public void SetDestinationNavMeshIdState(bool enabled)` | 方法 |
| `MoveToTargetAsClient` | `public void MoveToTargetAsClient()` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `GetTotalDistanceTraveledForPathTracker` | `public float GetTotalDistanceTraveledForPathTracker()` | 方法 |
| `SetTotalDistanceTraveledForPathTracker` | `public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)` | 方法 |
| `SetTargetFrameForPathTracker` | `public void SetTargetFrameForPathTracker()` | 方法 |
| `FindGroundFrameForWheelsStatic` | `public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity>wheels, Scene scene)` | 方法 |
| `GhostObjectTag` | `public const string GhostObjectTag` | 字段 |
| `MoveStandingPointTag` | `public const string MoveStandingPointTag` | 字段 |
| `AxleLength` | `public float AxleLength` | 字段 |
| `NavMeshIdToDisableOnDestination` | `public int NavMeshIdToDisableOnDestination` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMissionObjectComponent](../UsableMissionObjectComponent)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
