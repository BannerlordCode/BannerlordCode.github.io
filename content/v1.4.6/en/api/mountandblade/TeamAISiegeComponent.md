---
title: "TeamAISiegeComponent"
description: "TeamAISiegeComponent: a public class in TaleWorlds.MountAndBlade, inheriting TeamAIComponent; 22 exposed members (11 methods, 8 properties, 2 fields). Source: TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs."
---
# TeamAISiegeComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

## Overview

TeamAISiegeComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs. It is a public class (abstract), implementing/inheriting TeamAIComponent; the inheritance chain is TeamAISiegeComponent → TeamAIComponent. It exposes 22 public/protected members: 11 methods, 8 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamAISiegeComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TeamAISiegeComponent → TeamAIComponent. The surface is method-led (methods 11/22, properties 8/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<SiegeLane>SiegeLanes` | property |
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem` | property |
| `OuterGate` | `public CastleGate OuterGate` | property |
| `List` | `public List<IPrimarySiegeWeapon>PrimarySiegeWeapons` | property |
| `InnerGate` | `public CastleGate InnerGate` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<SiegeLadder>Ladders` | property |
| `AreLaddersReady` | `public bool AreLaddersReady` | property |
| `List` | `public List<int>DifficultNavmeshIDs` | property |
| `TeamAISiegeComponent` | `protected TeamAISiegeComponent(Mission currentMission, Team currentTeam, float thinkTimerTime, float applyTimerTime) : base(currentMission, currentTeam, thinkTimerTime, applyTimerTime)` | constructor |
| `Tick` | `protected internal override void Tick(float dt)` | method |
| `OnMissionFinalize` | `public static void OnMissionFinalize()` | method |
| `CalculateIsChargePastWallsApplicable` | `public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)` | method |
| `SetAreLaddersReady` | `public void SetAreLaddersReady(bool areLaddersReady)` | method |
| `CalculateIsAnyLaneOpenToGetInside` | `public bool CalculateIsAnyLaneOpenToGetInside()` | method |
| `CalculateIsAnyLaneOpenToGoOutside` | `public bool CalculateIsAnyLaneOpenToGoOutside()` | method |
| `IsPrimarySiegeWeaponNavmeshFaceId` | `public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)` | method |
| `IsFormationGroupInsideCastle` | `public static bool IsFormationGroupInsideCastle(MBList<Formation>formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)` | method |
| `IsFormationInsideCastle` | `public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)` | method |
| `IsCastleBreached` | `public bool IsCastleBreached()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `InsideCastleNavMeshID` | `public const int InsideCastleNavMeshID` | field |
| `SiegeTokenForceSize` | `public const int SiegeTokenForceSize` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TeamAIComponent](../TeamAIComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
