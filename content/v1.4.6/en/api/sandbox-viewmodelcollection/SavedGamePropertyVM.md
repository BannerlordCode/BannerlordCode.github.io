---
title: "SavedGamePropertyVM"
description: "SavedGamePropertyVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 7 exposed members (1 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs."
---
# SavedGamePropertyVM

**Namespace:** `SandBox.ViewModelCollection.SaveLoad`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SavedGamePropertyVM : ViewModel`
**File:** `SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs`

## Overview

SavedGamePropertyVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SavedGamePropertyVM → ViewModel. It exposes 7 public/protected members: 1 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SavedGamePropertyVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.SaveLoad) the module directory; inheritance chain SavedGamePropertyVM → ViewModel. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SaveLoad/SavedGamePropertyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SavedGamePropertyVM` | `public SavedGamePropertyVM(SavedGamePropertyVM.SavedGameProperty type, TextObject value, TextObject hint)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Hint` | `public HintViewModel Hint` | property |
| `PropertyType` | `public string PropertyType` | property |
| `Value` | `public string Value` | property |
| `SavedGameProperty` | `public enum SavedGameProperty` | property |
| `SavedGameProperty` | `public enum SavedGameProperty` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSaveVM](../MapSaveVM)
- [same namespace SavedGameGroupVM](../SavedGameGroupVM)
- [same namespace SavedGameModuleInfoVM](../SavedGameModuleInfoVM)
- [same namespace SavedGameVM](../SavedGameVM)
