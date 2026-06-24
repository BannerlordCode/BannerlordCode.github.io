<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenLogic`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyScreenLogic

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenLogic`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenLogic.cs`

## Overview

`PartyScreenLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `PartyScreenLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Code` | `public PartyCommandCode Code { get; }` |
| `RosterSide` | `public PartyRosterSide RosterSide { get; }` |
| `Character` | `public CharacterObject Character { get; }` |
| `TotalNumber` | `public int TotalNumber { get; }` |
| `WoundedNumber` | `public int WoundedNumber { get; }` |
| `Index` | `public int Index { get; }` |
| `UpgradeTarget` | `public int UpgradeTarget { get; }` |
| `Type` | `public TroopType Type { get; }` |
| `SortType` | `public TroopSortType SortType { get; }` |
| `IsSortAscending` | `public bool IsSortAscending { get; }` |
| `ActiveOtherPartySortType` | `public TroopSortType ActiveOtherPartySortType { get; set; }` |
| `ActiveMainPartySortType` | `public TroopSortType ActiveMainPartySortType { get; set; }` |
| `IsOtherPartySortAscending` | `public bool IsOtherPartySortAscending { get; set; }` |
| `IsMainPartySortAscending` | `public bool IsMainPartySortAscending { get; }` |
| `MemberTransferState` | `public TransferState MemberTransferState { get; }` |
| `PrisonerTransferState` | `public TransferState PrisonerTransferState { get; }` |
| `AccompanyingTransferState` | `public TransferState AccompanyingTransferState { get; }` |
| `LeftPartyName` | `public TextObject LeftPartyName { get; }` |
| `RightPartyName` | `public TextObject RightPartyName { get; }` |
| `Header` | `public TextObject Header { get; }` |
| `LeftPartyMembersSizeLimit` | `public int LeftPartyMembersSizeLimit { get; }` |
| `LeftPartyPrisonersSizeLimit` | `public int LeftPartyPrisonersSizeLimit { get; }` |
| `RightPartyMembersSizeLimit` | `public int RightPartyMembersSizeLimit { get; }` |
| `RightPartyPrisonersSizeLimit` | `public int RightPartyPrisonersSizeLimit { get; }` |
| `DoNotApplyGoldTransactions` | `public bool DoNotApplyGoldTransactions { get; }` |
| `ShowProgressBar` | `public bool ShowProgressBar { get; }` |
| `DoneReasonString` | `public string DoneReasonString { get; }` |
| `IsTroopUpgradesDisabled` | `public bool IsTroopUpgradesDisabled { get; }` |
| `RightPartyLeader` | `public CharacterObject RightPartyLeader { get; }` |
| `LeftPartyLeader` | `public CharacterObject LeftPartyLeader { get; }` |
| `LeftOwnerParty` | `public PartyBase LeftOwnerParty { get; }` |
| `RightOwnerParty` | `public PartyBase RightOwnerParty { get; }` |
| `CurrentData` | `public PartyScreenData CurrentData { get; }` |
| `TransferHealthiesGetWoundedsFirst` | `public bool TransferHealthiesGetWoundedsFirst { get; }` |
| `QuestModeWageDaysMultiplier` | `public int QuestModeWageDaysMultiplier { get; }` |
| `Game` | `public Game Game { get; set; }` |

## Key Methods

### PresentationUpdate
`public delegate void PresentationUpdate(PartyCommand command)`

**Purpose:** Handles logic related to `presentation update`.

### PartyGoldDelegate
`public delegate void PartyGoldDelegate()`

**Purpose:** Handles logic related to `party gold delegate`.

### PartyMoraleDelegate
`public delegate void PartyMoraleDelegate()`

**Purpose:** Handles logic related to `party morale delegate`.

### PartyInfluenceDelegate
`public delegate void PartyInfluenceDelegate()`

**Purpose:** Handles logic related to `party influence delegate`.

### PartyHorseDelegate
`public delegate void PartyHorseDelegate()`

**Purpose:** Handles logic related to `party horse delegate`.

### AfterResetDelegate
`public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel)`

**Purpose:** Handles logic related to `after reset delegate`.

### FillForTransferTroop
`public void FillForTransferTroop(PartyRosterSide fromSide, TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**Purpose:** Handles logic related to `fill for transfer troop`.

### FillForShiftTroop
`public void FillForShiftTroop(PartyRosterSide side, TroopType type, CharacterObject character, int targetIndex)`

**Purpose:** Handles logic related to `fill for shift troop`.

### FillForTransferTroopToLeaderSlot
`public void FillForTransferTroopToLeaderSlot(PartyRosterSide side, TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**Purpose:** Handles logic related to `fill for transfer troop to leader slot`.

### FillForTransferPartyLeaderTroop
`public void FillForTransferPartyLeaderTroop(PartyRosterSide side, TroopType type, CharacterObject character, int totalNumber)`

**Purpose:** Handles logic related to `fill for transfer party leader troop`.

### FillForUpgradeTroop
`public void FillForUpgradeTroop(PartyRosterSide side, TroopType type, CharacterObject character, int number, int upgradeTargetType, int index)`

**Purpose:** Handles logic related to `fill for upgrade troop`.

### FillForRecruitTroop
`public void FillForRecruitTroop(PartyRosterSide side, TroopType type, CharacterObject character, int number, int index)`

**Purpose:** Handles logic related to `fill for recruit troop`.

### FillForExecuteTroop
`public void FillForExecuteTroop(PartyRosterSide side, TroopType type, CharacterObject character)`

**Purpose:** Handles logic related to `fill for execute troop`.

### FillForTransferAllTroops
`public void FillForTransferAllTroops(PartyRosterSide side, TroopType type)`

**Purpose:** Handles logic related to `fill for transfer all troops`.

### FillForSortTroops
`public void FillForSortTroops(PartyRosterSide side, TroopSortType sortType, bool isAscending)`

**Purpose:** Handles logic related to `fill for sort troops`.

### SetIsAscending
`public void SetIsAscending(bool isAscending)`

**Purpose:** Sets the value or state of `is ascending`.

### Compare
`public int Compare(TroopRosterElement x, TroopRosterElement y)`

**Purpose:** Handles logic related to `compare`.

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddCommand
`public void AddCommand(PartyCommand command)`

**Purpose:** Adds `command` to the current collection or state.

### ValidateCommand
`public bool ValidateCommand(PartyCommand command)`

**Purpose:** Handles logic related to `validate command`.

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyRosterSide side, TroopType type, TroopRosterElement troop)`

**Purpose:** Gets the current value of `index to insert troop`.

### GetActiveSortTypeForSide
`public TroopSortType GetActiveSortTypeForSide(PartyRosterSide side)`

**Purpose:** Gets the current value of `active sort type for side`.

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyRosterSide side)`

**Purpose:** Gets the current value of `is ascending sort for side`.

### IsDoneActive
`public bool IsDoneActive()`

**Purpose:** Handles logic related to `is done active`.

### IsCancelActive
`public bool IsCancelActive()`

**Purpose:** Handles logic related to `is cancel active`.

### DoneLogic
`public bool DoneLogic(bool isForced)`

**Purpose:** Handles logic related to `done logic`.

### OnPartyScreenClosed
`public void OnPartyScreenClosed(bool fromCancel)`

**Purpose:** Called when the `party screen closed` event is raised.

### IsTroopTransferable
`public bool IsTroopTransferable(TroopType troopType, CharacterObject character, int side)`

**Purpose:** Handles logic related to `is troop transferable`.

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(TroopType troopType)`

**Purpose:** Handles logic related to `is troop roster transferable`.

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(TroopType troopType, CharacterObject character, PartyRosterSide side)`

**Purpose:** Handles logic related to `is prisoner recruitable`.

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)`

**Purpose:** Gets the current value of `recruitable reason string`.

### IsExecutable
`public bool IsExecutable(TroopType troopType, CharacterObject character, PartyRosterSide side)`

**Purpose:** Handles logic related to `is executable`.

### GetExecutableReasonString
`public string GetExecutableReasonString(CharacterObject character, bool isExecutable)`

**Purpose:** Gets the current value of `executable reason string`.

### GetCurrentQuestCurrentCount
`public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)`

**Purpose:** Gets the current value of `current quest current count`.

### GetCurrentQuestRequiredCount
`public int GetCurrentQuestRequiredCount()`

**Purpose:** Gets the current value of `current quest required count`.

### Reset
`public void Reset(bool fromCancel)`

**Purpose:** Resets `reset` to its initial state.

### SavePartyScreenData
`public void SavePartyScreenData()`

**Purpose:** Saves `party screen data` data.

### ResetToLastSavedPartyScreenData
`public void ResetToLastSavedPartyScreenData(bool fromCancel)`

**Purpose:** Resets `to last saved party screen data` to its initial state.

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**Purpose:** Removes `zero counts` from the current collection or state.

### GetTroopRecruitableAmount
`public int GetTroopRecruitableAmount(CharacterObject troop)`

**Purpose:** Gets the current value of `troop recruitable amount`.

### GetRoster
`public TroopRoster GetRoster(PartyRosterSide side, TroopType troopType)`

**Purpose:** Gets the current value of `roster`.

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** Handles logic related to `is there any changes`.

### HaveRightSideGainedTroops
`public bool HaveRightSideGainedTroops()`

**Purpose:** Handles logic related to `have right side gained troops`.

### GetComparer
`public TroopComparer GetComparer(TroopSortType sortType)`

**Purpose:** Gets the current value of `comparer`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new PartyScreenLogic());
```

## See Also

- [Complete Class Catalog](../catalog)