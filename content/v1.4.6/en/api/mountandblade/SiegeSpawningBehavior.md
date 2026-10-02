---
title: "SiegeSpawningBehavior"
description: "SiegeSpawningBehavior: a public class in TaleWorlds.MountAndBlade, inheriting SpawningBehaviorBase; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SiegeSpawningBehavior.cs."
---
# SiegeSpawningBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeSpawningBehavior : SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawningBehavior.cs`

## Overview

SiegeSpawningBehavior lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeSpawningBehavior.cs. It is a public class, implementing/inheriting SpawningBehaviorBase; the inheritance chain is SiegeSpawningBehavior → SpawningBehaviorBase. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeSpawningBehavior is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeSpawningBehavior → SpawningBehaviorBase. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeSpawningBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public override void Initialize(SpawnComponent spawnComponent)` | method |
| `Clear` | `public override void Clear()` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `SpawnAgents` | `protected override void SpawnAgents()` | method |
| `AllowEarlyAgentVisualsDespawning` | `public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)` | method |
| `GetMaximumReSpawnPeriodForPeer` | `public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)` | method |
| `IsRoundInProgress` | `protected override bool IsRoundInProgress()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SpawningBehaviorBase](../SpawningBehaviorBase)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
