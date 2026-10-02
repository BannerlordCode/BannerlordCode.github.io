---
title: "SiegeSpawnFrameBehavior"
description: "SiegeSpawnFrameBehavior: a public class in TaleWorlds.MountAndBlade, inheriting SpawnFrameBehaviorBase; 7 exposed members (3 methods, 0 properties, 4 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeSpawnFrameBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeSpawnFrameBehavior : SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeSpawnFrameBehavior lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs. It is a public class, implementing/inheriting SpawnFrameBehaviorBase; the inheritance chain is SiegeSpawnFrameBehavior → SpawnFrameBehaviorBase. It exposes 7 public/protected members: 3 methods, 4 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeSpawnFrameBehavior lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SiegeSpawnFrameBehavior → SpawnFrameBehaviorBase. The surface is method-led (methods 3/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public override void Initialize()` | method |
| `GetSpawnFrame` | `public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)` | method |
| `OnFlagDeactivated` | `public void OnFlagDeactivated(FlagCapturePoint flag)` | method |
| `SpawnZoneTagAffix` | `public const string SpawnZoneTagAffix` | field |
| `SpawnZoneEnableTagAffix` | `public const string SpawnZoneEnableTagAffix` | field |
| `SpawnZoneDisableTagAffix` | `public const string SpawnZoneDisableTagAffix` | field |
| `StartingActiveSpawnZoneIndex` | `public const int StartingActiveSpawnZoneIndex` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SpawnFrameBehaviorBase](../SpawnFrameBehaviorBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
