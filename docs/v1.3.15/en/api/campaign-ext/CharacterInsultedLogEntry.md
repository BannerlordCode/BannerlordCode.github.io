<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterInsultedLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterInsultedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterInsultedLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |


## Key Methods

### GetHistoricComment

```csharp
public override TextObject GetHistoricComment(Hero talkTroop)
```

### AsReasonForEnmity

```csharp
public override int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)
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