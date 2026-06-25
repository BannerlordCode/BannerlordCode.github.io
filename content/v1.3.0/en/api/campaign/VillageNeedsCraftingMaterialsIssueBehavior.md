---
title: "VillageNeedsCraftingMaterialsIssueBehavior"
description: "Auto-generated class reference for VillageNeedsCraftingMaterialsIssueBehavior."
---
# VillageNeedsCraftingMaterialsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsCraftingMaterialsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/VillageNeedsCraftingMaterialsIssueBehavior.cs`

## Overview

`VillageNeedsCraftingMaterialsIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
villageNeedsCraftingMaterialsIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
villageNeedsCraftingMaterialsIssueBehavior.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the `alternative solution skill` value held by the current object.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
var result = villageNeedsCraftingMaterialsIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
var result = villageNeedsCraftingMaterialsIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
var result = villageNeedsCraftingMaterialsIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the `frequency` value held by the current object.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
var result = villageNeedsCraftingMaterialsIssueBehavior.GetFrequency();
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
villageNeedsCraftingMaterialsIssueBehavior.AlternativeSolutionStartConsequence();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises `stay alive conditions`.

```csharp
// Obtain an instance of VillageNeedsCraftingMaterialsIssueBehavior from the subsystem API first
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
var result = villageNeedsCraftingMaterialsIssueBehavior.IssueStayAliveConditions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageNeedsCraftingMaterialsIssueBehavior villageNeedsCraftingMaterialsIssueBehavior = ...;
villageNeedsCraftingMaterialsIssueBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)