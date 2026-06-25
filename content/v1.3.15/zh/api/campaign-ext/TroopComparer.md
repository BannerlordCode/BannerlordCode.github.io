---
title: "TroopComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopComparer

**命名空间:** TaleWorlds.CampaignSystem.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** `public abstract class TroopComparer : IComparer<TroopRosterElement>`
**Base:** `IComparer<TroopRosterElement>`
**领域:** campaign-ext

## 概述

`TroopComparer` 位于 `TaleWorlds.CampaignSystem.Party`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

## 主要方法

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddCommand
`public void AddCommand(PartyScreenLogic.PartyCommand command)`

**用途 / Purpose:** 向当前集合/状态中添加 `command`。

### ValidateCommand
`public bool ValidateCommand(PartyScreenLogic.PartyCommand command)`

**用途 / Purpose:** 处理 `validate command` 相关逻辑。

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)`

**用途 / Purpose:** 获取 `index to insert troop` 的当前值。

### GetActiveSortTypeForSide
`public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)`

**用途 / Purpose:** 获取 `active sort type for side` 的当前值。

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)`

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
`public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)`

**用途 / Purpose:** 处理 `is troop transferable` 相关逻辑。

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)`

**用途 / Purpose:** 处理 `is troop roster transferable` 相关逻辑。

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

**用途 / Purpose:** 处理 `is prisoner recruitable` 相关逻辑。

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)`

**用途 / Purpose:** 获取 `recruitable reason string` 的当前值。

### IsExecutable
`public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)`

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

## 使用示例

```csharp
var implementation = new CustomTroopComparer();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
