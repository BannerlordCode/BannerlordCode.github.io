<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ViewDataTrackerCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ViewDataTrackerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ViewDataTrackerCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsPartyNotificationActive` | `public bool IsPartyNotificationActive { get; }` |
| `IsQuestNotificationActive` | `public bool IsQuestNotificationActive { get; }` |
| `UnExaminedQuestLogs` | `public IReadOnlyList<JournalLog> UnExaminedQuestLogs { get; }` |
| `UnExaminedArmies` | `public List<Army> UnExaminedArmies { get; }` |
| `NumOfKingdomArmyNotifications` | `public int NumOfKingdomArmyNotifications { get; }` |
| `IsCharacterNotificationActive` | `public bool IsCharacterNotificationActive { get; }` |
| `UnexaminedFigureheads` | `public IReadOnlyList<Figurehead> UnexaminedFigureheads { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)