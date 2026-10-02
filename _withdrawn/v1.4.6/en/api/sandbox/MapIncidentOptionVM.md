---
title: "MapIncidentOptionVM"
description: "MapIncidentOptionVM: a public class in SandBox.ViewModelCollection.Map.Incidents, inheriting ViewModel; 10 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapIncidentOptionVM

**Namespace:** `SandBox.ViewModelCollection.Map.Incidents`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapIncidentOptionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapIncidentOptionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapIncidentOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapIncidentOptionVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map.Incidents`, inheritance chain MapIncidentOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapIncidentOptionVM` | `public MapIncidentOptionVM(TextObject description, List<TextObject>hints, int index, Action<MapIncidentOptionVM>onSelected, Action<MapIncidentOptionVM>onFocused)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `ExecuteFocus` | `public void ExecuteFocus()` | method |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `IsFocused` | `public bool IsFocused` | property |
| `Description` | `public string Description` | property |
| `Hint` | `public string Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapIncidentVM](../MapIncidentVM/)
