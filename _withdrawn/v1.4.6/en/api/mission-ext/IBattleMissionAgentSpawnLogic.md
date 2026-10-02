---
title: "IBattleMissionAgentSpawnLogic"
description: "IBattleMissionAgentSpawnLogic: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionAgentSpawnLogic, IMissionBehavior; 7 exposed members (0 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IBattleMissionAgentSpawnLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBattleMissionAgentSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IBattleMissionAgentSpawnLogic : IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IBattleMissionAgentSpawnLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IBattleMissionAgentSpawnLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IBattleMissionAgentSpawnLogic.cs. It is a public interface, implementing/inheriting IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is IBattleMissionAgentSpawnLogic → IMissionAgentSpawnLogic → IMissionBehavior. It exposes 7 public/protected members: 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBattleMissionAgentSpawnLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IBattleMissionAgentSpawnLogic → IMissionAgentSpawnLogic → IMissionBehavior. The surface is property-led (properties 7/7, methods 0/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IBattleMissionAgentSpawnLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TotalSpawnNumber` | `int TotalSpawnNumber` | property |
| `BattleSize` | `int BattleSize` | property |
| `NumberOfAgents` | `int NumberOfAgents` | property |
| `DefenderActivePhase` | `MissionSpawnPhase DefenderActivePhase` | property |
| `AttackerActivePhase` | `MissionSpawnPhase AttackerActivePhase` | property |
| `SpawnSettings` | `readonly ref MissionSpawnSettings SpawnSettings` | property |
| `DeploymentPlan` | `IMissionDeploymentPlan DeploymentPlan` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionAgentSpawnLogic](../IMissionAgentSpawnLogic/)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
