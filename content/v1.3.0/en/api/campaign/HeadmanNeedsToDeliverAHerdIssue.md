---
title: "HeadmanNeedsToDeliverAHerdIssue"
description: "Auto-generated class reference for HeadmanNeedsToDeliverAHerdIssue."
---
# HeadmanNeedsToDeliverAHerdIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsToDeliverAHerdIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/HeadmanNeedsToDeliverAHerdIssueBehavior.cs`

## Overview

`HeadmanNeedsToDeliverAHerdIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Title` | `public sealed override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.OnCheckForIssue(hero);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
var result = headmanNeedsToDeliverAHerdIssue.GetAlternativeSolutionSkill(hero);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
var result = headmanNeedsToDeliverAHerdIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
var result = headmanNeedsToDeliverAHerdIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
var result = headmanNeedsToDeliverAHerdIssue.IssueStayAliveConditions();
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
var result = headmanNeedsToDeliverAHerdIssue.AlternativeSolutionCondition(explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
var result = headmanNeedsToDeliverAHerdIssue.GetFrequency();
```

### OnCanceled
`public override void OnCanceled()`

**Purpose:** Invoked when the canceled event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.OnCanceled();
```

### OnFailed
`public override void OnFailed()`

**Purpose:** Invoked when the failed event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.OnFailed();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of HeadmanNeedsToDeliverAHerdIssue from the subsystem API first
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeadmanNeedsToDeliverAHerdIssue headmanNeedsToDeliverAHerdIssue = ...;
headmanNeedsToDeliverAHerdIssue.RegisterEvents();
```

## See Also

- [Area Index](../)