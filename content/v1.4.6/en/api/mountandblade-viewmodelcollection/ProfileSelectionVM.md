---
title: "ProfileSelectionVM"
description: "ProfileSelectionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/ProfileSelection/ProfileSelectionVM.cs."
---
# ProfileSelectionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class ProfileSelectionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/ProfileSelection/ProfileSelectionVM.cs`

## Overview

ProfileSelectionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/ProfileSelection/ProfileSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ProfileSelectionVM → ViewModel. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ProfileSelectionVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection) the module directory; inheritance chain ProfileSelectionVM → ViewModel. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/ProfileSelection/ProfileSelectionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProfileSelectionVM` | `public ProfileSelectionVM(bool isDirectPlayPossible)` | constructor |
| `OnActivate` | `public void OnActivate(bool isDirectPlayPossible)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SelectProfileText` | `public string SelectProfileText` | property |
| `IsPlayEnabled` | `public bool IsPlayEnabled` | property |
| `PlayText` | `public string PlayText` | property |
| `SelectProfileKey` | `public InputKeyItemVM SelectProfileKey` | property |
| `PlayKey` | `public InputKeyItemVM PlayKey` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
