---
title: "AuxiliaryKeyGroupVM"
description: "AuxiliaryKeyGroupVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (3 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs."
---
# AuxiliaryKeyGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class AuxiliaryKeyGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs`

## Overview

AuxiliaryKeyGroupVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is AuxiliaryKeyGroupVM → ViewModel. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AuxiliaryKeyGroupVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys) the module directory; inheritance chain AuxiliaryKeyGroupVM → ViewModel. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AuxiliaryKeyGroupVM` | `public AuxiliaryKeyGroupVM(string categoryId, IEnumerable<HotKey>keys, Action<KeyOptionVM>onKeybindRequest, Func<KeyOptionVM, string>getExtraInformation)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnDone` | `public void OnDone()` | method |
| `OnGamepadActiveStateChanged` | `public void OnGamepadActiveStateChanged()` | method |
| `MBBindingList` | `public MBBindingList<AuxiliaryKeyOptionVM>HotKeys` | property |
| `Description` | `public string Description` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AuxiliaryKeyOptionVM](../AuxiliaryKeyOptionVM)
