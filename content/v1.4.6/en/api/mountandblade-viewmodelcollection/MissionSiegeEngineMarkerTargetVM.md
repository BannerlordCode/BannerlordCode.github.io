---
title: "MissionSiegeEngineMarkerTargetVM"
description: "MissionSiegeEngineMarkerTargetVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 10 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs."
---
# MissionSiegeEngineMarkerTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSiegeEngineMarkerTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs`

## Overview

MissionSiegeEngineMarkerTargetVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionSiegeEngineMarkerTargetVM → ViewModel. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEngineMarkerTargetVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker) the module directory; inheritance chain MissionSiegeEngineMarkerTargetVM → ViewModel. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionFormationMarkerTargetVM](../MissionFormationMarkerTargetVM)
- [same namespace MissionFormationMarkerVM](../MissionFormationMarkerVM)
- [same namespace MissionSiegeEngineMarkerVM](../MissionSiegeEngineMarkerVM)
