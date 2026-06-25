---
title: "RevenueFarmingIssue"
description: "Auto-generated class reference for RevenueFarmingIssue."
---
# RevenueFarmingIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueFarmingIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.IssueStayAliveConditions();
```

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** Executes the RevenuesAreDeliveredToSteward logic.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RevenuesAreDeliveredToSteward();
```

### FindCurrentRevenueVillage
`public RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** Looks up the matching current revenue village in the current collection or scope.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.FindCurrentRevenueVillage();
```

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueVillage village, bool addLog = true)`

**Purpose:** Assigns a new value to village as completed and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetVillageAsCompleted(village, false);
```

### SetDone
`public void SetDone()`

**Purpose:** Assigns a new value to done and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetDone();
```

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** Assigns a new value to additional progress and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetAdditionalProgress(0);
```

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** Reads and returns the is completed value held by the this instance.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.GetIsCompleted();
```

### VillageEventOptionData
`public struct VillageEventOptionData(string text, GameMenuOption.OnConditionDelegate onCondition, GameMenuOption.OnConsequenceDelegate onConsequence, bool isLeave = false)`

**Purpose:** Executes the VillageEventOptionData logic.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.VillageEventOptionData("example", onCondition, onConsequence, false);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RegisterEvents();
```

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**Purpose:** Invoked when the village event with id spawned event is raised.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.OnVillageEventWithIdSpawned("example");
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of RevenueFarmingIssue from the subsystem API first
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.GetFrequency();
```

## See Also

- [Area Index](../)