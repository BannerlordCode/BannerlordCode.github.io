---
title: "FamilyFeudIssue"
description: "Auto-generated class reference for FamilyFeudIssue."
---
# FamilyFeudIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssue`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Issues/FamilyFeudIssueBehavior.cs`

## Overview

`FamilyFeudIssue` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |

## Key Methods

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can be selected in inventory info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have party role or be governor info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can lead party info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can be selected in inventory info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have party role or be governor info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can lead party info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**Purpose:** Invoked when the `mission started` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the `settlement left` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** Invoked when the `before mission opened` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnBeforeMissionOpened();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of FamilyFeudIssue from the subsystem API first
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

## See Also

- [Area Index](../)