<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewDataTrackerCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ViewDataTrackerCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ViewDataTrackerCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive { get; }` |
| `IsQuestNotificationActive` | `public bool IsQuestNotificationActive { get; }` |
| `UnExaminedQuestLogs` | `public IReadOnlyList<JournalLog> UnExaminedQuestLogs { get; }` |
| `UnExaminedArmies` | `public List<Army> UnExaminedArmies { get; }` |
| `NumOfKingdomArmyNotifications` | `public int NumOfKingdomArmyNotifications { get; }` |
| `IsCharacterNotificationActive` | `public bool IsCharacterNotificationActive { get; }` |
| `UnexaminedFigureheads` | `public IReadOnlyList<Figurehead> UnexaminedFigureheads { get; }` |


## 主要方法

### GetPartyNotificationText

```csharp
public TextObject GetPartyNotificationText()
```

### ClearPartyNotification

```csharp
public void ClearPartyNotification()
```

### UpdatePartyNotification

```csharp
public void UpdatePartyNotification()
```

### GetQuestNotificationText

```csharp
public TextObject GetQuestNotificationText()
```

### OnQuestLogExamined

```csharp
public void OnQuestLogExamined(JournalLog log)
```

### OnArmyExamined

```csharp
public void OnArmyExamined(Army army)
```

### ClearCharacterNotification

```csharp
public void ClearCharacterNotification()
```

### GetCharacterNotificationText

```csharp
public TextObject GetCharacterNotificationText()
```

### GetMapBarExtendedState

```csharp
public bool GetMapBarExtendedState()
```

### SetMapBarExtendedState

```csharp
public void SetMapBarExtendedState(bool isExtended)
```

### SetInventoryLocks

```csharp
public void SetInventoryLocks(IEnumerable<string> locks)
```

### GetInventoryLocks

```csharp
public IEnumerable<string> GetInventoryLocks()
```

### InventorySetSortPreference

```csharp
public void InventorySetSortPreference(int inventoryMode, int sortOption, int sortState)
```

### InventoryGetSortPreference

```csharp
public Tuple<int, int> InventoryGetSortPreference(int inventoryMode)
```

### SetPartyTroopLocks

```csharp
public void SetPartyTroopLocks(IEnumerable<string> locks)
```

### SetPartyPrisonerLocks

```csharp
public void SetPartyPrisonerLocks(IEnumerable<string> locks)
```

### SetPartySortType

```csharp
public void SetPartySortType(int sortType)
```

### SetIsPartySortAscending

```csharp
public void SetIsPartySortAscending(bool isAscending)
```

### GetPartyTroopLocks

```csharp
public IEnumerable<string> GetPartyTroopLocks()
```

### GetPartyPrisonerLocks

```csharp
public IEnumerable<string> GetPartyPrisonerLocks()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)