---
title: "GameplayCheatsVM"
description: "GameplayCheatsVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 9 exposed members (4 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs."
---
# GameplayCheatsVM

**Namespace:** `SandBox.ViewModelCollection.Map.Cheat`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class GameplayCheatsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs`

## Overview

GameplayCheatsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameplayCheatsVM → ViewModel. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameplayCheatsVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Cheat) the module directory; inheritance chain GameplayCheatsVM → ViewModel. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameplayCheatsVM` | `public GameplayCheatsVM(Action onClose, IEnumerable<GameplayCheatBase>cheats)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `Title` | `public string Title` | property |
| `ButtonCloseLabel` | `public string ButtonCloseLabel` | property |
| `MBBindingList` | `public MBBindingList<CheatItemBaseVM>Cheats` | property |
| `SetCloseInputKey` | `public void SetCloseInputKey(HotKey hotKey)` | method |
| `CloseInputKey` | `public InputKeyItemVM CloseInputKey` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheatActionItemVM](../CheatActionItemVM)
- [same namespace CheatGroupItemVM](../CheatGroupItemVM)
- [same namespace CheatItemBaseVM](../CheatItemBaseVM)
