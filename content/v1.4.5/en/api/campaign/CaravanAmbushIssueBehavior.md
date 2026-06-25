---
title: "CaravanAmbushIssueBehavior"
description: "Auto-generated class reference for CaravanAmbushIssueBehavior."
---
# CaravanAmbushIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanAmbushIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/CaravanAmbushIssueBehavior.cs`

## Overview

`CaravanAmbushIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
var result = caravanAmbushIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
var result = caravanAmbushIssueBehavior.IssueStayAliveConditions();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
var result = caravanAmbushIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
var result = caravanAmbushIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
var result = caravanAmbushIssueBehavior.AlternativeSolutionCondition(explanation);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
caravanAmbushIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of CaravanAmbushIssueBehavior from the subsystem API first
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
caravanAmbushIssueBehavior.SyncData(dataStore);
```

### UtilizePartyEscortBehavior
`public static void UtilizePartyEscortBehavior(MobileParty escortedParty, MobileParty escortParty, ref bool isWaitingForEscortParty, float innerRadius, float outerRadius, MobilePartyHelper.ResumePartyEscortBehaviorDelegate onPartyEscortBehaviorResumed, bool showDebugSpheres = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CaravanAmbushIssueBehavior.UtilizePartyEscortBehavior(escortedParty, escortParty, isWaitingForEscortParty, 0, 0, onPartyEscortBehaviorResumed, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaravanAmbushIssueBehavior caravanAmbushIssueBehavior = ...;
caravanAmbushIssueBehavior.GetFrequency();
```

## See Also

- [Area Index](../)