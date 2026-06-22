<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakePeaceLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MakePeaceLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MakePeaceLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |


## Key Methods

### GetAsRumor

```csharp
public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)
```

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