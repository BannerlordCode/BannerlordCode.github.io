<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LadysKnightOutIssueTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LadysKnightOutIssueTypeDefiner

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LadysKnightOutIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`LadysKnightOutIssueTypeDefiner` lives in `TaleWorlds.CampaignSystem.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterLordExplanation` | `public override TextObject IssuePlayerResponseAfterLordExplanation { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

## Usage Example

```csharp
// First obtain a LadysKnightOutIssueTypeDefiner instance from game state, then call one of its public methods
var value = new LadysKnightOutIssueTypeDefiner();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
