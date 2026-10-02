---
title: "WeaponClassSelectionPopupVM"
description: "WeaponClassSelectionPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (5 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs."
---
# WeaponClassSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs`

## Overview

WeaponClassSelectionPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponClassSelectionPopupVM → ViewModel. It exposes 9 public/protected members: 5 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponClassSelectionPopupVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain WeaponClassSelectionPopupVM → ViewModel. The surface is method-led (methods 5/9, properties 3/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponClassSelectionPopupVM` | `public WeaponClassSelectionPopupVM(ICraftingCampaignBehavior craftingBehavior, List<CraftingTemplate>templatesList, Action<int>onSelect, Func<CraftingTemplate, int>getUnlockedPiecesCount)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateNewlyUnlockedPiecesCount` | `public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece>newlyUnlockedPieces)` | method |
| `ExecuteSelectWeaponClass` | `public void ExecuteSelectWeaponClass(int index)` | method |
| `ExecuteClosePopup` | `public void ExecuteClosePopup()` | method |
| `ExecuteOpenPopup` | `public void ExecuteOpenPopup()` | method |
| `PopupHeader` | `public string PopupHeader` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `MBBindingList` | `public MBBindingList<WeaponClassVM>WeaponClasses` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
