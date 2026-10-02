---
title: "GameTipsVM"
description: "GameTipsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu, inheriting ViewModel; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTipsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameTipsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

GameTipsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameTipsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameTipsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`, inheritance chain GameTipsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameTipsVM` | `public GameTipsVM(bool isAutoChangeEnabled, bool navigationButtonsEnabled)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecutePreviousTip` | `public void ExecutePreviousTip()` | method |
| `ExecuteNextTip` | `public void ExecuteNextTip()` | method |
| `OnTick` | `public void OnTick(float dt)` | method |
| `CurrentTip` | `public string CurrentTip` | property |
| `GameTipTitle` | `public string GameTipTitle` | property |
| `NavigationButtonsEnabled` | `public bool NavigationButtonsEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EscapeMenuItemVM](../EscapeMenuItemVM/)
- [same namespace EscapeMenuVM](../EscapeMenuVM/)
