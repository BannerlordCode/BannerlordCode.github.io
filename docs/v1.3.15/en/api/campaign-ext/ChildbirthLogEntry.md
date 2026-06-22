<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChildbirthLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChildbirthLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ChildbirthLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NewbornHero` | `public Hero NewbornHero { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `NeedsNewLogEntryForTwin` | `public bool NeedsNewLogEntryForTwin { get; }` |
| `NewLogTwin` | `public Hero NewLogTwin { get; }` |


## Key Methods

### ToString

```csharp
public override string ToString()
```

### GetNotificationText

```csharp
public TextObject GetNotificationText()
```

### GetEncyclopediaText

```csharp
public TextObject GetEncyclopediaText()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)