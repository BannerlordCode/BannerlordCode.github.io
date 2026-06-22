<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyCommand`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyCommand

**命名空间:** TaleWorlds.CampaignSystem.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyCommand` 是 `TaleWorlds.CampaignSystem.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)