---
title: "PartyVM"
description: "Auto-generated class reference for PartyVM."
---
# PartyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartyVM.cs`

## Overview

`PartyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; }` |
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

### Compare
`public int Compare(PartyCharacterVM x, PartyCharacterVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
var result = partyVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.RefreshValues();
```

### SetSelectedCharacter
`public void SetSelectedCharacter(PartyCharacterVM troop)`

**Purpose:** **Purpose:** Assigns a new value to selected character and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetSelectedCharacter(troop);
```

### ExecuteSelectCharacterTuple
`public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select character tuple.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteSelectCharacterTuple(troop);
```

### ExecuteClearSelectedCharacterTuple
`public void ExecuteClearSelectedCharacterTuple()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with clear selected character tuple.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteClearSelectedCharacterTuple();
```

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer with parameters.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteTransferWithParameters(party, 0, "example");
```

### OnUpgradePopUpClosed
`public void OnUpgradePopUpClosed(bool isCancelled)`

**Purpose:** **Purpose:** Invoked when the upgrade pop up closed event is raised.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.OnUpgradePopUpClosed(false);
```

### OnRecruitPopUpClosed
`public void OnRecruitPopUpClosed(bool isCancelled)`

**Purpose:** **Purpose:** Invoked when the recruit pop up closed event is raised.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.OnRecruitPopUpClosed(false);
```

### ExecuteTransferAllMainTroops
`public void ExecuteTransferAllMainTroops()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all main troops.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllMainTroops();
```

### ExecuteTransferAllOtherTroops
`public void ExecuteTransferAllOtherTroops()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all other troops.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllOtherTroops();
```

### ExecuteTransferAllMainPrisoners
`public void ExecuteTransferAllMainPrisoners()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all main prisoners.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllMainPrisoners();
```

### ExecuteTransferAllOtherPrisoners
`public void ExecuteTransferAllOtherPrisoners()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all other prisoners.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllOtherPrisoners();
```

### ExecuteOpenUpgradePopUp
`public void ExecuteOpenUpgradePopUp()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open upgrade pop up.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteOpenUpgradePopUp();
```

### ExecuteOpenRecruitPopUp
`public void ExecuteOpenRecruitPopUp()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open recruit pop up.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteOpenRecruitPopUp();
```

### ExecuteUpgrade
`public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with upgrade.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteUpgrade(troop, 0, 0);
```

### ExecuteRecruit
`public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with recruit.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteRecruit(character, false);
```

### ExecuteExecution
`public void ExecuteExecution()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with execution.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteExecution();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with remove zero counts.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteRemoveZeroCounts();
```

### ExecuteTalk
`public void ExecuteTalk()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with talk.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteTalk();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteDone();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteReset();
```

### ExecuteCancelWithoutInquiry
`public void ExecuteCancelWithoutInquiry()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel without inquiry.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteCancelWithoutInquiry();
```

### ExecuteCancel
`public void ExecuteCancel(bool showCancelInquiry = false)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.ExecuteCancel(false);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.OnFinalize();
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to reset input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetResetInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetDoneInputKey(hotKey);
```

### SetTakeAllTroopsInputKey
`public void SetTakeAllTroopsInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to take all troops input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetTakeAllTroopsInputKey(hotKey);
```

### SetDismissAllTroopsInputKey
`public void SetDismissAllTroopsInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to dismiss all troops input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetDismissAllTroopsInputKey(hotKey);
```

### SetTakeAllPrisonersInputKey
`public void SetTakeAllPrisonersInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to take all prisoners input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetTakeAllPrisonersInputKey(hotKey);
```

### SetDismissAllPrisonersInputKey
`public void SetDismissAllPrisonersInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to dismiss all prisoners input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetDismissAllPrisonersInputKey(hotKey);
```

### SetOpenUpgradePanelInputKey
`public void SetOpenUpgradePanelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to open upgrade panel input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetOpenUpgradePanelInputKey(hotKey);
```

### SetOpenRecruitPanelInputKey
`public void SetOpenRecruitPanelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to open recruit panel input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetOpenRecruitPanelInputKey(hotKey);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** **Purpose:** Assigns a new value to get key text from key i d func and updates the object's internal state.

```csharp
// Obtain an instance of PartyVM from the subsystem API first
PartyVM partyVM = ...;
partyVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyVM partyVM = ...;
partyVM.Compare(x, y);
```

## See Also

- [Area Index](../)