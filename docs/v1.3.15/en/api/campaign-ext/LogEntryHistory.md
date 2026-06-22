<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LogEntryHistory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LogEntryHistory

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `LogEntryHistory` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GameActionLogs` | `public MBReadOnlyList<LogEntry> GameActionLogs { get; }` |


## Key Methods

### DeleteOutdatedLogs

```csharp
public void DeleteOutdatedLogs()
```

### GetStartIndexForComments

```csharp
public int GetStartIndexForComments()
```

### GetRelevantComment

```csharp
public LogEntry GetRelevantComment(Hero conversationHero, out int bestScore, out string bestRelatedLogEntryTag)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)