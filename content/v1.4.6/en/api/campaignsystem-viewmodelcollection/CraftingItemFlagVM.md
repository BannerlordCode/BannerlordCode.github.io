---
title: "CraftingItemFlagVM"
description: "CraftingItemFlagVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ItemFlagVM; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingItemFlagVM.cs."
---
# CraftingItemFlagVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingItemFlagVM : ItemFlagVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingItemFlagVM.cs`

## Overview

CraftingItemFlagVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingItemFlagVM.cs. It is a public class, implementing/inheriting ItemFlagVM; the inheritance chain is CraftingItemFlagVM → ItemFlagVM → ViewModel. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingItemFlagVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain CraftingItemFlagVM → ItemFlagVM → ViewModel. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingItemFlagVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingItemFlagVM` | `public CraftingItemFlagVM(string iconPath, TextObject hint, bool isDisplayed) : base(iconPath, hint)` | constructor |
| `IsDisplayed` | `public bool IsDisplayed` | property |
| `IconPath` | `public string IconPath` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ItemFlagVM](../ItemFlagVM)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
- [same namespace CraftingPieceListVM](../CraftingPieceListVM)
