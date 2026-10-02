---
title: "OrderOfBattleFormationClassVM"
description: "OrderOfBattleFormationClassVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle, inheriting ViewModel; 15 exposed members (4 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleFormationClassVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationClassVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderOfBattleFormationClassVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleFormationClassVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 4 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationClassVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`, inheritance chain OrderOfBattleFormationClassVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/15, methods 4/15), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
- [same namespace OrderOfBattleFormationFilterSelectorItemVM](../OrderOfBattleFormationFilterSelectorItemVM/)
