---
title: "ArtisanOverpricedGoodsIssue"
description: "Auto-generated class reference for ArtisanOverpricedGoodsIssue."
---
# ArtisanOverpricedGoodsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanOverpricedGoodsIssue`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanOverpricedGoodsIssueBehavior.cs`

## Overview

`ArtisanOverpricedGoodsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
var result = artisanOverpricedGoodsIssue.IssueStayAliveConditions();
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
var result = artisanOverpricedGoodsIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
var result = artisanOverpricedGoodsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
var result = artisanOverpricedGoodsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
artisanOverpricedGoodsIssue.AlternativeSolutionStartConsequence();
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
var result = artisanOverpricedGoodsIssue.LordSolutionCondition(explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
var result = artisanOverpricedGoodsIssue.GetFrequency();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
artisanOverpricedGoodsIssue.OnFailed();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
artisanOverpricedGoodsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
artisanOverpricedGoodsIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssue from the subsystem API first
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
artisanOverpricedGoodsIssue.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArtisanOverpricedGoodsIssue artisanOverpricedGoodsIssue = ...;
artisanOverpricedGoodsIssue.IssueStayAliveConditions();
```

## See Also

- [Area Index](../)