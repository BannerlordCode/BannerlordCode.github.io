---
title: "LandLordNeedsManualLaborersIssueBehavior"
description: "Auto-generated class reference for LandLordNeedsManualLaborersIssueBehavior."
---
# LandLordNeedsManualLaborersIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandLordNeedsManualLaborersIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LandLordNeedsManualLaborersIssueBehavior.cs`

## Overview

`LandLordNeedsManualLaborersIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
var result = landLordNeedsManualLaborersIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
var result = landLordNeedsManualLaborersIssueBehavior.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
var result = landLordNeedsManualLaborersIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
var result = landLordNeedsManualLaborersIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
var result = landLordNeedsManualLaborersIssueBehavior.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
landLordNeedsManualLaborersIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
landLordNeedsManualLaborersIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LandLordNeedsManualLaborersIssueBehavior from the subsystem API first
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
landLordNeedsManualLaborersIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LandLordNeedsManualLaborersIssueBehavior landLordNeedsManualLaborersIssueBehavior = ...;
landLordNeedsManualLaborersIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)