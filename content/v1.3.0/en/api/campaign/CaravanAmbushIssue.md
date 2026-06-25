---
title: "CaravanAmbushIssue"
description: "Auto-generated class reference for CaravanAmbushIssue."
---
# CaravanAmbushIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanAmbushIssue`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/CaravanAmbushIssueBehavior.cs`

## Overview

`CaravanAmbushIssue` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
caravanAmbushIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
caravanAmbushIssue.SyncData(dataStore);
```

### UtilizePartyEscortBehavior
`public static void UtilizePartyEscortBehavior(MobileParty escortedParty, MobileParty escortParty, ref bool isWaitingForEscortParty, float innerRadius, float outerRadius, MobilePartyHelper.ResumePartyEscortBehaviorDelegate onPartyEscortBehaviorResumed, bool showDebugSpheres = false)`

**Purpose:** **Purpose:** Executes the UtilizePartyEscortBehavior logic.

```csharp
// Static call; no instance required
CaravanAmbushIssue.UtilizePartyEscortBehavior(escortedParty, escortParty, isWaitingForEscortParty, 0, 0, onPartyEscortBehaviorResumed, false);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the alternative solution skill value held by the this instance.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.GetAlternativeSolutionSkill(hero);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**Purpose:** **Purpose:** Reads and returns the frequency value held by the this instance.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** **Purpose:** Creates or raises stay alive conditions.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.IssueStayAliveConditions();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** **Purpose:** Executes the DoTroopsSatisfyAlternativeSolution logic.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the troop type needed by alternative solution state or condition.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** **Purpose:** Executes the AlternativeSolutionCondition logic.

```csharp
// Obtain an instance of CaravanAmbushIssue from the subsystem API first
CaravanAmbushIssue caravanAmbushIssue = ...;
var result = caravanAmbushIssue.AlternativeSolutionCondition(explanation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CaravanAmbushIssue caravanAmbushIssue = ...;
caravanAmbushIssue.RegisterEvents();
```

## See Also

- [Area Index](../)