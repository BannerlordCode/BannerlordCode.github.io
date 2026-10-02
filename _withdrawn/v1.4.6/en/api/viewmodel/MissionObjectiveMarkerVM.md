---
title: "MissionObjectiveMarkerVM"
description: "MissionObjectiveMarkerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective, inheriting ViewModel; 10 exposed members (3 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObjectiveMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionObjectiveMarkerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionObjectiveMarkerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveMarkerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`, inheritance chain MissionObjectiveMarkerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionObjectiveMarkersVM](../MissionObjectiveMarkersVM/)
- [same namespace MissionObjectiveVM](../MissionObjectiveVM/)
