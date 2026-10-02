---
title: "GameKeyOptionCategoryVM"
description: "GameKeyOptionCategoryVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 13 exposed members (7 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs."
---
# GameKeyOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyOptionCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs`

## Overview

GameKeyOptionCategoryVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameKeyOptionCategoryVM → ViewModel. It exposes 13 public/protected members: 7 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyOptionCategoryVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys) the module directory; inheritance chain GameKeyOptionCategoryVM → ViewModel. The surface is method-led (methods 7/13, properties 5/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameKeyOptionCategoryVM` | `public GameKeyOptionCategoryVM(Action<KeyOptionVM>onKeybindRequest, IEnumerable<string>gameKeyCategories, IEnumerable<int>hiddenGameKeys)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsChanged` | `public bool IsChanged()` | method |
| `ExecuteResetToDefault` | `public void ExecuteResetToDefault()` | method |
| `OnDone` | `public void OnDone()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Cancel` | `public void Cancel()` | method |
| `ApplyValues` | `public void ApplyValues()` | method |
| `Name` | `public string Name` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `ResetText` | `public string ResetText` | property |
| `MBBindingList` | `public MBBindingList<GameKeyGroupVM>GameKeyGroups` | property |
| `MBBindingList` | `public MBBindingList<AuxiliaryKeyGroupVM>AuxiliaryKeyGroups` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameKeyGroupVM](../GameKeyGroupVM)
- [same namespace GameKeyOptionVM](../GameKeyOptionVM)
