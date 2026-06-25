---
title: "HeadmanNeedsGrainIssueBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeadmanNeedsGrainIssueBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeadmanNeedsGrainIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsGrainIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/HeadmanNeedsGrainIssueBehavior.cs`

## Overview

`HeadmanNeedsGrainIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Handles logic related to `alternative solution start consequence`.

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

## Usage Example

```csharp
var value = new HeadmanNeedsGrainIssueBehavior();
value.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Complete Class Catalog](../catalog)