---
title: "MissionObjectiveMarkerVM"
description: "MissionObjectiveMarkerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 10 exposed members (3 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs."
---
# MissionObjectiveMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs`

## Overview

MissionObjectiveMarkerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionObjectiveMarkerVM → ViewModel. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveMarkerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective) the module directory; inheritance chain MissionObjectiveMarkerVM → ViewModel. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionObjectiveMarkerVM` | `public MissionObjectiveMarkerVM(MissionObjectiveTarget target)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateActiveState` | `public void UpdateActiveState()` | method |
| `UpdatePosition` | `public void UpdatePosition(Camera missionCamera)` | method |
| `Distance` | `public int Distance` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsActive` | `public bool IsActive` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `ObjectiveTypeId` | `public string ObjectiveTypeId` | property |
| `ObjectiveName` | `public string ObjectiveName` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionObjectiveMarkersVM](../MissionObjectiveMarkersVM)
- [same namespace MissionObjectiveVM](../MissionObjectiveVM)
