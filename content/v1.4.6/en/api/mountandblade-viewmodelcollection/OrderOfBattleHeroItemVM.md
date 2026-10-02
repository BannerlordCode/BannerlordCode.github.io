---
title: "OrderOfBattleHeroItemVM"
description: "OrderOfBattleHeroItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 24 exposed members (6 methods, 16 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs."
---
# OrderOfBattleHeroItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleHeroItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs`

## Overview

OrderOfBattleHeroItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleHeroItemVM → ViewModel. It exposes 24 public/protected members: 6 methods, 16 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleHeroItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle) the module directory; inheritance chain OrderOfBattleHeroItemVM → ViewModel. The surface is property-led (properties 16/24, methods 6/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerOfHero` | `public ItemObject BannerOfHero` | property |
| `IsAssignedBeforePlayer` | `public bool IsAssignedBeforePlayer` | property |
| `InitialFormation` | `public Formation InitialFormation` | property |
| `InitialFormationItem` | `public OrderOfBattleFormationItemVM InitialFormationItem` | property |
| `CurrentAssignedFormationItem` | `public OrderOfBattleFormationItemVM CurrentAssignedFormationItem` | property |
| `OrderOfBattleHeroItemVM` | `public OrderOfBattleHeroItemVM()` | constructor |
| `OrderOfBattleHeroItemVM` | `public OrderOfBattleHeroItemVM(Agent agent)` | constructor |
| `SetInitialFormation` | `public void SetInitialFormation(OrderOfBattleFormationItemVM formation)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnAssignmentRemoved` | `public void OnAssignmentRemoved()` | method |
| `RefreshInformation` | `public void RefreshInformation()` | method |
| `RefreshAssignmentInfo` | `public void RefreshAssignmentInfo()` | method |
| `SetIsPreAssigned` | `public void SetIsPreAssigned(bool isPreAssigned)` | method |
| `MismatchedAssignmentDescriptionText` | `public string MismatchedAssignmentDescriptionText` | property |
| `IsAssignedToAFormation` | `public bool IsAssignedToAFormation` | property |
| `IsLeadingAFormation` | `public bool IsLeadingAFormation` | property |
| `HasMismatchedAssignment` | `public bool HasMismatchedAssignment` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `IsShown` | `public bool IsShown` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | property |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | property |
| `IsHighlightActive` | `public bool IsHighlightActive` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)
