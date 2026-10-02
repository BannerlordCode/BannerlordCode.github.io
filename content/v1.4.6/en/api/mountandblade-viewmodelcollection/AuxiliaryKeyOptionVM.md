---
title: "AuxiliaryKeyOptionVM"
description: "AuxiliaryKeyOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting KeyOptionVM; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs."
---
# AuxiliaryKeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class AuxiliaryKeyOptionVM : KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs`

## Overview

AuxiliaryKeyOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs. It is a public class, implementing/inheriting KeyOptionVM; the inheritance chain is AuxiliaryKeyOptionVM → KeyOptionVM → ViewModel. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AuxiliaryKeyOptionVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys) the module directory; inheritance chain AuxiliaryKeyOptionVM → KeyOptionVM → ViewModel. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentHotKey` | `public HotKey CurrentHotKey` | property |
| `AuxiliaryKeyOptionVM` | `public AuxiliaryKeyOptionVM(HotKey hotKey, Action<KeyOptionVM>onKeybindRequest, Action<AuxiliaryKeyOptionVM, InputKey>onKeySet, Func<AuxiliaryKeyOptionVM, string>getExtraInformation) : base(hotKey.GroupId, hotKey.Id, onKeybindRequest)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Set` | `public override void Set(InputKey newKey)` | method |
| `Update` | `public override void Update()` | method |
| `OnDone` | `public override void OnDone()` | method |
| `ExecuteRevert` | `public override void ExecuteRevert()` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KeyOptionVM](../KeyOptionVM)
- [same namespace AuxiliaryKeyGroupVM](../AuxiliaryKeyGroupVM)
