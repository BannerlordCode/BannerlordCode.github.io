---
title: "MapSaveVM"
description: "MapSaveVM: a public class in SandBox.ViewModelCollection.SaveLoad, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SaveLoad/MapSaveVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSaveVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSaveVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/MapSaveVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapSaveVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/MapSaveVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapSaveVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSaveVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.SaveLoad`, inheritance chain MapSaveVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/MapSaveVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapSaveVM` | `public MapSaveVM(Action<bool>onActiveStateChange)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `IsActive` | `public bool IsActive` | property |
| `SavingText` | `public string SavingText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM/)
- [same namespace SavedGameModuleInfoVM](../SavedGameModuleInfoVM/)
- [same namespace SavedGamePropertyVM](../SavedGamePropertyVM/)
- [same namespace SavedGameVM](../SavedGameVM/)
