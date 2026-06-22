<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordsNeedsTutorIssue`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordsNeedsTutorIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `LordsNeedsTutorIssue` is a class in the `TaleWorlds.CampaignSystem.Issues` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### OnCheckForIssue

```csharp
public void OnCheckForIssue(Hero hero)
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetFrequency

```csharp
public override IssueBase.IssueFrequency GetFrequency()
```

### IssueStayAliveConditions

```csharp
public override bool IssueStayAliveConditions()
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested

```csharp
public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested

```csharp
public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanLeadPartyInfoIsRequested

```csharp
public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested

```csharp
public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroCanMarryInfoIsRequested

```csharp
public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)
```

### OnHeroGainedSkill

```csharp
public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)