---
title: "OrderOfBattleFormationItemVM"
description: "OrderOfBattleFormationItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 54 exposed members (17 methods, 36 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs."
---
# OrderOfBattleFormationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs`

## Overview

OrderOfBattleFormationItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is OrderOfBattleFormationItemVM → ViewModel. It exposes 54 public/protected members: 17 methods, 36 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderOfBattleFormationItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle) the module directory; inheritance chain OrderOfBattleFormationItemVM → ViewModel. The surface is property-led (properties 36/54, methods 17/54), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | property |
| `OrderOfBattleFormationItemVM` | `public OrderOfBattleFormationItemVM(Camera missionCamera)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public void Tick()` | method |
| `RefreshFormation` | `public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)` | method |
| `MakeMarkerWorldPositionDirty` | `public void MakeMarkerWorldPositionDirty()` | method |
| `OnSizeChanged` | `public void OnSizeChanged()` | method |
| `GetOrderOfBattleClass` | `public DeploymentFormationClass GetOrderOfBattleClass()` | method |
| `UpdateAdjustable` | `public void UpdateAdjustable()` | method |
| `HasFilter` | `public bool HasFilter(FormationFilterType filter)` | method |
| `HasOnlyOneClass` | `public bool HasOnlyOneClass()` | method |
| `HasClass` | `public bool HasClass(FormationClass formationClass)` | method |
| `HasClasses` | `public bool HasClasses(FormationClass[]formationClasses)` | method |
| `UnassignCaptain` | `public void UnassignCaptain()` | method |
| `ExecuteAcceptCaptain` | `public void ExecuteAcceptCaptain()` | method |
| `ExecuteAcceptHeroTroops` | `public void ExecuteAcceptHeroTroops()` | method |
| `OnHeroSelectionUpdated` | `public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)` | method |
| `AddHeroTroop` | `public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)` | method |
| `RemoveHeroTroop` | `public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `HasFormation` | `public bool HasFormation` | property |
| `HasCaptain` | `public bool HasCaptain` | property |
| `HasHeroTroops` | `public bool HasHeroTroops` | property |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer` | property |
| `IsSelectable` | `public bool IsSelectable` | property |
| `IsAdjustable` | `public bool IsAdjustable` | property |
| `IsMarkerShown` | `public bool IsMarkerShown` | property |
| `IsBeingFocused` | `public bool IsBeingFocused` | property |
| `IsAcceptingCaptain` | `public bool IsAcceptingCaptain` | property |
| `IsAcceptingHeroTroops` | `public bool IsAcceptingHeroTroops` | property |
| `IsHeroTroopsOverflowing` | `public bool IsHeroTroopsOverflowing` | property |
| `IsClassSelectionActive` | `public bool IsClassSelectionActive` | property |
| `TitleText` | `public string TitleText` | property |
| `FormationIsEmptyText` | `public string FormationIsEmptyText` | property |
| `OverflowHeroTroopCountText` | `public string OverflowHeroTroopCountText` | property |
| `TroopCount` | `public int TroopCount` | property |
| `BannerBearerCount` | `public int BannerBearerCount` | property |
| `OrderOfBattleFormationClassInt` | `public int OrderOfBattleFormationClassInt` | property |
| `WSign` | `public int WSign` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `Captain` | `public OrderOfBattleHeroItemVM Captain` | property |
| `MBBindingList` | `public MBBindingList<OrderOfBattleHeroItemVM>HeroTroops` | property |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationClassVM>Classes` | property |
| `SelectorVM` | `public SelectorVM<OrderOfBattleFormationClassSelectorItemVM>FormationClassSelector` | property |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationFilterSelectorItemVM>FilterItems` | property |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | property |
| `BannerBearerTooltip` | `public BasicTooltipViewModel BannerBearerTooltip` | property |
| `CantAdjustHint` | `public HintViewModel CantAdjustHint` | property |
| `CaptainSlotHint` | `public HintViewModel CaptainSlotHint` | property |
| `HeroTroopSlotHint` | `public HintViewModel HeroTroopSlotHint` | property |
| `AssignCaptainHint` | `public HintViewModel AssignCaptainHint` | property |
| `AssignHeroTroopHint` | `public HintViewModel AssignHeroTroopHint` | property |
| `IsCaptainSlotHighlightActive` | `public bool IsCaptainSlotHighlightActive` | property |
| `IsTypeSelectionHighlightActive` | `public bool IsTypeSelectionHighlightActive` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [same namespace OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [same namespace OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM)
- [same namespace OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)
