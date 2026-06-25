---
title: "NotableWantsDaughterFoundIssueBehavior"
description: "Auto-generated class reference for NotableWantsDaughterFoundIssueBehavior."
---
# NotableWantsDaughterFoundIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class NotableWantsDaughterFoundIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/NotableWantsDaughterFoundIssueBehavior.cs`

## Overview

`NotableWantsDaughterFoundIssueBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
var result = notableWantsDaughterFoundIssueBehavior.GetFrequency();
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
var result = notableWantsDaughterFoundIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
var result = notableWantsDaughterFoundIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
var result = notableWantsDaughterFoundIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
var result = notableWantsDaughterFoundIssueBehavior.IssueStayAliveConditions();
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**Purpose:** Invoked when the before mission opened event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.OnBeforeMissionOpened();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can move to settlement info is requested event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of NotableWantsDaughterFoundIssueBehavior from the subsystem API first
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NotableWantsDaughterFoundIssueBehavior notableWantsDaughterFoundIssueBehavior = ...;
notableWantsDaughterFoundIssueBehavior.GetFrequency();
```

## See Also

- [Area Index](../)