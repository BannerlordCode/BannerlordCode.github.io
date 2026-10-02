---
title: "MapSiegeVM"
description: "MapSiegeVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 11 exposed members (3 methods, 6 properties, 0 fields). Source: SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs."
---
# MapSiegeVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs`

## Overview

MapSiegeVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSiegeVM → ViewModel. It exposes 11 public/protected members: 3 methods, 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegeVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.MapSiege) the module directory; inheritance chain MapSiegeVM → ViewModel. The surface is property-led (properties 6/11, methods 3/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapSiegeVM` | `public MapSiegeVM(Camera mapCamera, MatrixFrame[]batteringRamFrames, MatrixFrame[]rangedSiegeEngineFrames, MatrixFrame[]towerSiegeEngineFrames, MatrixFrame[]defenderSiegeEngineFrames, MatrixFrame[]breachableWallFrames)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelectionFromScene` | `public void OnSelectionFromScene(MatrixFrame frameOfEngine)` | method |
| `Update` | `public void Update(float mapCameraDistanceValue)` | method |
| `PreparationProgress` | `public float PreparationProgress` | property |
| `IsPreparationsCompleted` | `public bool IsPreparationsCompleted` | property |
| `PreparationTitleText` | `public string PreparationTitleText` | property |
| `ProductionController` | `public MapSiegeProductionVM ProductionController` | property |
| `MBBindingList` | `public MBBindingList<MapSiegePOIVM>PointsOfInterest` | property |
| `IComparer` | `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>` | property |
| `IComparer` | `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSiegePOIVM](../MapSiegePOIVM)
- [same namespace MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM)
- [same namespace MapSiegeProductionVM](../MapSiegeProductionVM)
- [same namespace PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent)
