---
title: "GangLeaderNeedsToOffloadStolenGoodsIssue"
description: "Auto-generated class reference for GangLeaderNeedsToOffloadStolenGoodsIssue."
---
# GangLeaderNeedsToOffloadStolenGoodsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GangLeaderNeedsToOffloadStolenGoodsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.cs`

## Overview

`GangLeaderNeedsToOffloadStolenGoodsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
var result = gangLeaderNeedsToOffloadStolenGoodsIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
var result = gangLeaderNeedsToOffloadStolenGoodsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
var result = gangLeaderNeedsToOffloadStolenGoodsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
var result = gangLeaderNeedsToOffloadStolenGoodsIssue.IssueStayAliveConditions();
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** **Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
gangLeaderNeedsToOffloadStolenGoodsIssue.IsSettlementBusy(settlement, asker, priority);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
var result = gangLeaderNeedsToOffloadStolenGoodsIssue.GetFrequency();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
gangLeaderNeedsToOffloadStolenGoodsIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
gangLeaderNeedsToOffloadStolenGoodsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
gangLeaderNeedsToOffloadStolenGoodsIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of GangLeaderNeedsToOffloadStolenGoodsIssue from the subsystem API first
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
gangLeaderNeedsToOffloadStolenGoodsIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GangLeaderNeedsToOffloadStolenGoodsIssue gangLeaderNeedsToOffloadStolenGoodsIssue = ...;
gangLeaderNeedsToOffloadStolenGoodsIssue.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)