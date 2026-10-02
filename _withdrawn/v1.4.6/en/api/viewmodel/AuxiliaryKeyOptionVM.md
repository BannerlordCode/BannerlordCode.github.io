---
title: "AuxiliaryKeyOptionVM"
description: "AuxiliaryKeyOptionVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys, inheriting KeyOptionVM; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AuxiliaryKeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class AuxiliaryKeyOptionVM : KeyOptionVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

AuxiliaryKeyOptionVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs. It is a public class, implementing/inheriting KeyOptionVM; the inheritance chain is AuxiliaryKeyOptionVM → KeyOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AuxiliaryKeyOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys`, inheritance chain AuxiliaryKeyOptionVM → KeyOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/AuxiliaryKeys/AuxiliaryKeyOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentHotKey` | `public HotKey CurrentHotKey` | property |
| `AuxiliaryKeyOptionVM` | `public AuxiliaryKeyOptionVM(HotKey hotKey, Action<KeyOptionVM>onKeybindRequest, Action<AuxiliaryKeyOptionVM, InputKey>onKeySet, Func<AuxiliaryKeyOptionVM, string>getExtraInformation) : base(hotKey.GroupId, hotKey.Id, onKeybindRequest)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Set` | `public override void Set(InputKey newKey)` | method |
| `Update` | `public override void Update()` | method |
| `OnDone` | `public override void OnDone()` | method |
| `ExecuteRevert` | `public override void ExecuteRevert()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KeyOptionVM](../KeyOptionVM/)
- [same namespace AuxiliaryKeyGroupVM](../AuxiliaryKeyGroupVM/)
