---
title: "TeamAISiegeComponent"
description: "TeamAISiegeComponent：TaleWorlds.MountAndBlade 的 public 类，继承 TeamAIComponent；公开成员 22 个（方法 11、属性 8、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TeamAISiegeComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

TeamAISiegeComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs。它是一个 public 类（abstract），实现/继承 TeamAIComponent，继承链为 TeamAISiegeComponent → TeamAIComponent。public/protected 成员共 22 个：11 方法、8 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TeamAISiegeComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 TeamAISiegeComponent → TeamAIComponent。成员构成以方法为主（方法 11/22，属性 8/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<SiegeLane>SiegeLanes` | 属性 |
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem` | 属性 |
| `OuterGate` | `public CastleGate OuterGate` | 属性 |
| `List` | `public List<IPrimarySiegeWeapon>PrimarySiegeWeapons` | 属性 |
| `InnerGate` | `public CastleGate InnerGate` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<SiegeLadder>Ladders` | 属性 |
| `AreLaddersReady` | `public bool AreLaddersReady` | 属性 |
| `List` | `public List<int>DifficultNavmeshIDs` | 属性 |
| `TeamAISiegeComponent` | `protected TeamAISiegeComponent(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | 构造函数 |
| `Tick` | `protected internal override void Tick(float dt)` | 方法 |
| `OnMissionFinalize` | `public static void OnMissionFinalize()` | 方法 |
| `CalculateIsChargePastWallsApplicable` | `public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)` | 方法 |
| `SetAreLaddersReady` | `public void SetAreLaddersReady(bool areLaddersReady)` | 方法 |
| `CalculateIsAnyLaneOpenToGetInside` | `public bool CalculateIsAnyLaneOpenToGetInside()` | 方法 |
| `CalculateIsAnyLaneOpenToGoOutside` | `public bool CalculateIsAnyLaneOpenToGoOutside()` | 方法 |
| `IsPrimarySiegeWeaponNavmeshFaceId` | `public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)` | 方法 |
| `IsFormationGroupInsideCastle` | `public static bool IsFormationGroupInsideCastle(MBList<Formation>formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)` | 方法 |
| `IsFormationInsideCastle` | `public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)` | 方法 |
| `IsCastleBreached` | `public bool IsCastleBreached()` | 方法 |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | 方法 |
| `InsideCastleNavMeshID` | `public const int InsideCastleNavMeshID` | 字段 |
| `SiegeTokenForceSize` | `public const int SiegeTokenForceSize` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TeamAIComponent](../TeamAIComponent/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
