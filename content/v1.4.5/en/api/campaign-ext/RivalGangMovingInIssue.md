---
title: "RivalGangMovingInIssue"
description: "Auto-generated class reference for RivalGangMovingInIssue."
---
# RivalGangMovingInIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RivalGangMovingInIssue`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Issues/RivalGangMovingInIssueBehavior.cs`

## Overview

`RivalGangMovingInIssue` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
rivalGangMovingInIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
var result = rivalGangMovingInIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
var result = rivalGangMovingInIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
var result = rivalGangMovingInIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
var result = rivalGangMovingInIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
var result = rivalGangMovingInIssue.IssueStayAliveConditions();
```

### OnHeroCanDieInfoIsRequested
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Invoked when the `hero can die info is requested` event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
rivalGangMovingInIssue.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
rivalGangMovingInIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
rivalGangMovingInIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of RivalGangMovingInIssue from the subsystem API first
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
rivalGangMovingInIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RivalGangMovingInIssue rivalGangMovingInIssue = ...;
rivalGangMovingInIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)