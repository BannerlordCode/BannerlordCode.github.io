---
title: "RevenueFarmingIssueBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RevenueFarmingIssueBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RevenueFarmingIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

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

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**Purpose:** Handles logic related to `revenues are delivered to steward`.

### FindCurrentRevenueVillage
`public RevenueVillage FindCurrentRevenueVillage()`

**Purpose:** Handles logic related to `find current revenue village`.

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueVillage village, bool addLog = true)`

**Purpose:** Sets the value or state of `village as completed`.

### SetDone
`public void SetDone()`

**Purpose:** Sets the value or state of `done`.

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** Sets the value or state of `additional progress`.

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** Gets the current value of `is completed`.

### VillageEventOptionData
`public struct VillageEventOptionData(string text, GameMenuOption.OnConditionDelegate onCondition, GameMenuOption.OnConsequenceDelegate onConsequence, bool isLeave = false)`

**Purpose:** Handles logic related to `village event option data`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**Purpose:** Called when the `village event with id spawned` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

## Usage Example

```csharp
var value = new RevenueFarmingIssueBehavior();
value.GetFrequency();
```

## See Also

- [Complete Class Catalog](../catalog)