---
title: "SpawnFrameBehaviorBase"
description: "SpawnFrameBehaviorBase: a public class in TaleWorlds.MountAndBlade; 5 exposed members (4 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs."
---
# SpawnFrameBehaviorBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs`

## Overview

SpawnFrameBehaviorBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs. It is a public class (abstract); the inheritance chain is SpawnFrameBehaviorBase. It exposes 5 public/protected members: 4 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnFrameBehaviorBase is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SpawnFrameBehaviorBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public virtual void Initialize()` | method |
| `GetSpawnFrame` | `public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn);` | method |
| `GetSpawnFrameFromSpawnPoints` | `protected MatrixFrame GetSpawnFrameFromSpawnPoints(IList<GameEntity>spawnPointsList, Team team, bool hasMount)` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `SpawnPointTag` | `protected const string SpawnPointTag` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
