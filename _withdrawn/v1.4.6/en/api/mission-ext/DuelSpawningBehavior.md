---
title: "DuelSpawningBehavior"
description: "DuelSpawningBehavior: a public class in TaleWorlds.MountAndBlade, inheriting SpawningBehaviorBase; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/DuelSpawningBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DuelSpawningBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class DuelSpawningBehavior : SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/DuelSpawningBehavior.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DuelSpawningBehavior lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/DuelSpawningBehavior.cs. It is a public class, implementing/inheriting SpawningBehaviorBase; the inheritance chain is DuelSpawningBehavior → SpawningBehaviorBase. It exposes 6 public/protected members: 6 methods. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DuelSpawningBehavior lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DuelSpawningBehavior → SpawningBehaviorBase. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/DuelSpawningBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public override void Initialize(SpawnComponent spawnComponent)` | method |
| `Clear` | `public override void Clear()` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `SpawnAgents` | `protected override void SpawnAgents()` | method |
| `AllowEarlyAgentVisualsDespawning` | `public override bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)` | method |
| `IsRoundInProgress` | `protected override bool IsRoundInProgress()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SpawningBehaviorBase](../SpawningBehaviorBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
