---
title: "RevenueFarmingIssueBehavior"
description: "Auto-generated class reference for RevenueFarmingIssueBehavior."
---
# RevenueFarmingIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueFarmingIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
var result = revenueFarmingIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
var result = revenueFarmingIssueBehavior.IssueStayAliveConditions();
```

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** **Purpose:** Executes the RevenuesAreDeliveredToSteward logic.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.RevenuesAreDeliveredToSteward();
```

### FindCurrentRevenueVillage
`public RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** **Purpose:** Looks up the matching current revenue village in the current collection or scope.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
var result = revenueFarmingIssueBehavior.FindCurrentRevenueVillage();
```

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueVillage village, bool addLog = true)`

**Purpose:** **Purpose:** Assigns a new value to village as completed and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.SetVillageAsCompleted(village, false);
```

### SetDone
`public void SetDone()`

**Purpose:** **Purpose:** Assigns a new value to done and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.SetDone();
```

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** **Purpose:** Assigns a new value to additional progress and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.SetAdditionalProgress(0);
```

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** **Purpose:** Reads and returns the is completed value held by the this instance.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
var result = revenueFarmingIssueBehavior.GetIsCompleted();
```

### VillageEventOptionData
`public struct VillageEventOptionData(string text, GameMenuOption.OnConditionDelegate onCondition, GameMenuOption.OnConsequenceDelegate onConsequence, bool isLeave = false)`

**Purpose:** **Purpose:** Executes the VillageEventOptionData logic.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
var result = revenueFarmingIssueBehavior.VillageEventOptionData("example", onCondition, onConsequence, false);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.RegisterEvents();
```

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**Purpose:** **Purpose:** Invoked when the village event with id spawned event is raised.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.OnVillageEventWithIdSpawned("example");
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of RevenueFarmingIssueBehavior from the subsystem API first
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RevenueFarmingIssueBehavior revenueFarmingIssueBehavior = ...;
revenueFarmingIssueBehavior.GetFrequency();
```

## See Also

- [Area Index](../)