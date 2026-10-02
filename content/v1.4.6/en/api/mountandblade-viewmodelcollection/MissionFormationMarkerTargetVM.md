---
title: "MissionFormationMarkerTargetVM"
description: "MissionFormationMarkerTargetVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 19 exposed members (3 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs."
---
# MissionFormationMarkerTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionFormationMarkerTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs`

## Overview

MissionFormationMarkerTargetVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionFormationMarkerTargetVM → ViewModel. It exposes 19 public/protected members: 3 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionFormationMarkerTargetVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker) the module directory; inheritance chain MissionFormationMarkerTargetVM → ViewModel. The surface is property-led (properties 14/19, methods 3/19), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | property |
| `MissionFormationMarkerTargetVM` | `public MissionFormationMarkerTargetVM(Formation formation)` | constructor |
| `Refresh` | `public void Refresh()` | method |
| `SetTargetedState` | `public void SetTargetedState(bool isFocused, bool isTargetingAFormation)` | method |
| `GetFormationType` | `public static string GetFormationType(FormationClass formationType)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus` | property |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant` | property |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation` | property |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts` | property |
| `FormationType` | `public string FormationType` | property |
| `TeamType` | `public int TeamType` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `Distance` | `public float Distance` | property |
| `DistanceText` | `public string DistanceText` | property |
| `Size` | `public int Size` | property |
| `WSign` | `public int WSign` | property |
| `TeamTypes` | `public enum TeamTypes` | property |
| `TeamTypes` | `public enum TeamTypes` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionFormationMarkerVM](../MissionFormationMarkerVM)
- [same namespace MissionSiegeEngineMarkerTargetVM](../MissionSiegeEngineMarkerTargetVM)
- [same namespace MissionSiegeEngineMarkerVM](../MissionSiegeEngineMarkerVM)
