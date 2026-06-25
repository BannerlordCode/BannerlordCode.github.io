---
title: "PartyScreenLogic"
description: "Auto-generated class reference for PartyScreenLogic."
---
# PartyScreenLogic

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenLogic`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## Overview

`PartyScreenLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `PartyScreenLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
| `Code` | `public PartyScreenLogic.PartyCommandCode Code { get; }` |
| `RosterSide` | `public PartyScreenLogic.PartyRosterSide RosterSide { get; }` |
| `Character` | `public CharacterObject Character { get; }` |
| `TotalNumber` | `public int TotalNumber { get; }` |
| `WoundedNumber` | `public int WoundedNumber { get; }` |
| `Index` | `public int Index { get; }` |
| `UpgradeTarget` | `public int UpgradeTarget { get; }` |
| `Type` | `public PartyScreenLogic.TroopType Type { get; }` |
| `SortType` | `public PartyScreenLogic.TroopSortType SortType { get; }` |
| `IsSortAscending` | `public bool IsSortAscending { get; }` |

## Key Methods

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.Initialize(initializationData);
```

### AddCommand
`public void AddCommand(PartyScreenLogic.PartyCommand command)`

**Purpose:** **Purpose:** Adds command to the current collection or state.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.AddCommand(command);
```

### ValidateCommand
`public bool ValidateCommand(PartyScreenLogic.PartyCommand command)`

**Purpose:** **Purpose:** Checks whether command satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.ValidateCommand(command);
```

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)`

**Purpose:** **Purpose:** Reads and returns the index to insert troop value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetIndexToInsertTroop(side, type, troop);
```

### GetActiveSortTypeForSide
`public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)`

**Purpose:** **Purpose:** Reads and returns the active sort type for side value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetActiveSortTypeForSide(side);
```

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)`

**Purpose:** **Purpose:** Reads and returns the is ascending sort for side value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetIsAscendingSortForSide(side);
```

### IsDoneActive
`public bool IsDoneActive()`

**Purpose:** **Purpose:** Determines whether the this instance is in the done active state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsDoneActive();
```

### IsCancelActive
`public bool IsCancelActive()`

**Purpose:** **Purpose:** Determines whether the this instance is in the cancel active state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsCancelActive();
```

### DoneLogic
`public bool DoneLogic(bool isForced)`

**Purpose:** **Purpose:** Executes the DoneLogic logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.DoneLogic(false);
```

### OnPartyScreenClosed
`public void OnPartyScreenClosed(bool fromCancel)`

**Purpose:** **Purpose:** Invoked when the party screen closed event is raised.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.OnPartyScreenClosed(false);
```

### IsTroopTransferable
`public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop transferable state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsTroopTransferable(troopType, character, 0);
```

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop roster transferable state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsTroopRosterTransferable(troopType);
```

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the prisoner recruitable state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsPrisonerRecruitable(troopType, character, side);
```

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)`

**Purpose:** **Purpose:** Reads and returns the recruitable reason string value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetRecruitableReasonString(character, false, 0, showStackModifierText);
```

### IsExecutable
`public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the executable state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsExecutable(troopType, character, side);
```

### GetExecutableReasonString
`public string GetExecutableReasonString(CharacterObject character, bool isExecutable)`

**Purpose:** **Purpose:** Reads and returns the executable reason string value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetExecutableReasonString(character, false);
```

### GetCurrentQuestCurrentCount
`public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)`

**Purpose:** **Purpose:** Reads and returns the current quest current count value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetCurrentQuestCurrentCount(false, false);
```

### GetCurrentQuestRequiredCount
`public int GetCurrentQuestRequiredCount()`

**Purpose:** **Purpose:** Reads and returns the current quest required count value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetCurrentQuestRequiredCount();
```

### Reset
`public void Reset(bool fromCancel)`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.Reset(false);
```

### SavePartyScreenData
`public void SavePartyScreenData()`

**Purpose:** **Purpose:** Writes party screen data to persistent storage or a stream.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.SavePartyScreenData();
```

### ResetToLastSavedPartyScreenData
`public void ResetToLastSavedPartyScreenData(bool fromCancel)`

**Purpose:** **Purpose:** Returns to last saved party screen data to its default or initial condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.ResetToLastSavedPartyScreenData(false);
```

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**Purpose:** **Purpose:** Removes zero counts from the current collection or state.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.RemoveZeroCounts();
```

### GetTroopRecruitableAmount
`public int GetTroopRecruitableAmount(CharacterObject troop)`

**Purpose:** **Purpose:** Reads and returns the troop recruitable amount value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetTroopRecruitableAmount(troop);
```

### GetRoster
`public TroopRoster GetRoster(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType troopType)`

**Purpose:** **Purpose:** Reads and returns the roster value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetRoster(side, troopType);
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there any changes state or condition.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsThereAnyChanges();
```

### HaveRightSideGainedTroops
`public bool HaveRightSideGainedTroops()`

**Purpose:** **Purpose:** Executes the HaveRightSideGainedTroops logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.HaveRightSideGainedTroops();
```

### GetComparer
`public PartyScreenLogic.TroopComparer GetComparer(PartyScreenLogic.TroopSortType sortType)`

**Purpose:** **Purpose:** Reads and returns the comparer value held by the this instance.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetComparer(sortType);
```

### PresentationUpdate
`public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command)`

**Purpose:** **Purpose:** Executes the PresentationUpdate logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PresentationUpdate(command);
```

### PartyGoldDelegate
`public delegate void PartyGoldDelegate()`

**Purpose:** **Purpose:** Executes the PartyGoldDelegate logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyGoldDelegate();
```

### PartyMoraleDelegate
`public delegate void PartyMoraleDelegate()`

**Purpose:** **Purpose:** Executes the PartyMoraleDelegate logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyMoraleDelegate();
```

### PartyInfluenceDelegate
`public delegate void PartyInfluenceDelegate()`

**Purpose:** **Purpose:** Executes the PartyInfluenceDelegate logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyInfluenceDelegate();
```

### PartyHorseDelegate
`public delegate void PartyHorseDelegate()`

**Purpose:** **Purpose:** Executes the PartyHorseDelegate logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyHorseDelegate();
```

### AfterResetDelegate
`public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel)`

**Purpose:** **Purpose:** Executes the AfterResetDelegate logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.AfterResetDelegate(partyScreenLogic, false);
```

### FillForTransferTroop
`public void FillForTransferTroop(PartyScreenLogic.PartyRosterSide fromSide, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**Purpose:** **Purpose:** Executes the FillForTransferTroop logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferTroop(fromSide, type, character, 0, 0, 0);
```

### FillForShiftTroop
`public void FillForShiftTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int targetIndex)`

**Purpose:** **Purpose:** Executes the FillForShiftTroop logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForShiftTroop(side, type, character, 0);
```

### FillForTransferTroopToLeaderSlot
`public void FillForTransferTroopToLeaderSlot(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**Purpose:** **Purpose:** Executes the FillForTransferTroopToLeaderSlot logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferTroopToLeaderSlot(side, type, character, 0, 0, 0);
```

### FillForTransferPartyLeaderTroop
`public void FillForTransferPartyLeaderTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber)`

**Purpose:** **Purpose:** Executes the FillForTransferPartyLeaderTroop logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferPartyLeaderTroop(side, type, character, 0);
```

### FillForUpgradeTroop
`public void FillForUpgradeTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int number, int upgradeTargetType, int index)`

**Purpose:** **Purpose:** Executes the FillForUpgradeTroop logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForUpgradeTroop(side, type, character, 0, 0, 0);
```

### FillForRecruitTroop
`public void FillForRecruitTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int number, int index)`

**Purpose:** **Purpose:** Executes the FillForRecruitTroop logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForRecruitTroop(side, type, character, 0, 0);
```

### FillForExecuteTroop
`public void FillForExecuteTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character)`

**Purpose:** **Purpose:** Executes the FillForExecuteTroop logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForExecuteTroop(side, type, character);
```

### FillForTransferAllTroops
`public void FillForTransferAllTroops(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type)`

**Purpose:** **Purpose:** Executes the FillForTransferAllTroops logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferAllTroops(side, type);
```

### FillForSortTroops
`public void FillForSortTroops(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopSortType sortType, bool isAscending)`

**Purpose:** **Purpose:** Executes the FillForSortTroops logic.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForSortTroops(side, sortType, false);
```

### SetIsAscending
`public void SetIsAscending(bool isAscending)`

**Purpose:** **Purpose:** Assigns a new value to is ascending and updates the object's internal state.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.SetIsAscending(false);
```

### Compare
`public int Compare(TroopRosterElement x, TroopRosterElement y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of PartyScreenLogic from the subsystem API first
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.Compare(x, y);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<PartyScreenLogic>();
```

## See Also

- [Area Index](../)