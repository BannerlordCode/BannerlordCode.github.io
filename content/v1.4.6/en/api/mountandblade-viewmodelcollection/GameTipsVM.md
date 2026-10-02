---
title: "GameTipsVM"
description: "GameTipsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs."
---
# GameTipsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class GameTipsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs`

## Overview

GameTipsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameTipsVM → ViewModel. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameTipsVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu) the module directory; inheritance chain GameTipsVM → ViewModel. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/GameTipsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EscapeMenuItemVM](../EscapeMenuItemVM)
- [same namespace EscapeMenuVM](../EscapeMenuVM)
