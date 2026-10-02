---
title: "MissionObjectiveMarkersVM"
description: "MissionObjectiveMarkersVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective, inheriting ViewModel; 7 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObjectiveMarkersVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveMarkersVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionObjectiveMarkersVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionObjectiveMarkersVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveMarkersVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`, inheritance chain MissionObjectiveMarkersVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionObjectiveMarkersVM` | `public MissionObjectiveMarkersVM(MissionObjectiveLogic objectiveLogic, Camera missionCamera)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `UpdateObjective` | `public void UpdateObjective(MissionObjective objective)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `MBBindingList` | `public MBBindingList<MissionObjectiveMarkerVM>Targets` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionObjectiveMarkerVM](../MissionObjectiveMarkerVM/)
- [same namespace MissionObjectiveVM](../MissionObjectiveVM/)
