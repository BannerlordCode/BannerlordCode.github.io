---
title: "WeaponDesignVM"
description: "WeaponDesignVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 95 个（方法 24、属性 65、字段 1）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs。"
---
# WeaponDesignVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## 概述

WeaponDesignVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 WeaponDesignVM → ViewModel。public/protected 成员共 95 个：24 方法、65 属性、1 字段、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponDesignVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 WeaponDesignVM → ViewModel。成员构成以属性为主（属性 65/95，方法 24/95），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponDesignVM` | `public WeaponDesignVM(Crafting crafting, ICraftingCampaignBehavior craftingBehavior, Action onRefresh, Action onWeaponCrafted, Func<CraftingAvailableHeroItemVM>getCurrentCraftingHero, Action<CraftingOrder>refreshHeroAvailabilities, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `SetPieceNewlyUnlocked` | `public void SetPieceNewlyUnlocked(CraftingPiece piece)` | 方法 |
| `SelectPrimaryWeaponClass` | `public void SelectPrimaryWeaponClass(CraftingTemplate template)` | 方法 |
| `ExecuteOpenOrderPopup` | `public void ExecuteOpenOrderPopup()` | 方法 |
| `ExecuteCloseOrderPopup` | `public void ExecuteCloseOrderPopup()` | 方法 |
| `ExecuteOpenOrdersTab` | `public void ExecuteOpenOrdersTab()` | 方法 |
| `ExecuteOpenWeaponClassSelectionPopup` | `public void ExecuteOpenWeaponClassSelectionPopup()` | 方法 |
| `ExecuteOpenFreeBuildTab` | `public void ExecuteOpenFreeBuildTab()` | 方法 |
| `CreateCraftingResultPopup` | `public void CreateCraftingResultPopup()` | 方法 |
| `ExecuteToggleShowOnlyUnlockedPieces` | `public void ExecuteToggleShowOnlyUnlockedPieces()` | 方法 |
| `ExecuteUndo` | `public void ExecuteUndo()` | 方法 |
| `ExecuteRedo` | `public void ExecuteRedo()` | 方法 |
| `ChangeModeIfHeroIsUnavailable` | `public void ChangeModeIfHeroIsUnavailable()` | 方法 |
| `ExecuteBeginHeroHint` | `public void ExecuteBeginHeroHint()` | 方法 |
| `ExecuteEndHeroHint` | `public void ExecuteEndHeroHint()` | 方法 |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | 方法 |
| `ExecuteChangeScabbardVisibility` | `public void ExecuteChangeScabbardVisibility()` | 方法 |
| `SelectWeapon` | `public void SelectWeapon(ItemObject itemObject)` | 方法 |
| `CanCompleteOrder` | `public bool CanCompleteOrder()` | 方法 |
| `ExecuteFinalizeCrafting` | `public void ExecuteFinalizeCrafting()` | 方法 |
| `RefreshItem` | `public void RefreshItem()` | 方法 |
| `HaveUnlockedAllSelectedPieces` | `public bool HaveUnlockedAllSelectedPieces()` | 方法 |
| `SwitchToPiece` | `public void SwitchToPiece(WeaponDesignElement usedPiece)` | 方法 |
| `MBBindingList` | `public MBBindingList<TierFilterTypeVM>TierFilters` | 属性 |
| `CurrentCraftedWeaponTemplateId` | `public string CurrentCraftedWeaponTemplateId` | 属性 |
| `ChooseOrderText` | `public string ChooseOrderText` | 属性 |
| `ChooseWeaponTypeText` | `public string ChooseWeaponTypeText` | 属性 |
| `CurrentCraftedWeaponTypeText` | `public string CurrentCraftedWeaponTypeText` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingPieceListVM>PieceLists` | 属性 |
| `SelectedPieceTypeIndex` | `public int SelectedPieceTypeIndex` | 属性 |
| `ShowOnlyUnlockedPieces` | `public bool ShowOnlyUnlockedPieces` | 属性 |
| `MissingPropertyWarningText` | `public string MissingPropertyWarningText` | 属性 |
| `CraftingResultPopup` | `public WeaponDesignResultPopupVM CraftingResultPopup` | 属性 |
| `IsOrderButtonActive` | `public bool IsOrderButtonActive` | 属性 |
| `IsInOrderMode` | `public bool IsInOrderMode` | 属性 |
| `IsInFreeMode` | `public bool IsInFreeMode` | 属性 |
| `FreeModeButtonText` | `public string FreeModeButtonText` | 属性 |
| `ActiveCraftingOrder` | `public CraftingOrderItemVM ActiveCraftingOrder` | 属性 |
| `CraftingOrderPopup` | `public CraftingOrderPopupVM CraftingOrderPopup` | 属性 |
| `WeaponClassSelectionPopup` | `public WeaponClassSelectionPopupVM WeaponClassSelectionPopup` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingListPropertyItem>PrimaryPropertyList` | 属性 |
| `MBBindingList` | `public MBBindingList<WeaponDesignResultPropertyItemVM>DesignResultPropertyList` | 属性 |
| `SelectorVM` | `public SelectorVM<CraftingSecondaryUsageItemVM>SecondaryUsageSelector` | 属性 |
| `CraftedItemVisual` | `public ItemCollectionElementViewModel CraftedItemVisual` | 属性 |
| `IsInFinalCraftingStage` | `public bool IsInFinalCraftingStage` | 属性 |
| `ItemName` | `public string ItemName` | 属性 |
| `IsScabbardVisible` | `public bool IsScabbardVisible` | 属性 |
| `CurrentWeaponHasScabbard` | `public bool CurrentWeaponHasScabbard` | 属性 |
| `CurrentDifficulty` | `public int CurrentDifficulty` | 属性 |
| `CurrentOrderDifficulty` | `public int CurrentOrderDifficulty` | 属性 |
| `MaxDifficulty` | `public int MaxDifficulty` | 属性 |
| `IsCurrentHeroAtMaxCraftingSkill` | `public bool IsCurrentHeroAtMaxCraftingSkill` | 属性 |
| `CurrentHeroCraftingSkill` | `public int CurrentHeroCraftingSkill` | 属性 |
| `CurrentDifficultyText` | `public string CurrentDifficultyText` | 属性 |
| `CurrentOrderDifficultyText` | `public string CurrentOrderDifficultyText` | 属性 |
| `CurrentCraftingSkillValueText` | `public string CurrentCraftingSkillValueText` | 属性 |
| `DifficultyText` | `public string DifficultyText` | 属性 |
| `DefaultUsageText` | `public string DefaultUsageText` | 属性 |
| `AlternativeUsageText` | `public string AlternativeUsageText` | 属性 |
| `OrderDisabledReasonHint` | `public BasicTooltipViewModel OrderDisabledReasonHint` | 属性 |
| `ShowOnlyUnlockedPiecesHint` | `public HintViewModel ShowOnlyUnlockedPiecesHint` | 属性 |
| `DifficultyExplanationHint` | `public BasicTooltipViewModel DifficultyExplanationHint` | 属性 |
| `ActivePieceList` | `public CraftingPieceListVM ActivePieceList` | 属性 |
| `BladePieceList` | `public CraftingPieceListVM BladePieceList` | 属性 |
| `GuardPieceList` | `public CraftingPieceListVM GuardPieceList` | 属性 |
| `HandlePieceList` | `public CraftingPieceListVM HandlePieceList` | 属性 |
| `PommelPieceList` | `public CraftingPieceListVM PommelPieceList` | 属性 |
| `SelectedBladePiece` | `public CraftingPieceVM SelectedBladePiece` | 属性 |
| `SelectedGuardPiece` | `public CraftingPieceVM SelectedGuardPiece` | 属性 |
| `SelectedHandlePiece` | `public CraftingPieceVM SelectedHandlePiece` | 属性 |
| `SelectedPommelPiece` | `public CraftingPieceVM SelectedPommelPiece` | 属性 |
| `ActivePieceSize` | `public int ActivePieceSize` | 属性 |
| `BladeSize` | `public int BladeSize` | 属性 |
| `GuardSize` | `public int GuardSize` | 属性 |
| `HandleSize` | `public int HandleSize` | 属性 |
| `PommelSize` | `public int PommelSize` | 属性 |
| `ComponentSizeLbl` | `public string ComponentSizeLbl` | 属性 |
| `IsWeaponCivilian` | `public bool IsWeaponCivilian` | 属性 |
| `ScabbardHint` | `public HintViewModel ScabbardHint` | 属性 |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | 属性 |
| `UndoHint` | `public HintViewModel UndoHint` | 属性 |
| `RedoHint` | `public HintViewModel RedoHint` | 属性 |
| `MBBindingList` | `public MBBindingList<ItemFlagVM>WeaponFlagIconsList` | 属性 |
| `CraftingHistory` | `public CraftingHistoryVM CraftingHistory` | 属性 |
| `MAX_SKILL_LEVEL` | `public const int MAX_SKILL_LEVEL` | 字段 |
| `CraftingPieceTierFilter` | `public enum CraftingPieceTierFilter` | 属性 |
| `IComparer` | `public class PieceTierComparer : IComparer<CraftingPieceVM>` | 属性 |
| `IComparer` | `public class TemplateComparer : IComparer<CraftingTemplate>` | 属性 |
| `IComparer` | `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>` | 属性 |
| `CraftingPieceTierFilter` | `public enum CraftingPieceTierFilter` | 嵌套类型 |
| `IComparer` | `public class PieceTierComparer : IComparer<CraftingPieceVM>` | 嵌套类型 |
| `IComparer` | `public class TemplateComparer : IComparer<CraftingTemplate>` | 嵌套类型 |
| `IComparer` | `public class WeaponPropertyComparer : IComparer<CraftingListPropertyItem>` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
