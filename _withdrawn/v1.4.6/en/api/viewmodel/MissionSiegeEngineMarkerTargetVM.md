---
title: "MissionSiegeEngineMarkerTargetVM"
description: "MissionSiegeEngineMarkerTargetVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker, inheriting ViewModel; 10 exposed members (1 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeEngineMarkerTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSiegeEngineMarkerTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionSiegeEngineMarkerTargetVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionSiegeEngineMarkerTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEngineMarkerTargetVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`, inheritance chain MissionSiegeEngineMarkerTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Engine` | `public SiegeWeapon Engine` | property |
| `MissionSiegeEngineMarkerTargetVM` | `public MissionSiegeEngineMarkerTargetVM(SiegeWeapon engine, bool isEnemy)` | constructor |
| `Refresh` | `public void Refresh()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsEnemy` | `public bool IsEnemy` | property |
| `EngineType` | `public string EngineType` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `Distance` | `public float Distance` | property |
| `HitPoints` | `public int HitPoints` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionFormationMarkerTargetVM](../MissionFormationMarkerTargetVM/)
- [same namespace MissionFormationMarkerVM](../MissionFormationMarkerVM/)
- [same namespace MissionSiegeEngineMarkerVM](../MissionSiegeEngineMarkerVM/)
