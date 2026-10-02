---
title: "CraftingSecondaryUsageItemVM"
description: "CraftingSecondaryUsageItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SelectorItemVM; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs."
---
# CraftingSecondaryUsageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingSecondaryUsageItemVM : SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs`

## Overview

CraftingSecondaryUsageItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is CraftingSecondaryUsageItemVM → SelectorItemVM. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingSecondaryUsageItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting) the module directory; inheritance chain CraftingSecondaryUsageItemVM → SelectorItemVM. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. SelectorItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UsageIndex` | `public int UsageIndex` | property |
| `SelectorIndex` | `public int SelectorIndex` | property |
| `CraftingSecondaryUsageItemVM` | `public CraftingSecondaryUsageItemVM(TextObject name, int index, int usageIndex, SelectorVM<CraftingSecondaryUsageItemVM>parentSelector) : base(name)` | constructor |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM)
- [same namespace CraftingListPropertyItem](../CraftingListPropertyItem)
- [same namespace CraftingPerkVM](../CraftingPerkVM)
