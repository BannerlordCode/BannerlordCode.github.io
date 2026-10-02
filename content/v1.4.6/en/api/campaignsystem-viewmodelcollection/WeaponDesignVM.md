---
title: "WeaponDesignVM"
description: "WeaponDesignVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 95 exposed members (24 methods, 65 properties, 1 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs."
---
# WeaponDesignVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## Overview

WeaponDesignVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponDesignVM → ViewModel. It exposes 95 public/protected members: 24 methods, 65 properties, 1 fields, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDesignVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain WeaponDesignVM → ViewModel. The surface is property-led (properties 65/95, methods 24/95), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponDesignVM` | `public WeaponDesignVM(Crafting crafting, ICraftingCampaignBehavior craftingBehavior, Action onRefresh, Action onWeaponCrafted, Func<CraftingAvailableHeroItemVM>getCurrentCraftingHero, Action<CraftingOrder>refreshHeroAvailabilities, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetPieceNewlyUnlocked` | `public void SetPieceNewlyUnlocked(CraftingPiece piece)` | method |
| `SelectPrimaryWeaponClass` | `public void SelectPrimaryWeaponClass(CraftingTemplate template)` | method |
| `ExecuteOpenOrderPopup` | `public void ExecuteOpenOrderPopup()` | method |
| `ExecuteCloseOrderPopup` | `public void ExecuteCloseOrderPopup()` | method |
| `ExecuteOpenOrdersTab` | `public void ExecuteOpenOrdersTab()` | method |
| `ExecuteOpenWeaponClassSelectionPopup` | `public void ExecuteOpenWeaponClassSelectionPopup()` | method |
| `ExecuteOpenFreeBuildTab` | `public void ExecuteOpenFreeBuildTab()` | method |
| `CreateCraftingResultPopup` | `public void CreateCraftingResultPopup()` | method |
| `ExecuteToggleShowOnlyUnlockedPieces` | `public void ExecuteToggleShowOnlyUnlockedPieces()` | method |
| `ExecuteUndo` | `public void ExecuteUndo()` | method |
| `ExecuteRedo` | `public void ExecuteRedo()` | method |
| `ChangeModeIfHeroIsUnavailable` | `public void ChangeModeIfHeroIsUnavailable()` | method |
| `ExecuteBeginHeroHint` | `public void ExecuteBeginHeroHint()` | method |
| `ExecuteEndHeroHint` | `public void ExecuteEndHeroHint()` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `ExecuteChangeScabbardVisibility` | `public void ExecuteChangeScabbardVisibility()` | method |
| `SelectWeapon` | `public void SelectWeapon(ItemObject itemObject)` | method |
| `CanCompleteOrder` | `public bool CanCompleteOrder()` | method |
| `ExecuteFinalizeCrafting` | `public void ExecuteFinalizeCrafting()` | method |
| `RefreshItem` | `public void RefreshItem()` | method |
| `HaveUnlockedAllSelectedPieces` | `public bool HaveUnlockedAllSelectedPieces()` | method |
| `SwitchToPiece` | `public void SwitchToPiece(WeaponDesignElement usedPiece)` | method |
| `MBBindingList` | `public MBBindingList<TierFilterTypeVM>TierFilters` | property |
| `CurrentCraftedWeaponTemplateId` | `public string CurrentCraftedWeaponTemplateId` | property |
| `ChooseOrderText` | `public string ChooseOrderText` | property |
| `ChooseWeaponTypeText` | `public string ChooseWeaponTypeText` | property |
| `CurrentCraftedWeaponTypeText` | `public string CurrentCraftedWeaponTypeText` | property |
| `MBBindingList` | `public MBBindingList<CraftingPieceListVM>PieceLists` | property |
| `SelectedPieceTypeIndex` | `public int SelectedPieceTypeIndex` | property |
| `ShowOnlyUnlockedPieces` | `public bool ShowOnlyUnlockedPieces` | property |
| `MissingPropertyWarningText` | `public string MissingPropertyWarningText` | property |
| `CraftingResultPopup` | `public WeaponDesignResultPopupVM CraftingResultPopup` | property |
| `IsOrderButtonActive` | `public bool IsOrderButtonActive` | property |
| `IsInOrderMode` | `public bool IsInOrderMode` | property |
| `IsInFreeMode` | `public bool IsInFreeMode` | property |
| `FreeModeButtonText` | `public string FreeModeButtonText` | property |
| `ActiveCraftingOrder` | `public CraftingOrderItemVM ActiveCraftingOrder` | property |
| `CraftingOrderPopup` | `public CraftingOrderPopupVM CraftingOrderPopup` | property |
| `WeaponClassSelectionPopup` | `public WeaponClassSelectionPopupVM WeaponClassSelectionPopup` | property |
| `MBBindingList` | `public MBBindingList<CraftingListPropertyItem>PrimaryPropertyList` | property |
| `MBBindingList` | `public MBBindingList<WeaponDesignResultPropertyItemVM>DesignResultPropertyList` | property |
| `SelectorVM` | `public SelectorVM<CraftingSecondaryUsageItemVM>SecondaryUsageSelector` | property |
| `CraftedItemVisual` | `public ItemCollectionElementViewModel CraftedItemVisual` | property |
| `IsInFinalCraftingStage` | `public bool IsInFinalCraftingStage` | property |
| `ItemName` | `public string ItemName` | property |
| `IsScabbardVisible` | `public bool IsScabbardVisible` | property |
| `CurrentWeaponHasScabbard` | `public bool CurrentWeaponHasScabbard` | property |
| `CurrentDifficulty` | `public int CurrentDifficulty` | property |
| `CurrentOrderDifficulty` | `public int CurrentOrderDifficulty` | property |
| `MaxDifficulty` | `public int MaxDifficulty` | property |
| `IsCurrentHeroAtMaxCraftingSkill` | `public bool IsCurrentHeroAtMaxCraftingSkill` | property |
| `CurrentHeroCraftingSkill` | `public int CurrentHeroCraftingSkill` | property |
| `CurrentDifficultyText` | `public string CurrentDifficultyText` | property |
| `CurrentOrderDifficultyText` | `public string CurrentOrderDifficultyText` | property |
| `CurrentCraftingSkillValueText` | `public string CurrentCraftingSkillValueText` | property |
| `DifficultyText` | `public string DifficultyText` | property |
| `DefaultUsageText` | `public string DefaultUsageText` | property |
| `AlternativeUsageText` | `public string AlternativeUsageText` | property |
| `OrderDisabledReasonHint` | `public BasicTooltipViewModel OrderDisabledReasonHint` | property |
| `ShowOnlyUnlockedPiecesHint` | `public HintViewModel ShowOnlyUnlockedPiecesHint` | property |
| `DifficultyExplanationHint` | `public BasicTooltipViewModel DifficultyExplanationHint` | property |
| `ActivePieceList` | `public CraftingPieceListVM ActivePieceList` | property |
| `BladePieceList` | `public CraftingPieceListVM BladePieceList` | property |
| `GuardPieceList` | `public CraftingPieceListVM GuardPieceList` | property |
| `HandlePieceList` | `public CraftingPieceListVM HandlePieceList` | property |
| `PommelPieceList` | `public CraftingPieceListVM PommelPieceList` | property |
| `SelectedBladePiece` | `public CraftingPieceVM SelectedBladePiece` | property |
| `SelectedGuardPiece` | `public CraftingPieceVM SelectedGuardPiece` | property |
| `SelectedHandlePiece` | `public CraftingPieceVM SelectedHandlePiece` | property |
| `SelectedPommelPiece` | `public CraftingPieceVM SelectedPommelPiece` | property |
| `ActivePieceSize` | `public int ActivePieceSize` | property |
| `BladeSize` | `public int BladeSize` | property |
| `GuardSize` | `public int GuardSize` | property |
| `HandleSize` | `public int HandleSize` | property |
| `PommelSize` | `public int PommelSize` | property |
| `ComponentSizeLbl` | `public string ComponentSizeLbl` | property |
| `IsWeaponCivilian` | `public bool IsWeaponCivilian` | property |
| `ScabbardHint` | `public HintViewModel ScabbardHint` | property |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | property |
| `UndoHint` | `public HintViewModel UndoHint` | property |
| `RedoHint` | `public HintViewModel RedoHint` | property |
| `MBBindingList` | `public MBBindingList<ItemFlagVM>WeaponFlagIconsList` | property |
| `CraftingHistory` | `public CraftingHistoryVM CraftingHistory` | property |
| `MAX_SKILL_LEVEL` | `public const int MAX_SKILL_LEVEL` | field |
| `CraftingPieceTierFilter` | `public enum CraftingPieceTierFilter` | property |
| `IComparer` | `public class PieceTierComparer : IComparer<CraftingPieceVM>` | property |
| `IComparer` | `public class TemplateComparer : IComparer<CraftingTemplate>` | property |
| `IComparer` | `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>` | property |
| `CraftingPieceTierFilter` | `public enum CraftingPieceTierFilter` | nested type |
| `IComparer` | `public class PieceTierComparer : IComparer<CraftingPieceVM>` | nested type |
| `IComparer` | `public class TemplateComparer : IComparer<CraftingTemplate>` | nested type |
| `IComparer` | `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
