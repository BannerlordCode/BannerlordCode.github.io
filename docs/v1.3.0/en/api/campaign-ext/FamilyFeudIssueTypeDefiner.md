<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FamilyFeudIssueTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FamilyFeudIssueTypeDefiner

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssueTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`FamilyFeudIssueTypeDefiner` lives in `SandBox.Issues`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterLordExplanation` | `public override TextObject IssuePlayerResponseAfterLordExplanation { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |

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

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can be selected in inventory info is requested` event is raised.

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have party role or be governor info is requested` event is raised.

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can lead party info is requested` event is raised.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Gets the current value of `alternative solution skill`.

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `lord solution condition`.

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
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can be selected in inventory info is requested` event is raised.

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have party role or be governor info is requested` event is raised.

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can lead party info is requested` event is raised.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**Purpose:** Called when the `mission started` event is raised.

## Usage Example

```csharp
// First obtain a FamilyFeudIssueTypeDefiner instance from game state, then call one of its public methods
var value = new FamilyFeudIssueTypeDefiner();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
