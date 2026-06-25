---
title: "ProdigalSonIssue"
description: "Auto-generated class reference for ProdigalSonIssue."
---
# ProdigalSonIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class ProdigalSonIssue`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Issues/ProdigalSonIssueBehavior.cs`

## Overview

`ProdigalSonIssue` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
var result = prodigalSonIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
var result = prodigalSonIssue.IssueStayAliveConditions();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
var result = prodigalSonIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
var result = prodigalSonIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
var result = prodigalSonIssue.AlternativeSolutionCondition(explanation);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can move to settlement info is requested event is raised.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.SyncData(dataStore);
```

### CheckForIssue
`public void CheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Verifies whether for issue holds true for the this instance.

```csharp
// Obtain an instance of ProdigalSonIssue from the subsystem API first
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.CheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProdigalSonIssue prodigalSonIssue = ...;
prodigalSonIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)