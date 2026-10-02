---
title: "FactionItemVM"
description: "FactionItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 5 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs."
---
# FactionItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class FactionItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs`

## Overview

FactionItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is FactionItemVM → ViewModel. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FactionItemVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem) the module directory; inheritance chain FactionItemVM → ViewModel. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/FactionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Faction` | `public BasicCultureObject Faction` | property |
| `FactionItemVM` | `public FactionItemVM(BasicCultureObject faction, Action<FactionItemVM>onSelected)` | constructor |
| `Hint` | `public HintViewModel Hint` | property |
| `CultureCode` | `public string CultureCode` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterItemVM](../CharacterItemVM)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [same namespace GameTypeItemVM](../GameTypeItemVM)
- [same namespace MapItemVM](../MapItemVM)
