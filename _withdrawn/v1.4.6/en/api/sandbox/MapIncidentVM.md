---
title: "MapIncidentVM"
description: "MapIncidentVM: a public class in SandBox.ViewModelCollection.Map.Incidents, inheriting ViewModel; 18 exposed members (4 methods, 13 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapIncidentVM

**Namespace:** `SandBox.ViewModelCollection.Map.Incidents`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapIncidentVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapIncidentVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapIncidentVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 4 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapIncidentVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map.Incidents`, inheritance chain MapIncidentVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/18, methods 4/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapIncidentOptionVM](../MapIncidentOptionVM/)
