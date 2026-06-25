---
title: "ArtisanOverpricedGoodsIssueBehavior"
description: "Auto-generated class reference for ArtisanOverpricedGoodsIssueBehavior."
---
# ArtisanOverpricedGoodsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanOverpricedGoodsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanOverpricedGoodsIssueBehavior.cs`

## Overview

`ArtisanOverpricedGoodsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
artisanOverpricedGoodsIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
artisanOverpricedGoodsIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
artisanOverpricedGoodsIssueBehavior.OnCheckForIssue(hero);
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.IssueStayAliveConditions();
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the `alternative solution skill` value held by the current object.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
artisanOverpricedGoodsIssueBehavior.AlternativeSolutionStartConsequence();
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.LordSolutionCondition(explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
var result = artisanOverpricedGoodsIssueBehavior.GetFrequency();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the `failed` event is raised.

```csharp
// Obtain an instance of ArtisanOverpricedGoodsIssueBehavior from the subsystem API first
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
artisanOverpricedGoodsIssueBehavior.OnFailed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArtisanOverpricedGoodsIssueBehavior artisanOverpricedGoodsIssueBehavior = ...;
artisanOverpricedGoodsIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)