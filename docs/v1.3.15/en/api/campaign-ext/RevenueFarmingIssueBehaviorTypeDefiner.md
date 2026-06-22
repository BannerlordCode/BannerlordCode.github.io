<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RevenueFarmingIssueBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RevenueFarmingIssueBehaviorTypeDefiner

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `RevenueFarmingIssueBehaviorTypeDefiner` is a class in the `TaleWorlds.CampaignSystem.Issues` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `RevenueVillages` | `public List<RevenueFarmingIssueBehavior.RevenueVillage> RevenueVillages { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |
| `CollectProgress` | `public float CollectProgress { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### OnVillageEventWithIdSpawned

```csharp
public void OnVillageEventWithIdSpawned(string Id)
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### OnCheckForIssue

```csharp
public void OnCheckForIssue(Hero hero)
```

### GetFrequency

```csharp
public override IssueBase.IssueFrequency GetFrequency()
```

### IssueStayAliveConditions

```csharp
public override bool IssueStayAliveConditions()
```

### RevenuesAreDeliveredToSteward

```csharp
public void RevenuesAreDeliveredToSteward()
```

### FindCurrentRevenueVillage

```csharp
public RevenueFarmingIssueBehavior.RevenueVillage FindCurrentRevenueVillage()
```

### SetVillageAsCompleted

```csharp
public void SetVillageAsCompleted(RevenueFarmingIssueBehavior.RevenueVillage village, bool addLog = true)
```

### SetDone

```csharp
public void SetDone()
```

### SetAdditionalProgress

```csharp
public void SetAdditionalProgress(float progress)
```

### GetIsCompleted

```csharp
public bool GetIsCompleted()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)