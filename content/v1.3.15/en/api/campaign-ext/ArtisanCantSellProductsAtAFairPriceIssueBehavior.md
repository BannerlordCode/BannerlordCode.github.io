---
title: "ArtisanCantSellProductsAtAFairPriceIssueBehavior"
description: "Auto-generated class reference for ArtisanCantSellProductsAtAFairPriceIssueBehavior."
---
# ArtisanCantSellProductsAtAFairPriceIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

`ArtisanCantSellProductsAtAFairPriceIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the LordSolutionCondition logic.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
var result = artisanCantSellProductsAtAFairPriceIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssueBehavior from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.OnFailed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArtisanCantSellProductsAtAFairPriceIssueBehavior artisanCantSellProductsAtAFairPriceIssueBehavior = ...;
artisanCantSellProductsAtAFairPriceIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)