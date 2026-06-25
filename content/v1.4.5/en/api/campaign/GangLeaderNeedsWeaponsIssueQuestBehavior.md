---
title: "GangLeaderNeedsWeaponsIssueQuestBehavior"
description: "Auto-generated class reference for GangLeaderNeedsWeaponsIssueQuestBehavior."
---
# GangLeaderNeedsWeaponsIssueQuestBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsWeaponsIssueQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/GangLeaderNeedsWeaponsIssueQuestBehavior.cs`

## Overview

`GangLeaderNeedsWeaponsIssueQuestBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
var result = gangLeaderNeedsWeaponsIssueQuestBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
var result = gangLeaderNeedsWeaponsIssueQuestBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
var result = gangLeaderNeedsWeaponsIssueQuestBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
var result = gangLeaderNeedsWeaponsIssueQuestBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
var result = gangLeaderNeedsWeaponsIssueQuestBehavior.IssueStayAliveConditions();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the `canceled` event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.OnCanceled();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsWeaponsIssueQuestBehavior from the subsystem API first
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsWeaponsIssueQuestBehavior gangLeaderNeedsWeaponsIssueQuestBehavior = ...;
gangLeaderNeedsWeaponsIssueQuestBehavior.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)