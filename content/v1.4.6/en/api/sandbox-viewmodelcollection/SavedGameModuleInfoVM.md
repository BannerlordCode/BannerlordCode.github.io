---
title: "SavedGameModuleInfoVM"
description: "SavedGameModuleInfoVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 4 exposed members (0 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs."
---
# SavedGameModuleInfoVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGameModuleInfoVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs`

## Overview

SavedGameModuleInfoVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SavedGameModuleInfoVM → ViewModel. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SavedGameModuleInfoVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.SaveLoad) the module directory; inheritance chain SavedGameModuleInfoVM → ViewModel. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SavedGameModuleInfoVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SavedGameModuleInfoVM` | `public SavedGameModuleInfoVM(string definition, string seperator, string value)` | constructor |
| `Definition` | `public string Definition` | property |
| `Seperator` | `public string Seperator` | property |
| `Value` | `public string Value` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSaveVM](../MapSaveVM)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM)
- [same namespace SavedGamePropertyVM](../SavedGamePropertyVM)
- [same namespace SavedGameVM](../SavedGameVM)
