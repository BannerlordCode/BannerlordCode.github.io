---
title: "LesserNobleRevoltIssue"
description: "Auto-generated class reference for LesserNobleRevoltIssue."
---
# LesserNobleRevoltIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LesserNobleRevoltIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LesserNobleRevoltIssueBehavior.cs`

## Overview

`LesserNobleRevoltIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
var result = lesserNobleRevoltIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
var result = lesserNobleRevoltIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
var result = lesserNobleRevoltIssue.AlternativeSolutionCondition(explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
var result = lesserNobleRevoltIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
var result = lesserNobleRevoltIssue.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
lesserNobleRevoltIssue.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
lesserNobleRevoltIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
lesserNobleRevoltIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of LesserNobleRevoltIssue from the subsystem API first
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
lesserNobleRevoltIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LesserNobleRevoltIssue lesserNobleRevoltIssue = ...;
lesserNobleRevoltIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)