---
title: "WallSegment"
description: "WallSegment: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject, IPointDefendable; 17 exposed members (6 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/WallSegment.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WallSegment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WallSegment : SynchedMissionObject, IPointDefendable, ICastleKeyPosition`
**File:** `TaleWorlds.MountAndBlade/WallSegment.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

WallSegment lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/WallSegment.cs. It is a public class, implementing/inheriting SynchedMissionObject, IPointDefendable, ICastleKeyPosition; the inheritance chain is WallSegment → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 17 public/protected members: 6 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WallSegment lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain WallSegment → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is property-led (properties 10/17, methods 6/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/WallSegment.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MiddlePosition` | `public TacticalPosition MiddlePosition` | property |
| `WaitPosition` | `public TacticalPosition WaitPosition` | property |
| `AttackerWaitPosition` | `public TacticalPosition AttackerWaitPosition` | property |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon` | property |
| `IEnumerable` | `public IEnumerable<DefencePoint>DefencePoints` | property |
| `IsBreachedWall` | `public bool IsBreachedWall` | property |
| `MiddleFrame` | `public WorldFrame MiddleFrame` | property |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame` | property |
| `AttackerWaitFrame` | `public WorldFrame AttackerWaitFrame` | property |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide` | property |
| `GetPosition` | `public Vec3 GetPosition()` | method |
| `WallSegment` | `public WallSegment()` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `OnChooseUsedWallSegment` | `public void OnChooseUsedWallSegment(bool isBroken)` | method |
| `OnEditorValidate` | `protected internal override void OnEditorValidate()` | method |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SynchedMissionObject](../SynchedMissionObject/)
- [base / interface IPointDefendable](../IPointDefendable/)
- [base / interface ICastleKeyPosition](../ICastleKeyPosition/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
