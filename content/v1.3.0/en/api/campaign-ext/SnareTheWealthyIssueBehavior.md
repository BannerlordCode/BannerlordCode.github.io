---
title: "SnareTheWealthyIssueBehavior"
description: "Auto-generated class reference for SnareTheWealthyIssueBehavior."
---
# SnareTheWealthyIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class SnareTheWealthyIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/Issues/SnareTheWealthyIssueBehavior.cs`

## Overview

`SnareTheWealthyIssueBehavior` lives in `SandBox.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the `alternative solution skill` value held by the current object.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
var result = snareTheWealthyIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
var result = snareTheWealthyIssueBehavior.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the current object is in the `troop type needed by alternative solution` state or condition.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
var result = snareTheWealthyIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
var result = snareTheWealthyIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
var result = snareTheWealthyIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
var result = snareTheWealthyIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetMountAndHarnessVisualIdsForQuestCaravan
`public void GetMountAndHarnessVisualIdsForQuestCaravan(CultureObject culture, out string mountStringId, out string harnessStringId)`

**Purpose:** Reads and returns the `mount and harness visual ids for quest caravan` value held by the current object.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.GetMountAndHarnessVisualIdsForQuestCaravan(culture, mountStringId, harnessStringId);
```

### OnWarDeclared
`public void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail reason)`

**Purpose:** Invoked when the `war declared` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnWarDeclared(faction1, faction2, reason);
```

### OnVillageStateChanged
`public void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**Purpose:** Invoked when the `village state changed` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Invoked when the `map event ended` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnMapEventEnded(mapEvent);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `settlement entered` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnSettlementEntered(party, settlement, hero);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the `settlement left` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnSettlementLeft(party, settlement);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of SnareTheWealthyIssueBehavior from the subsystem API first
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SnareTheWealthyIssueBehavior snareTheWealthyIssueBehavior = ...;
snareTheWealthyIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)