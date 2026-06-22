<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerBattleEndedLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerBattleEndedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PlayerBattleEndedLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsNavalBattle` | `public bool IsNavalBattle { get; }` |
| `PlayerCasualties` | `public int PlayerCasualties { get; }` |
| `HasHeavyCausality` | `public bool HasHeavyCausality { get; }` |
| `IsAgainstGreatOdds` | `public bool IsAgainstGreatOdds { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |


## Key Methods

### GetImportanceForClan

```csharp
public override ImportanceEnum GetImportanceForClan(Clan clan)
```

### GetConversationScoreAndComment

```csharp
public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

### ToString

```csharp
public override string ToString()
```

### GetNotificationText

```csharp
public TextObject GetNotificationText()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)