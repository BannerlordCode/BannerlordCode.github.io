---
title: "PartyVM"
description: "PartyVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 131 个（方法 33、属性 97、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs。"
---
# PartyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs`

## 概述

PartyVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PartyVM → ViewModel。public/protected 成员共 131 个：33 方法、97 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party），继承链 PartyVM → ViewModel。成员构成以属性为主（属性 97/131，方法 33/131），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic` | 属性 |
| `CanRightPartyTakeMoreTroops` | `public bool CanRightPartyTakeMoreTroops` | 属性 |
| `CanRightPartyTakeMorePrisoners` | `public bool CanRightPartyTakeMorePrisoners` | 属性 |
| `CurrentCharacter` | `public PartyCharacterVM CurrentCharacter` | 属性 |
| `PartyVM` | `public PartyVM(PartyScreenLogic partyScreenLogic)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetSelectedCharacter` | `public void SetSelectedCharacter(PartyCharacterVM troop)` | 方法 |
| `ExecuteSelectCharacterTuple` | `public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)` | 方法 |
| `ExecuteClearSelectedCharacterTuple` | `public void ExecuteClearSelectedCharacterTuple()` | 方法 |
| `ExecuteTransferWithParameters` | `public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)` | 方法 |
| `OnUpgradePopUpClosed` | `public void OnUpgradePopUpClosed(bool isCancelled)` | 方法 |
| `OnRecruitPopUpClosed` | `public void OnRecruitPopUpClosed(bool isCancelled)` | 方法 |
| `ExecuteTransferAllMainTroops` | `public void ExecuteTransferAllMainTroops()` | 方法 |
| `ExecuteTransferAllOtherTroops` | `public void ExecuteTransferAllOtherTroops()` | 方法 |
| `ExecuteTransferAllMainPrisoners` | `public void ExecuteTransferAllMainPrisoners()` | 方法 |
| `ExecuteTransferAllOtherPrisoners` | `public void ExecuteTransferAllOtherPrisoners()` | 方法 |
| `ExecuteOpenUpgradePopUp` | `public void ExecuteOpenUpgradePopUp()` | 方法 |
| `ExecuteOpenRecruitPopUp` | `public void ExecuteOpenRecruitPopUp()` | 方法 |
| `ExecuteUpgrade` | `public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)` | 方法 |
| `ExecuteRecruit` | `public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)` | 方法 |
| `ExecuteExecution` | `public void ExecuteExecution()` | 方法 |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | 方法 |
| `ExecuteTalk` | `public void ExecuteTalk()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `ExecuteReset` | `public void ExecuteReset()` | 方法 |
| `ExecuteCancelWithoutInquiry` | `public void ExecuteCancelWithoutInquiry()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel(bool showCancelInquiry = false)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OtherPartySortController` | `public PartySortControllerVM OtherPartySortController` | 属性 |
| `MainPartySortController` | `public PartySortControllerVM MainPartySortController` | 属性 |
| `OtherPartyComposition` | `public PartyCompositionVM OtherPartyComposition` | 属性 |
| `MainPartyComposition` | `public PartyCompositionVM MainPartyComposition` | 属性 |
| `CurrentFocusedCharacter` | `public PartyCharacterVM CurrentFocusedCharacter` | 属性 |
| `CurrentFocusedUpgrade` | `public UpgradeTargetVM CurrentFocusedUpgrade` | 属性 |
| `HeaderLbl` | `public string HeaderLbl` | 属性 |
| `OtherPartyNameLbl` | `public string OtherPartyNameLbl` | 属性 |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>OtherPartyTroops` | 属性 |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>OtherPartyPrisoners` | 属性 |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>MainPartyTroops` | 属性 |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>MainPartyPrisoners` | 属性 |
| `UpgradePopUp` | `public PartyUpgradeTroopVM UpgradePopUp` | 属性 |
| `RecruitPopUp` | `public PartyRecruitTroopVM RecruitPopUp` | 属性 |
| `SelectedCharacter` | `public HeroViewModel SelectedCharacter` | 属性 |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl` | 属性 |
| `CurrentCharacterWageLbl` | `public string CurrentCharacterWageLbl` | 属性 |
| `TransferAllOtherTroopsHint` | `public BasicTooltipViewModel TransferAllOtherTroopsHint` | 属性 |
| `TransferAllOtherPrisonersHint` | `public BasicTooltipViewModel TransferAllOtherPrisonersHint` | 属性 |
| `TransferAllMainTroopsHint` | `public BasicTooltipViewModel TransferAllMainTroopsHint` | 属性 |
| `TransferAllMainPrisonersHint` | `public BasicTooltipViewModel TransferAllMainPrisonersHint` | 属性 |
| `CurrentCharacterTier` | `public StringItemWithHintVM CurrentCharacterTier` | 属性 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `DoneHint` | `public HintViewModel DoneHint` | 属性 |
| `OtherPartyAccompanyingLbl` | `public string OtherPartyAccompanyingLbl` | 属性 |
| `MoraleHint` | `public HintViewModel MoraleHint` | 属性 |
| `TotalWageHint` | `public HintViewModel TotalWageHint` | 属性 |
| `SpeedHint` | `public BasicTooltipViewModel SpeedHint` | 属性 |
| `MainPartyTroopSizeLimitHint` | `public BasicTooltipViewModel MainPartyTroopSizeLimitHint` | 属性 |
| `MainPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel MainPartyPrisonerSizeLimitHint` | 属性 |
| `OtherPartyTroopSizeLimitHint` | `public BasicTooltipViewModel OtherPartyTroopSizeLimitHint` | 属性 |
| `OtherPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel OtherPartyPrisonerSizeLimitHint` | 属性 |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint` | 属性 |
| `DenarHint` | `public HintViewModel DenarHint` | 属性 |
| `LevelHint` | `public HintViewModel LevelHint` | 属性 |
| `WageHint` | `public HintViewModel WageHint` | 属性 |
| `TitleLbl` | `public string TitleLbl` | 属性 |
| `MainPartyNameLbl` | `public string MainPartyNameLbl` | 属性 |
| `FormationHint` | `public HintViewModel FormationHint` | 属性 |
| `TalkLbl` | `public string TalkLbl` | 属性 |
| `InfoLbl` | `public string InfoLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `TroopsLabel` | `public string TroopsLabel` | 属性 |
| `PrisonersLabel` | `public string PrisonersLabel` | 属性 |
| `MainPartyTotalGoldLbl` | `public string MainPartyTotalGoldLbl` | 属性 |
| `MainPartyTotalMoraleLbl` | `public string MainPartyTotalMoraleLbl` | 属性 |
| `MainPartyTotalSpeedLbl` | `public string MainPartyTotalSpeedLbl` | 属性 |
| `MainPartyTotalWeeklyCostLbl` | `public string MainPartyTotalWeeklyCostLbl` | 属性 |
| `IsCurrentCharacterFormationEnabled` | `public bool IsCurrentCharacterFormationEnabled` | 属性 |
| `IsCurrentCharacterWageEnabled` | `public bool IsCurrentCharacterWageEnabled` | 属性 |
| `CanChooseRoles` | `public bool CanChooseRoles` | 属性 |
| `OtherPartyTroopsLbl` | `public string OtherPartyTroopsLbl` | 属性 |
| `OtherPartyPrisonersLbl` | `public string OtherPartyPrisonersLbl` | 属性 |
| `MainPartyTroopsLbl` | `public string MainPartyTroopsLbl` | 属性 |
| `MainPartyPrisonersLbl` | `public string MainPartyPrisonersLbl` | 属性 |
| `ShowQuestProgress` | `public bool ShowQuestProgress` | 属性 |
| `QuestProgressRequiredCount` | `public int QuestProgressRequiredCount` | 属性 |
| `QuestProgressCurrentCount` | `public int QuestProgressCurrentCount` | 属性 |
| `UpgradableTroopCount` | `public int UpgradableTroopCount` | 属性 |
| `RecruitableTroopCount` | `public int RecruitableTroopCount` | 属性 |
| `IsDoneDisabled` | `public bool IsDoneDisabled` | 属性 |
| `IsUpgradePopUpDisabled` | `public bool IsUpgradePopUpDisabled` | 属性 |
| `IsRecruitPopUpDisabled` | `public bool IsRecruitPopUpDisabled` | 属性 |
| `IsMainPrisonersLimitWarningEnabled` | `public bool IsMainPrisonersLimitWarningEnabled` | 属性 |
| `IsMainTroopsLimitWarningEnabled` | `public bool IsMainTroopsLimitWarningEnabled` | 属性 |
| `IsOtherPrisonersLimitWarningEnabled` | `public bool IsOtherPrisonersLimitWarningEnabled` | 属性 |
| `IsUpgradePopupButtonHighlightEnabled` | `public bool IsUpgradePopupButtonHighlightEnabled` | 属性 |
| `IsOtherTroopsLimitWarningEnabled` | `public bool IsOtherTroopsLimitWarningEnabled` | 属性 |
| `IsMainTroopsHaveTransferableTroops` | `public bool IsMainTroopsHaveTransferableTroops` | 属性 |
| `IsMainPrisonersHaveTransferableTroops` | `public bool IsMainPrisonersHaveTransferableTroops` | 属性 |
| `IsOtherTroopsHaveTransferableTroops` | `public bool IsOtherTroopsHaveTransferableTroops` | 属性 |
| `IsOtherPrisonersHaveTransferableTroops` | `public bool IsOtherPrisonersHaveTransferableTroops` | 属性 |
| `IsCancelDisabled` | `public bool IsCancelDisabled` | 属性 |
| `AreMembersRelevantOnCurrentMode` | `public bool AreMembersRelevantOnCurrentMode` | 属性 |
| `ArePrisonersRelevantOnCurrentMode` | `public bool ArePrisonersRelevantOnCurrentMode` | 属性 |
| `GoldChangeText` | `public string GoldChangeText` | 属性 |
| `MoraleChangeText` | `public string MoraleChangeText` | 属性 |
| `HorseChangeText` | `public string HorseChangeText` | 属性 |
| `InfluenceChangeText` | `public string InfluenceChangeText` | 属性 |
| `IsAnyPopUpOpen` | `public bool IsAnyPopUpOpen` | 属性 |
| `ScrollToCharacter` | `public bool ScrollToCharacter` | 属性 |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner` | 属性 |
| `ScrollCharacterId` | `public string ScrollCharacterId` | 属性 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetTakeAllTroopsInputKey` | `public void SetTakeAllTroopsInputKey(HotKey hotKey)` | 方法 |
| `SetDismissAllTroopsInputKey` | `public void SetDismissAllTroopsInputKey(HotKey hotKey)` | 方法 |
| `SetTakeAllPrisonersInputKey` | `public void SetTakeAllPrisonersInputKey(HotKey hotKey)` | 方法 |
| `SetDismissAllPrisonersInputKey` | `public void SetDismissAllPrisonersInputKey(HotKey hotKey)` | 方法 |
| `SetOpenUpgradePanelInputKey` | `public void SetOpenUpgradePanelInputKey(HotKey hotKey)` | 方法 |
| `SetOpenRecruitPanelInputKey` | `public void SetOpenRecruitPanelInputKey(HotKey hotKey)` | 方法 |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | 方法 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `TakeAllTroopsInputKey` | `public InputKeyItemVM TakeAllTroopsInputKey` | 属性 |
| `DismissAllTroopsInputKey` | `public InputKeyItemVM DismissAllTroopsInputKey` | 属性 |
| `TakeAllPrisonersInputKey` | `public InputKeyItemVM TakeAllPrisonersInputKey` | 属性 |
| `DismissAllPrisonersInputKey` | `public InputKeyItemVM DismissAllPrisonersInputKey` | 属性 |
| `OpenUpgradePanelInputKey` | `public InputKeyItemVM OpenUpgradePanelInputKey` | 属性 |
| `OpenRecruitPanelInputKey` | `public InputKeyItemVM OpenRecruitPanelInputKey` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyCharacterVM](../PartyCharacterVM)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM)
- [同命名空间 PartyTradeVM](../PartyTradeVM)
