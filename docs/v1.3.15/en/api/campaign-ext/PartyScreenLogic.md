<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyScreenLogic

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenLogic`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## Overview

`PartyScreenLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new PartyScreenLogic())`; subclass it to customize.

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
```csharp
public void Initialize(PartyScreenLogicInitializationData initializationData)
```

### AddCommand
```csharp
public void AddCommand(PartyScreenLogic.PartyCommand command)
```

### ValidateCommand
```csharp
public bool ValidateCommand(PartyScreenLogic.PartyCommand command)
```

### GetIndexToInsertTroop
```csharp
public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)
```

### GetActiveSortTypeForSide
```csharp
public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)
```

### GetIsAscendingSortForSide
```csharp
public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)
```

### IsDoneActive
```csharp
public bool IsDoneActive()
```

### IsCancelActive
```csharp
public bool IsCancelActive()
```

### DoneLogic
```csharp
public bool DoneLogic(bool isForced)
```

### OnPartyScreenClosed
```csharp
public void OnPartyScreenClosed(bool fromCancel)
```

### IsTroopTransferable
```csharp
public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)
```

### IsTroopRosterTransferable
```csharp
public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)
```

### IsPrisonerRecruitable
```csharp
public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)
```

### GetRecruitableReasonString
```csharp
public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)
```

### IsExecutable
```csharp
public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)
```

### GetExecutableReasonString
```csharp
public string GetExecutableReasonString(CharacterObject character, bool isExecutable)
```

### GetCurrentQuestCurrentCount
```csharp
public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)
```

### GetCurrentQuestRequiredCount
```csharp
public int GetCurrentQuestRequiredCount()
```

### Reset
```csharp
public void Reset(bool fromCancel)
```

### SavePartyScreenData
```csharp
public void SavePartyScreenData()
```

### ResetToLastSavedPartyScreenData
```csharp
public void ResetToLastSavedPartyScreenData(bool fromCancel)
```

### RemoveZeroCounts
```csharp
public void RemoveZeroCounts()
```

### GetTroopRecruitableAmount
```csharp
public int GetTroopRecruitableAmount(CharacterObject troop)
```

### GetRoster
```csharp
public TroopRoster GetRoster(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType troopType)
```

### IsThereAnyChanges
```csharp
public bool IsThereAnyChanges()
```

### HaveRightSideGainedTroops
```csharp
public bool HaveRightSideGainedTroops()
```

### GetComparer
```csharp
public PartyScreenLogic.TroopComparer GetComparer(PartyScreenLogic.TroopSortType sortType)
```

### PresentationUpdate
```csharp
public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command)
```

### PartyGoldDelegate
```csharp
public delegate void PartyGoldDelegate()
```

### PartyMoraleDelegate
```csharp
public delegate void PartyMoraleDelegate()
```

## Usage Example

```csharp
// Typical usage of PartyScreenLogic (Logic)
Mission.Current.AddMissionBehavior(new PartyScreenLogic());
```

## See Also

- [Complete Class Catalog](../catalog)