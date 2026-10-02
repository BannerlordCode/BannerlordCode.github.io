---
title: "MapSiegeProductionVM"
description: "MapSiegeProductionVM: a public class in SandBox.ViewModelCollection.MapSiege, inheriting ViewModel; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegeProductionVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeProductionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapSiegeProductionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSiegeProductionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegeProductionVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.MapSiege`, inheritance chain MapSiegeProductionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSiegePOIVM](../MapSiegePOIVM/)
- [same namespace MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM/)
- [same namespace MapSiegeVM](../MapSiegeVM/)
- [same namespace PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent/)
