---
title: "FacegenListItemVM"
description: "FacegenListItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs."
---
# FacegenListItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FacegenListItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs`

## Overview

FacegenListItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FacegenListItemVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FacegenListItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator) the module directory; inheritance chain FacegenListItemVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `FacegenListItemVM` | `public FacegenListItemVM(string imagePath, int index, Action<FacegenListItemVM, bool>setSelected)` | constructor |
| `ImagePath` | `public string ImagePath` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `Index` | `public int Index` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FaceGenPropertyVM](../FaceGenPropertyVM)
- [same namespace FaceGenVM](../FaceGenVM)
