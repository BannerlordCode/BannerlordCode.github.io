---
title: "SavedGameModuleInfoVM"
description: "SavedGameModuleInfoVM: a public class in SandBox.ViewModelCollection.SaveLoad, inheriting ViewModel; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SavedGameModuleInfoVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGameModuleInfoVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SavedGameModuleInfoVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SavedGameModuleInfoVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SavedGameModuleInfoVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.SaveLoad`, inheritance chain SavedGameModuleInfoVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SavedGameModuleInfoVM` | `public SavedGameModuleInfoVM(string definition, string seperator, string value)` | constructor |
| `Definition` | `public string Definition` | property |
| `Seperator` | `public string Seperator` | property |
| `Value` | `public string Value` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSaveVM](../MapSaveVM/)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM/)
- [same namespace SavedGamePropertyVM](../SavedGamePropertyVM/)
- [same namespace SavedGameVM](../SavedGameVM/)
