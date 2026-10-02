---
title: "TierFilterTypeVM"
description: "TierFilterTypeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/TierFilterTypeVM.cs."
---
# TierFilterTypeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TierFilterTypeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/TierFilterTypeVM.cs`

## Overview

TierFilterTypeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/TierFilterTypeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TierFilterTypeVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TierFilterTypeVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain TierFilterTypeVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/TierFilterTypeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FilterType` | `public WeaponDesignVM.CraftingPieceTierFilter FilterType` | property |
| `TierFilterTypeVM` | `public TierFilterTypeVM(WeaponDesignVM.CraftingPieceTierFilter filterType, Action<WeaponDesignVM.CraftingPieceTierFilter>onSelect, string tierName)` | constructor |
| `ExecuteSelectTier` | `public void ExecuteSelectTier()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `TierName` | `public string TierName` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
