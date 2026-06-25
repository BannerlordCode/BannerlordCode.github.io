---
title: "LandlordTrainingForRetainersIssue"
description: "Auto-generated class reference for LandlordTrainingForRetainersIssue."
---
# LandlordTrainingForRetainersIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandlordTrainingForRetainersIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LandlordTrainingForRetainersIssueBehavior.cs`

## Overview

`LandlordTrainingForRetainersIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
var result = landlordTrainingForRetainersIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
var result = landlordTrainingForRetainersIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
var result = landlordTrainingForRetainersIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
var result = landlordTrainingForRetainersIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
var result = landlordTrainingForRetainersIssue.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
landlordTrainingForRetainersIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
landlordTrainingForRetainersIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LandlordTrainingForRetainersIssue from the subsystem API first
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
landlordTrainingForRetainersIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LandlordTrainingForRetainersIssue landlordTrainingForRetainersIssue = ...;
landlordTrainingForRetainersIssue.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)