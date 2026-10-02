---
title: "CraftingOrderItemVM"
description: "CraftingOrderItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 20 exposed members (3 methods, 16 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs."
---
# CraftingOrderItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingOrderItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs`

## Overview

CraftingOrderItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingOrderItemVM → ViewModel. It exposes 20 public/protected members: 3 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingOrderItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order) the module directory; inheritance chain CraftingOrderItemVM → ViewModel. The surface is property-led (properties 16/20, methods 3/20), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingOrder` | `public CraftingOrder CraftingOrder` | property |
| `CraftingOrderItemVM` | `public CraftingOrderItemVM(CraftingOrder order, Action<CraftingOrderItemVM>onSelection, Func<CraftingAvailableHeroItemVM>getCurrentCraftingHero, List<CraftingStatData>orderStatDatas, CampaignUIHelper.IssueQuestFlags questFlags = CampaignUIHelper.IssueQuestFlags.None)` | constructor |
| `RefreshStats` | `public void RefreshStats()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelectOrder` | `public void ExecuteSelectOrder()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HasAvailableHeroes` | `public bool HasAvailableHeroes` | property |
| `IsDifficultySuitableForHero` | `public bool IsDifficultySuitableForHero` | property |
| `IsQuestOrder` | `public bool IsQuestOrder` | property |
| `OrderPrice` | `public int OrderPrice` | property |
| `OrderDifficultyLabelText` | `public string OrderDifficultyLabelText` | property |
| `OrderDifficultyValueText` | `public string OrderDifficultyValueText` | property |
| `OrderNumberText` | `public string OrderNumberText` | property |
| `OrderWeaponType` | `public string OrderWeaponType` | property |
| `OrderWeaponTypeCode` | `public string OrderWeaponTypeCode` | property |
| `OrderOwnerData` | `public HeroVM OrderOwnerData` | property |
| `DisabledReasonHint` | `public BasicTooltipViewModel DisabledReasonHint` | property |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |
| `MBBindingList` | `public MBBindingList<WeaponAttributeVM>WeaponAttributes` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingOrderPopupVM](../CraftingOrderPopupVM)
