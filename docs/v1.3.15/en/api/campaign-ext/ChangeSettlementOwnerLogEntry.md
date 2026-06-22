<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeSettlementOwnerLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeSettlementOwnerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ChangeSettlementOwnerLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetImportanceForClan

```csharp
public override ImportanceEnum GetImportanceForClan(Clan clan)
```

### IsRelatedToWar

```csharp
public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)
```

### GetConversationScoreAndComment

```csharp
public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

### GetAsRumor

```csharp
public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)
```

### ToString

```csharp
public override string ToString()
```

### GetEncyclopediaText

```csharp
public TextObject GetEncyclopediaText()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)