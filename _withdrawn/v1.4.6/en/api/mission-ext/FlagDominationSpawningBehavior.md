---
title: "FlagDominationSpawningBehavior"
description: "FlagDominationSpawningBehavior: a public class in TaleWorlds.MountAndBlade, inheriting SpawningBehaviorBase; 11 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FlagDominationSpawningBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagDominationSpawningBehavior : SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FlagDominationSpawningBehavior lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs. It is a public class, implementing/inheriting SpawningBehaviorBase; the inheritance chain is FlagDominationSpawningBehavior → SpawningBehaviorBase. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FlagDominationSpawningBehavior lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain FlagDominationSpawningBehavior → SpawningBehaviorBase. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FlagDominationSpawningBehavior` | `public FlagDominationSpawningBehavior()` | constructor |
| `Initialize` | `public override void Initialize(SpawnComponent spawnComponent)` | method |
| `Clear` | `public override void Clear()` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `RequestStartSpawnSession` | `public override void RequestStartSpawnSession()` | method |
| `SpawnAgents` | `protected override void SpawnAgents()` | method |
| `AllowEarlyAgentVisualsDespawning` | `public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)` | method |
| `IsRoundInProgress` | `protected override bool IsRoundInProgress()` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `SpawnBotInBotFormation` | `protected void SpawnBotInBotFormation(int visualsIndex, Team agentTeam, BasicCultureObject cultureLimit, BasicCharacterObject character, Formation formation)` | method |
| `SpawnBotVisualsInPlayerFormation` | `protected void SpawnBotVisualsInPlayerFormation(MissionPeer missionPeer, int visualsIndex, Team agentTeam, BasicCultureObject cultureLimit, string troopName, Formation formation, bool updateExistingAgentVisuals, int totalCount, IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>>alternativeEquipments)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SpawningBehaviorBase](../SpawningBehaviorBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
