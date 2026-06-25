---
title: "PartyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs`

## Overview

`PartyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; }` |
| `CanRightPartyTakeMoreTroops` | `public bool CanRightPartyTakeMoreTroops { get; }` |
| `CanRightPartyTakeMorePrisoners` | `public bool CanRightPartyTakeMorePrisoners { get; }` |
| `CurrentCharacter` | `public PartyCharacterVM CurrentCharacter { get; set; }` |
| `OtherPartySortController` | `public PartySortControllerVM OtherPartySortController { get; set; }` |
| `MainPartySortController` | `public PartySortControllerVM MainPartySortController { get; set; }` |
| `OtherPartyComposition` | `public PartyCompositionVM OtherPartyComposition { get; set; }` |
| `MainPartyComposition` | `public PartyCompositionVM MainPartyComposition { get; set; }` |
| `CurrentFocusedCharacter` | `public PartyCharacterVM CurrentFocusedCharacter { get; set; }` |
| `CurrentFocusedUpgrade` | `public UpgradeTargetVM CurrentFocusedUpgrade { get; set; }` |
| `HeaderLbl` | `public string HeaderLbl { get; set; }` |
| `OtherPartyNameLbl` | `public string OtherPartyNameLbl { get; set; }` |
| `OtherPartyTroops` | `public MBBindingList<PartyCharacterVM> OtherPartyTroops { get; set; }` |
| `OtherPartyPrisoners` | `public MBBindingList<PartyCharacterVM> OtherPartyPrisoners { get; set; }` |
| `MainPartyTroops` | `public MBBindingList<PartyCharacterVM> MainPartyTroops { get; set; }` |
| `MainPartyPrisoners` | `public MBBindingList<PartyCharacterVM> MainPartyPrisoners { get; set; }` |
| `UpgradePopUp` | `public PartyUpgradeTroopVM UpgradePopUp { get; set; }` |
| `RecruitPopUp` | `public PartyRecruitTroopVM RecruitPopUp { get; set; }` |
| `SelectedCharacter` | `public HeroViewModel SelectedCharacter { get; set; }` |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl { get; set; }` |
| `CurrentCharacterWageLbl` | `public string CurrentCharacterWageLbl { get; set; }` |
| `TransferAllOtherTroopsHint` | `public BasicTooltipViewModel TransferAllOtherTroopsHint { get; set; }` |
| `TransferAllOtherPrisonersHint` | `public BasicTooltipViewModel TransferAllOtherPrisonersHint { get; set; }` |
| `TransferAllMainTroopsHint` | `public BasicTooltipViewModel TransferAllMainTroopsHint { get; set; }` |
| `TransferAllMainPrisonersHint` | `public BasicTooltipViewModel TransferAllMainPrisonersHint { get; set; }` |
| `CurrentCharacterTier` | `public StringItemWithHintVM CurrentCharacterTier { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `OtherPartyAccompanyingLbl` | `public string OtherPartyAccompanyingLbl { get; set; }` |
| `MoraleHint` | `public HintViewModel MoraleHint { get; set; }` |
| `TotalWageHint` | `public HintViewModel TotalWageHint { get; set; }` |
| `SpeedHint` | `public BasicTooltipViewModel SpeedHint { get; set; }` |
| `MainPartyTroopSizeLimitHint` | `public BasicTooltipViewModel MainPartyTroopSizeLimitHint { get; set; }` |
| `MainPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel MainPartyPrisonerSizeLimitHint { get; set; }` |
| `OtherPartyTroopSizeLimitHint` | `public BasicTooltipViewModel OtherPartyTroopSizeLimitHint { get; set; }` |
| `OtherPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel OtherPartyPrisonerSizeLimitHint { get; set; }` |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint { get; set; }` |
| `DenarHint` | `public HintViewModel DenarHint { get; set; }` |
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `WageHint` | `public HintViewModel WageHint { get; set; }` |
| `TitleLbl` | `public string TitleLbl { get; set; }` |
| `MainPartyNameLbl` | `public string MainPartyNameLbl { get; set; }` |
| `FormationHint` | `public HintViewModel FormationHint { get; set; }` |
| `TalkLbl` | `public string TalkLbl { get; set; }` |
| `InfoLbl` | `public string InfoLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `TroopsLabel` | `public string TroopsLabel { get; set; }` |
| `PrisonersLabel` | `public string PrisonersLabel { get; set; }` |
| `MainPartyTotalGoldLbl` | `public string MainPartyTotalGoldLbl { get; set; }` |
| `MainPartyTotalMoraleLbl` | `public string MainPartyTotalMoraleLbl { get; set; }` |
| `MainPartyTotalSpeedLbl` | `public string MainPartyTotalSpeedLbl { get; set; }` |
| `MainPartyTotalWeeklyCostLbl` | `public string MainPartyTotalWeeklyCostLbl { get; set; }` |
| `IsCurrentCharacterFormationEnabled` | `public bool IsCurrentCharacterFormationEnabled { get; set; }` |
| `IsCurrentCharacterWageEnabled` | `public bool IsCurrentCharacterWageEnabled { get; set; }` |
| `CanChooseRoles` | `public bool CanChooseRoles { get; set; }` |
| `OtherPartyTroopsLbl` | `public string OtherPartyTroopsLbl { get; set; }` |
| `OtherPartyPrisonersLbl` | `public string OtherPartyPrisonersLbl { get; set; }` |
| `MainPartyTroopsLbl` | `public string MainPartyTroopsLbl { get; set; }` |
| `MainPartyPrisonersLbl` | `public string MainPartyPrisonersLbl { get; set; }` |
| `ShowQuestProgress` | `public bool ShowQuestProgress { get; set; }` |
| `QuestProgressRequiredCount` | `public int QuestProgressRequiredCount { get; set; }` |
| `QuestProgressCurrentCount` | `public int QuestProgressCurrentCount { get; set; }` |
| `UpgradableTroopCount` | `public int UpgradableTroopCount { get; set; }` |
| `RecruitableTroopCount` | `public int RecruitableTroopCount { get; set; }` |
| `IsDoneDisabled` | `public bool IsDoneDisabled { get; set; }` |
| `IsUpgradePopUpDisabled` | `public bool IsUpgradePopUpDisabled { get; set; }` |
| `IsRecruitPopUpDisabled` | `public bool IsRecruitPopUpDisabled { get; set; }` |
| `IsMainPrisonersLimitWarningEnabled` | `public bool IsMainPrisonersLimitWarningEnabled { get; set; }` |
| `IsMainTroopsLimitWarningEnabled` | `public bool IsMainTroopsLimitWarningEnabled { get; set; }` |
| `IsOtherPrisonersLimitWarningEnabled` | `public bool IsOtherPrisonersLimitWarningEnabled { get; set; }` |
| `IsUpgradePopupButtonHighlightEnabled` | `public bool IsUpgradePopupButtonHighlightEnabled { get; set; }` |
| `IsOtherTroopsLimitWarningEnabled` | `public bool IsOtherTroopsLimitWarningEnabled { get; set; }` |
| `IsMainTroopsHaveTransferableTroops` | `public bool IsMainTroopsHaveTransferableTroops { get; set; }` |
| `IsMainPrisonersHaveTransferableTroops` | `public bool IsMainPrisonersHaveTransferableTroops { get; set; }` |
| `IsOtherTroopsHaveTransferableTroops` | `public bool IsOtherTroopsHaveTransferableTroops { get; set; }` |
| `IsOtherPrisonersHaveTransferableTroops` | `public bool IsOtherPrisonersHaveTransferableTroops { get; set; }` |
| `IsCancelDisabled` | `public bool IsCancelDisabled { get; set; }` |
| `AreMembersRelevantOnCurrentMode` | `public bool AreMembersRelevantOnCurrentMode { get; set; }` |
| `ArePrisonersRelevantOnCurrentMode` | `public bool ArePrisonersRelevantOnCurrentMode { get; set; }` |
| `GoldChangeText` | `public string GoldChangeText { get; set; }` |
| `MoraleChangeText` | `public string MoraleChangeText { get; set; }` |
| `HorseChangeText` | `public string HorseChangeText { get; set; }` |
| `InfluenceChangeText` | `public string InfluenceChangeText { get; set; }` |
| `IsAnyPopUpOpen` | `public bool IsAnyPopUpOpen { get; set; }` |
| `ScrollToCharacter` | `public bool ScrollToCharacter { get; set; }` |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner { get; set; }` |
| `ScrollCharacterId` | `public string ScrollCharacterId { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `TakeAllTroopsInputKey` | `public InputKeyItemVM TakeAllTroopsInputKey { get; set; }` |
| `DismissAllTroopsInputKey` | `public InputKeyItemVM DismissAllTroopsInputKey { get; set; }` |
| `TakeAllPrisonersInputKey` | `public InputKeyItemVM TakeAllPrisonersInputKey { get; set; }` |
| `DismissAllPrisonersInputKey` | `public InputKeyItemVM DismissAllPrisonersInputKey { get; set; }` |
| `OpenUpgradePanelInputKey` | `public InputKeyItemVM OpenUpgradePanelInputKey { get; set; }` |
| `OpenRecruitPanelInputKey` | `public InputKeyItemVM OpenRecruitPanelInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetSelectedCharacter
`public void SetSelectedCharacter(PartyCharacterVM troop)`

**Purpose:** Sets the value or state of `selected character`.

### ExecuteSelectCharacterTuple
`public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)`

**Purpose:** Executes the `select character tuple` operation or workflow.

### ExecuteClearSelectedCharacterTuple
`public void ExecuteClearSelectedCharacterTuple()`

**Purpose:** Executes the `clear selected character tuple` operation or workflow.

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)`

**Purpose:** Executes the `transfer with parameters` operation or workflow.

### OnUpgradePopUpClosed
`public void OnUpgradePopUpClosed(bool isCancelled)`

**Purpose:** Called when the `upgrade pop up closed` event is raised.

### OnRecruitPopUpClosed
`public void OnRecruitPopUpClosed(bool isCancelled)`

**Purpose:** Called when the `recruit pop up closed` event is raised.

### ExecuteTransferAllMainTroops
`public void ExecuteTransferAllMainTroops()`

**Purpose:** Executes the `transfer all main troops` operation or workflow.

### ExecuteTransferAllOtherTroops
`public void ExecuteTransferAllOtherTroops()`

**Purpose:** Executes the `transfer all other troops` operation or workflow.

### ExecuteTransferAllMainPrisoners
`public void ExecuteTransferAllMainPrisoners()`

**Purpose:** Executes the `transfer all main prisoners` operation or workflow.

### ExecuteTransferAllOtherPrisoners
`public void ExecuteTransferAllOtherPrisoners()`

**Purpose:** Executes the `transfer all other prisoners` operation or workflow.

### ExecuteOpenUpgradePopUp
`public void ExecuteOpenUpgradePopUp()`

**Purpose:** Executes the `open upgrade pop up` operation or workflow.

### ExecuteOpenRecruitPopUp
`public void ExecuteOpenRecruitPopUp()`

**Purpose:** Executes the `open recruit pop up` operation or workflow.

### ExecuteUpgrade
`public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)`

**Purpose:** Executes the `upgrade` operation or workflow.

### ExecuteRecruit
`public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)`

**Purpose:** Executes the `recruit` operation or workflow.

### ExecuteExecution
`public void ExecuteExecution()`

**Purpose:** Executes the `execution` operation or workflow.

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**Purpose:** Executes the `remove zero counts` operation or workflow.

### ExecuteTalk
`public void ExecuteTalk()`

**Purpose:** Executes the `talk` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteResetAndCancel
`public void ExecuteResetAndCancel()`

**Purpose:** Executes the `reset and cancel` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetTakeAllTroopsInputKey
`public void SetTakeAllTroopsInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `take all troops input key`.

### SetDismissAllTroopsInputKey
`public void SetDismissAllTroopsInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `dismiss all troops input key`.

### SetTakeAllPrisonersInputKey
`public void SetTakeAllPrisonersInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `take all prisoners input key`.

### SetDismissAllPrisonersInputKey
`public void SetDismissAllPrisonersInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `dismiss all prisoners input key`.

### SetOpenUpgradePanelInputKey
`public void SetOpenUpgradePanelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `open upgrade panel input key`.

### SetOpenRecruitPanelInputKey
`public void SetOpenRecruitPanelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `open recruit panel input key`.

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** Sets the value or state of `get key text from key i d func`.

### Compare
`public int Compare(PartyCharacterVM x, PartyCharacterVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new PartyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)