---
title: "RivalGangMovingInIssueBehavior"
description: "Auto-generated class reference for RivalGangMovingInIssueBehavior."
---
# RivalGangMovingInIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RivalGangMovingInIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/RivalGangMovingInIssueBehavior.cs`

## Overview

`RivalGangMovingInIssueBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssueBehavior from the subsystem API first
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
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
`public override IssueFrequency GetFrequency()`

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
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterActionDetail causeOfDeath, ref bool result)`

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

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RivalGangMovingInIssueBehavior rivalGangMovingInIssueBehavior = ...;
rivalGangMovingInIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)