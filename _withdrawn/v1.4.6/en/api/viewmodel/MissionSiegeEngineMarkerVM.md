---
title: "MissionSiegeEngineMarkerVM"
description: "MissionSiegeEngineMarkerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker, inheriting ViewModel; 9 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeEngineMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSiegeEngineMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionSiegeEngineMarkerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionSiegeEngineMarkerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 3 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEngineMarkerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`, inheritance chain MissionSiegeEngineMarkerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/9, methods 3/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsInitialized` | `public bool IsInitialized` | property |
| `MissionSiegeEngineMarkerVM` | `public MissionSiegeEngineMarkerVM(Mission mission, Camera missionCamera)` | constructor |
| `InitializeWith` | `public void InitializeWith(List<SiegeWeapon>siegeEngines)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `MBBindingList` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM>Targets` | property |
| `IComparer` | `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>` | property |
| `IComparer` | `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionFormationMarkerTargetVM](../MissionFormationMarkerTargetVM/)
- [same namespace MissionFormationMarkerVM](../MissionFormationMarkerVM/)
- [same namespace MissionSiegeEngineMarkerTargetVM](../MissionSiegeEngineMarkerTargetVM/)
