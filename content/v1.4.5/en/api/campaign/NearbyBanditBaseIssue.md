---
title: "NearbyBanditBaseIssue"
description: "Auto-generated class reference for NearbyBanditBaseIssue."
---
# NearbyBanditBaseIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NearbyBanditBaseIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/NearbyBanditBaseIssueBehavior.cs`

## Overview

`NearbyBanditBaseIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public override TextObject IssueAlternativeSolutionFailLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### CanBeCompletedByAI
`public override bool CanBeCompletedByAI()`

**Purpose:** Checks whether the current object meets the preconditions for `be completed by a i`.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
var result = nearbyBanditBaseIssue.CanBeCompletedByAI();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
var result = nearbyBanditBaseIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
var result = nearbyBanditBaseIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
var result = nearbyBanditBaseIssue.AlternativeSolutionCondition(explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
var result = nearbyBanditBaseIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
var result = nearbyBanditBaseIssue.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
nearbyBanditBaseIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of NearbyBanditBaseIssue from the subsystem API first
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
nearbyBanditBaseIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NearbyBanditBaseIssue nearbyBanditBaseIssue = ...;
nearbyBanditBaseIssue.CanBeCompletedByAI();
```

## See Also

- [Area Index](../)