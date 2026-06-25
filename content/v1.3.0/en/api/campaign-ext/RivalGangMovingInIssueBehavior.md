---
title: "RivalGangMovingInIssueBehavior"
description: "Auto-generated class reference for RivalGangMovingInIssueBehavior."
---
# RivalGangMovingInIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RivalGangMovingInIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/Issues/RivalGangMovingInIssueBehavior.cs`

## Overview

`RivalGangMovingInIssueBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `RivalGangLeader` | `public Hero RivalGangLeader { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.SyncData(dataStore);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
var result = rivalGangMovingInIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
var result = rivalGangMovingInIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
var result = rivalGangMovingInIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
var result = rivalGangMovingInIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
var result = rivalGangMovingInIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
var result = rivalGangMovingInIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanDieInfoIsRequested
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can die info is requested event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)