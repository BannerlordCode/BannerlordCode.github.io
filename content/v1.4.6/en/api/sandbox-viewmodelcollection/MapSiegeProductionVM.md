---
title: "MapSiegeProductionVM"
description: "MapSiegeProductionVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 8 exposed members (4 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs."
---
# MapSiegeProductionVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeProductionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs`

## Overview

MapSiegeProductionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSiegeProductionVM → ViewModel. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegeProductionVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.MapSiege) the module directory; inheritance chain MapSiegeProductionVM → ViewModel. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LatestSelectedPOI` | `public MapSiegePOIVM LatestSelectedPOI` | property |
| `MapSiegeProductionVM` | `public MapSiegeProductionVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Update` | `public void Update()` | method |
| `OnMachineSelection` | `public void OnMachineSelection(MapSiegePOIVM poi)` | method |
| `ExecuteDisable` | `public void ExecuteDisable()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `MBBindingList` | `public MBBindingList<MapSiegeProductionMachineVM>PossibleProductionMachines` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSiegePOIVM](../MapSiegePOIVM)
- [same namespace MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM)
- [same namespace MapSiegeVM](../MapSiegeVM)
- [same namespace PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent)
