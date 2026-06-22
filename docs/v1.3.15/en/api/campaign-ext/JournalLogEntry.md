<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JournalLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JournalLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `JournalLogEntry` is a class in the `TaleWorlds.CampaignSystem.LogEntries` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |


## Key Methods

### IsRelatedTo

```csharp
public bool IsRelatedTo(MBObjectBase obj)
```

### GetEntries

```csharp
public IEnumerable<JournalLog> GetEntries()
```

### Update

```csharp
public void Update(MBReadOnlyList<JournalLog> entries, IssueBase.IssueUpdateDetails issueStatus = IssueBase.IssueUpdateDetails.None)
```

### Update

```csharp
public void Update(MBReadOnlyList<JournalLog> entries, QuestBase.QuestCompleteDetails questCompletionDetail)
```

### IsEndedUnsuccessfully

```csharp
public bool IsEndedUnsuccessfully()
```

### IsEnded

```csharp
public bool IsEnded()
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)