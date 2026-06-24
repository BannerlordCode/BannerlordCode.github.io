<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageEvent

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageEvent`
**Area:** campaign-ext

## Overview

`VillageEvent` lives in `TaleWorlds.CampaignSystem.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**Purpose:** Called when the `village event with id spawned` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** Handles logic related to `revenues are delivered to steward`.

### FindCurrentRevenueVillage
`public RevenueFarmingIssueBehavior.RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** Handles logic related to `find current revenue village`.

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueFarmingIssueBehavior.RevenueVillage village, bool addLog = true)`

**Purpose:** Sets the value or state of `village as completed`.

### SetDone
`public void SetDone()`

**Purpose:** Sets the value or state of `done`.

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** Sets the value or state of `additional progress`.

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** Gets the current value of `is completed`.

## Usage Example

```csharp
// First obtain a VillageEvent instance from game state, then call one of its public methods
var value = new VillageEvent();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
