---
title: "FightAreaMarker"
description: "FightAreaMarker: a public class in TaleWorlds.MountAndBlade, inheriting AreaMarker; 3 exposed members (2 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs."
---
# FightAreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FightAreaMarker : AreaMarker`
**File:** `TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs`

## Overview

FightAreaMarker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is FightAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior. It exposes 3 public/protected members: 2 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FightAreaMarker is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects) the module directory; inheritance chain FightAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Agent>GetAgentsInRange(Team team, bool humanOnly = true)` | method |
| `IEnumerable` | `public IEnumerable<Agent>GetAgentsInRange(BattleSideEnum side, bool humanOnly = true)` | method |
| `SubAreaIndex` | `public int SubAreaIndex` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AreaMarker](../AreaMarker)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings)
- [same namespace AreaMarker](../AreaMarker)
- [same namespace FlagCapturePoint](../FlagCapturePoint)
- [same namespace GenericMissionEvent](../GenericMissionEvent)
