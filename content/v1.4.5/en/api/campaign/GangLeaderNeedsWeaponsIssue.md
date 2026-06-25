---
title: "GangLeaderNeedsWeaponsIssue"
description: "Auto-generated class reference for GangLeaderNeedsWeaponsIssue."
---
# GangLeaderNeedsWeaponsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsWeaponsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs`

## Overview

`GangLeaderNeedsWeaponsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
var result = gangLeaderNeedsWeaponsIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
var result = gangLeaderNeedsWeaponsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
var result = gangLeaderNeedsWeaponsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
var result = gangLeaderNeedsWeaponsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
var result = gangLeaderNeedsWeaponsIssue.IssueStayAliveConditions();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.OnCanceled();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssue from the subsystem API first
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsWeaponsIssue gangLeaderNeedsWeaponsIssue = ...;
gangLeaderNeedsWeaponsIssue.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)