---
title: "LadderQueueManager"
description: "LadderQueueManager: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 13 exposed members (12 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/LadderQueueManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LadderQueueManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class LadderQueueManager : MissionObject`
**File:** `TaleWorlds.MountAndBlade/LadderQueueManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LadderQueueManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/LadderQueueManager.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is LadderQueueManager → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 13 public/protected members: 12 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LadderQueueManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain LadderQueueManager → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 12/13, properties 1/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/LadderQueueManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsDeactivated` | `public bool IsDeactivated` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `DeactivateImmediate` | `public void DeactivateImmediate()` | method |
| `Deactivate` | `public void Deactivate()` | method |
| `Activate` | `public void Activate()` | method |
| `Initialize` | `public void Initialize(int managedNavigationFaceId, MatrixFrame managedFrame, Vec3 managedDirection, BattleSideEnum managedSide, int maxUserCount, float arcAngle, float queueBeginDistance, float queueRowSize, float costPerRow, float baseCost, bool blockUsage, float agentSpacing, float zDifferenceToStopUsing, float distanceToStopUsing2d, bool doesManageMultipleIDs, int managedNavigationFaceAlternateID1, int managedNavigationFaceAlternateID2, int maxClimberCount, int maxRunnerCount)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `FlushQueueManager` | `public void FlushQueueManager()` | method |
| `AssignNeighborQueueManager` | `public void AssignNeighborQueueManager(LadderQueueManager neighborLadderQueueManager)` | method |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(Agent agent, bool hasFrame, WorldPosition frame)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObject](../MissionObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
