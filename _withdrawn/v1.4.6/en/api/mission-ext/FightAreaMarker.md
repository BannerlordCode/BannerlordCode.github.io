---
title: "FightAreaMarker"
description: "FightAreaMarker: a public class in TaleWorlds.MountAndBlade.Objects, inheriting AreaMarker; 3 exposed members (2 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FightAreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FightAreaMarker : AreaMarker`
**File:** `TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FightAreaMarker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is FightAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 3 public/protected members: 2 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FightAreaMarker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects`, inheritance chain FightAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Agent>GetAgentsInRange(Team team, bool humanOnly = true)` | method |
| `IEnumerable` | `public IEnumerable<Agent>GetAgentsInRange(BattleSideEnum side, bool humanOnly = true)` | method |
| `SubAreaIndex` | `public int SubAreaIndex` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AreaMarker](../AreaMarker/)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings/)
- [same namespace AreaMarker](../AreaMarker/)
- [same namespace FlagCapturePoint](../FlagCapturePoint/)
- [same namespace GenericMissionEvent](../GenericMissionEvent/)
