---
title: "SpawningBehaviorBase"
description: "SpawningBehaviorBase: a public class in TaleWorlds.MountAndBlade; 26 exposed members (20 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs."
---
# SpawningBehaviorBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs`

## Overview

SpawningBehaviorBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs. It is a public class (abstract); the inheritance chain is SpawningBehaviorBase. It exposes 26 public/protected members: 20 methods, 1 properties, 1 fields, 3 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawningBehaviorBase is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SpawningBehaviorBase. The surface is method-led (methods 20/26, properties 1/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawningBehaviorBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Mission` | `protected Mission Mission` | property |
| `Action` | `protected event Action<MissionPeer>OnAllAgentsFromPeerSpawnedFromVisuals;` | event |
| `Action` | `protected event Action<MissionPeer>OnPeerSpawnedFromVisuals;` | event |
| `OnSpawningEnded;` | `public event SpawningBehaviorBase.OnSpawningEndedEventDelegate OnSpawningEnded;` | event |
| `Initialize` | `public virtual void Initialize(SpawnComponent spawnComponent)` | method |
| `Clear` | `public virtual void Clear()` | method |
| `OnTick` | `public virtual void OnTick(float dt)` | method |
| `AreAgentsSpawning` | `public bool AreAgentsSpawning()` | method |
| `ResetSpawnCounts` | `protected void ResetSpawnCounts()` | method |
| `ResetSpawnTimers` | `protected void ResetSpawnTimers()` | method |
| `RequestStartSpawnSession` | `public virtual void RequestStartSpawnSession()` | method |
| `RequestStopSpawnSession` | `public void RequestStopSpawnSession()` | method |
| `SetRemainingAgentsInvulnerable` | `public void SetRemainingAgentsInvulnerable()` | method |
| `SpawnAgents` | `protected abstract void SpawnAgents();` | method |
| `GetBodyProperties` | `protected BodyProperties GetBodyProperties(MissionPeer missionPeer, BasicCultureObject cultureLimit)` | method |
| `SpawnBot` | `protected void SpawnBot(Team agentTeam, BasicCultureObject cultureLimit)` | method |
| `CanUpdateSpawnEquipment` | `public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)` | method |
| `ToggleUpdatingSpawnEquipment` | `public void ToggleUpdatingSpawnEquipment(bool canUpdate)` | method |
| `AllowEarlyAgentVisualsDespawning` | `public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer);` | method |
| `GetMaximumReSpawnPeriodForPeer` | `public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)` | method |
| `IsRoundInProgress` | `protected abstract bool IsRoundInProgress();` | method |
| `OnClearScene` | `public virtual void OnClearScene()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `SpawningEndDelay` | `protected float SpawningEndDelay` | field |
| `OnSpawningEndedEventDelegate` | `public delegate void OnSpawningEndedEventDelegate();` | method |
| `OnSpawningEndedEventDelegate` | `public delegate void OnSpawningEndedEventDelegate()` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
