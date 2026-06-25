---
title: "ScoutEnemyGarrisonsIssue"
description: "Auto-generated class reference for ScoutEnemyGarrisonsIssue."
---
# ScoutEnemyGarrisonsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ScoutEnemyGarrisonsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ScoutEnemyGarrisonsIssueBehavior.cs`

## Overview

`ScoutEnemyGarrisonsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
var result = scoutEnemyGarrisonsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
var result = scoutEnemyGarrisonsIssue.IssueStayAliveConditions();
```

### IsScoutingCompleted
`public bool IsScoutingCompleted()`

**Purpose:** **Purpose:** Determines whether the this instance is in the scouting completed state or condition.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
var result = scoutEnemyGarrisonsIssue.IsScoutingCompleted();
```

### SetScoutingCompleted
`public void SetScoutingCompleted()`

**Purpose:** **Purpose:** Assigns a new value to scouting completed and updates the object's internal state.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.SetScoutingCompleted();
```

### ResetCurrentProgress
`public void ResetCurrentProgress()`

**Purpose:** **Purpose:** Returns current progress to its default or initial condition.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.ResetCurrentProgress();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ScoutEnemyGarrisonsIssue from the subsystem API first
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.GetFrequency();
```

## See Also

- [Area Index](../)