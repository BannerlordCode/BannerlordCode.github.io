---
title: "MissionObjectiveVM"
description: "MissionObjectiveVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective, inheriting ViewModel; 18 exposed members (4 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObjectiveVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionObjectiveVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionObjectiveVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 4 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`, inheritance chain MissionObjectiveVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/18, methods 4/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionObjectiveVM` | `public MissionObjectiveVM(MissionObjectiveLogic objectiveLogic, Camera missionCamera)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `UpdateObjective` | `public void UpdateObjective(MissionObjective objective)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `Title` | `public string Title` | property |
| `Description` | `public string Description` | property |
| `ProgressText` | `public string ProgressText` | property |
| `ObjectiveGiverName` | `public string ObjectiveGiverName` | property |
| `HasObjectiveGiver` | `public bool HasObjectiveGiver` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `HasTitle` | `public bool HasTitle` | property |
| `HasDescription` | `public bool HasDescription` | property |
| `HasProgress` | `public bool HasProgress` | property |
| `CurrentProgress` | `public int CurrentProgress` | property |
| `RequiredProgress` | `public int RequiredProgress` | property |
| `ObjectiveGiverIdentifier` | `public CharacterImageIdentifierVM ObjectiveGiverIdentifier` | property |
| `Markers` | `public MissionObjectiveMarkersVM Markers` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionObjectiveMarkersVM](../MissionObjectiveMarkersVM/)
- [same namespace MissionObjectiveMarkerVM](../MissionObjectiveMarkerVM/)
