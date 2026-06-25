---
title: "ExtortionByDesertersIssueBehavior"
description: "Auto-generated class reference for ExtortionByDesertersIssueBehavior."
---
# ExtortionByDesertersIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ExtortionByDesertersIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ExtortionByDesertersIssueBehavior.cs`

## Overview

`ExtortionByDesertersIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
var result = extortionByDesertersIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
var result = extortionByDesertersIssueBehavior.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
var result = extortionByDesertersIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
var result = extortionByDesertersIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
var result = extortionByDesertersIssueBehavior.IssueStayAliveConditions();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
extortionByDesertersIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of ExtortionByDesertersIssueBehavior from the subsystem API first
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
extortionByDesertersIssueBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ExtortionByDesertersIssueBehavior extortionByDesertersIssueBehavior = ...;
extortionByDesertersIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## See Also

- [Area Index](../)