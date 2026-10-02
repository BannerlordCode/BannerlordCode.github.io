---
title: "OrderOfBattleFormationFilterSelectorItemVM"
description: "OrderOfBattleFormationFilterSelectorItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs."
---
# OrderOfBattleFormationFilterSelectorItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationFilterSelectorItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs`

## Overview

OrderOfBattleFormationFilterSelectorItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleFormationFilterSelectorItemVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationFilterSelectorItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle) the module directory; inheritance chain OrderOfBattleFormationFilterSelectorItemVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderOfBattleFormationFilterSelectorItemVM` | `public OrderOfBattleFormationFilterSelectorItemVM(FormationFilterType filterType, Action<OrderOfBattleFormationFilterSelectorItemVM>onToggled)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `FilterTypeValue` | `public int FilterTypeValue` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)
