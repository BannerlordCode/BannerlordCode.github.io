<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentWonLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentWonLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TournamentWonLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Winner` | `public Hero Winner { get; }` |
| `Town` | `public Town Town { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |


## Key Methods

### ToString

```csharp
public override string ToString()
```

### GetEncyclopediaText

```csharp
public TextObject GetEncyclopediaText()
```

### GetNotificationText

```csharp
public TextObject GetNotificationText()
```

### GetConversationScoreAndComment

```csharp
public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

### IsValid

```csharp
public override bool IsValid()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)