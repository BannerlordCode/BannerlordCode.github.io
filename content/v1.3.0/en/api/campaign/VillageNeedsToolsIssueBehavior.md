---
title: "VillageNeedsToolsIssueBehavior"
description: "Auto-generated class reference for VillageNeedsToolsIssueBehavior."
---
# VillageNeedsToolsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsToolsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs`

## Overview

`VillageNeedsToolsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
villageNeedsToolsIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
villageNeedsToolsIssueBehavior.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
var result = villageNeedsToolsIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
var result = villageNeedsToolsIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
var result = villageNeedsToolsIssueBehavior.IssueStayAliveConditions();
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
villageNeedsToolsIssueBehavior.AlternativeSolutionStartConsequence();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
var result = villageNeedsToolsIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
var result = villageNeedsToolsIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
var result = villageNeedsToolsIssueBehavior.AlternativeSolutionCondition(explanation);
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of VillageNeedsToolsIssueBehavior from the subsystem API first
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
villageNeedsToolsIssueBehavior.OnFailed();
```

### GiveTradeOrExchangeRewardToMainParty
`public static void GiveTradeOrExchangeRewardToMainParty(Hero questGiver, int gold, ItemObject exchangeItem, int exchangeItemCount)`

**Purpose:** Executes the GiveTradeOrExchangeRewardToMainParty logic.

```csharp
// Static call; no instance required
VillageNeedsToolsIssueBehavior.GiveTradeOrExchangeRewardToMainParty(questGiver, 0, exchangeItem, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageNeedsToolsIssueBehavior villageNeedsToolsIssueBehavior = ...;
villageNeedsToolsIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)