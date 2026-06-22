<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageStateChangedLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageStateChangedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `VillageStateChangedLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### IsRelatedToWar

```csharp
public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)
```

### ToString

```csharp
public override string ToString()
```

### GetAsRumor

```csharp
public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)
```

### GetConversationScoreAndComment

```csharp
public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)