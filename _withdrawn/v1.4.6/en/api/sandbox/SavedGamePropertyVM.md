---
title: "SavedGamePropertyVM"
description: "SavedGamePropertyVM: a public class in SandBox.ViewModelCollection.SaveLoad, inheriting ViewModel; 7 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SavedGamePropertyVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGamePropertyVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SavedGamePropertyVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SavedGamePropertyVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 1 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SavedGamePropertyVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.SaveLoad`, inheritance chain SavedGamePropertyVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SavedGamePropertyVM` | `public SavedGamePropertyVM(SavedGamePropertyVM.SavedGameProperty type, TextObject value, TextObject hint)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Hint` | `public HintViewModel Hint` | property |
| `PropertyType` | `public string PropertyType` | property |
| `Value` | `public string Value` | property |
| `SavedGameProperty` | `public enum SavedGameProperty` | property |
| `SavedGameProperty` | `public enum SavedGameProperty` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSaveVM](../MapSaveVM/)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM/)
- [same namespace SavedGameModuleInfoVM](../SavedGameModuleInfoVM/)
- [same namespace SavedGameVM](../SavedGameVM/)
