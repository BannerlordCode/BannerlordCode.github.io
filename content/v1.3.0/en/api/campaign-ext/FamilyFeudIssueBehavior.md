---
title: "FamilyFeudIssueBehavior"
description: "Auto-generated class reference for FamilyFeudIssueBehavior."
---
# FamilyFeudIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/Issues/FamilyFeudIssueBehavior.cs`

## Overview

`FamilyFeudIssueBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.SyncData(dataStore);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can be selected in inventory info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have party role or be governor info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can lead party info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the `alternative solution skill` value held by the current object.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can be selected in inventory info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have party role or be governor info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can lead party info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**Purpose:** Invoked when the `mission started` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the `settlement left` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** Invoked when the `before mission opened` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssueBehavior from the subsystem API first
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnBeforeMissionOpened();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)