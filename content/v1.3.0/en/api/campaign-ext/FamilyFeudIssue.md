---
title: "FamilyFeudIssue"
description: "Auto-generated class reference for FamilyFeudIssue."
---
# FamilyFeudIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssue`
**Base:** none
**File:** `SandBox/Issues/FamilyFeudIssueBehavior.cs`

## Overview

`FamilyFeudIssue` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.SyncData(dataStore);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** **Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have party role or be governor info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can lead party info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.GetAlternativeSolutionSkill(hero);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the LordSolutionCondition logic.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have party role or be governor info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can lead party info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**Purpose:** **Purpose:** Invoked when the mission started event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** **Purpose:** Invoked when the settlement left event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** **Purpose:** Invoked when the before mission opened event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnBeforeMissionOpened();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.RegisterEvents();
```

## See Also

- [Area Index](../)