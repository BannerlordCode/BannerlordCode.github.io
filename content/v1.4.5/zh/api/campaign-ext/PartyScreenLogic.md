---
title: "PartyScreenLogic"
description: "PartyScreenLogic 的自动生成类参考。"
---
# PartyScreenLogic

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenLogic`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## 概述

`PartyScreenLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `PartyScreenLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

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

## 主要方法

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.Initialize(initializationData);
```

### AddCommand
`public void AddCommand(PartyScreenLogic.PartyCommand command)`

**用途 / Purpose:** 将 command 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.AddCommand(command);
```

### ValidateCommand
`public bool ValidateCommand(PartyScreenLogic.PartyCommand command)`

**用途 / Purpose:** 检查command是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.ValidateCommand(command);
```

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)`

**用途 / Purpose:** 读取并返回当前对象中 index to insert troop 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetIndexToInsertTroop(side, type, troop);
```

### GetActiveSortTypeForSide
`public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)`

**用途 / Purpose:** 读取并返回当前对象中 active sort type for side 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetActiveSortTypeForSide(side);
```

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)`

**用途 / Purpose:** 读取并返回当前对象中 is ascending sort for side 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetIsAscendingSortForSide(side);
```

### IsDoneActive
`public bool IsDoneActive()`

**用途 / Purpose:** 判断当前对象是否处于 done active 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsDoneActive();
```

### IsCancelActive
`public bool IsCancelActive()`

**用途 / Purpose:** 判断当前对象是否处于 cancel active 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsCancelActive();
```

### DoneLogic
`public bool DoneLogic(bool isForced)`

**用途 / Purpose:** 调用 DoneLogic 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.DoneLogic(false);
```

### OnPartyScreenClosed
`public void OnPartyScreenClosed(bool fromCancel)`

**用途 / Purpose:** 在 party screen closed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.OnPartyScreenClosed(false);
```

### IsTroopTransferable
`public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)`

**用途 / Purpose:** 判断当前对象是否处于 troop transferable 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsTroopTransferable(troopType, character, 0);
```

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)`

**用途 / Purpose:** 判断当前对象是否处于 troop roster transferable 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsTroopRosterTransferable(troopType);
```

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

**用途 / Purpose:** 判断当前对象是否处于 prisoner recruitable 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsPrisonerRecruitable(troopType, character, side);
```

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)`

**用途 / Purpose:** 读取并返回当前对象中 recruitable reason string 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetRecruitableReasonString(character, false, 0, showStackModifierText);
```

### IsExecutable
`public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

**用途 / Purpose:** 判断当前对象是否处于 executable 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsExecutable(troopType, character, side);
```

### GetExecutableReasonString
`public string GetExecutableReasonString(CharacterObject character, bool isExecutable)`

**用途 / Purpose:** 读取并返回当前对象中 executable reason string 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetExecutableReasonString(character, false);
```

### GetCurrentQuestCurrentCount
`public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)`

**用途 / Purpose:** 读取并返回当前对象中 current quest current count 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetCurrentQuestCurrentCount(false, false);
```

### GetCurrentQuestRequiredCount
`public int GetCurrentQuestRequiredCount()`

**用途 / Purpose:** 读取并返回当前对象中 current quest required count 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetCurrentQuestRequiredCount();
```

### Reset
`public void Reset(bool fromCancel)`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.Reset(false);
```

### SavePartyScreenData
`public void SavePartyScreenData()`

**用途 / Purpose:** 将 party screen data 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.SavePartyScreenData();
```

### ResetToLastSavedPartyScreenData
`public void ResetToLastSavedPartyScreenData(bool fromCancel)`

**用途 / Purpose:** 将 to last saved party screen data 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.ResetToLastSavedPartyScreenData(false);
```

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**用途 / Purpose:** 从当前容器或状态中移除 zero counts。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.RemoveZeroCounts();
```

### GetTroopRecruitableAmount
`public int GetTroopRecruitableAmount(CharacterObject troop)`

**用途 / Purpose:** 读取并返回当前对象中 troop recruitable amount 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetTroopRecruitableAmount(troop);
```

### GetRoster
`public TroopRoster GetRoster(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType troopType)`

**用途 / Purpose:** 读取并返回当前对象中 roster 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetRoster(side, troopType);
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 判断当前对象是否处于 there any changes 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.IsThereAnyChanges();
```

### HaveRightSideGainedTroops
`public bool HaveRightSideGainedTroops()`

**用途 / Purpose:** 调用 HaveRightSideGainedTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.HaveRightSideGainedTroops();
```

### GetComparer
`public PartyScreenLogic.TroopComparer GetComparer(PartyScreenLogic.TroopSortType sortType)`

**用途 / Purpose:** 读取并返回当前对象中 comparer 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.GetComparer(sortType);
```

### PresentationUpdate
`public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command)`

**用途 / Purpose:** 调用 PresentationUpdate 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PresentationUpdate(command);
```

### PartyGoldDelegate
`public delegate void PartyGoldDelegate()`

**用途 / Purpose:** 调用 PartyGoldDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyGoldDelegate();
```

### PartyMoraleDelegate
`public delegate void PartyMoraleDelegate()`

**用途 / Purpose:** 调用 PartyMoraleDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyMoraleDelegate();
```

### PartyInfluenceDelegate
`public delegate void PartyInfluenceDelegate()`

**用途 / Purpose:** 调用 PartyInfluenceDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyInfluenceDelegate();
```

### PartyHorseDelegate
`public delegate void PartyHorseDelegate()`

**用途 / Purpose:** 调用 PartyHorseDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.PartyHorseDelegate();
```

### AfterResetDelegate
`public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel)`

**用途 / Purpose:** 调用 AfterResetDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.AfterResetDelegate(partyScreenLogic, false);
```

### FillForTransferTroop
`public void FillForTransferTroop(PartyScreenLogic.PartyRosterSide fromSide, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**用途 / Purpose:** 调用 FillForTransferTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferTroop(fromSide, type, character, 0, 0, 0);
```

### FillForShiftTroop
`public void FillForShiftTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int targetIndex)`

**用途 / Purpose:** 调用 FillForShiftTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForShiftTroop(side, type, character, 0);
```

### FillForTransferTroopToLeaderSlot
`public void FillForTransferTroopToLeaderSlot(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber, int woundedNumber, int targetIndex)`

**用途 / Purpose:** 调用 FillForTransferTroopToLeaderSlot 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferTroopToLeaderSlot(side, type, character, 0, 0, 0);
```

### FillForTransferPartyLeaderTroop
`public void FillForTransferPartyLeaderTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int totalNumber)`

**用途 / Purpose:** 调用 FillForTransferPartyLeaderTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferPartyLeaderTroop(side, type, character, 0);
```

### FillForUpgradeTroop
`public void FillForUpgradeTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int number, int upgradeTargetType, int index)`

**用途 / Purpose:** 调用 FillForUpgradeTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForUpgradeTroop(side, type, character, 0, 0, 0);
```

### FillForRecruitTroop
`public void FillForRecruitTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character, int number, int index)`

**用途 / Purpose:** 调用 FillForRecruitTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForRecruitTroop(side, type, character, 0, 0);
```

### FillForExecuteTroop
`public void FillForExecuteTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, CharacterObject character)`

**用途 / Purpose:** 调用 FillForExecuteTroop 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForExecuteTroop(side, type, character);
```

### FillForTransferAllTroops
`public void FillForTransferAllTroops(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type)`

**用途 / Purpose:** 调用 FillForTransferAllTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForTransferAllTroops(side, type);
```

### FillForSortTroops
`public void FillForSortTroops(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopSortType sortType, bool isAscending)`

**用途 / Purpose:** 调用 FillForSortTroops 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.FillForSortTroops(side, sortType, false);
```

### SetIsAscending
`public void SetIsAscending(bool isAscending)`

**用途 / Purpose:** 为 is ascending 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
partyScreenLogic.SetIsAscending(false);
```

### Compare
`public int Compare(TroopRosterElement x, TroopRosterElement y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 PartyScreenLogic 实例
PartyScreenLogic partyScreenLogic = ...;
var result = partyScreenLogic.Compare(x, y);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<PartyScreenLogic>();
```

## 参见

- [本区域目录](../)