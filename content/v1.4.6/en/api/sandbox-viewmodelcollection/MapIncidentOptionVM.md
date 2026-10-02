---
title: "MapIncidentOptionVM"
description: "MapIncidentOptionVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 10 exposed members (5 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs."
---
# MapIncidentOptionVM

**Namespace:** `SandBox.ViewModelCollection.Map.Incidents`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapIncidentOptionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs`

## Overview

MapIncidentOptionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapIncidentOptionVM → ViewModel. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapIncidentOptionVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Incidents) the module directory; inheritance chain MapIncidentOptionVM → ViewModel. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapIncidentVM](../MapIncidentVM)
