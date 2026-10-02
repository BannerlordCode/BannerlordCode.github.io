---
title: "MissionObjectiveVM"
description: "MissionObjectiveVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 18 exposed members (4 methods, 13 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs."
---
# MissionObjectiveVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs`

## Overview

MissionObjectiveVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionObjectiveVM → ViewModel. It exposes 18 public/protected members: 4 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective) the module directory; inheritance chain MissionObjectiveVM → ViewModel. The surface is property-led (properties 13/18, methods 4/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionObjectiveMarkersVM](../MissionObjectiveMarkersVM)
- [same namespace MissionObjectiveMarkerVM](../MissionObjectiveMarkerVM)
