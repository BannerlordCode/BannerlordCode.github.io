---
title: "ArtisanCantSellProductsAtAFairPriceIssueBehavior"
description: "Auto-generated class reference for ArtisanCantSellProductsAtAFairPriceIssueBehavior."
---
# ArtisanCantSellProductsAtAFairPriceIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

`ArtisanCantSellProductsAtAFairPriceIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |

## Key Methods

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the LordSolutionCondition logic.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnFailed
`public override void OnFailed()`

**Purpose:** **Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.LordSolutionCondition(explanation);
```

## See Also

- [Area Index](../)