---
title: "OrderOfBattleFormationFilterSelectorItemVM"
description: "OrderOfBattleFormationFilterSelectorItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleFormationFilterSelectorItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationFilterSelectorItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderOfBattleFormationFilterSelectorItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleFormationFilterSelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationFilterSelectorItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`, inheritance chain OrderOfBattleFormationFilterSelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationFilterSelectorItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderOfBattleFormationFilterSelectorItemVM` | `public OrderOfBattleFormationFilterSelectorItemVM(FormationFilterType filterType, Action<OrderOfBattleFormationFilterSelectorItemVM>onToggled)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `FilterTypeValue` | `public int FilterTypeValue` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
