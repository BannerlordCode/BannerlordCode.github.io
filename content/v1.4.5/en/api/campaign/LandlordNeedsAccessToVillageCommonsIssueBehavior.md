---
title: "LandlordNeedsAccessToVillageCommonsIssueBehavior"
description: "Auto-generated class reference for LandlordNeedsAccessToVillageCommonsIssueBehavior."
---
# LandlordNeedsAccessToVillageCommonsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandlordNeedsAccessToVillageCommonsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LandlordNeedsAccessToVillageCommonsIssueBehavior.cs`

## Overview

`LandlordNeedsAccessToVillageCommonsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `Title` | `public sealed override TextObject Title { get; }` |

## Key Methods

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
var result = landlordNeedsAccessToVillageCommonsIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
var result = landlordNeedsAccessToVillageCommonsIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
var result = landlordNeedsAccessToVillageCommonsIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
var result = landlordNeedsAccessToVillageCommonsIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
var result = landlordNeedsAccessToVillageCommonsIssueBehavior.IssueStayAliveConditions();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** **Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
landlordNeedsAccessToVillageCommonsIssueBehavior.OnFailed();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
landlordNeedsAccessToVillageCommonsIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
landlordNeedsAccessToVillageCommonsIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
landlordNeedsAccessToVillageCommonsIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of LandlordNeedsAccessToVillageCommonsIssueBehavior from the subsystem API first
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
landlordNeedsAccessToVillageCommonsIssueBehavior.OnCheckForIssue(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LandlordNeedsAccessToVillageCommonsIssueBehavior landlordNeedsAccessToVillageCommonsIssueBehavior = ...;
landlordNeedsAccessToVillageCommonsIssueBehavior.AlternativeSolutionCondition(explanation);
```

## See Also

- [Area Index](../)