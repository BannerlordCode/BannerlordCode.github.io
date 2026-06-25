---
title: "HeadmanNeedsGrainIssueBehavior"
description: "Auto-generated class reference for HeadmanNeedsGrainIssueBehavior."
---
# HeadmanNeedsGrainIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsGrainIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/HeadmanNeedsGrainIssueBehavior.cs`

## Overview

`HeadmanNeedsGrainIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** **Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of HeadmanNeedsGrainIssueBehavior from the subsystem API first
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)