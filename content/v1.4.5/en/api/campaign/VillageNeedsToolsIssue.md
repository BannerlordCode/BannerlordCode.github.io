---
title: "VillageNeedsToolsIssue"
description: "Auto-generated class reference for VillageNeedsToolsIssue."
---
# VillageNeedsToolsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsToolsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/VillageNeedsToolsIssueBehavior.cs`

## Overview

`VillageNeedsToolsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
var result = villageNeedsToolsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
var result = villageNeedsToolsIssue.IssueStayAliveConditions();
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** **Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
villageNeedsToolsIssue.AlternativeSolutionStartConsequence();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
var result = villageNeedsToolsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
var result = villageNeedsToolsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
var result = villageNeedsToolsIssue.AlternativeSolutionCondition(explanation);
```

### OnFailed
`public override void OnFailed()`

**Purpose:** **Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
villageNeedsToolsIssue.OnFailed();
```

### GiveTradeOrExchangeRewardToMainParty
`public static void GiveTradeOrExchangeRewardToMainParty(Hero questGiver, int gold, ItemObject exchangeItem, int exchangeItemCount)`

**Purpose:** **Purpose:** Executes the GiveTradeOrExchangeRewardToMainParty logic.

```csharp
// Static call; no instance required
VillageNeedsToolsIssue.GiveTradeOrExchangeRewardToMainParty(questGiver, 0, exchangeItem, 0);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
villageNeedsToolsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of VillageNeedsToolsIssue from the subsystem API first
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
villageNeedsToolsIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageNeedsToolsIssue villageNeedsToolsIssue = ...;
villageNeedsToolsIssue.GetFrequency();
```

## See Also

- [Area Index](../)