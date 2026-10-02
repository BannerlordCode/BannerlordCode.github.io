---
title: "OrderOfBattleFormationClassVM"
description: "OrderOfBattleFormationClassVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 15 exposed members (4 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs."
---
# OrderOfBattleFormationClassVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationClassVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs`

## Overview

OrderOfBattleFormationClassVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleFormationClassVM → ViewModel. It exposes 15 public/protected members: 4 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationClassVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle) the module directory; inheritance chain OrderOfBattleFormationClassVM → ViewModel. The surface is property-led (properties 10/15, methods 4/15), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Class` | `public FormationClass Class` | property |
| `PreviousWeight` | `public int PreviousWeight` | property |
| `OrderOfBattleFormationClassVM` | `public OrderOfBattleFormationClassVM(OrderOfBattleFormationItemVM formationItem, FormationClass formationClass = FormationClass.NumberOfAllFormations)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateTroopCountText` | `public void UpdateTroopCountText()` | method |
| `SetWeightAdjustmentLock` | `public void SetWeightAdjustmentLock(bool isLocked)` | method |
| `UpdateWeightAdjustable` | `public void UpdateWeightAdjustable()` | method |
| `IsAdjustable` | `public bool IsAdjustable` | property |
| `IsLocked` | `public bool IsLocked` | property |
| `IsUnset` | `public bool IsUnset` | property |
| `Weight` | `public int Weight` | property |
| `ShownFormationClass` | `public int ShownFormationClass` | property |
| `TroopCountText` | `public string TroopCountText` | property |
| `LockWeightHint` | `public HintViewModel LockWeightHint` | property |
| `IsWeightHighlightActive` | `public bool IsWeightHighlightActive` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)
- [same namespace OrderOfBattleFormationFilterSelectorItemVM](../OrderOfBattleFormationFilterSelectorItemVM)
