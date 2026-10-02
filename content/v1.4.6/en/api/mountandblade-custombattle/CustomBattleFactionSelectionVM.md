---
title: "CustomBattleFactionSelectionVM"
description: "CustomBattleFactionSelectionVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs."
---
# CustomBattleFactionSelectionVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleFactionSelectionVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs`

## Overview

CustomBattleFactionSelectionVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleFactionSelectionVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleFactionSelectionVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem) the module directory; inheritance chain CustomBattleFactionSelectionVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/CustomBattleFactionSelectionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleFactionSelectionVM` | `public CustomBattleFactionSelectionVM(Action<BasicCultureObject>onSelectionChanged)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SelectFaction` | `public void SelectFaction(int index)` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `MBBindingList` | `public MBBindingList<FactionItemVM>Factions` | property |
| `SelectedFactionName` | `public string SelectedFactionName` | property |
| `SelectedItem` | `public FactionItemVM SelectedItem` | property |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterItemVM](../CharacterItemVM)
- [same namespace FactionItemVM](../FactionItemVM)
- [same namespace GameTypeItemVM](../GameTypeItemVM)
- [same namespace MapItemVM](../MapItemVM)
