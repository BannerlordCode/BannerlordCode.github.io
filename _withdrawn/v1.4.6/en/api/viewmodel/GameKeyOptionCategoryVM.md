---
title: "GameKeyOptionCategoryVM"
description: "GameKeyOptionCategoryVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys, inheriting ViewModel; 13 exposed members (7 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKeyOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameKeyOptionCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GameKeyOptionCategoryVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameKeyOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 7 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameKeyOptionCategoryVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`, inheritance chain GameKeyOptionCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 7/13, properties 5/13), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionCategoryVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameKeyGroupVM](../GameKeyGroupVM/)
- [same namespace GameKeyOptionVM](../GameKeyOptionVM/)
