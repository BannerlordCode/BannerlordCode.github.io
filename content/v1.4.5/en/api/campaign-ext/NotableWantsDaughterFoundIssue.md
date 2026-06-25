---
title: "NotableWantsDaughterFoundIssue"
description: "Auto-generated class reference for NotableWantsDaughterFoundIssue."
---
# NotableWantsDaughterFoundIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class NotableWantsDaughterFoundIssue`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Issues/NotableWantsDaughterFoundIssueBehavior.cs`

## Overview

`NotableWantsDaughterFoundIssue` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
var result = notableWantsDaughterFoundIssue.GetFrequency();
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
var result = notableWantsDaughterFoundIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
var result = notableWantsDaughterFoundIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
var result = notableWantsDaughterFoundIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
var result = notableWantsDaughterFoundIssue.IssueStayAliveConditions();
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** **Purpose:** Invoked when the before mission opened event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.OnBeforeMissionOpened();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can move to settlement info is requested event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssue from the subsystem API first
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NotableWantsDaughterFoundIssue notableWantsDaughterFoundIssue = ...;
notableWantsDaughterFoundIssue.GetFrequency();
```

## See Also

- [Area Index](../)