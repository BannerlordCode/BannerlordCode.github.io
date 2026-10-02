---
title: "SmeltingVM"
description: "SmeltingVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs."
---
# SmeltingVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SmeltingVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs`

## Overview

SmeltingVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SmeltingVM → ViewModel. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmeltingVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting) the module directory; inheritance chain SmeltingVM → ViewModel. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SmeltingVM` | `public SmeltingVM(Action updateValuesOnSelectItemAction, Action updateValuesOnSmeltItemAction)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshList` | `public void RefreshList()` | method |
| `TrySmeltingSelectedItems` | `public void TrySmeltingSelectedItems(Hero currentCraftingHero)` | method |
| `SaveItemLockStates` | `public void SaveItemLockStates()` | method |
| `WeaponTypeName` | `public string WeaponTypeName` | property |
| `WeaponTypeCode` | `public string WeaponTypeCode` | property |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem` | property |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected` | property |
| `MBBindingList` | `public MBBindingList<SmeltingItemVM>SmeltableItemList` | property |
| `SelectAllHint` | `public HintViewModel SelectAllHint` | property |
| `SortController` | `public SmeltingSortControllerVM SortController` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SmeltingItemVM](../SmeltingItemVM)
- [same namespace SmeltingSortControllerVM](../SmeltingSortControllerVM)
