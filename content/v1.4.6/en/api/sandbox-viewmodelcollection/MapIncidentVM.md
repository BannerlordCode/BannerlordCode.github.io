---
title: "MapIncidentVM"
description: "MapIncidentVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 18 exposed members (4 methods, 13 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs."
---
# MapIncidentVM

**Namespace:** `SandBox.ViewModelCollection.Map.Incidents`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapIncidentVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs`

## Overview

MapIncidentVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapIncidentVM → ViewModel. It exposes 18 public/protected members: 4 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapIncidentVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Incidents) the module directory; inheritance chain MapIncidentVM → ViewModel. The surface is property-led (properties 13/18, methods 4/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapIncidentVM` | `public MapIncidentVM(Incident incident, Action onClose)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | method |
| `CanConfirm` | `public bool CanConfirm` | property |
| `HasFocusedOption` | `public bool HasFocusedOption` | property |
| `HasSelectedOption` | `public bool HasSelectedOption` | property |
| `Title` | `public string Title` | property |
| `Description` | `public string Description` | property |
| `ConfirmText` | `public string ConfirmText` | property |
| `IncidentType` | `public string IncidentType` | property |
| `ActiveHint` | `public string ActiveHint` | property |
| `ConfirmHint` | `public HintViewModel ConfirmHint` | property |
| `FocusedOption` | `public MapIncidentOptionVM FocusedOption` | property |
| `SelectedOption` | `public MapIncidentOptionVM SelectedOption` | property |
| `MBBindingList` | `public MBBindingList<MapIncidentOptionVM>Options` | property |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapIncidentOptionVM](../MapIncidentOptionVM)
