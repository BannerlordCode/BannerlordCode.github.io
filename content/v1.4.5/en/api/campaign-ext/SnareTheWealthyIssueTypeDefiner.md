---
title: "SnareTheWealthyIssueTypeDefiner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SnareTheWealthyIssueTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SnareTheWealthyIssueTypeDefiner

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class SnareTheWealthyIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`SnareTheWealthyIssueTypeDefiner` lives in `SandBox.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Handles logic related to `is troop type needed by alternative solution`.

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### GetMountAndHarnessVisualIdsForQuestCaravan
`public void GetMountAndHarnessVisualIdsForQuestCaravan(CultureObject culture, out string mountStringId, out string harnessStringId)`

**Purpose:** Gets the current value of `mount and harness visual ids for quest caravan`.

### OnWarDeclared
`public void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarDetail reason)`

**Purpose:** Called when the `war declared` event is raised.

### OnVillageStateChanged
`public void OnVillageStateChanged(Village village, VillageStates oldState, VillageStates newState, MobileParty raiderParty)`

**Purpose:** Called when the `village state changed` event is raised.

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Called when the `map event ended` event is raised.

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Called when the `settlement left` event is raised.

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
// First obtain a SnareTheWealthyIssueTypeDefiner instance from game state, then call one of its public methods
var value = new SnareTheWealthyIssueTypeDefiner();
value.AlternativeSolutionCondition(explanation);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
