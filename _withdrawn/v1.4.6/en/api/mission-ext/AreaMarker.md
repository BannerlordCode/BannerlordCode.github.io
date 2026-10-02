---
title: "AreaMarker"
description: "AreaMarker: a public class in TaleWorlds.MountAndBlade.Objects, inheriting MissionObject, ITrackableBase; 10 exposed members (8 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/AreaMarker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AreaMarker : MissionObject, ITrackableBase`
**File:** `TaleWorlds.MountAndBlade/Objects/AreaMarker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AreaMarker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/AreaMarker.cs. It is a public class, implementing/inheriting MissionObject, ITrackableBase; the inheritance chain is AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 10 public/protected members: 8 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AreaMarker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects`, inheritance chain AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/AreaMarker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Tag` | `public virtual string Tag` | property |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `IsPositionInRange` | `public bool IsPositionInRange(Vec3 position)` | method |
| `List` | `public virtual List<UsableMachine>GetUsableMachinesInRange(string excludeTag = null)` | method |
| `List` | `public virtual List<UsableMachine>GetUsableMachinesWithTagInRange(string tag)` | method |
| `List` | `public virtual List<GameEntity>GetGameEntitiesWithTagInRange(string tag)` | method |
| `GetName` | `public virtual TextObject GetName()` | method |
| `GetPosition` | `public virtual Vec3 GetPosition()` | method |
| `AreaRadius` | `public float AreaRadius` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObject](../MissionObject/)
- [base / interface ITrackableBase](../../core-extra/ITrackableBase/)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings/)
- [same namespace FightAreaMarker](../FightAreaMarker/)
- [same namespace FlagCapturePoint](../FlagCapturePoint/)
- [same namespace GenericMissionEvent](../GenericMissionEvent/)
