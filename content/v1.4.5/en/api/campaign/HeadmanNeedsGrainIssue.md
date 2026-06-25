---
title: "HeadmanNeedsGrainIssue"
description: "Auto-generated class reference for HeadmanNeedsGrainIssue."
---
# HeadmanNeedsGrainIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsGrainIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/HeadmanNeedsGrainIssueBehavior.cs`

## Overview

`HeadmanNeedsGrainIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
var result = headmanNeedsGrainIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
var result = headmanNeedsGrainIssue.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
headmanNeedsGrainIssue.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
var result = headmanNeedsGrainIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
var result = headmanNeedsGrainIssue.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
headmanNeedsGrainIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
headmanNeedsGrainIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssue from the subsystem API first
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
headmanNeedsGrainIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeadmanNeedsGrainIssue headmanNeedsGrainIssue = ...;
headmanNeedsGrainIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)