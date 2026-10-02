---
title: "MapSiegeProductionMachineVM"
description: "MapSiegeProductionMachineVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 12 exposed members (4 methods, 6 properties, 0 fields). Source: SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs."
---
# MapSiegeProductionMachineVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeProductionMachineVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs`

## Overview

MapSiegeProductionMachineVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSiegeProductionMachineVM → ViewModel. It exposes 12 public/protected members: 4 methods, 6 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegeProductionMachineVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.MapSiege) the module directory; inheritance chain MapSiegeProductionMachineVM → ViewModel. The surface is property-led (properties 6/12, methods 4/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSiegePOIVM](../MapSiegePOIVM)
- [same namespace MapSiegeProductionVM](../MapSiegeProductionVM)
- [same namespace MapSiegeVM](../MapSiegeVM)
- [same namespace PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent)
