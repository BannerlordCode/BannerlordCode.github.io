---
title: "HeadmanVillageNeedsDraughtAnimalsIssue"
description: "Auto-generated class reference for HeadmanVillageNeedsDraughtAnimalsIssue."
---
# HeadmanVillageNeedsDraughtAnimalsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanVillageNeedsDraughtAnimalsIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/HeadmanVillageNeedsDraughtAnimalsIssueBehavior.cs`

## Overview

`HeadmanVillageNeedsDraughtAnimalsIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
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
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.OnCheckForIssue(hero);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.AlternativeSolutionCondition(explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.IssueStayAliveConditions();
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**Purpose:** **Purpose:** Executes the AlternativeSolutionStartConsequence logic.

```csharp
// Obtain an instance of HeadmanVillageNeedsDraughtAnimalsIssue from the subsystem API first
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.AlternativeSolutionStartConsequence();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.RegisterEvents();
```

## See Also

- [Area Index](../)