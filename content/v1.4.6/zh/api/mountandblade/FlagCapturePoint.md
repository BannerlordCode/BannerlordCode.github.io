---
title: "FlagCapturePoint"
description: "FlagCapturePoint：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject；公开成员 21 个（方法 14、属性 5、字段 2）。源文件 TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs。"
---
# FlagCapturePoint

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagCapturePoint : SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs`

## 概述

FlagCapturePoint 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs。它是一个 public 类，实现/继承 SynchedMissionObject，继承链为 FlagCapturePoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 21 个：14 方法、5 属性、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FlagCapturePoint 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Objects），继承链 FlagCapturePoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 14/21，属性 5/21），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/FlagCapturePoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Position` | `public Vec3 Position` | 属性 |
| `FlagChar` | `public int FlagChar` | 属性 |
| `IsContested` | `public bool IsContested` | 属性 |
| `IsFullyRaised` | `public bool IsFullyRaised` | 属性 |
| `IsDeactivated` | `public bool IsDeactivated` | 属性 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `ResetPointAsServer` | `public void ResetPointAsServer(uint defaultColor, uint defaultColor2)` | 方法 |
| `RemovePointAsServer` | `public void RemovePointAsServer()` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnAfterTick` | `public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)` | 方法 |
| `SetMoveFlag` | `public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)` | 方法 |
| `ChangeMovementSpeed` | `public void ChangeMovementSpeed(float speedMultiplier)` | 方法 |
| `SetMoveNone` | `public void SetMoveNone()` | 方法 |
| `SetVisibleWithAllSynched` | `public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)` | 方法 |
| `SetTeamColorsWithAllSynched` | `public void SetTeamColorsWithAllSynched(uint color, uint color2)` | 方法 |
| `GetFlagColor` | `public uint GetFlagColor()` | 方法 |
| `GetFlagColor2` | `public uint GetFlagColor2()` | 方法 |
| `GetFlagProgress` | `public float GetFlagProgress()` | 方法 |
| `PointRadius` | `public const float PointRadius` | 字段 |
| `RadiusMultiplierForContestedArea` | `public const float RadiusMultiplierForContestedArea` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject)
- [同命名空间 AnimalSpawnSettings](../AnimalSpawnSettings)
- [同命名空间 AreaMarker](../AreaMarker)
- [同命名空间 FightAreaMarker](../FightAreaMarker)
- [同命名空间 GenericMissionEvent](../GenericMissionEvent)
