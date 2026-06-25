---
title: "SmugglersIssue"
description: "Auto-generated class reference for SmugglersIssue."
---
# SmugglersIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmugglersIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/SmugglersIssueBehavior.cs`

## Overview

`SmugglersIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public override TextObject IssueAlternativeSolutionFailLog { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
smugglersIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
smugglersIssue.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
var result = smugglersIssue.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
var result = smugglersIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
var result = smugglersIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
var result = smugglersIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
var result = smugglersIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of SmugglersIssue from the subsystem API first
SmugglersIssue smugglersIssue = ...;
var result = smugglersIssue.IssueStayAliveConditions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SmugglersIssue smugglersIssue = ...;
smugglersIssue.RegisterEvents();
```

## See Also

- [Area Index](../)