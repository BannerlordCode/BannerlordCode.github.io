---
title: "SavedGameGroupVM"
description: "SavedGameGroupVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/SaveLoad/SavedGameGroupVM.cs."
---
# SavedGameGroupVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGameGroupVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameGroupVM.cs`

## Overview

SavedGameGroupVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SavedGameGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SavedGameGroupVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SavedGameGroupVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.SaveLoad) the module directory; inheritance chain SavedGameGroupVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SavedGameGroupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SavedGameGroupVM` | `public SavedGameGroupVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsFilteredOut` | `public bool IsFilteredOut` | property |
| `MBBindingList` | `public MBBindingList<SavedGameVM>SavedGamesList` | property |
| `IdentifierID` | `public string IdentifierID` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSaveVM](../MapSaveVM)
- [same namespace SavedGameModuleInfoVM](../SavedGameModuleInfoVM)
- [same namespace SavedGamePropertyVM](../SavedGamePropertyVM)
- [same namespace SavedGameVM](../SavedGameVM)
