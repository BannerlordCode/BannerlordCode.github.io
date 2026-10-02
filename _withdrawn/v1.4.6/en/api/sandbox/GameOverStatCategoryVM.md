---
title: "GameOverStatCategoryVM"
description: "GameOverStatCategoryVM: a public class in SandBox.ViewModelCollection.GameOver, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameOverStatCategoryVM

**Namespace:** `SandBox.ViewModelCollection.GameOver`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameOverStatCategoryVM : ViewModel`
**File:** `SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GameOverStatCategoryVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameOverStatCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameOverStatCategoryVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.GameOver`, inheritance chain GameOverStatCategoryVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/GameOver/GameOverStatCategoryVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameOverStatCategoryVM` | `public GameOverStatCategoryVM(StatCategory category, Action<GameOverStatCategoryVM>onSelect)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelectCategory` | `public void ExecuteSelectCategory()` | method |
| `Name` | `public string Name` | property |
| `ID` | `public string ID` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `MBBindingList` | `public MBBindingList<GameOverStatItemVM>Items` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameOverStatItemVM](../GameOverStatItemVM/)
- [same namespace GameOverStatsProvider](../GameOverStatsProvider/)
- [same namespace GameOverVM](../GameOverVM/)
- [same namespace StatCategory](../StatCategory/)
