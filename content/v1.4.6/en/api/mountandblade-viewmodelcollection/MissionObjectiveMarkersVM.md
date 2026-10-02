---
title: "MissionObjectiveMarkersVM"
description: "MissionObjectiveMarkersVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 7 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs."
---
# MissionObjectiveMarkersVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveMarkersVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs`

## Overview

MissionObjectiveMarkersVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionObjectiveMarkersVM → ViewModel. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionObjectiveMarkersVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective) the module directory; inheritance chain MissionObjectiveMarkersVM → ViewModel. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkersVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionObjectiveMarkersVM` | `public MissionObjectiveMarkersVM(MissionObjectiveLogic objectiveLogic, Camera missionCamera)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `UpdateObjective` | `public void UpdateObjective(MissionObjective objective)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `MBBindingList` | `public MBBindingList<MissionObjectiveMarkerVM>Targets` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionObjectiveMarkerVM](../MissionObjectiveMarkerVM)
- [same namespace MissionObjectiveVM](../MissionObjectiveVM)
