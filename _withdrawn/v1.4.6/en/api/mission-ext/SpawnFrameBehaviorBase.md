---
title: "SpawnFrameBehaviorBase"
description: "SpawnFrameBehaviorBase: a public class in TaleWorlds.MountAndBlade; 5 exposed members (4 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnFrameBehaviorBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SpawnFrameBehaviorBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs. It is a public class (abstract); the inheritance chain is SpawnFrameBehaviorBase. It exposes 5 public/protected members: 4 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnFrameBehaviorBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SpawnFrameBehaviorBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public virtual void Initialize()` | method |
| `GetSpawnFrame` | `public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn);` | method |
| `GetSpawnFrameFromSpawnPoints` | `protected MatrixFrame GetSpawnFrameFromSpawnPoints(IList<GameEntity>spawnPointsList, Team team, bool hasMount)` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `SpawnPointTag` | `protected const string SpawnPointTag` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
