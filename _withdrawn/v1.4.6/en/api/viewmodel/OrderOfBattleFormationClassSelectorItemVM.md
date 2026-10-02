---
title: "OrderOfBattleFormationClassSelectorItemVM"
description: "OrderOfBattleFormationClassSelectorItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle, inheriting SelectorItemVM; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassSelectorItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleFormationClassSelectorItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationClassSelectorItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassSelectorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderOfBattleFormationClassSelectorItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassSelectorItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is OrderOfBattleFormationClassSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationClassSelectorItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`, inheritance chain OrderOfBattleFormationClassSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassSelectorItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OrderOfBattleFormationClassSelectorItemVM` | `public OrderOfBattleFormationClassSelectorItemVM(DeploymentFormationClass formationClass) : base(formationClass.ToString())` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `FormationClassInt` | `public int FormationClassInt` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorItemVM](../SelectorItemVM/)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
- [same namespace OrderOfBattleFormationFilterSelectorItemVM](../OrderOfBattleFormationFilterSelectorItemVM/)
