---
title: "PartyVM"
description: "PartyVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 131 exposed members (33 methods, 97 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs."
---
# PartyVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs`

## Overview

PartyVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyVM → ViewModel. It exposes 131 public/protected members: 33 methods, 97 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party) the module directory; inheritance chain PartyVM → ViewModel. The surface is property-led (properties 97/131, methods 33/131), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic` | property |
| `CanRightPartyTakeMoreTroops` | `public bool CanRightPartyTakeMoreTroops` | property |
| `CanRightPartyTakeMorePrisoners` | `public bool CanRightPartyTakeMorePrisoners` | property |
| `CurrentCharacter` | `public PartyCharacterVM CurrentCharacter` | property |
| `PartyVM` | `public PartyVM(PartyScreenLogic partyScreenLogic)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetSelectedCharacter` | `public void SetSelectedCharacter(PartyCharacterVM troop)` | method |
| `ExecuteSelectCharacterTuple` | `public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)` | method |
| `ExecuteClearSelectedCharacterTuple` | `public void ExecuteClearSelectedCharacterTuple()` | method |
| `ExecuteTransferWithParameters` | `public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)` | method |
| `OnUpgradePopUpClosed` | `public void OnUpgradePopUpClosed(bool isCancelled)` | method |
| `OnRecruitPopUpClosed` | `public void OnRecruitPopUpClosed(bool isCancelled)` | method |
| `ExecuteTransferAllMainTroops` | `public void ExecuteTransferAllMainTroops()` | method |
| `ExecuteTransferAllOtherTroops` | `public void ExecuteTransferAllOtherTroops()` | method |
| `ExecuteTransferAllMainPrisoners` | `public void ExecuteTransferAllMainPrisoners()` | method |
| `ExecuteTransferAllOtherPrisoners` | `public void ExecuteTransferAllOtherPrisoners()` | method |
| `ExecuteOpenUpgradePopUp` | `public void ExecuteOpenUpgradePopUp()` | method |
| `ExecuteOpenRecruitPopUp` | `public void ExecuteOpenRecruitPopUp()` | method |
| `ExecuteUpgrade` | `public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)` | method |
| `ExecuteRecruit` | `public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)` | method |
| `ExecuteExecution` | `public void ExecuteExecution()` | method |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | method |
| `ExecuteTalk` | `public void ExecuteTalk()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteCancelWithoutInquiry` | `public void ExecuteCancelWithoutInquiry()` | method |
| `ExecuteCancel` | `public void ExecuteCancel(bool showCancelInquiry = false)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OtherPartySortController` | `public PartySortControllerVM OtherPartySortController` | property |
| `MainPartySortController` | `public PartySortControllerVM MainPartySortController` | property |
| `OtherPartyComposition` | `public PartyCompositionVM OtherPartyComposition` | property |
| `MainPartyComposition` | `public PartyCompositionVM MainPartyComposition` | property |
| `CurrentFocusedCharacter` | `public PartyCharacterVM CurrentFocusedCharacter` | property |
| `CurrentFocusedUpgrade` | `public UpgradeTargetVM CurrentFocusedUpgrade` | property |
| `HeaderLbl` | `public string HeaderLbl` | property |
| `OtherPartyNameLbl` | `public string OtherPartyNameLbl` | property |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>OtherPartyTroops` | property |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>OtherPartyPrisoners` | property |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>MainPartyTroops` | property |
| `MBBindingList` | `public MBBindingList<PartyCharacterVM>MainPartyPrisoners` | property |
| `UpgradePopUp` | `public PartyUpgradeTroopVM UpgradePopUp` | property |
| `RecruitPopUp` | `public PartyRecruitTroopVM RecruitPopUp` | property |
| `SelectedCharacter` | `public HeroViewModel SelectedCharacter` | property |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl` | property |
| `CurrentCharacterWageLbl` | `public string CurrentCharacterWageLbl` | property |
| `TransferAllOtherTroopsHint` | `public BasicTooltipViewModel TransferAllOtherTroopsHint` | property |
| `TransferAllOtherPrisonersHint` | `public BasicTooltipViewModel TransferAllOtherPrisonersHint` | property |
| `TransferAllMainTroopsHint` | `public BasicTooltipViewModel TransferAllMainTroopsHint` | property |
| `TransferAllMainPrisonersHint` | `public BasicTooltipViewModel TransferAllMainPrisonersHint` | property |
| `CurrentCharacterTier` | `public StringItemWithHintVM CurrentCharacterTier` | property |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `DoneHint` | `public HintViewModel DoneHint` | property |
| `OtherPartyAccompanyingLbl` | `public string OtherPartyAccompanyingLbl` | property |
| `MoraleHint` | `public HintViewModel MoraleHint` | property |
| `TotalWageHint` | `public HintViewModel TotalWageHint` | property |
| `SpeedHint` | `public BasicTooltipViewModel SpeedHint` | property |
| `MainPartyTroopSizeLimitHint` | `public BasicTooltipViewModel MainPartyTroopSizeLimitHint` | property |
| `MainPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel MainPartyPrisonerSizeLimitHint` | property |
| `OtherPartyTroopSizeLimitHint` | `public BasicTooltipViewModel OtherPartyTroopSizeLimitHint` | property |
| `OtherPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel OtherPartyPrisonerSizeLimitHint` | property |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint` | property |
| `DenarHint` | `public HintViewModel DenarHint` | property |
| `LevelHint` | `public HintViewModel LevelHint` | property |
| `WageHint` | `public HintViewModel WageHint` | property |
| `TitleLbl` | `public string TitleLbl` | property |
| `MainPartyNameLbl` | `public string MainPartyNameLbl` | property |
| `FormationHint` | `public HintViewModel FormationHint` | property |
| `TalkLbl` | `public string TalkLbl` | property |
| `InfoLbl` | `public string InfoLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `TroopsLabel` | `public string TroopsLabel` | property |
| `PrisonersLabel` | `public string PrisonersLabel` | property |
| `MainPartyTotalGoldLbl` | `public string MainPartyTotalGoldLbl` | property |
| `MainPartyTotalMoraleLbl` | `public string MainPartyTotalMoraleLbl` | property |
| `MainPartyTotalSpeedLbl` | `public string MainPartyTotalSpeedLbl` | property |
| `MainPartyTotalWeeklyCostLbl` | `public string MainPartyTotalWeeklyCostLbl` | property |
| `IsCurrentCharacterFormationEnabled` | `public bool IsCurrentCharacterFormationEnabled` | property |
| `IsCurrentCharacterWageEnabled` | `public bool IsCurrentCharacterWageEnabled` | property |
| `CanChooseRoles` | `public bool CanChooseRoles` | property |
| `OtherPartyTroopsLbl` | `public string OtherPartyTroopsLbl` | property |
| `OtherPartyPrisonersLbl` | `public string OtherPartyPrisonersLbl` | property |
| `MainPartyTroopsLbl` | `public string MainPartyTroopsLbl` | property |
| `MainPartyPrisonersLbl` | `public string MainPartyPrisonersLbl` | property |
| `ShowQuestProgress` | `public bool ShowQuestProgress` | property |
| `QuestProgressRequiredCount` | `public int QuestProgressRequiredCount` | property |
| `QuestProgressCurrentCount` | `public int QuestProgressCurrentCount` | property |
| `UpgradableTroopCount` | `public int UpgradableTroopCount` | property |
| `RecruitableTroopCount` | `public int RecruitableTroopCount` | property |
| `IsDoneDisabled` | `public bool IsDoneDisabled` | property |
| `IsUpgradePopUpDisabled` | `public bool IsUpgradePopUpDisabled` | property |
| `IsRecruitPopUpDisabled` | `public bool IsRecruitPopUpDisabled` | property |
| `IsMainPrisonersLimitWarningEnabled` | `public bool IsMainPrisonersLimitWarningEnabled` | property |
| `IsMainTroopsLimitWarningEnabled` | `public bool IsMainTroopsLimitWarningEnabled` | property |
| `IsOtherPrisonersLimitWarningEnabled` | `public bool IsOtherPrisonersLimitWarningEnabled` | property |
| `IsUpgradePopupButtonHighlightEnabled` | `public bool IsUpgradePopupButtonHighlightEnabled` | property |
| `IsOtherTroopsLimitWarningEnabled` | `public bool IsOtherTroopsLimitWarningEnabled` | property |
| `IsMainTroopsHaveTransferableTroops` | `public bool IsMainTroopsHaveTransferableTroops` | property |
| `IsMainPrisonersHaveTransferableTroops` | `public bool IsMainPrisonersHaveTransferableTroops` | property |
| `IsOtherTroopsHaveTransferableTroops` | `public bool IsOtherTroopsHaveTransferableTroops` | property |
| `IsOtherPrisonersHaveTransferableTroops` | `public bool IsOtherPrisonersHaveTransferableTroops` | property |
| `IsCancelDisabled` | `public bool IsCancelDisabled` | property |
| `AreMembersRelevantOnCurrentMode` | `public bool AreMembersRelevantOnCurrentMode` | property |
| `ArePrisonersRelevantOnCurrentMode` | `public bool ArePrisonersRelevantOnCurrentMode` | property |
| `GoldChangeText` | `public string GoldChangeText` | property |
| `MoraleChangeText` | `public string MoraleChangeText` | property |
| `HorseChangeText` | `public string HorseChangeText` | property |
| `InfluenceChangeText` | `public string InfluenceChangeText` | property |
| `IsAnyPopUpOpen` | `public bool IsAnyPopUpOpen` | property |
| `ScrollToCharacter` | `public bool ScrollToCharacter` | property |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner` | property |
| `ScrollCharacterId` | `public string ScrollCharacterId` | property |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetTakeAllTroopsInputKey` | `public void SetTakeAllTroopsInputKey(HotKey hotKey)` | method |
| `SetDismissAllTroopsInputKey` | `public void SetDismissAllTroopsInputKey(HotKey hotKey)` | method |
| `SetTakeAllPrisonersInputKey` | `public void SetTakeAllPrisonersInputKey(HotKey hotKey)` | method |
| `SetDismissAllPrisonersInputKey` | `public void SetDismissAllPrisonersInputKey(HotKey hotKey)` | method |
| `SetOpenUpgradePanelInputKey` | `public void SetOpenUpgradePanelInputKey(HotKey hotKey)` | method |
| `SetOpenRecruitPanelInputKey` | `public void SetOpenRecruitPanelInputKey(HotKey hotKey)` | method |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | method |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `TakeAllTroopsInputKey` | `public InputKeyItemVM TakeAllTroopsInputKey` | property |
| `DismissAllTroopsInputKey` | `public InputKeyItemVM DismissAllTroopsInputKey` | property |
| `TakeAllPrisonersInputKey` | `public InputKeyItemVM TakeAllPrisonersInputKey` | property |
| `DismissAllPrisonersInputKey` | `public InputKeyItemVM DismissAllPrisonersInputKey` | property |
| `OpenUpgradePanelInputKey` | `public InputKeyItemVM OpenUpgradePanelInputKey` | property |
| `OpenRecruitPanelInputKey` | `public InputKeyItemVM OpenRecruitPanelInputKey` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyCharacterVM](../PartyCharacterVM)
- [same namespace PartyCompositionVM](../PartyCompositionVM)
- [same namespace PartySortControllerVM](../PartySortControllerVM)
- [same namespace PartyTradeVM](../PartyTradeVM)
