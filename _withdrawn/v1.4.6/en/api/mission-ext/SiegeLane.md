---
title: "SiegeLane"
description: "SiegeLane: a public class in TaleWorlds.MountAndBlade; 29 exposed members (15 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SiegeLane.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLane

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLane`
**File:** `TaleWorlds.MountAndBlade/SiegeLane.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeLane lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeLane.cs. It is a public class; the inheritance chain is SiegeLane. It exposes 29 public/protected members: 15 methods, 11 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeLane lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SiegeLane. The surface is method-led (methods 15/29, properties 11/29), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeLane.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LaneState` | `public SiegeLane.LaneStateEnum LaneState` | property |
| `LaneSide` | `public FormationAI.BehaviorSide LaneSide` | property |
| `List` | `public List<IPrimarySiegeWeapon>PrimarySiegeWeapons` | property |
| `IsOpen` | `public bool IsOpen` | property |
| `IsBreach` | `public bool IsBreach` | property |
| `HasGate` | `public bool HasGate` | property |
| `List` | `public List<ICastleKeyPosition>DefensePoints` | property |
| `DefenderOrigin` | `public WorldPosition DefenderOrigin` | property |
| `AttackerOrigin` | `public WorldPosition AttackerOrigin` | property |
| `SiegeLane` | `public SiegeLane(FormationAI.BehaviorSide laneSide, SiegeQuerySystem siegeQuerySystem)` | constructor |
| `CalculateIsLaneUnusable` | `public bool CalculateIsLaneUnusable()` | method |
| `GetLastAssignedFormation` | `public Formation GetLastAssignedFormation(int teamIndex)` | method |
| `SetLaneState` | `public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)` | method |
| `SetLastAssignedFormation` | `public void SetLastAssignedFormation(int teamIndex, Formation formation)` | method |
| `SetSiegeQuerySystem` | `public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)` | method |
| `CalculateLaneCapacity` | `public float CalculateLaneCapacity()` | method |
| `GetDefenseState` | `public SiegeLane.LaneDefenseStates GetDefenseState()` | method |
| `IsUnderAttack` | `public bool IsUnderAttack()` | method |
| `IsDefended` | `public bool IsDefended()` | method |
| `DetermineLaneState` | `public void DetermineLaneState()` | method |
| `GetCurrentAttackerPosition` | `public WorldPosition GetCurrentAttackerPosition()` | method |
| `DetermineOrigins` | `public void DetermineOrigins()` | method |
| `RefreshLane` | `public void RefreshLane()` | method |
| `SetPrimarySiegeWeapons` | `public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon>primarySiegeWeapons)` | method |
| `SetDefensePoints` | `public void SetDefensePoints(List<ICastleKeyPosition>defensePoints)` | method |
| `LaneStateEnum` | `public enum LaneStateEnum` | property |
| `LaneDefenseStates` | `public enum LaneDefenseStates` | property |
| `LaneStateEnum` | `public enum LaneStateEnum` | nested type |
| `LaneDefenseStates` | `public enum LaneDefenseStates` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
