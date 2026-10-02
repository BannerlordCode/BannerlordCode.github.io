---
title: "SiegeLane"
description: "SiegeLane：TaleWorlds.MountAndBlade 的 public 类；公开成员 29 个（方法 15、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeLane.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLane

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLane`
**File:** `TaleWorlds.MountAndBlade/SiegeLane.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeLane 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeLane.cs。它是一个 public 类，继承链为 SiegeLane。public/protected 成员共 29 个：15 方法、11 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeLane 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeLane。成员构成以方法为主（方法 15/29，属性 11/29），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeLane.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LaneState` | `public SiegeLane.LaneStateEnum LaneState` | 属性 |
| `LaneSide` | `public FormationAI.BehaviorSide LaneSide` | 属性 |
| `List` | `public List<IPrimarySiegeWeapon>PrimarySiegeWeapons` | 属性 |
| `IsOpen` | `public bool IsOpen` | 属性 |
| `IsBreach` | `public bool IsBreach` | 属性 |
| `HasGate` | `public bool HasGate` | 属性 |
| `List` | `public List<ICastleKeyPosition>DefensePoints` | 属性 |
| `DefenderOrigin` | `public WorldPosition DefenderOrigin` | 属性 |
| `AttackerOrigin` | `public WorldPosition AttackerOrigin` | 属性 |
| `SiegeLane` | `public SiegeLane(FormationAI.BehaviorSide laneSide, SiegeQuerySystem siegeQuerySystem)` | 构造函数 |
| `CalculateIsLaneUnusable` | `public bool CalculateIsLaneUnusable()` | 方法 |
| `GetLastAssignedFormation` | `public Formation GetLastAssignedFormation(int teamIndex)` | 方法 |
| `SetLaneState` | `public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)` | 方法 |
| `SetLastAssignedFormation` | `public void SetLastAssignedFormation(int teamIndex, Formation formation)` | 方法 |
| `SetSiegeQuerySystem` | `public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)` | 方法 |
| `CalculateLaneCapacity` | `public float CalculateLaneCapacity()` | 方法 |
| `GetDefenseState` | `public SiegeLane.LaneDefenseStates GetDefenseState()` | 方法 |
| `IsUnderAttack` | `public bool IsUnderAttack()` | 方法 |
| `IsDefended` | `public bool IsDefended()` | 方法 |
| `DetermineLaneState` | `public void DetermineLaneState()` | 方法 |
| `GetCurrentAttackerPosition` | `public WorldPosition GetCurrentAttackerPosition()` | 方法 |
| `DetermineOrigins` | `public void DetermineOrigins()` | 方法 |
| `RefreshLane` | `public void RefreshLane()` | 方法 |
| `SetPrimarySiegeWeapons` | `public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon>primarySiegeWeapons)` | 方法 |
| `SetDefensePoints` | `public void SetDefensePoints(List<ICastleKeyPosition>defensePoints)` | 方法 |
| `LaneStateEnum` | `public enum LaneStateEnum` | 属性 |
| `LaneDefenseStates` | `public enum LaneDefenseStates` | 属性 |
| `LaneStateEnum` | `public enum LaneStateEnum` | 嵌套类型 |
| `LaneDefenseStates` | `public enum LaneDefenseStates` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
