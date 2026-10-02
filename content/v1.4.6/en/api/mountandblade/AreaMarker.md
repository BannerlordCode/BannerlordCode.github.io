---
title: "AreaMarker"
description: "AreaMarker: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject, ITrackableBase; 10 exposed members (8 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/Objects/AreaMarker.cs."
---
# AreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AreaMarker : MissionObject, ITrackableBase`
**File:** `TaleWorlds.MountAndBlade/Objects/AreaMarker.cs`

## Overview

AreaMarker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/AreaMarker.cs. It is a public class, implementing/inheriting MissionObject, ITrackableBase; the inheritance chain is AreaMarker → MissionObject → ScriptComponentBehavior. It exposes 10 public/protected members: 8 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AreaMarker is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects) the module directory; inheritance chain AreaMarker → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/AreaMarker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionObject](../MissionObject)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings)
- [same namespace FightAreaMarker](../FightAreaMarker)
- [same namespace FlagCapturePoint](../FlagCapturePoint)
- [same namespace GenericMissionEvent](../GenericMissionEvent)
