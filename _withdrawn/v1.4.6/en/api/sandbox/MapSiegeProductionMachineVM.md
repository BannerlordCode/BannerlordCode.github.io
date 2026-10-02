---
title: "MapSiegeProductionMachineVM"
description: "MapSiegeProductionMachineVM: a public class in SandBox.ViewModelCollection.MapSiege, inheriting ViewModel; 12 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegeProductionMachineVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeProductionMachineVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapSiegeProductionMachineVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSiegeProductionMachineVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 4 methods, 6 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegeProductionMachineVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.MapSiege`, inheritance chain MapSiegeProductionMachineVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/12, methods 4/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Engine` | `public SiegeEngineType Engine` | property |
| `MapSiegeProductionMachineVM` | `public MapSiegeProductionMachineVM(SiegeEngineType engineType, int number, Action<MapSiegeProductionMachineVM>onSelection)` | constructor |
| `MapSiegeProductionMachineVM` | `public MapSiegeProductionMachineVM(Action<MapSiegeProductionMachineVM>onSelection, bool isCancel)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelection` | `public void OnSelection()` | method |
| `ExecuteShowTooltip` | `public void ExecuteShowTooltip()` | method |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | method |
| `MachineType` | `public int MachineType` | property |
| `MachineID` | `public string MachineID` | property |
| `NumberOfMachines` | `public int NumberOfMachines` | property |
| `ActionText` | `public string ActionText` | property |
| `IsReserveOption` | `public bool IsReserveOption` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSiegePOIVM](../MapSiegePOIVM/)
- [same namespace MapSiegeProductionVM](../MapSiegeProductionVM/)
- [same namespace MapSiegeVM](../MapSiegeVM/)
- [same namespace PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent/)
