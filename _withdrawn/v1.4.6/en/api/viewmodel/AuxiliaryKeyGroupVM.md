---
title: "AuxiliaryKeyGroupVM"
description: "AuxiliaryKeyGroupVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys, inheriting ViewModel; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AuxiliaryKeyGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class AuxiliaryKeyGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

AuxiliaryKeyGroupVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is AuxiliaryKeyGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AuxiliaryKeyGroupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`, inheritance chain AuxiliaryKeyGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AuxiliaryKeyGroupVM` | `public AuxiliaryKeyGroupVM(string categoryId, IEnumerable<HotKey>keys, Action<KeyOptionVM>onKeybindRequest, Func<KeyOptionVM, string>getExtraInformation)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnDone` | `public void OnDone()` | method |
| `OnGamepadActiveStateChanged` | `public void OnGamepadActiveStateChanged()` | method |
| `MBBindingList` | `public MBBindingList<AuxiliaryKeyOptionVM>HotKeys` | property |
| `Description` | `public string Description` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AuxiliaryKeyOptionVM](../AuxiliaryKeyOptionVM/)
