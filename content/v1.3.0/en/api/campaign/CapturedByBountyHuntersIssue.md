---
title: "CapturedByBountyHuntersIssue"
description: "Auto-generated class reference for CapturedByBountyHuntersIssue."
---
# CapturedByBountyHuntersIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CapturedByBountyHuntersIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/CapturedByBountyHuntersIssueBehavior.cs`

## Overview

`CapturedByBountyHuntersIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
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
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
capturedByBountyHuntersIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
capturedByBountyHuntersIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
capturedByBountyHuntersIssue.OnCheckForIssue(hero);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the `alternative solution skill` value held by the current object.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
var result = capturedByBountyHuntersIssue.GetAlternativeSolutionSkill(hero);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
var result = capturedByBountyHuntersIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
var result = capturedByBountyHuntersIssue.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
var result = capturedByBountyHuntersIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
var result = capturedByBountyHuntersIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
var result = capturedByBountyHuntersIssue.IssueStayAliveConditions();
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Determines whether the current object is in the `settlement busy` state or condition.

```csharp
// Obtain an instance of CapturedByBountyHuntersIssue from the subsystem API first
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
capturedByBountyHuntersIssue.IsSettlementBusy(settlement, asker, priority);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CapturedByBountyHuntersIssue capturedByBountyHuntersIssue = ...;
capturedByBountyHuntersIssue.RegisterEvents();
```

## See Also

- [Area Index](../)