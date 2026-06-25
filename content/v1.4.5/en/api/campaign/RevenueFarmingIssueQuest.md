---
title: "RevenueFarmingIssueQuest"
description: "Auto-generated class reference for RevenueFarmingIssueQuest."
---
# RevenueFarmingIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueFarmingIssueQuest` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |

## Key Methods

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** Executes the RevenuesAreDeliveredToSteward logic.

```csharp
// Obtain an instance of RevenueFarmingIssueQuest from the subsystem API first
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
revenueFarmingIssueQuest.RevenuesAreDeliveredToSteward();
```

### FindCurrentRevenueVillage
`public RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** Looks up the matching current revenue village in the current collection or scope.

```csharp
// Obtain an instance of RevenueFarmingIssueQuest from the subsystem API first
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
var result = revenueFarmingIssueQuest.FindCurrentRevenueVillage();
```

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueVillage village, bool addLog = true)`

**Purpose:** Assigns a new value to village as completed and updates the object's internal state.

```csharp
// Obtain an instance of RevenueFarmingIssueQuest from the subsystem API first
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
revenueFarmingIssueQuest.SetVillageAsCompleted(village, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RevenueFarmingIssueQuest revenueFarmingIssueQuest = ...;
revenueFarmingIssueQuest.RevenuesAreDeliveredToSteward();
```

## See Also

- [Area Index](../)