<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BesiegeSettlementLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BesiegeSettlementLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BesiegeSettlementLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `OwnerClanBeforeBesiege` | `public Clan OwnerClanBeforeBesiege { get; }` |


## Key Methods

### ToString

```csharp
public override string ToString()
```

### IsRelatedToWar

```csharp
public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)
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