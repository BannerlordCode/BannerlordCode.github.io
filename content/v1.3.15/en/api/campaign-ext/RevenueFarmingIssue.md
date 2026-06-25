---
title: "RevenueFarmingIssue"
description: "Auto-generated class reference for RevenueFarmingIssue."
---
# RevenueFarmingIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueFarmingIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `RevenueVillages` | `public List<RevenueFarmingIssueBehavior.RevenueVillage> RevenueVillages { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |
| `CollectProgress` | `public float CollectProgress { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RegisterEvents();
```

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**Purpose:** Invoked when the `village event with id spawned` event is raised.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.OnVillageEventWithIdSpawned("example");
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.OnCheckForIssue(hero);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.IssueStayAliveConditions();
```

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RevenuesAreDeliveredToSteward();
```

### FindCurrentRevenueVillage
`public RevenueFarmingIssueBehavior.RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** Looks up the matching `current revenue village` in the current collection or scope.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.FindCurrentRevenueVillage();
```

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueFarmingIssueBehavior.RevenueVillage village, bool addLog = true)`

**Purpose:** Assigns a new value to `village as completed` and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetVillageAsCompleted(village, false);
```

### SetDone
`public void SetDone()`

**Purpose:** Assigns a new value to `done` and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetDone();
```

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** Assigns a new value to `additional progress` and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetAdditionalProgress(0);
```

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** Reads and returns the `is completed` value held by the current object.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.GetIsCompleted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RegisterEvents();
```

## See Also

- [Area Index](../)