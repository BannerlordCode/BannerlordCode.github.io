---
title: "CaravanAmbushIssue"
description: "Auto-generated class reference for CaravanAmbushIssue."
---
# CaravanAmbushIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanAmbushIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/CaravanAmbushIssueBehavior.cs`

## Overview

`CaravanAmbushIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.IssueStayAliveConditions();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.AlternativeSolutionCondition(explanation);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
caravanAmbushIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
caravanAmbushIssue.SyncData(dataStore);
```

### UtilizePartyEscortBehavior
`public static void UtilizePartyEscortBehavior(MobileParty escortedParty, MobileParty escortParty, ref bool isWaitingForEscortParty, float innerRadius, float outerRadius, MobilePartyHelper.ResumePartyEscortBehaviorDelegate onPartyEscortBehaviorResumed, bool showDebugSpheres = false)`

**Purpose:** **Purpose:** Executes the UtilizePartyEscortBehavior logic.

```csharp
// Static call; no instance required
CaravanAmbushIssue.UtilizePartyEscortBehavior(escortedParty, escortParty, isWaitingForEscortParty, 0, 0, onPartyEscortBehaviorResumed, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaravanAmbushIssue caravanAmbushIssue = ...;
caravanAmbushIssue.GetFrequency();
```

## See Also

- [Area Index](../)