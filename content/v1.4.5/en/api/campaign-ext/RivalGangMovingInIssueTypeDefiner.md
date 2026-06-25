---
title: "RivalGangMovingInIssueTypeDefiner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RivalGangMovingInIssueTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RivalGangMovingInIssueTypeDefiner

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RivalGangMovingInIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`RivalGangMovingInIssueTypeDefiner` lives in `SandBox.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `RivalGangLeader` | `public Hero RivalGangLeader { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Handles logic related to `is troop type needed by alternative solution`.

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### OnHeroCanDieInfoIsRequested
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Called when the `hero can die info is requested` event is raised.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
// First obtain a RivalGangMovingInIssueTypeDefiner instance from game state, then call one of its public methods
var value = new RivalGangMovingInIssueTypeDefiner();
value.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
