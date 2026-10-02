---
title: "MissionFormationMarkerVM"
description: "MissionFormationMarkerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerVM.cs."
---
# MissionFormationMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionFormationMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerVM.cs`

## Overview

MissionFormationMarkerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionFormationMarkerVM → ViewModel. It exposes 8 public/protected members: 1 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionFormationMarkerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker) the module directory; inheritance chain MissionFormationMarkerVM → ViewModel. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionFormationMarkerVM` | `public MissionFormationMarkerVM(Mission mission)` | constructor |
| `RefreshFormationMarkers` | `public void RefreshFormationMarkers()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant` | property |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts` | property |
| `MBBindingList` | `public MBBindingList<MissionFormationMarkerTargetVM>Targets` | property |
| `IComparer` | `public class FormationMarkerDistanceComparer : IComparer<MissionFormationMarkerTargetVM>` | property |
| `IComparer` | `public class FormationMarkerDistanceComparer : IComparer<MissionFormationMarkerTargetVM>` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionFormationMarkerTargetVM](../MissionFormationMarkerTargetVM)
- [same namespace MissionSiegeEngineMarkerTargetVM](../MissionSiegeEngineMarkerTargetVM)
- [same namespace MissionSiegeEngineMarkerVM](../MissionSiegeEngineMarkerVM)
