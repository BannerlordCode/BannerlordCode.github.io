---
title: "ArtisanCantSellProductsAtAFairPriceIssue"
description: "Auto-generated class reference for ArtisanCantSellProductsAtAFairPriceIssue."
---
# ArtisanCantSellProductsAtAFairPriceIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

`ArtisanCantSellProductsAtAFairPriceIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
var result = artisanCantSellProductsAtAFairPriceIssue.IssueStayAliveConditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of ArtisanCantSellProductsAtAFairPriceIssue from the subsystem API first
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArtisanCantSellProductsAtAFairPriceIssue artisanCantSellProductsAtAFairPriceIssue = ...;
artisanCantSellProductsAtAFairPriceIssue.LordSolutionCondition(explanation);
```

## See Also

- [Area Index](../)