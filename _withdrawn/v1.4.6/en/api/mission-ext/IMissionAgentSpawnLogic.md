---
title: "IMissionAgentSpawnLogic"
description: "IMissionAgentSpawnLogic: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 9 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionAgentSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionAgentSpawnLogic : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IMissionAgentSpawnLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is IMissionAgentSpawnLogic → IMissionBehavior. It exposes 9 public/protected members: 8 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMissionAgentSpawnLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IMissionAgentSpawnLogic → IMissionBehavior. The surface is method-led (methods 8/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerSide` | `BattleSideEnum PlayerSide` | property |
| `StartSpawner` | `void StartSpawner(BattleSideEnum side);` | method |
| `StopSpawner` | `void StopSpawner(BattleSideEnum side);` | method |
| `IsSideSpawnEnabled` | `bool IsSideSpawnEnabled(BattleSideEnum side);` | method |
| `IsSideDepleted` | `bool IsSideDepleted(BattleSideEnum side);` | method |
| `GetReinforcementInterval` | `float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None);` | method |
| `IEnumerable` | `IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side);` | method |
| `GetSpawnHorses` | `bool GetSpawnHorses(BattleSideEnum side);` | method |
| `GetNumberOfPlayerControllableTroops` | `int GetNumberOfPlayerControllableTroops();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
