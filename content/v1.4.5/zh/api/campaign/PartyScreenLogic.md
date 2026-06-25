---
title: "PartyScreenLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyScreenLogic`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyScreenLogic

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenLogic`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenLogic.cs`

## 概述

`PartyScreenLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `PartyScreenLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

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

## 主要方法

### PresentationUpdate
`public delegate void PresentationUpdate(PartyCommand command)`

**用途 / Purpose:** 处理 `presentation update` 相关逻辑。

### PartyGoldDelegate
`public delegate void PartyGoldDelegate()`

**用途 / Purpose:** 处理 `party gold delegate` 相关逻辑。

### PartyMoraleDelegate
`public delegate void PartyMoraleDelegate()`

**用途 / Purpose:** 处理 `party morale delegate` 相关逻辑。

### PartyInfluenceDelegate
`public delegate void PartyInfluenceDelegate()`

**用途 / Purpose:** 处理 `party influence delegate` 相关逻辑。

### PartyHorseDelegate
`public delegate void PartyHorseDelegate()`

**用途 / Purpose:** 处理 `party horse delegate` 相关逻辑。

### AfterResetDelegate
`public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel)`

**用途 / Purpose:** 处理 `after reset delegate` 相关逻辑。

### FillForTransferTroop
`public void FillForTransferTroop(PartyRosterSide fromSide, TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**用途 / Purpose:** 处理 `fill for transfer troop` 相关逻辑。

### FillForShiftTroop
`public void FillForShiftTroop(PartyRosterSide side, TroopType type, CharacterObject character, int targetIndex)`

**用途 / Purpose:** 处理 `fill for shift troop` 相关逻辑。

### FillForTransferTroopToLeaderSlot
`public void FillForTransferTroopToLeaderSlot(PartyRosterSide side, TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**用途 / Purpose:** 处理 `fill for transfer troop to leader slot` 相关逻辑。

### FillForTransferPartyLeaderTroop
`public void FillForTransferPartyLeaderTroop(PartyRosterSide side, TroopType type, CharacterObject character, int totalNumber)`

**用途 / Purpose:** 处理 `fill for transfer party leader troop` 相关逻辑。

### FillForUpgradeTroop
`public void FillForUpgradeTroop(PartyRosterSide side, TroopType type, CharacterObject character, int number, int upgradeTargetType, int index)`

**用途 / Purpose:** 处理 `fill for upgrade troop` 相关逻辑。

### FillForRecruitTroop
`public void FillForRecruitTroop(PartyRosterSide side, TroopType type, CharacterObject character, int number, int index)`

**用途 / Purpose:** 处理 `fill for recruit troop` 相关逻辑。

### FillForExecuteTroop
`public void FillForExecuteTroop(PartyRosterSide side, TroopType type, CharacterObject character)`

**用途 / Purpose:** 处理 `fill for execute troop` 相关逻辑。

### FillForTransferAllTroops
`public void FillForTransferAllTroops(PartyRosterSide side, TroopType type)`

**用途 / Purpose:** 处理 `fill for transfer all troops` 相关逻辑。

### FillForSortTroops
`public void FillForSortTroops(PartyRosterSide side, TroopSortType sortType, bool isAscending)`

**用途 / Purpose:** 处理 `fill for sort troops` 相关逻辑。

### SetIsAscending
`public void SetIsAscending(bool isAscending)`

**用途 / Purpose:** 设置 `is ascending` 的值或状态。

### Compare
`public int Compare(TroopRosterElement x, TroopRosterElement y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddCommand
`public void AddCommand(PartyCommand command)`

**用途 / Purpose:** 向当前集合/状态中添加 `command`。

### ValidateCommand
`public bool ValidateCommand(PartyCommand command)`

**用途 / Purpose:** 处理 `validate command` 相关逻辑。

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyRosterSide side, TroopType type, TroopRosterElement troop)`

**用途 / Purpose:** 获取 `index to insert troop` 的当前值。

### GetActiveSortTypeForSide
`public TroopSortType GetActiveSortTypeForSide(PartyRosterSide side)`

**用途 / Purpose:** 获取 `active sort type for side` 的当前值。

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyRosterSide side)`

**用途 / Purpose:** 获取 `is ascending sort for side` 的当前值。

### IsDoneActive
`public bool IsDoneActive()`

**用途 / Purpose:** 处理 `is done active` 相关逻辑。

### IsCancelActive
`public bool IsCancelActive()`

**用途 / Purpose:** 处理 `is cancel active` 相关逻辑。

### DoneLogic
`public bool DoneLogic(bool isForced)`

**用途 / Purpose:** 处理 `done logic` 相关逻辑。

### OnPartyScreenClosed
`public void OnPartyScreenClosed(bool fromCancel)`

**用途 / Purpose:** 当 `party screen closed` 事件触发时调用此方法。

### IsTroopTransferable
`public bool IsTroopTransferable(TroopType troopType, CharacterObject character, int side)`

**用途 / Purpose:** 处理 `is troop transferable` 相关逻辑。

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(TroopType troopType)`

**用途 / Purpose:** 处理 `is troop roster transferable` 相关逻辑。

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(TroopType troopType, CharacterObject character, PartyRosterSide side)`

**用途 / Purpose:** 处理 `is prisoner recruitable` 相关逻辑。

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)`

**用途 / Purpose:** 获取 `recruitable reason string` 的当前值。

### IsExecutable
`public bool IsExecutable(TroopType troopType, CharacterObject character, PartyRosterSide side)`

**用途 / Purpose:** 处理 `is executable` 相关逻辑。

### GetExecutableReasonString
`public string GetExecutableReasonString(CharacterObject character, bool isExecutable)`

**用途 / Purpose:** 获取 `executable reason string` 的当前值。

### GetCurrentQuestCurrentCount
`public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)`

**用途 / Purpose:** 获取 `current quest current count` 的当前值。

### GetCurrentQuestRequiredCount
`public int GetCurrentQuestRequiredCount()`

**用途 / Purpose:** 获取 `current quest required count` 的当前值。

### Reset
`public void Reset(bool fromCancel)`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### SavePartyScreenData
`public void SavePartyScreenData()`

**用途 / Purpose:** 保存 `party screen data` 数据。

### ResetToLastSavedPartyScreenData
`public void ResetToLastSavedPartyScreenData(bool fromCancel)`

**用途 / Purpose:** 将 `to last saved party screen data` 重置为初始状态。

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**用途 / Purpose:** 从当前集合/状态中移除 `zero counts`。

### GetTroopRecruitableAmount
`public int GetTroopRecruitableAmount(CharacterObject troop)`

**用途 / Purpose:** 获取 `troop recruitable amount` 的当前值。

### GetRoster
`public TroopRoster GetRoster(PartyRosterSide side, TroopType troopType)`

**用途 / Purpose:** 获取 `roster` 的当前值。

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 处理 `is there any changes` 相关逻辑。

### HaveRightSideGainedTroops
`public bool HaveRightSideGainedTroops()`

**用途 / Purpose:** 处理 `have right side gained troops` 相关逻辑。

### GetComparer
`public TroopComparer GetComparer(TroopSortType sortType)`

**用途 / Purpose:** 获取 `comparer` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new PartyScreenLogic());
```

## 参见

- [完整类目录](../catalog)