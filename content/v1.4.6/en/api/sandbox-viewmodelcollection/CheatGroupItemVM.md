---
title: "CheatGroupItemVM"
description: "CheatGroupItemVM: a public class in SandBox.ViewModelCollection, inheriting CheatItemBaseVM; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Cheat/CheatGroupItemVM.cs."
---
# CheatGroupItemVM

**Namespace:** `SandBox.ViewModelCollection.Map.Cheat`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class CheatGroupItemVM : CheatItemBaseVM`
**File:** `SandBox.ViewModelCollection/Map/Cheat/CheatGroupItemVM.cs`

## Overview

CheatGroupItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Cheat/CheatGroupItemVM.cs. It is a public class, implementing/inheriting CheatItemBaseVM; the inheritance chain is CheatGroupItemVM → CheatItemBaseVM → ViewModel. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheatGroupItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Cheat) the module directory; inheritance chain CheatGroupItemVM → CheatItemBaseVM → ViewModel. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Cheat/CheatGroupItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheatGroupItemVM` | `public CheatGroupItemVM(GameplayCheatGroup cheatGroup, Action<CheatGroupItemVM>onSelectCheatGroup)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteAction` | `public override void ExecuteAction()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CheatItemBaseVM](../CheatItemBaseVM)
- [same namespace CheatActionItemVM](../CheatActionItemVM)
- [same namespace CheatItemBaseVM](../CheatItemBaseVM)
- [same namespace GameplayCheatsVM](../GameplayCheatsVM)
