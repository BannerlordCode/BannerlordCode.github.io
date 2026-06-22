<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `LogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public long Id { get; }` |
| `GameTime` | `public CampaignTime GameTime { get; }` |
| `KeepInHistoryTime` | `public virtual CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public virtual ChatNotificationType NotificationType { get; }` |


## Key Methods

### AddLogEntry

```csharp
public static void AddLogEntry(LogEntry logEntry)
```

### AddLogEntry

```csharp
public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)
```

### GetImportanceForClan

```csharp
public virtual ImportanceEnum GetImportanceForClan(Clan clan)
```

### GetConversationScoreAndComment

```csharp
public virtual void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)
```

### GetAsRumor

```csharp
public virtual int GetAsRumor(Settlement settlement, out TextObject comment)
```

### GetHistoricComment

```csharp
public virtual TextObject GetHistoricComment(Hero talkTroop)
```

### AsReasonForEnmity

```csharp
public virtual int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)
```

### GetValueAsPoliticsAbuseOfPower

```csharp
public virtual int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)
```

### GetValueAsPoliticsSlightedClan

```csharp
public virtual int GetValueAsPoliticsSlightedClan(Hero referenceTroop, Hero liege)
```

### GetValueAsPoliticsShowedWeakness

```csharp
public virtual int GetValueAsPoliticsShowedWeakness(Hero referenceTroop, Hero liege)
```

### IsValid

```csharp
public virtual bool IsValid()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)