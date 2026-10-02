---
title: "OrderOfBattleHeroItemVM"
description: "OrderOfBattleHeroItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle, inheriting ViewModel; 24 exposed members (6 methods, 16 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleHeroItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleHeroItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

OrderOfBattleHeroItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleHeroItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 24 public/protected members: 6 methods, 16 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleHeroItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`, inheritance chain OrderOfBattleHeroItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 16/24, methods 6/24), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
