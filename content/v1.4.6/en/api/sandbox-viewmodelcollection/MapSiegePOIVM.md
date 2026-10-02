---
title: "MapSiegePOIVM"
description: "MapSiegePOIVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 31 exposed members (7 methods, 21 properties, 0 fields). Source: SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs."
---
# MapSiegePOIVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegePOIVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs`

## Overview

MapSiegePOIVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSiegePOIVM → ViewModel. It exposes 31 public/protected members: 7 methods, 21 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegePOIVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.MapSiege) the module directory; inheritance chain MapSiegePOIVM → ViewModel. The surface is property-led (properties 21/31, methods 7/31), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public MapSiegePOIVM.POIType Type` | property |
| `MachineIndex` | `public int MachineIndex` | property |
| `LatestW` | `public float LatestW` | property |
| `Machine` | `public SiegeEvent.SiegeEngineConstructionProgress Machine` | property |
| `MapSceneLocationFrame` | `public MatrixFrame MapSceneLocationFrame` | property |
| `MapSiegePOIVM` | `public MapSiegePOIVM(MapSiegePOIVM.POIType type, MatrixFrame mapSceneLocation, Camera mapCamera, int machineIndex, Action<MapSiegePOIVM>onSelection)` | constructor |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `RefreshDistanceValue` | `public void RefreshDistanceValue(float newDistance)` | method |
| `RefreshPosition` | `public void RefreshPosition()` | method |
| `RefreshBinding` | `public void RefreshBinding()` | method |
| `ExecuteShowTooltip` | `public void ExecuteShowTooltip()` | method |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | method |
| `Position` | `public Vec2 Position` | property |
| `SidePrimaryColor` | `public Color SidePrimaryColor` | property |
| `SideSecondaryColor` | `public Color SideSecondaryColor` | property |
| `QueueIndex` | `public int QueueIndex` | property |
| `MachineType` | `public int MachineType` | property |
| `CurrentHitpoints` | `public float CurrentHitpoints` | property |
| `MaxHitpoints` | `public float MaxHitpoints` | property |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI` | property |
| `IsFireVersion` | `public bool IsFireVersion` | property |
| `IsInVisibleRange` | `public bool IsInVisibleRange` | property |
| `IsConstructing` | `public bool IsConstructing` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HasItem` | `public bool HasItem` | property |
| `IsInside` | `public bool IsInside` | property |
| `POIType` | `public enum POIType` | property |
| `MachineTypes` | `public enum MachineTypes` | property |
| `POIType` | `public enum POIType` | nested type |
| `MachineTypes` | `public enum MachineTypes` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM)
- [same namespace MapSiegeProductionVM](../MapSiegeProductionVM)
- [same namespace MapSiegeVM](../MapSiegeVM)
- [same namespace PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent)
