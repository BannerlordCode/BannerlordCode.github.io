---
title: "GameKeyGroupVM"
description: "GameKeyGroupVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys, inheriting ViewModel; 8 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKeyGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyGroupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GameKeyGroupVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameKeyGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyGroupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`, inheritance chain GameKeyGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameKeyGroupVM` | `public GameKeyGroupVM(string categoryId, IEnumerable<GameKey>keys, Action<KeyOptionVM>onKeybindRequest, Action<int, InputKey>setAllKeysOfId, Func<KeyOptionVM, string>getExtraInformation)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnDone` | `public void OnDone()` | method |
| `OnGamepadActiveStateChanged` | `public void OnGamepadActiveStateChanged()` | method |
| `Cancel` | `public void Cancel()` | method |
| `ApplyValues` | `public void ApplyValues()` | method |
| `MBBindingList` | `public MBBindingList<GameKeyOptionVM>GameKeys` | property |
| `Description` | `public string Description` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameKeyOptionCategoryVM](../GameKeyOptionCategoryVM/)
- [same namespace GameKeyOptionVM](../GameKeyOptionVM/)
