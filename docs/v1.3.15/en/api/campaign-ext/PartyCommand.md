<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyCommand`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyCommand

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PartyCommand`
**Area:** campaign-ext

## Overview

`PartyCommand` lives in `TaleWorlds.CampaignSystem.Party`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveOtherPartySortType` | `public PartyScreenLogic.TroopSortType ActiveOtherPartySortType { get; set; }` |
| `ActiveMainPartySortType` | `public PartyScreenLogic.TroopSortType ActiveMainPartySortType { get; set; }` |
| `IsOtherPartySortAscending` | `public bool IsOtherPartySortAscending { get; set; }` |
| `IsMainPartySortAscending` | `public bool IsMainPartySortAscending { get; set; }` |
| `MemberTransferState` | `public PartyScreenLogic.TransferState MemberTransferState { get; }` |
| `PrisonerTransferState` | `public PartyScreenLogic.TransferState PrisonerTransferState { get; }` |
| `AccompanyingTransferState` | `public PartyScreenLogic.TransferState AccompanyingTransferState { get; }` |
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

## Key Methods

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddCommand
`public void AddCommand(PartyScreenLogic.PartyCommand command)`

**Purpose:** Adds `command` to the current collection or state.

### ValidateCommand
`public bool ValidateCommand(PartyScreenLogic.PartyCommand command)`

**Purpose:** Handles logic related to `validate command`.

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)`

**Purpose:** Gets the current value of `index to insert troop`.

### GetActiveSortTypeForSide
`public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)`

**Purpose:** Gets the current value of `active sort type for side`.

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)`

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
`public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)`

**Purpose:** Handles logic related to `is troop transferable`.

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)`

**Purpose:** Handles logic related to `is troop roster transferable`.

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

**Purpose:** Handles logic related to `is prisoner recruitable`.

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)`

**Purpose:** Gets the current value of `recruitable reason string`.

### IsExecutable
`public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

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

## Usage Example

```csharp
PartyCommand example = PartyCommand.ActiveOtherPartySortType;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
