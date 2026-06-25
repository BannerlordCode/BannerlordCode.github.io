---
title: "RuralNotableInnAndOutIssueBehavior"
description: "Auto-generated class reference for RuralNotableInnAndOutIssueBehavior."
---
# RuralNotableInnAndOutIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RuralNotableInnAndOutIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/RuralNotableInnAndOutIssueBehavior.cs`

## Overview

`RuralNotableInnAndOutIssueBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |

## Key Methods

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.IssueStayAliveConditions();
```

### IsLocationTrackedByQuest
`public override IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**Purpose:** Determines whether the current object is in the `location tracked by quest` state or condition.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.IsLocationTrackedByQuest(location);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of RuralNotableInnAndOutIssueBehavior from the subsystem API first
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)