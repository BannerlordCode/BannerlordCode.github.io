---
title: "GangLeaderNeedsWeaponsIssueQuest"
description: "Auto-generated class reference for GangLeaderNeedsWeaponsIssueQuest."
---
# GangLeaderNeedsWeaponsIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsWeaponsIssueQuest`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs`

## Overview

`GangLeaderNeedsWeaponsIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
var result = gangLeaderNeedsWeaponsIssueQuest.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
var result = gangLeaderNeedsWeaponsIssueQuest.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
var result = gangLeaderNeedsWeaponsIssueQuest.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
var result = gangLeaderNeedsWeaponsIssueQuest.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
var result = gangLeaderNeedsWeaponsIssueQuest.IssueStayAliveConditions();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.OnCanceled();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuest from the subsystem API first
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsWeaponsIssueQuest gangLeaderNeedsWeaponsIssueQuest = ...;
gangLeaderNeedsWeaponsIssueQuest.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)