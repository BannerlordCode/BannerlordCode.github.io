---
title: "WeaponClassSelectionPopupVM"
description: "WeaponClassSelectionPopupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign, inheriting ViewModel; 9 exposed members (5 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeaponClassSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

WeaponClassSelectionPopupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponClassSelectionPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 5 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponClassSelectionPopupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`, inheritance chain WeaponClassSelectionPopupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/9, properties 3/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM/)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM/)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
